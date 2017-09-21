<template>
  <div id="app">
    <sidebar id="left-sidebar" class="sidebar collapsed"></sidebar>
    <theMap class="sidebar-map"></theMap>
  </div>
</template>

<script>
import theMap from './components/map'
import sidebar from './components/sidebar'
import 'bootstrap/dist/css/bootstrap.css'

export default {
  name: 'app',
  components: {
    theMap,
    sidebar
  }
}
</script>

<style>
  html, body, #app {
    height: 100%;
    width: 100%;
    margin: 0px;
  }
</style>
