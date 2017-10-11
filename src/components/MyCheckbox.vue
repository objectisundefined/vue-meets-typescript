<template>
  <div class="hello">
    <input type="checkbox" :value="value" :checked="checked" @change="changed"> {{ title }}
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Component, Prop, Model } from 'vue-property-decorator'

  @Component
  export default class MyCheckbox extends Vue {
    @Prop() title: string
    @Prop() value: string

    @Prop()
    @Model('change') checked: boolean

    changed (e) {
      this.$emit('change', e.target.checked)
    }
  }
</script>
