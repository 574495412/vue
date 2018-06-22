<template>
    <div>
      <div>
        <div class="left-title">快捷入口</div>
        <ul>
          <li>询盘</li>
          <li>待签约订单</li>
          <li>未读消息</li>
          <li>询盘</li>
          <li>账户设置</li>
        </ul>
        <div class="left-title">业务管理</div>
        <ul>
          <li>信息总览</li>
          <li>订单管理</li>
          <li>收藏</li>
          <li>询盘管理</li>
          <li>消息中心</li>
          <li>物流</li>
          <li>我的保单</li>
          <li>系统设置</li>
        </ul>
      </div>


    </div>
</template>

<script>
    export default {
        name: "leftNav"
    }
</script>

<style lang="less" scoped>
  @import '../../style/mixin';
  .left-title{
    .wh(240px, 45px);
  }



</style>
