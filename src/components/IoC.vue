<template>
  <div>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>

    <p :style="{ color: 'red' }">{{ message }}</p>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component  from 'vue-class-component'

  import { container, lazyInject } from './container'
  import { UserService } from './interfaces'
  import { TYPES } from './types'

  @Component
  export default class Ioc extends Vue {
    users = []

    message = ''

    // userService = container.get<UserService>(TYPES.UserService)

    @lazyInject(TYPES.UserService)
    userService

    clicked () {
      console.log('clicked')
    }

    created () {
      // public json api
      // const url = 'https://jsonplaceholder.typicode.com/users'

      // copy from https://jsonplaceholder.typicode.com/users
      // some times, response waits for too much time
      // const url = '/static/users.json'

      // we can config webpack dev proxy in '../config/index.js'
      // '/users'

      const url = '/users'

      this.userService.getUsers(url)
        .then(res => {
          this.users = res

          this.message = ''
        })
        .catch(err => {
          this.users = []

          this.message = err.message
        })
    }
  }
</script>

