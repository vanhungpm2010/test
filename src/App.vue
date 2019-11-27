<template>
  <div id="app">
    <!-- <Topnav v-if="$route.name !== ('ListContact' || 'ListFavorite')"/> -->
    <router-view />
    <Menu  v-if="$route.name !== 'Store'"/>
  </div>
</template>

<script>

import Menu from './components/Menu'
import Topnav from './components/Topnav'
import data from './data/data.json'

export default {
  name: 'App',
  components: {
    Menu,
    Topnav
  },
  created () {
    localStorage.setItem('data', JSON.stringify(data))
  }
}
</script>

<style src='./style.css'></style>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 600px;
  width: 375px;
  margin: 15px auto;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  position: relative;
}
</style>
