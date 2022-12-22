import axios from 'axios'

const baseURL = 'http://simpletwitterapiserver-env-1.eba-ft9ah582.ap-northeast-1.elasticbeanstalk.com/api'

// const baseURL = 'http://localhost:3000/api'

export const apiHelper = axios.create({ baseURL })

apiHelper.interceptors.request.use(
  config => {
    const token = window.localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  err => Promise.reject(err)
)