<template>
  <div>
    <h3>A value from the vue store is modified from here</h3>
    <hr>
    
    <h4>Map choice (coming from the config.json file):</h4>
    <span v-for="(map, name) in basemaps">
    <input type="radio" :id=name :value=name v-model="basemap">
    <label v-bind:for="name">
      {{ name }}
    </label>
    <br>

  </span>
  </div>
</template>

<script>
import config from '../assets/config/config.json'

export default {
  computed: {
    basemaps () {
      return config.basemaps
    },
    basemap: {
      get () {
        return this.$store.state.basemap
      },
      set (newValue) {
        this.$store.commit('set_basemap', newValue)
      }
    }
  }
}
</script>

<style>
</style>
