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
            component: () => import(/* webpackChunkName: "demo1" */ './views/Demo1.vue')
        },
        {
            path: '/demo2',
            name: 'demo2',
            component: () => import('./views/Demo2.vue')
        },
        {
            path: '/demo3',
            name: 'demo3',
            component: () => import('./views/Demo3.vue')
        },
        {
            path: '/demo4',
            name: 'demo4',
            component: () => import('./views/Demo4.vue')
        },
        {
            path: '/demo5',
            name: 'demo5',
            component: () => import('./views/Demo5.vue')
        },
        {
            path: '/demo6',
            name: 'demo6',
            component: () => import('./views/Demo6.vue')
        },
        {
            path: '/demo7',
            name: 'demo7',
            component: () => import('./views/Demo7.vue')
        }
    ]
})
