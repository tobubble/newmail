import {request} from './request'

export function getDetail (iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  }) 
}

// es6 的语法，
export class goodInfo {
  constructor(colums, detailInfo, itemInfo, shopInfo) {
    this.colums = colums, 
    this.topImg = itemInfo.topImages
    this.desc = detailInfo.desc
    this.price = itemInfo.price // 商品的大致价格
    this.highPrice = itemInfo.highPrice // 高价格
    this.discount = itemInfo.discountDesc // 折扣描述
    this.title = itemInfo.title
    this.realPrice = itemInfo.lowNowPrice
    this.services = shopInfo.services
  }
}

export class Shop {
  constructor(shopInfo, itemInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount= shopInfo.cGoods
    this.desc = itemInfo.desc
  }
}

export class GoodsParam {
  constructor(info,rule) {
    // 注意，images 可能没有值
    this.image = info.images ? info.images[0] : '';
    this.info = info.set;
    this.sizes = rule.tables;
  }
}

export class recommend {
  constructor(rate) {
    this.content = rate.list[0].content
    this.avatar = rate.list[0].user.avatar
    this.name = rate.list[0].user.uname
    this.time = rate.list[0].created
    this.style = rate.list[0].style
  }
}