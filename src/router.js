import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/demo1',
            name: 'demo1',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "demo1" */ './views/Demo1.vue'),
            meta: {title: 'Demo1：声明式渲染'}
        },
        {
            path: '/demo2',
            name: 'demo2',
            component: () => import('./views/Demo2.vue'),
            meta: {title: 'Demo2：条件语句'}
        },
        {
            path: '/demo3',
            name: 'demo3',
            component: () => import('./views/Demo3.vue'),
            meta: {title: 'Demo3：循环语句'}
        },
        {
            path: '/demo4',
            name: 'demo4',
            component: () => import('./views/Demo4.vue'),
            meta: {title: 'Demo4：事件绑定'}
        },
        {
            path: '/demo5',
            name: 'demo5',
            component: () => import('./views/Demo5.vue'),
            meta: {title: 'Demo5：双向绑定'}
        },
        {
            path: '/demo6',
            name: 'demo6',
            component: () => import('./views/Demo6.vue'),
            meta: {title: 'Demo6：组件化构建'}
        },
        {
            path: '/demo7',
            name: 'demo7',
            component: () => import('./views/Demo7.vue'),
            meta: {title: 'Demo7：计算属性：computed'}
        }, {
            path: '/demo8',
            name: 'demo8',
            component: () => import('./views/Demo8.vue'),
            meta: {title: 'Demo8：watch 监听 '}
        }
    ]
})
