
const routes = [

  {
    path: '/user',
    name: 'User',
    component: () => import('@/pages/user/index.vue')
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('@/pages/list/index.vue')
  },
]

export default routes
