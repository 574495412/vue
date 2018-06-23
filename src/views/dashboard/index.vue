<template>
  <div class="dashboard-container">
    <!-- 头部 -->
<<<<<<< HEAD
      <head-top head-title="红包说明" go-back='true'></head-top>
      <leftNav></leftNav>
=======
      <head-top></head-top>
>>>>>>> 4eb1d3e1913220ce47436478b256014542538bae
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

<<<<<<< HEAD
    &-box {
      font-size: 32px;
      margin: 32px auto;
    }
  }
</style>
=======
</style>
>>>>>>> 4eb1d3e1913220ce47436478b256014542538bae
