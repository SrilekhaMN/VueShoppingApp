// import Vue from 'vue'
const state = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0
}
export const getters = {
  items (state) {
    return state.items
  },
  totalQuantity (state) {
    return state.totalQuantity
  },
  totalPrice (state) {
    return state.totalPrice
  }
}

export const mutations = {
  setItems (state, value) {
    state.items = [...value]
  },
  setTotalQuantity (state, value) {
    state.totalQuantity = value
  },
  setTotalPrice (state, value) {
    state.totalPrice = value
  }
}
export const actions = {
  fetchItems ({ commit }) {
    return new Promise((resolve, reject) => {
      fetch('/items.json').then(response => {
        return response.json()
      }).then(responseJson => {
        commit('setItems', responseJson.items)
        resolve()
      }).catch(reject)
    })
  }
}
export default {
  namespaced: true,state,
  getters,
  mutations,
  actions
}
