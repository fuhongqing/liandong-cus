<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style lang="scss">
  .mt-progress .a-p-name {
    color: #999;
    padding-right: 26px;
  }

  .mt-progress .a-p-value {
    color: #FF6A00;
    font-weight: bold;
  }

  .mt-progress-runway {
    background: #ffffff;
  }

  .mt-progress-progress {
    background: linear-gradient(132.6deg, rgba(255, 156, 57, 1), rgba(255, 122, 99, 1));
  }
</style>
