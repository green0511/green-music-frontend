<template>
  <div @click="nav">
    <slot></slot>
  </div>
</template>
<script>
  const navigator = weex.requireModule('navigator')
  export default {
    methods: {
      nav () {
        if (weex.config.env.platform.toLowerCase() == 'web') {
          return this.$router.go(-1)
        }
        navigator.pop()
      }
    }
  }
</script>
<style>
  nav-link {
    display: flex;
    flex: 1 1 0%;
  }
</style>