import {request} from './request'

export function recommend2(config) {
  return request({
    url: 'recommend'
  })
}