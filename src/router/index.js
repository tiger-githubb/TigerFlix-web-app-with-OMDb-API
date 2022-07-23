import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieDetail from '../views/MovieDetail.vue'
import TopNav from '../components/TopNav.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/top',
    name: 'TopNav',
    component: TopNav
  },

  {
    path:'/movie/:id',
    name:'MovieDetail',
    // eslint-disable-next-line
    component: MovieDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
