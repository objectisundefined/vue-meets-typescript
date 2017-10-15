import { MutationTree, ActionTree, GetterTree, Store } from 'vuex'

export interface CounterState {
  count: number
}

const state: CounterState = {
  count: 0
}

export const INCREMENT = 'INCREMENT'
export const INCREMENT_N = 'INCREMENT_N'
export const DECREMENT = 'DECREMENT'

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
  getters,
  mutations,
  actions
}
