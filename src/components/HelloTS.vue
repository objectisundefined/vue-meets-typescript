<template>
  
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component({})
  export default class HelloTS extends Vue {
    created () {
      console.log('Hello TS created')
    }

    beforeRouteEnter(to, from, next) {
      console.log('Enter HelloTS')
      next()
    }
  }
</script>

