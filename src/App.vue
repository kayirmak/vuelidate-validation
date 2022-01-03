<template>
  <div id="app">
    <div id="nav">
    </div>
    <register-user/>
  </div>
</template>

<script>
import RegisterUser from '@/views/RegisterUser'
export default {
  name: "App",
  components: {
    RegisterUser
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Didact Gothic', Helvetica, Arial, sans-serif;
}
</style>
