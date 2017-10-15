<template>
  <div>
    <button v-if="!logined" @click="signIn">please sign in</button>
    <p v-else>
      Hello {{ user }}
      <button @click="signOut">sign out</button>
    </p>

    <h1>Count: {{ count }}</h1>
    stateCounter: {{ stateCounter }}
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
    <button @click="incrementAsync">increment async</button>

    <hr>

    <h1>Todos</h1>
    <input type="text" v-model="text">
    <button @cilck="addTodo({ text })">add todo</button>
    <button @click="addTodoAsync">add todo async</button>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <input type="checkbox" :checked="todo.completed" @change="toggleTodo({ id: todo.id })">
        <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { Mutation, State, Getter, Action, namespace } from 'vuex-class'

  import store, { INCREMENT, DECREMENT, Todo, ADD_TODO, TOGGLE_TODO } from '../store'

  const CounterGetter = namespace('counter', Getter)
  const CounterMutation = namespace('counter', Mutation)
  const CounterAction = namespace('counter', Action)

  @Component
  export default class Store extends Vue {
    @Getter logined
    @Getter user

    @Action signIn
    @Action signOut

    @State(state => state.counter.count) stateCounter
    // @Getter count
    @CounterGetter count

    // @Mutation('counter/' + INCREMENT) increment
    // @Mutation('counter/' + DECREMENT) decrement
    @CounterMutation(INCREMENT) increment
    @CounterMutation(DECREMENT) decrement
    // @Action incrementAsync
    @CounterAction incrementAsync

    @Getter todos: Todo[]

    @Mutation(ADD_TODO) addTodo
    @Mutation(TOGGLE_TODO) toggleTodo
    @Action addTodoAsync

    text: string = ''

    created () {
      console.log(this.stateCounter)
    }

    beforeRouteEnter (from, to, next) {
      import('../store/login').then(({ load }) => {
        load(store)

        next()
      })
    }

    beforeRouteLeave (from, to, next) {
      store.unregisterModule('login')

      next()
    }
  }
</script>

<style lang="scss" scoped>
  .completed {
    text-decoration: line-through;
  }
</style>
