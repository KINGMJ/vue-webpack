import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import { getAllDemos } from './demo-config'

Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }
]
/**
 * 生成demo的路由
 * @param demos
 */
const generateDemoRoutes = demos => {
  const demoRoutes = []
  for (let i = 1; i <= demos.length; i++) {
    demoRoutes.push({
      path: `/demo${i}`,
      name: `Demo${i}`,
      component: () => import(`@/views/Demo${i}.vue`),
      meta: { title: demos[i - 1].name }
    })
  }
  return demoRoutes
}

routes = routes.concat(generateDemoRoutes(getAllDemos()))

// eslint-disable-next-line no-console
console.log(routes)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})
