import axios from 'axios'
import qs from 'qs'


// 创建axios实例
const axiosClient = axios.create({
    baseURL: 'http://localhost:8000/api',
    timeout: 10000, // 请求超时时间
})

// 请求拦截器
axiosClient.interceptors.request.use(
    config => {
        config.headers['content-type'] = 'application/json;charset=utf-8';
        return config
    },
    error => {
        return Promise.reject(error);
    }
)

// 响应拦截器
axiosClient.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        return Promise.reject(error)
    }
)

const curl_http = {
    get(url, params) {
        return new Promise((resolve, reject) => {
            axiosClient.get(url)
                .then(response => {
                    resolve(response)
                    return response
                })
                .catch(error => {
                    reject(error)
                })
        })
    },

    post(url, params) {
        return new Promise((resolve, reject) => {
            axiosClient.post(url, params)
                .then(response => {
                    resolve(response)
                    return response
                })
                .catch(error => {
                    console.log('post error', error)
                    reject(error)
                })
        })
    }
}

// 暴露所写的内容
export default curl_http