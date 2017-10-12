<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <h3>{{ fullMessage }}</h3>    
    <button @click="clicked">Click</button>

    <router-link to="hello-ts">hello-ts</router-link>

    <h1 v-colorDirective="{ color: 'white', background: 'green' }">test color directive</h1>

    <MyCheckbox :title="checkbox.title" :value="checkbox.value" v-model="checkbox.checked" /> {{ checkbox.checked }}

    <p>
      <router-link to="counter">turn to counter</router-link>
    </p>

    <p>
      <router-link to="users">turn to users</router-link>
    </p>

    <p>
      <router-link to="search">turn to search</router-link>
    </p>

    <p>
      <router-link to="aop">turn to Aop test</router-link>
    </p>

    <p>
      <router-link to="ioc">turn to Ioc test</router-link>
    </p>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Component, Prop, Provide } from 'vue-property-decorator'

  import colorDirective from '../directives/color'

  // .vue is required in path when import
  import MyCheckbox from './MyCheckbox.vue'

  @Component({
    directives: {
      colorDirective
    },

    components: {
      MyCheckbox
    }
  })
  export default class Hello extends Vue {
   message = 'Hello'

    checkbox = {
      title: 'Fancy checkbox',
      value: 'checkbox-id',
      checked: true
    }

    // type: String is type parameter require by Vue
    // msg: string is type declaration in ts
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
