<template>
  <div class="dashboard-container">
    <!-- 头部 -->
      <head-top head-title="红包说明" go-back='true'></head-top>
      <leftNav></leftNav>
      <head-top></head-top>
  </div>
</template>
<script>
  import {mapActions, mapState} from 'vuex'
	import headTop from '../../components/header/headTop'
	import leftNav from '../../components/leftnav/leftNav'
  export default {
    name: 'dashboard',
    components: {
      headTop,
      leftNav
    },
    data() {
      return {}
    },
    computed: {

    },

    methods: {
    }
  }
</script>

<style scoped lang="less">
    &-box {
      font-size: 32px;
      margin: 32px auto;
    }
</style>

