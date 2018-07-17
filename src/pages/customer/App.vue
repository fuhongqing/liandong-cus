<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'customer',
  }
</script>
<style lang="scss">

  body {
    margin: 0;
    background: #F3F3F3;
  }

  p {
    margin: 0;
  }

  div, p, span, ul, li {
    box-sizing: border-box;
  }

  ul, menu, dir {
    list-style-type: none;
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
    -webkit-padding-start: 0;
  }

  p {
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding-bottom: 50px;
  }

  .mint-header {
    background: #ffffff;
    color: #333333;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.06);
    .mint-header-title {
      font-size: 16px;
      font-weight: bold;
    }
  }

</style>
