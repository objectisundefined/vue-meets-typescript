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

  interface User {
    id: number
    name: string
    username: string
    email: string
    address: {
      street: string
      suite: string
      city: string
      zipcode: string
      geo: {
        lat: string
        lng: string
      }
    },
    phone: string
    website: string
    company: {
      name: string
      catchPhrase: string
      bs: string
    }
  }


  @Component
  export default class Users extends Vue {
    @Inject() http

    users: User[] = []
    message: string = ''

    created () {
      this.http.get('https://jsonplaceholder.typicode.com/users')
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
