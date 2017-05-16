<template>
  <div class="app-container flex">
    <div v-if="isWeb" class="app-inner flex">
      <router-view class="flex"></router-view>
    </div>
    <div v-else class="flex">
      <nav-link url="main" class="flex">
        <div class="text-container flex">
          <text>ENTER</text>
        </div>
      </nav-link>
    </div>
  </div>
</template>
<script>
  import NavLink from './components/NavLink.vue'
  export default {
    data () {
      return {}
    },
    computed: {
      isWeb () {
        return weex.config.env.platform.toLowerCase() == 'web'
      }
    },
    components: {
      NavLink
    }
  }
</script>
<style scoped>
  .flex {
    flex: 1;
  }
  .text-container {
    align-items: center;
    justify-content: center;
    text-align: center;
  }
</style>