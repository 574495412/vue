<template>
  <div class="dashboard-container">
    <!-- 头部 -->
      <head-top head-title="红包说明" go-back='true'></head-top>
      <leftNav></leftNav>
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
      ...mapState({
        doctorList: state => state.doctor.doctorList,
      })
    },
    async created() {
      // 获取医生列表
      // await this.getDoctorListFn();
    },
    methods: {
      ...mapActions([
        // 获取医生列表
        'getDoctorList'
      ]),

      /**
       * 获取医生列表
       * @returns {Promise<void>}
       */
      async getDoctorListFn() {
        // 医生类型
        let params = {type: 'EXP'};
        // 获取医生列表
        await this.getDoctorList(params);
      },

      /**
       * 路由跳转方法
       * @param link
       */
      routeLink(link) {
        this.$router.push({path: link});
      },
    }
  }
</script>

<style scoped lang="less">
  .content {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;

    &-box {
      font-size: 32px;
      margin: 32px auto;
    }
  }
</style>
