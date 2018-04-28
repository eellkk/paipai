<template>
  <div class="container">
    <div class="title">
      <input type="text" placeholder="这里输入你的标题" v-model="post.title">
    </div>
    <div class="editor">
      <div id="editor"></div>
    </div>
    <div class="bottom">
      <span class="b-publish" @click="doPost()">发布</span>
    </div>
  </div>
</template>
<script>
import Quill from 'quill'
export default {
  data () {
    return {
      quill: {},
      post: {}
    }
  },
  async mounted () {
    this.quill = new Quill('#editor', {
      theme: 'bubble',
      modules: {
        toolbar: [
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          ['bold', 'italic', 'underline', 'strike', 'image'],
          ['blockquote', 'code-block'],
          [{'list': 'ordered'}, { 'list': 'bullet' }],
          [{'script': 'sub'}, { 'script': 'super' }],
          [{ 'color': [] }],
          [{ 'align': [] }],
          ['clean']
        ]
      }
    })
    if (this.$route.params.id) {
      const res = await this.$axios.get('/api/v1/post/' + this.$route.params.id)
      console.log(res)
      this.post = res.data.data[0]
      this.quill.container.firstChild.innerHTML = this.post.body
    }
  },
  methods: {
    async doPost () {
      this.post.body = this.quill.container.firstChild.innerHTML
      this.post.active = true
      const res = await this.$axios({
        method: this.post.id ? 'put' : 'post',
        url: this.post.id ? ('/api/v1/post/' + this.post.id) : '/api/v1/post',
        data: this.post
      })
      if (res.data.status === 'success') {
        this.$router.push({path: '/post/' + res.data.data[0].id})
      }
    }
  },
  async created () {
  }
}
</script>
<style lang="scss" scoped>
  .title {
    margin: auto;
    width: 1100px;
    margin-bottom: 10px;
    input {
      font-size: 18px;
      padding: 10px;
      outline: none;
      border: none;
      border-bottom: 1px solid #eee;
      width: 1080px;
    }
  }
  .editor {
    width: 1100px;
    margin: auto;
    display: block;
    height: 400px;
  }
  .bottom {
    text-align: center;
    margin-top: 42px;
  }
  .container {
    margin-top: 20px;
  }
  .b-publish {
    display: inline-block;
    padding: 5px 15px;
    border: 1px solid #eee;
    color: #eee;
    border-radius: 2px;
    margin: auto;
    margin-top: 20px;
    cursor: pointer;
  }
  .b-publish:hover {
    transition: background 0.5s;
    background: #f8f8f8;
  }
</style>
