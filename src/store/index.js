import Vue from 'vue'
import Vuex from 'vuex'

import config from '../assets/config/config.json'
import theMap from '../components/map'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { theMap },
  strict: process.env.NODE_ENV !== 'production',
  state: {
    basemap: Object.keys(config.basemaps)[0]
  },
  mutations: {
    set_basemap (state, basemap) {
      state.basemap = basemap
    }
  },
  actions: {},
  getters: {
    basemapUrl (state) {
      return config.basemaps[state.basemap].url
    },
    basemapAttribution (state) {
      return config.basemaps[state.basemap].attribution
    }
  }
})
