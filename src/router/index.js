let prefix = window.__POWERED_BY_QIANKUN__ ? "/vue" : "/"
const routes = [
  {
    path: prefix + '/user',
    name: 'user',
    component: () => import('@/views/Home.vue')
  },
  {
    path: prefix + '/about',
    name: 'about',
    component: () => import('@/views/About.vue')
  }
]

export default routes
