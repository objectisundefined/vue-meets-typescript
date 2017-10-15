export interface CounterState {
  count: number
}

export const INCREMENT = 'INCREMENT'
export const INCREMENT_N = 'INCREMENT_N'
export const DECREMENT = 'DECREMENT'

export interface Todo {
  id: number
  text: string
  completed: boolean
}

export interface TodoState {
  todos: Todo[]
}

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

export interface LoginState {
  user: string
  logined: boolean
}

export const SIGN_IN = 'SING_IN'
export const SIGN_OUT = 'SIGN_OUT'

export interface RootState {
  counter: CounterState
  todos: TodoState
  login: LoginState
}