<template>
  <div class="all-container">
    <div class="title">
      <img src="https://s2.d2scdn.com/2018/03/10/Fi5IoWh4hncFupJxeM7oAU5m-MKB.png" alt="">
      <span class="hello">hello paipai!</span>
      <br>
      <span class="coming">coming soon...</span>
    </div>
  </div>
</template>

<script>
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
  img {
    position: absolute;
    height: 40px;
    top: -35px;
    left: -30px;
    transform: rotate(-22.5deg) translateX(15px);
  }
  span.hello {
    border: 4px solid black;
    padding: 10px;
    font-size: 26px;
    font-family: 'Arial,Helvetica,sans-serif';
    font-weight: bold;
  }
  span.coming {
    margin-top: 14px;
    display: inline-block;
    position: absolute;
    right: 10px;
  }
}
</style>
