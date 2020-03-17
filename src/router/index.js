import Vue from 'vue'
import VueRouter from 'vue-router'
import ShoppingCart from '../ShoppingCart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/ShoppingCart',
    name: 'ShoppingCart',
    component: ShoppingCart
  }
]

const router = new VueRouter({
  routes
})

export default router
