<template>
  <div>
    {{ stateCounter }}
    <h1>Count: {{ count }}</h1>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { Mutation, State, Getter, Action } from 'vuex-class'

  import { INCREMENT, DECREMENT } from '../store'

  @Component
  export default class Store extends Vue {
    @State('count') stateCounter
    @Getter count

    @Mutation(INCREMENT) increment

    @Mutation(DECREMENT) decrement

    @Action incrementAsync

    created () {
      console.log(this.stateCounter)
    }
  }
</script>

