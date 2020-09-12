import {request} from './request'

export function multiData () {
  return request({
    methods: 'get',
    url: '/home/multidata'
  })
}

export function goodList(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      // type: type
      page
      // page: page
    }
  })
}
