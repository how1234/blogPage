<template>
  <div id="app">
    <web-player/>
  </div>
</template>

<script>
import WebPlayer from './components/WebPlayer.vue'
export default {
  name: 'App',
  components: {
    WebPlayer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
