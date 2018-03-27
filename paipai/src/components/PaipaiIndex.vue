<template>
  <div class="all-container">
    <div class="title">
      <img src="https://s2.d2scdn.com/2018/03/10/Fi5IoWh4hncFupJxeM7oAU5m-MKB.png" alt="">
      <span class="hello">A RANDOM GUY FROM A RANDOM BOOKSTORE</span>
      <!-- <span class="coming">coming soon...</span> -->
    </div>
    <div class="title-picture">
      <div class="nav">
        <span class="nav-item" :class="{active: currentTab == 'home'}" @click="swtichTab('home')">HOME</span>
        <span class="nav-item" :class="{active: currentTab == 'post'}" @click="swtichTab('post')">POST</span>
        <span class="nav-item" :class="{active: currentTab == 'picture'}" @click="swtichTab('picture')">PICTURE</span>
      </div>
      <img src="https://s2.d2scdn.com/2018/03/27/Fh_cPz601uloMk8-DW0k-Mr5ssHb.jpg?imageMogr2/thumbnail/!1000x400r|imageView2/1/w/1000/h/400" alt="">
      <span class="goto-post" @click="gotoPost()">
        DOPO
      </span>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      currentTab: 'home'
    }
  },
  async created () {
    this.swtichTab('home')
  },
  methods: {
    swtichTab (tab) {
      this.currentTab = tab
      this.$router.push(tab)
    },
    gotoPost () {
      this.$router.push('/forelkpost')
    }
  }
}
</script>

<style lang="scss" scoped>
.all-container {
  text-align: center;
}
.title {
  text-align: center;
  margin-top: 80px;
  position: relative;
  display: inline-block;
  z-index: 2;
  .nav {
    position: absolute;
  }
  img {
    position: absolute;
    height: 40px;
    top: -20px;
    left: -30px;
    transform: rotate(-22.5deg) translateX(15px);
  }
  span.hello {
    border: 4px solid black;
    padding: 10px;
    font-size: 26px;
    font-family: 'Arial,Helvetica,sans-serif';
    font-weight: bold;
    display: block;
    background: white;
  }
  span.coming {
    display: inline-block;
    position: absolute;
    right: 10px;
  }
}
.title-picture {
  position: relative;
  z-index: 1;
  width: 1100px;
  margin: auto;
  margin-top: -15px;
  img {
    width: 1100px;
    border: 3px solid black;
  }
  .nav {
    position: absolute;
    top: -30px;
    .nav-item {
      margin-right: 20px;
      color: #444;
      cursor: pointer;
    }
    .nav-item.active {
      color: #aaa;
    }
    .nav-item:hover {
      transition: color 0.8s;
      color: #aaa;
    }
  }
  .goto-post {
    color: crimson;
    right: 0px;
    position: absolute;
    top: -30px;
    cursor: pointer;
  }
}
</style>
<style>

</style>
