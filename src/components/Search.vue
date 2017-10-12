<template>
  <div>
    <input v-model="message">
    <p>your message: {{ fullMessage }}</p>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component, { createDecorator } from 'vue-class-component'

  const Log = (str?: string) => createDecorator((component, key) => {
    console.log('Log()', component, key)

    console.log('Component:', component)
    console.log('Decorated key:', key)
  })

  // component: any if required, otherwise .cache can't be reliazed
  const NoCache = createDecorator((component: any, key) => {
    console.log('NoCache', component, key)

    if (component.computed && component.computed[key]) {
      component.computed[key].cache = false
    } else {
      throw Error('Not a computed property')
    }
  })

  @Component
  export default class Search extends Vue {
    @Log()
    message: string = ''

    @NoCache
    @Log()
    get fullMessage () {
      return this.message + ' balabala...'
    }
  }
</script>
