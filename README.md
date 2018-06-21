## vue-cli-project
- | 获取数据 | 请求数据，已包含vue-router，vuex，api，axios. webpack, 储存用vue-ls, 异步async/await, css less,es6,easymock。
> A Vue.js project

### 使用

``` bash
# 安装服务
npm install

# 启动服务
npm run dev

```

### 说明

#### src架构

```
├── App.vue
├── api
│   ├── api.js
│   └── api_user.js
├── assets
│   └── logo.png
├── components
│   ├── common
│   ├── footer
│   └── header
├── plugins
│   └── swiper.min.js
├── main.js
├── router
│   └── index.js
├── store
│   ├── index.js
│   ├── modules
│   └── mutation-types.js
└── views
└── doctor
```



处理数据页面这2大块，把数据和页面分离，在vuex里面做请求数据，页面只需要做调用数据。

请求接口这块再细分，接口和请求接口分开，我使用了最新的async/await函数做数据请求

#### api文件夹 主要放后端提供的接口，如


```js

```

#### api.js 文件是封装axios请求，以及请求处理，和http状态码的等处理

```js

```


#### 在vuex里面做请求，比如请求医生列表，用async/await，拿到数据存进store数据里面


```js
import {
  login,
  logout
} from '../api/api_user'
import {
  GET_USERINFO,
  SAVE_ADDRESS
} from './mutation-types.js'

export default {

  async getUserInfo({
    commit,
    state
  }) {
    let res = await login();//这里异步请求,做到数据与页面的分离
    commit(RECORD_ADDRESS, res)
  },
  async saveAddress({
    commit,
    state
  }) {

    if(state.removeAddress.length > 0) return;

    let addres = await logout(state.userInfo.user_id);
    commit(RECORD_ADDRESS, addres); 
  },
}
```

#### 在页面里需要执行引入：

```js
import {mapActions, mapState} from 'vuex'
```

#### 代码可以具体看文件的代码


```js
└── doctor
├── detail.vue
└── list.vue

<script>
import {mapActions, mapState} from 'vuex'

export default {
components: {},
data() {
return {}
},
computed: {
...mapState({
doctorList: state => state.doctor.doctorList,
})
},
async created() {
// 医生类型
let params = {type: 'EXP'};
// 获取列表
await this.getDoctorList(params);
},
methods: {
...mapActions([
// 获取列表
'getDoctorList'
]),

// 路由跳转方法
routeLink(link) {
this.$router.push({path: link});
},
}
}
</script>
```

#### 核心就是把API数据和页面分离，细分把接口，请求API数据方法放在vuex做处理，在页面映射vuex的mapActions提供的接口方法获取数据，做统一管理项目。.