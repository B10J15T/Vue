<template>
<div class="header">
  <nav>
    <router-link exact to="/"><img title="首页" src="./../assets/29.png" class="img-rounded"></router-link>
    <router-link exact to="/List"><img  title="列表"  src="./../assets/456jpg.jpg" class="img-rounded"></router-link>
    <router-link exact to="/Shop"><img  title="购物"  src="./../assets/23.png" class="img-rounded"></router-link>
    <router-link exact to="/Comand"><img  title="管理"  src="./../assets/123.jpg" class="img-rounded"></router-link>
<span>欢迎到来{{ids}}</span>

  </nav>

</div>
</template>

<script>
    export default {
        name: "Header",
        data(){
            return{
               ids: this.$route.query.user
            }
        }
    }
</script>

<style scoped>
  span{
    float: right;
    margin-right: 20px;
    margin-top: 20px;
    color: #3ba7eb;
    }
  .header{
    width: 100%;
    height: 120px;
    line-height: 80px;
    text-align: center;
    font-size: 25px;

  }

  img{
    margin-top: 20px;
    width: 80px;
    height: 80px;
    margin-left: 20px;
  }
  .el-submenu__title{
    width: 100%;
    height: 100px;
  }
</style>
