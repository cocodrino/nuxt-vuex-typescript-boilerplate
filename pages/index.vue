<template>
  <div>
    <ul>
      <li v-for="(article,indx) in articles" :key="indx">{{article}}</li>
    </ul>

    <div>
      <p>Result:</p>
      {{count}}
    </div>
    <button @click="increment">click me</button>
    <h1 v-text="title"/>
    <input v-model="input">
    <pre v-text="reversed"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
//import Component from 'vue-class-component'
import { reverseString } from '~/core/utils'
import articles from '@/store/index'
//import Vue from 'vue'

@Component({ props: {} })
export default class extends Vue {
  get articles() {
    return articles.feed
  }

  count = 0

  public input = 'TypeScript'

  increment() {
    this.count++
  }

  get reversed(): string {
    return reverseString(this.input)
  }
}
</script>
