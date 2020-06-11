import axios from 'axios'
import qs from 'qs'
import store from '@/store/index'
import router from '@/router'
axios.defaults.timeout = 300000
axios.defaults.baseURL = process.env.API_URL || 'https://music.ylater.com'
// http request 拦截器
axios.interceptors.request.use(
  config => {
    config.withCredentials = true
    return config
  },
  err => {
    return Promise.reject(err)
  },
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.ret == 301) {
      store.commit('login', 0)
      return
    }
    return response.data
  },
  error => {
    let msg
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          router.replace({
            path: '/login',
            query: {
              redirect: router.currentRoute.fullPath,
            },
          })
      }
      msg = error.response.data
    } else {
      msg = '服务器繁忙'
    }
    return Promise.reject(msg)
  },
)

export default axios
