<template>
  <div>
    <p>{{ userName }}</p>
    <button @click="handler">Click</button>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Component, Inject } from 'vue-property-decorator'

  import {
    AdvicePool,
    adviceMetadata,
    onException,
    beforeMethod,
    afterMethod,
    adviceParam,
    IMetadata
  } from 'kaop-ts'

  class Advice extends AdvicePool {
    static getCached (@adviceMetadata metadata: IMetadata) {
      const key = `${metadata.scope.$options.name}_${metadata.propertyKey}`

      const cached = localStorage.getItem(key)

      if (cached) {
        metadata.scope.userName = cached
        this.stop()
      }
    }

    static setCached (@adviceMetadata metadata: IMetadata) {
      const key = `${metadata.scope.$options.name}_${metadata.propertyKey}`

      if (metadata.result) {
        metadata.result.then(() => {
          localStorage.setItem(key, metadata.scope.userName)
        })
      }
    }

    static report (@adviceMetadata metadta: IMetadata) {
      console.log('Exception occurred:', metadta.exception)
    }

    static notify (@adviceParam(0) toServer) {
      console.log('Notifying', toServer)
    }
  }

  @Component
  export default class Aop extends Vue {
    @Inject() http

    userName = ''

    @beforeMethod(Advice.getCached)
    @onException(Advice.report)
    @afterMethod(Advice.setCached)
    @afterMethod(Advice.notify, true)
    handler () {
      console.log('Method executed')

      const id = 1

      return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then(user => {
          this.userName = user.name
        })
        .catch(() => {
          console.log('user [id: ' + id + '] was not found')
        })
    }
  }
</script>
