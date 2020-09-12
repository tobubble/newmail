export default {
  goodsCount(state) {
    return state.shopCart.filter((item) => {
      return item.isChecked === true
    }).reduce((preValue, nextValue) => {
      return preValue + nextValue.count
    }, 0)
  },
  // filter 函数的作用，可以根据条件筛选出数据，并且返回新的数组
  // reduce 函数的作用，可以将数组中所有的数据进行运算，并且返回总结过
  // goodsPrice(state) {
  //   return state.shopCart.reduce((preValue, nextValue) => {
  //     return preValue + (nextValue.count * nextValue.price)
  //   }, 0)
  // }

  goodsPrice(state) {
    return state.shopCart.filter((item) => {
      return item.isChecked === true
    }).reduce((preValue, nextValue) => {
      return preValue + (nextValue.count * nextValue.price)
    }, 0)
  },

  isAllCkecked(state) {
    let flag = true
    state.shopCart.forEach(item => {
      if (item.isChecked === false) {
        flag = false
        return false
      }
    });
    if (flag === true) {
      return true
    }
  }
}