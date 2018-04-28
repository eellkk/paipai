<template>
  <div class="container">
    <div class="post" v-for="post in posts" :key="post.id" @click="goTo(post.id)">
      <div class="title">{{post.title}}</div>
      <div v-html="post.body" class="content"></div>
      <div class="post-info">
        <span class="created">发表于{{post.created_at|dateformat('datetime')}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import filters from '../filters.js'
export default {
  filters: { ...filters },
  data () {
    return {
      posts: []
    }
  },
  created () {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      const res = await this.$axios.get('/api/v1/post')
      console.log(res)
      if (res.data.status === 'success') {
        this.posts = res.data.data
      } else {
        console.log('something is wrong!')
      }
    },
    goTo (id) {
      this.$router.push({path: '/post/' + id})
    }
  }
}
</script>
<style scoped lang="scss">
  .container {
    text-align: left;
    width: 1100px;
    margin: auto;
  }
  .post {
    margin-top: 20px;
    border: 1px solid #eee;
    padding: 10px;
  }
  .title {
    font-size: 20px;
    color: #777;
    cursor: pointer;
    z-index: 100;
  }
  .content {
    font-size: 14px;
    max-height: 100px;
    overflow: hidden;
    color: #444;
    img {
      max-height: 100px;
    }
  }
  .created {
    font-size: 12px;
    color: #888;
  }
</style>
