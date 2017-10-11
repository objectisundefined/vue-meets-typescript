<template>
  <div>
    {{ count.value }}
    <button @click="increase">INCREMENT</button>
    <button @click="decrease">DECREMENT</button>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Component, Watch } from 'vue-property-decorator'

  @Component({})
  export default class Counter extends Vue {
    count: any = {
      value: 0
    }

    @Watch('count', { deep: true })
    watchCount(newVal, oldVal) {
      console.log('value:', oldVal, '->', newVal)
    }

    @Watch('count.value')
    watchCountValue(newVal, oldVal) {
      console.log('value:', oldVal, '->', newVal)
    }

    increase () {
      this.count.value += 1
    }

    decrease () {
      this.count.value -= 1
    }
  }
</script>

