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
      tileLayer: null,
      boundariesLayerGroup: L.featureGroup()
    }
  },
  watch: {
    '$route' (to, from) {
      this.$store.dispatch('set_view')
    },
    basemap () {
      this.tileLayer.setUrl(this.basemapUrl)
    },
    view () {
      this.displayBoundaries()
    }
  },
  methods: {
    displayBoundaries () {
      let vm = this
      this.boundariesLayerGroup.clearLayers()
      this.boundariesLayerGroup.addLayer(L.geoJson(this.boundaries, {
        onEachFeature (feature, layer) {
          layer.on('click', function () {
            let route = {
              name: 'view_with_id',
              params: { view: vm.view.linksTo, id: feature.properties[vm.view.boundaries.idField] }
            }
            vm.$router.push(route)
          })
        },
        filter (feature, layer) {
          if (vm.view.boundaries.filter.activated) {
            let idField = vm.view.boundaries.filter.idField
            return feature.properties[idField] === vm.view.id
          } else {
            return true
          }
        }
      }))
      this.map.fitBounds(this.boundariesLayerGroup.getBounds())
    }
  },
  computed: {
    ...mapGetters([
      'basemapUrl',
      'basemapAttribution',
      'view'
    ]),
    ...mapState([
      'basemap',
      'boundaries'
    ])
  },
  mounted () {
    this.map = L.map('myMap', {zoomControl: true}).setView(config.mapInitialView.center, config.mapInitialView.zoom)

    this.tileLayer = L.tileLayer(this.basemapUrl, {
      attribution: this.basemapAttribution
    }).addTo(this.map)

    L.control.sidebar('left-sidebar').addTo(this.map)
    this.map.addLayer(this.boundariesLayerGroup)
    this.$store.dispatch('set_view')
  }
}
</script>

<style>
#myMap {
     height: 100%;
     width: auto;
}
</style>
