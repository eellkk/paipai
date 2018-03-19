import Vue from 'vue'
import Router from 'vue-router'
import PaipaiIndex from '@/components/PaipaiIndex'
import PostDetail from '@/components/PostDetail'
import ForElkPost from '@/components/ForElkPost'
import PostList from '@/components/PostList'
import PictureList from '@/components/PictureList'
import Home from '@/components/Home'

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
      component: PaipaiIndex,
      children: [
        {
          path: 'post',
          name: 'postlist',
          component: PostList
        },
        {
          path: 'picture',
          name: 'picturelist',
          component: PictureList
        },
        {
          path: 'home',
          name: 'home',
          component: Home
        }
      ]
    },
    {
      path: '/forelkpost',
      name: 'forelkpost',
      component: ForElkPost
    }
  ]
})
