<template>
<div class="box">
  <Header/>
  <el-collapse accordion>
    <el-collapse-item>
      <template slot="title"><i class="el-icon-user-solid"></i> 用户</template>
     <span @click="dian">个人信息</span></el-collapse-item>
    <el-collapse-item title="待办"><span @click="diant">待办事项</span></el-collapse-item>
    <el-collapse-item title="购物管理"><span @click="diane">用户地址</span> <span @click="ditu">地图</span></el-collapse-item>
    <el-collapse-item title="图表"><span @click="dianf">List</span></el-collapse-item>
    <router-view/>
  </el-collapse>

</div>

</template>

<script>
  import Header from "./Header";

    export default {
        name: "Comand",
        components:{
            Header,

        },
        data() {
            return {
                activeName: '1',

            };
        },methods:{
            dian(){
                this.$router.push({
                    path:'/Comand/Users'
                })
            },
            diant(){
                this.$router.push({
                    path:'/Comand/Mself'
                })
            },
            diane(){
                this.$router.push({
                    path:'/Comand/Dai'
                })
            },
            dianf(){
                this.$router.push({
                    path:'/Comand/Lister'
                })
            },
            ditu(){
                this.$router.push({
                    path:'/Comand/Yonghu'
                })
            }
        }
    }
</script>

<style scoped>
.el-collapse{
  width:300px;
  height: 650px;
  background-color: #2c3e50;
}
  span{
    display: block;
    line-height: 30px;
    font-size: 20px;
    cursor: pointer;
  }
  .template{
    font-size: 30px;
  }
.el-collapse{
  float: left;
}
  .box{
    overflow: hidden;
  }
</style>
