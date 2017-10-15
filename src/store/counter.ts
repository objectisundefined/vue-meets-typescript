import { MutationTree, ActionTree, GetterTree, Store, Module } from 'vuex'

import { CounterState, INCREMENT, INCREMENT_N, DECREMENT } from './types'

const state: CounterState = {
  count: 0
}

const mutations: MutationTree<CounterState> = {
  [INCREMENT] (state) {
    state.count += 1
  },
  [INCREMENT_N] (state, payload: number) {
    state.count += payload
  },
  [DECREMENT] (state) {
    state.count -= 1
  }
}

const getters: GetterTree<CounterState, any> = {
  counter: state => state,
  count: state => state.count
}

const actions: ActionTree<CounterState, any> = {
  increaseN ({ commit }, payload) {
    commit(INCREMENT_N, payload)
  },
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit(INCREMENT, 1)
    }, 1000)
  }
}

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
} as Module<CounterState, any>
