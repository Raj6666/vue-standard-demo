<!--
 * @Descripttion:
 * @version:
 * @Author: huangyueshi
 * @Date: 2020-07-06 15:23:39
 * @LastEditors: huangyueshi
 * @LastEditTime: 2020-07-21 12:22:09
-->
<template>
<div>
  {{text}}
  <home-content :subText="subText"></home-content>
  <button @click="getData()">请求数据</button>
</div>
</template>

<script>
import HomeContent from './components/home-content'
import * as API from '@/api/index.js'
export default {
  name: 'Home',
  components: {
    HomeContent
  },
  data () {
    return {
      text: '首页数据',
      subText: '子组件数据'
    }
  },
  methods: {
    getData () {
      console.log(API)
      console.log(API.homeApi.getHomeList(''))
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
