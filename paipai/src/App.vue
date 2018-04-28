<template>
  <div>
    <div class="top-fix">
      <span @click="gotoIndex()">INDEX</span>
    </div>
    <div id="app" class="app-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    gotoIndex () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  -webkit-font-smoothing: antialiased;
  color: rgba(0,0,0,.85)
}
.top-fix {
  padding: 0px 10px;
  position: fixed;
  width: 100%;
  height: 40px;
  // border-bottom: 1px solid #eee;
  line-height: 40px;
}
.app-container {
  padding-top: 40px;
}
</style>
<style>
.clearfix {
  *zoom: 1;
}
.clearfix:before,
.clearfix:after {
  display: table;
  line-height: 0;
  content: "";
}
.clearfix:after {
  clear: both;
}
html {
  overflow-y: scroll;
}
body {
  margin: 0px;
}
</style>
