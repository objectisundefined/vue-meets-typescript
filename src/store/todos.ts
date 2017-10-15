import { MutationTree, ActionTree, GetterTree } from 'vuex'

import { Todo, TodoState, ADD_TODO, TOGGLE_TODO, RootState } from './types'

let id = 1

const state: TodoState = {
  todos: [
    { id: id++, text: 'learn vue', completed: true },
    { id: id++, text: 'learn typescript', completed: false },
    { id: id++, text: 'learn vuex', completed: false }
  ]
}

const mutations: MutationTree<TodoState> = {
  [ADD_TODO] (state, payload) {
    state.todos.push({
      id: id++,
      text: payload.text,
      completed: false
    })
  },
  [TOGGLE_TODO] (state, payload) {
    state.todos = state.todos.map(x => {
      return (
        x.id === payload.id
        ? { ...x, completed: !x.completed }
        : x
      )
    })
  }
}

const actions: ActionTree<TodoState, RootState> = {
  addTodoAsync ({ commit, rootState }) {
    fetch('/todos')
      .then(res => res.json())
      .then(res => {
        commit(ADD_TODO, {
          text: rootState.login.user + ': ' + res[0].title
        })
      })
  }
}

const getters: GetterTree<TodoState, any> = {
  todos: state => state.todos
}

export default {
  state,
  mutations,
  actions,
  getters
}
