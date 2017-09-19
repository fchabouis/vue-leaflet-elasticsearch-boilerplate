<template>
  <div id="app">
    <theMap></theMap>
  </div>
</template>

<script>
import theMap from './components/map'

export default {
  name: 'app',
  components: {
    theMap
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
