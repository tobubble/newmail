
export default {
  addCart(context, payLoad) {
    return new Promise((resolve, reject) => {

       // 记录一个 flag 用来表明是否有重复的商品(false 表明没有重复的商品， true 表示有重复的商品)
    let flag = false
    // 不能直接添加商品，应该增加一个 count 属性记录购买的数量（第一次点击数量为 1 ， 此后 +1）
    for(let item of context.state.shopCart){
      if(item.iid === payLoad.iid) {
        // 判断为之前添加过的商品
        // context.commit('addCount', item.count)
        // item.count++
        context.commit('addCount', item)
        resolve('当前商品数量 + 1')
        flag = true
        return false
      }
    }
    if(!flag){
      context.commit('addGoods', payLoad)
      resolve('添加商品成功')
    }
    })
  },

  changeSelect(context) {
    let flag = []
    flag = context.state.shopCart.filter(item => {
      return item.isChecked === true
    })
    if(flag.length === 0) {
      context.commit('allSelect')
    }else {
      context.commit('allUnSelect', flag)
    }
  }
}