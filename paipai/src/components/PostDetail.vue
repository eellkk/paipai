<template>
  <div class="post" v-if="post.id">
    <div class="title">{{post.title}}</div>
    <div class="created">{{post.created_at|dateformat('datetime')}}</div>
    <div v-html="post.body" class="ql-editor"></div>
    <div class="footer clearfix">
      <span class="goto-edit" @click="gotoEdit()">EDIT</span>
    </div>
  </div>
</template>
<script>
import filters from '../filters.js'
export default {
  data () {
    return {
      post: {}
    }
  },
  filters: { ...filters },
  methods: {
    async getPost () {
      const res = await this.$axios.get('/api/v1/post/' + this.$route.params.id)
      console.log(res)
      this.post = res.data.data[0]
    },
    gotoEdit () {
      this.$router.push('/forelkpost/' + this.$route.params.id)
    }
  },
  created () {
    this.getPost()
  }
}
</script>
<style scoped lang="scss">
.post {
  width: 800px;
  margin: auto;
  .title {
    text-align: center;
    margin-bottom: 10px;
    font-size: 18px;
    color: #333;
  }
  .created {
    text-align: center;
    font-size: 12px;
    color: #aaa;
  }
  .footer {
    position: relative;
    clear: both;
    .goto-edit {
      float: right;
    }
  }
}
</style>
