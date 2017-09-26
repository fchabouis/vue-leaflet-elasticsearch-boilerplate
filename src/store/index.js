import Vue from 'vue'
import Vuex from 'vuex'

import config from '../assets/config/config.json'
import { views } from '../assets/config/views.js'
import fieldsName from '../assets/config/fieldsName.json'
// import theMap from '../components/map'

Vue.use(Vuex)

export default new Vuex.Store({
//  modules: { theMap },
  strict: process.env.NODE_ENV !== 'production',
  state: {
    boundaries: {},
    basemap: Object.keys(config.basemaps)[0]
  },
  mutations: {
    set_basemap (state, basemap) {
      state.basemap = basemap
    },
    set_boundaries (state, geojson) {
      state.boundaries = geojson
    }
  },
  actions: {
    set_view (context) {
      let view = context.getters.view
      context.commit('set_boundaries', view.boundaries.geojson)
    }
  },
  getters: {
    basemapUrl (state) {
      return config.basemaps[state.basemap].url
    },
    basemapAttribution (state) {
      return config.basemaps[state.basemap].attribution
    },
    view (state) {
      let viewName = state.route.params.view || Object.keys(views)[0]
      let id = state.route.params.id || null
      let view = views[viewName]
      view.id = id
      view.boundaries.idField = fieldsName.geojson[view.boundaries.name].id
      view.boundaries.displayNameField = fieldsName.geojson[view.boundaries.name].displayName
      if (view.boundaries.filter.activated) {
        view.boundaries.filter.idField = fieldsName.geojson[view.boundaries.filter.filterOn].id
      }

      return view
    }
  }
})
