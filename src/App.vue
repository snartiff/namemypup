<template>
  <app-navigation></app-navigation>
  <router-view />
</template>
<script>
import Navigation from './components/Navigation.vue'
import 'bulma/css/bulma.css'

export default {
  name: 'App',
  components: {
    'app-navigation': Navigation
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
