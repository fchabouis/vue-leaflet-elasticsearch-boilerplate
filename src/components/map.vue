<template>
    <div id="myMap">
    </div>
</template>

<script>
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'sidebar-v2/js/leaflet-sidebar.js'
import 'sidebar-v2/css/leaflet-sidebar.css'

import config from '../assets/config/config.json'
import { mapGetters, mapState } from 'vuex'

export default {
  data () {
    return {
      map: null,
      tileLayer: null
    }
  },
  watch: {
    basemap () {
      this.tileLayer.setUrl(this.basemapUrl)
    }
  },
  computed: {
    ...mapGetters([
      'basemapUrl',
      'basemapAttribution'
    ]),
    ...mapState([
      'basemap'
    ])
  },
  mounted () {
    this.map = L.map('myMap', {zoomControl: true}).setView(config.mapInitialView.center, config.mapInitialView.zoom)

    this.tileLayer = L.tileLayer(this.basemapUrl, {
      attribution: this.basemapAttribution
    }).addTo(this.map)

    L.control.sidebar('left-sidebar').addTo(this.map)
  }
}
</script>

<style>
#myMap {
     height: 100%;
     width: auto;
}
</style>
