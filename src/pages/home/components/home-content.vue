<!--
 * @Descripttion:
 * @version:
 * @Author: huangyueshi
 * @Date: 2020-07-06 15:26:08
 * @LastEditors: huangyueshi
 * @LastEditTime: 2020-07-21 10:40:00
-->
<template>
  <div>{{subText}}</div>
</template>

<script>
export default {
  name: 'HomeContent',
  props: {
    subText: {
      type: String,
      default: () => '默认'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
