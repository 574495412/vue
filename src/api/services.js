/**
 * Created by Chrise on 2018/06/22.
 * 用户相关api请求方法
 */
import axios from "./api";

export function login (params) {
  return new Promise((resolve, reject) => {
    axios.post('/api/login', { params }).then(response => {
      resolve(response.data);
    }, err => {
      resolve();
    })
      .catch((error) => {
        resolve()
      })
  })
}
export function getUser (params) {
  return new Promise((resolve, reject) => {
    axios.post('/getUser', { params }).then(response => {
      resolve(response.data);
    }, err => {
      resolve();
    })
      .catch((error) => {
        resolve()
      })
  })
}


