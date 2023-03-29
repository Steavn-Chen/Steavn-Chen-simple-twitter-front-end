import axios from 'axios'
<<<<<<< HEAD
// const baseURL = 'http://localhost:3000/api'
const baseURL = 'https://smtr.first-aws-project.com/api'
=======

const baseURL = 'https://smtr.first-aws-project.com/api'

// const baseURL = 'http://localhost:3000/api'
>>>>>>> 9aa525b57cd5249509c192c96041f61f62663278

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