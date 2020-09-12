import axios from 'axios'

export function request(config) { // 导出 request 函数
  const instance1 = axios.create({ // 配置 instace1 的基础设置 
    baseURL: 'http://152.136.185.210:8000/api/z8', // 配置 基础的 url 地址
    timeout: 5000 // 这里的单位是 ms ，
  })

  instance1.interceptors.response.use(config => {
    // console.log(config)
    // 拦截之后注意要将结果 放回 以便用户可以收到结果
    return config.data
  },err => {
    // 如果没有拦截到的话，爆出错误的信息
    // console.log(err)
  })

  // 真正的发出信息
  return instance1(config)

}

