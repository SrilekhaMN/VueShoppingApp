import Vue from 'vue'
import Vuex from 'vuex'
import itemslist from './itemslist'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    itemslist
  }
})
