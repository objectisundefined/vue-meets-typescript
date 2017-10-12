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
  import { Component, Inject } from 'vue-property-decorator'
  import { User } from './interfaces'

  @Component
  export default class Users extends Vue {
    @Inject() http

    users: User[] = []
    message: string = ''

    created () {
      // 'https://jsonplaceholder.typicode.com/users'

      const url = '/users'

      this.http.get(url)
        .then(res => {
          this.users = res.data

          this.message = ''
        })
        .catch(err => {
          this.users = []

          this.message = err.message
        })
    }
  }
</script>
