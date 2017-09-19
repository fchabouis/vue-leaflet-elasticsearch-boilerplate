<template>
    <div id="myMap">
    </div>
</template>

<script>
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default {
  components: {
  },
  data () {
    return {
      map: null,
      tileLayer: null
    }
  },
  mounted () {
    this.map = L.map('myMap').setView([45.853459, 2.349312], 6)

    this.tileLayer = L.tileLayer('http://osm.psi.minint.fr/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
      maxZoom: 18
    }).addTo(this.map)
  }
}
</script>

<style>
#myMap {
     height: 100%;
     width: auto;
}
</style>
