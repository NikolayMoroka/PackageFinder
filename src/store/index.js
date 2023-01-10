import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchList: [],
    iconName: ''
  },
  getters: {
    SEARCH_LIST(state) {
      return state.searchList
    },

    ICON_NAME(state) {
      return state.iconName
    }
  },
  mutations: {
    setSearchResult(state, data) {
      state.searchList = data
    },

    setIcon(state, data) {
      state.iconName = data
    },
  },
  actions: {
    getSearchResult(ctx, data) {
      return axios(`https://registry.npmjs.org/-/v1/search?text=${data.value}&size=250`, {
          method: "GET",
      })
      .then((resp) => {
          ctx.commit('setSearchResult', resp.data.objects)
      })
      .catch((error) => {
          console.log(error)
          return error
      })
      },

      getIcon(ctx, data) {
        return axios(`https://data.jsdelivr.com/v1/package/npm/${data.value}/badge`, {
          method: "GET",
      }).then((resp) => {
        console.log(resp)
        ctx.commit('setIcon', resp.data)
      })
      .catch((error) => {
          console.log(error)
          return error
      })
    }
  },
  modules: {
  }
})
