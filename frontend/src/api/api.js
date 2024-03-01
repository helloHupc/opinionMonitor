// 封装一些用的API，不用把URL写在页面中，直接调用即可
import curl_http from "../utils/request.js";

// 设置个对象，就不用一个个暴露了，直接暴露对象
// 在页面引用的时候就可以用apiFun.方法的方式
const apiFun = {}

apiFun.doLogin = function (params) {
    return curl_http.post('/login', params)
}

// 暴露出这个对象
export default apiFun