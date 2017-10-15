import { MutationTree, ActionTree, GetterTree } from 'vuex'

let id = 1

export interface Todo {
  id: number
  text: string
  completed: boolean
}

export interface TodoState {
  todos: Todo[]
}

const state: TodoState = {
  todos: [
    { id: id++, text: 'learn vue', completed: true },
    { id: id++, text: 'learn typescript', completed: false },
    { id: id++, text: 'learn vuex', completed: false }
  ]
}

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

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

const actions: ActionTree<TodoState, any> = {}

const getters: GetterTree<TodoState, any> = {
  todos: state => state.todos
}

export default {
  state,
  mutations,
  actions,
  getters
}
