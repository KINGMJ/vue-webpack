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
            component: ()=>import(/* webpackChunkName: "demo1" */ './views/Demo1.vue'),
            meta: {title: 'Demo1：声明式渲染'}
        },
        {
            path: '/demo2',
            name: 'demo2',
            component: ()=>import('./views/Demo2.vue'),
            meta: {title: 'Demo2：条件语句'}
        },
        {
            path: '/demo3',
            name: 'demo3',
            component: ()=>import('./views/Demo3.vue'),
            meta: {title: 'Demo3：循环语句'}
        },
        {
            path: '/demo4',
            name: 'demo4',
            component: ()=>import('./views/Demo4.vue'),
            meta: {title: 'Demo4：事件绑定'}
        },
        {
            path: '/demo5',
            name: 'demo5',
            component: ()=>import('./views/Demo5.vue'),
            meta: {title: 'Demo5：双向绑定'}
        },
        {
            path: '/demo6',
            name: 'demo6',
            component: ()=>import('./views/Demo6.vue'),
            meta: {title: 'Demo6：组件化构建'}
        },
        {
            path: '/demo7',
            name: 'demo7',
            component: ()=>import('./views/Demo7.vue'),
            meta: {title: 'Demo7：计算属性：computed'}
        }, {
            path: '/demo8',
            name: 'demo8',
            component: ()=>import('./views/Demo8.vue'),
            meta: {title: 'Demo8：watch 监听'}
        }, {
            path: '/demo9',
            name: 'demo9',
            component: ()=>import('./views/Demo9.vue'),
            meta: {title: 'Demo9：Markdown 编辑器'}
        }, {
            path: '/demo10',
            name: 'demo10',
            component: ()=>import('./views/Demo10.vue'),
            meta: {title: 'Demo10：GitHub 提交'}
        }, {
            path: '/demo11',
            name: 'demo11',
            component: ()=>import('./views/Demo11.vue'),
            meta: {title: 'Demo11：网格组件'}
        },
        {
            path: '/demo12',
            name: 'demo12',
            component: ()=>import('./views/Demo12.vue'),
            meta: {title: 'Demo12：组件生命周期'}
        },
        {
            path: '/demo13',
            name: 'demo13',
            component: ()=>import('./views/Demo13.vue'),
            meta: {title: 'Demo13：Prop'}
        },
        {
            path: '/demo14',
            name: 'demo14',
            component: ()=>import('./views/Demo14.vue'),
            meta: {title: 'Demo14：子组件修改父组件的值'}
        },
        {
            path: '/demo15',
            name: 'demo15',
            component: ()=>import('./views/Demo15.vue'),
            meta: {title: 'Demo15：全局对象'}
        },
        {
            path: '/demo16',
            name: 'demo16',
            component: ()=>import('./views/Demo16.vue'),
            meta: {title: 'Demo16：基础 counter 例子'}
        },
        {
            path: '/demo17',
            name: 'demo17',
            component: ()=>import('./views/Demo17.vue'),
            meta: {title: 'Demo17：State mapState 的用法'}
        },
        {
            path: '/demo18',
            name: 'demo18',
            component: ()=>import('./views/Demo18.vue'),
            meta: {title: 'Demo18：Getter mapGetter 的用法'}
        },
        {
            path: '/demo19',
            name: 'demo19',
            component: ()=>import('./views/Demo19.vue'),
            meta: {title: 'Demo19：Mutation mapMutations 的用法'}
        },
        {
            path: '/demo20',
            name: 'demo20',
            component: ()=>import('./views/Demo20.vue'),
            meta: {title: 'Demo20：Action  的用法'}
        },
        {
            path: '/demo21',
            name: 'demo21',
            component: ()=>import('./views/Demo21.vue'),
            meta: {title: 'Demo21：异步组件'}
        },
        {
            path: '/demo22',
            name: 'demo22',
            component: ()=>import('./views/Demo22.vue'),
            meta: {title: 'Demo22：组件销毁'}
        }
    ]
})
