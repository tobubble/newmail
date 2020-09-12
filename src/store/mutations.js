
export default {
  // addCount(state, payload) {
  //   payload.count += 1
  // },
  // addGoods(state, payload) {
  //   payload.count = 1
  //   state.shopCart.push(payload)
  // },
  addGoods(state, payLoad) { 
    payLoad.count = 1
    payLoad.isChecked = true
    state.shopCart.push(payLoad)
  },
  addCount(state, payLoad) {
    payLoad.count++
  },
  changeCheck(state, payload) {
    payload.isChecked = !payload.isChecked
  },
  allSelect(state) {
    state.shopCart.forEach(item => {
        item.isChecked = true
      })
  },
  allUnSelect(state, playload) {
    playload.forEach(item => {
      item.isChecked = false
    });
  }
}