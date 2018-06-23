<template>
    <div>
      <div id="leftNav">
        <div class="left-title">快捷入口</div>
        <ul>
          <li><span>询盘</span></li>
          <li><span>待签约订单</span></li>
          <li><span>未读消息</span></li>
          <li><span>询盘</span></li>
          <li><span>账户设置</span></li>
        </ul>
        <div class="left-title">业务管理</div>
        <ul>
          <li><span>信息总览</span></li>
          <li><span>订单管理</span></li>
          <li><span>收藏</span></li>
          <li><span>询盘管理</span></li>
          <li><span>消息中心</span><span class="myicon">&gt;</span>
            <ul>
              <li>全部消息</li>
              <li>未读消息</li>
              <li>已读消息</li>
            </ul>
          </li>
          <li><span>物流</span><span class="myicon">&gt;</span>
            <ul>
              <li>询价管理</li>
              <li>物流管理</li>
              <li>签约物流公司</li>
            </ul>
          </li>
          <li><span>我的保单</span></li>
          <li><span>系统设置</span><span class="myicon">&gt;</span>
            <ul>
              <li>账户信息</li>
              <li>安全设置</li>
            </ul>
          </li>
        </ul>
      </div>


    </div>
</template>

<script>
    export default {
      name: "leftNav",
      data(){
        return{

        }
      },
      mounted(){
        //获取用户信息

      },
      computed: {

      }
    }
</script>

<style lang="less" scoped>
  @import '../../style/mixin';
  @import '../../style/common';
  #leftNav .left-title,#leftNav ul li{
    .wh(240px, 45px);
    .sc(16px, #333);
    line-height: 45px;
    /*outline: solid red 1px;*/
    text-indent: 2em;
    position: relative;
  }
  #leftNav ul li ul{
    position: absolute;
    top: 0;
    left: 240px;
    background-color: #ffffff;
    display: none;
    outline: solid #999 1px;
  }
  #leftNav ul li:hover{
    background-color: #cccccc;
    cursor: pointer;
  }
  #leftNav ul li:hover ul{
    display: block;
  }
  #leftNav .left-title{
    background-color: #000000;
    color: white;
  }
  #leftNav .myicon{float: right; margin-right: 2em;}

</style>
