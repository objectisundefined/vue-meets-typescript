<template>
  <div>
    {{ stateCounter }}
    <h1>Count: {{ count }}</h1>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
    <button @click="incrementAsync">increment async</button>

    <hr>

    <h1>Todos</h1>
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
  import { Mutation, State, Getter, Action } from 'vuex-class'

  import { INCREMENT, DECREMENT } from '../store/counter'
  import { Todo, ADD_TODO, TOGGLE_TODO } from '../store/todos'

  @Component
  export default class Store extends Vue {
    @State(state => state.counter.count) stateCounter
    @Getter count

    @Getter todos: Todo[]

    @Mutation(INCREMENT) increment

    @Mutation(DECREMENT) decrement

    @Mutation(TOGGLE_TODO) toggleTodo

    @Action incrementAsync

    text: string = ''

    created () {
      console.log(this.stateCounter)
    }
  }
</script>

<style lang="scss" scoped>
  .completed {
    text-decoration: line-through;
  }
</style>
