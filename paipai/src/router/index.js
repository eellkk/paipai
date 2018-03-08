import Vue from 'vue'
import Router from 'vue-router'
import PaipaiIndex from '@/components/PaipaiIndex'
import PostDetail from '@/components/PostDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/post/:id',
      name: 'post-detail',
      component: PostDetail
    },
    {
      path: '/',
      name: 'index',
      component: PaipaiIndex
    }
  ]
})
