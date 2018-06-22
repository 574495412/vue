// 设置axios,process.env值是根据用户是测试还是生产来读取config中的dev.env和pro.env中的配置
import axios from 'axios'
import qs from 'qs';
import { Message } from "element-ui";

const baseURL = process.env.NODE_ENV === 'development'
  // 测试环境api接口
  ? '/api'
  // 线上环境api接口
  : ' https://www.easy-mock.com/mock/5b2b53bd15c3bc6ee52cfc8d/ca-b2b';
axios.defaults.baseURL = baseURL;
axios.defaults.headers.common['Authorization'] = process.env.API_TOKEN
    // axios.defaults.headers.common['Authorization'] = 'Bearer c92dcc04-e3c1-4628-899f-f9c26a4f7746'; //process.env.API_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.withCredentials = true;
    // 测试

axios.interceptors.request.use(function(request) {
    // 判断本地是否有token值，有则从新设置token，没有使用token默认配置
     /**
   * 在这里做loading ...
   * @type {string}
   */

  // 获取token
//   config.headers.common['Authorization'] = 'Bearer ' + Vue.ls.get("web-token");

    let moveToken = sessionStorage.getItem('token')
    if (moveToken) {
        request.headers.Authorization = `bearer ${moveToken}`
    };
    return request
}, function(error) {
    // 请求错误时做些事
    return Promise.reject(error)
})
// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
    if (response.data && response.data.errcode) {
      if (parseInt(response.data.errcode) === 40001) {
        //未登录
        bus.$emit('goto', '/login')
      }
    }
  
  /**
   * 在这里做loading 关闭
   */

    // 如果后端有新的token则重新缓存
    let newToken = response.headers['new-token'];

    if (newToken) {
      Vue.ls.set("web-token", newToken);
    }

    return response;
  }, function (error) {
    // Do something with response error
    let response = error.response;
    if (response.status == 401) {
      // 处理401错误
  
    } else if (response.status == 403) {
      // 处理403错误
  
    } else if (response.status == 412) {
      // 处理412错误
  
    } else if (response.status == 413) {
      // 处理413权限不足
  
    }
  
    return Promise.reject(response)
  });
  
export default axios;
// export default {
//     post(url,data) {
//         console.log(data);
//         console.log(qs.stringify(data));
//       return axios({
//         method: 'post',
//         url: url,
//         data: qs.stringify(data),
//         timeout: 30000,
       
//       })
//     },
  
//     get(url, params) {
//       return axios({
//         method: 'get',
//         url: url,
//         params,
//       })
//     },
  
//     delete(url, params) {
//       return axios({
//         method: 'delete',
//         url: url,
//         params
//       })
//     },
  
//     put(url, data) {
  
//       return axios({
//         method: 'put',
//         url: url,
//         data: qs.stringify(data),
//         timeout: 30000,
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
//         }
//       })
//     }
//   }
  

