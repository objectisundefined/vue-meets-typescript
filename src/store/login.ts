import { Store, GetterTree, MutationTree, ActionTree } from 'vuex'

export interface LoginState {
  user: string
  logined: boolean
}

const state: LoginState = {
  user: '',
  logined: false
}

const SIGN_IN = 'SING_IN'
const SIGN_OUT = 'SIGN_OUT'

const mutations: MutationTree<LoginState> = {
  [SIGN_IN] (state) {
    state.user = 'lanaya'
    state.logined = true
  },
  [SIGN_OUT] (state) {
    state.user = ''
    state.logined = false
  }
}

const actions: ActionTree<LoginState, any> = {
  signIn ({ commit }) {
    commit(SIGN_IN)
  },
  signOut ({ commit }) {
    commit(SIGN_OUT)
  }
}

const getters: GetterTree<LoginState, any> = {
  logined: state => state.logined,
  user: state => state.user
}

export const login = {
  state,
  mutations,
  actions,
  getters
}

export function load (store: Store<any>) {
  store.registerModule('login', login)
}