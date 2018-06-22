/**
 * Created by Chrise on 2018/06/22.
 * 用户相关api请求方法
 */
import axios from "./api";

/**
 * 登录
 */

export function login (params) {
  return new Promise((resolve, reject) => {
    axios.post('/login', { params }).then(response => {
      resolve(response.data);
    }, err => {
      resolve();
    })
      .catch((error) => {
        resolve()
      })
  })
}
export function signout (params) {
  return new Promise((resolve, reject) => {
    axios.post('/signout', { params }).then(response => {
      resolve(response.data);
    }, err => {
      resolve();
    })
      .catch((error) => {
        resolve()
      })
  })
}

/**
 * 获取用户信息
 */

export function getUser () {
  return new Promise((resolve, reject) => {
    axios.post('/getUser', { user_id:  localStorage.getItem('user_id') }).then(response => {
      resolve(response.data);
    }, err => {
      resolve();
    })
      .catch((error) => {
        resolve()
      })
  })
}


/**
 * 获取用户地址
 */

export function getAddressList () {
  return new Promise((resolve, reject) => {
    axios.post('/getAddressList', { user_id:  localStorage.getItem('user_id') }).then(response => {
      resolve(response.data);
    }, err => {
      resolve();
    })
      .catch((error) => {
        resolve()
      })
  })
}

