import axios from 'axios'
// const baseURL = 'https://twitter-api-2021-teamchris.herokuapp.com/api'
const baseURL = 'https://tweetaaa.herokuapp.com/api'
// const baseURL = 'http://localhost:3000/api'
// const baseURL = "https://twitter-api-guan.herokuapp.com/api";

<<<<<<< HEAD
=======

>>>>>>> d3a902e1c21db33dfb49f2a915d8c84e6d3ce231
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