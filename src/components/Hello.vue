<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <h3>{{ fullMessage }}</h3>    
    <button @click="clicked">Click</button>

    <router-link to="hello-ts">hello-ts</router-link>

    <h1 v-colorDirective="{ color: 'white', background: 'green' }">test color directive</h1>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Component, Prop } from 'vue-property-decorator'

  import colorDirective from '../directives/color'

  @Component({
    directives: {
      colorDirective
    }
  })
  export default class Hello extends Vue {
    message = 'Hello'

    @Prop({ type: String, default: 'Vue' }) msg: string

    get fullMessage () {
      return `${this.message} ${this.msg}`
    }

    created () {
      console.log('created')
    }

    clicked () {
      console.log('clicked');
    }

    beforeRouteEnter (to, from, next) {
      console.log('Enter')

      next()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
