import axios from 'axios'

//封装axios
export function request(config){
	//创建axios实例
	const instance=axios.create({
		baseURL:'http://123.207.32.32:8000',
		timeout:5000,
	})
  //拦截器
  //拦截请求成功、拦截请求失败、拦截响应成功、拦截响应失败
  instance.interceptors.request.use(
    config => {
      //console.log(config);
      return config
    },
    err => {
      console.log(err)
    }
  )
  instance.interceptors.response.use(
    res => {
      //console.log(res);
      return res
    },
    err => {
      console.log(err)
    }

  )
	//发送真正的请求
	return instance(config)
}
