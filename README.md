# vue-storage

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 自动保存因意外退出而未来得及提交的注册信息

###必要条件
* 未提交。提交过的注册信息不予保存
* 意外退出。正常退出的注册信息不予保存

### 解决方法
* 保存注册信息，用store2来做。
但是，怎么解决另一个用户想注册的时候不会恢复上一个用户的注册信息呢？
用sessionStorage，关闭浏览器则sessionStorage保存的信息清空
* 未提交，也就是提交过后的不予保存。定义一个flag, 用户提交信息并返回ok
后，置flag为false，在路由离开的钩子里判断flag为false则无需保存。
* 意外退出。其实在路由离开的钩子里提醒用户"是否确定离开？"，即可以
避免因意外退出丢失未来得及保存的注册信息。

### 总结
所以，我的方案是，①在路由离开钩子里提醒用户"是否确定离开？"
②在路由离开钩子里默默为用户保存尚未提交的注册信息，并且用sessionStorage
保存，以防用户信息穿混。

### 后记
另一种自动保存的需求出现在编辑邮件、个人简介等长篇幅的写内容中，常见
的是自动保存，也就是用定时器保存信息。至于保存在哪里？建议保存在服务端
不建议保存在客户端。因为是非短时间的写内容，用户可能在多平台、多时段
编辑，而且用户是已登录的，利于服务端按用户id进行存储。
