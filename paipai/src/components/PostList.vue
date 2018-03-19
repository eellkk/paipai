<template>
  <div class="container">
    <div class="post" v-for="post in posts">
      <div class="title">{{post.title}}</div>
      <div v-html="post.body" class="content"></div>
    </div>
  </div>
</template>
<script>
export default {
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
        console.log('some thing is wrong!')
      }
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
  }
  .title {
    font-size: 20px;
  }
  .content {
    font-size: 14px;
  }
</style>