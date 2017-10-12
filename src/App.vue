<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Component, Provide } from 'vue-property-decorator'
  import axios from 'axios'

  @Component
  export default class App extends Vue {
    @Provide() http = axios

    name: string = 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
