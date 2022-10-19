import {request} from './request.js'
export function getHomeMultidata(){
  //发送请求
  return request({
    url:'/home/multidata',
    })
}
export function getHomeGoods(){
  //发送请求
  return request({
    url:'/home/multidata',
    params:{

    }
    })
}
