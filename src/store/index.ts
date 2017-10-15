import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import counter from './counter'
import todos from './todos'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    counter,
    todos
  },
  strict: true,
  plugins: [
    createLogger({})
  ]
})
