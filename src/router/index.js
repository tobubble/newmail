// 导入 vue 和 router 
import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载方式加载许多的组件
const Home = () => import('views/home/Home')
const Profile = () => import("views/profile/Profile")
const Category = () => import("views/category/Category")
const Shopcart = () => import("views/shopcart/Shopcart")
const Detail = () => import('views/detail/Detail')

// 解决多次点击报错的 bug
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

  const routes = [
    {
      path: '',
      redirect: '/home',
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/shopcart',
      component: Shopcart
    },
    {
      path: '/detail',
      component: Detail
    }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
