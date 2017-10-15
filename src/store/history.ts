import { Store, MutationTree, GetterTree, ActionTree, Module }  from 'vuex'
import { HistoryState, Payload, LOAD_HISTORY, ADD_HISTORY, PluginOptions } from './types'

const state: HistoryState = {
  history: []
}

const mutations: MutationTree<HistoryState> = {
  [LOAD_HISTORY] (state) {
    state.history = JSON.parse(localStorage.getItem('history') || '[]')
  },
  [ADD_HISTORY] (state, payload) {
    state.history.push(payload)
  }
}

const actions: ActionTree<HistoryState, any> = {}

const getters: GetterTree<HistoryState, any> = {}

const history = {
  state,
  mutations,
  actions,
  getters
} as Module<HistoryState, any>

export const createHistory = (options: PluginOptions) => (store: Store<any>) => {
  store.registerModule('history', history)

  if (options.persist) {
    store.commit(LOAD_HISTORY)
  }

  store.subscribe((mutation: Payload, state) => {
    if (mutation.type !== ADD_HISTORY) {
      store.commit(ADD_HISTORY, mutation)

      if (options.persist) {
        localStorage.setItem('history', JSON.stringify(state.history.history))
      }

      console.log('history:', state.history.history.reduce((acc: string, x: Payload) => acc + ' -> ' + x.type, '').replace(/^\s*->\s*/, ''))
    }
  })
}
