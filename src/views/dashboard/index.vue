<template>
  <div class="dashboard-container">
    <!-- 头部 -->
      <head-top></head-top>
  </div>
</template>
<script>
  import {mapActions, mapState} from 'vuex'
	import headTop from '../../components/header/headTop'
  export default {
    name: 'dashboard',
    components: {
         headTop
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

</style>