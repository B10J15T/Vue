<template>
  <div>
  <div class="moon">
    <ul>
      <li style="height: 200px">
        <img src="./../assets/4.jpg" alt="">
        <span>用户名:user</span>
      </li>
      <li style="line-height: 50px;">年龄:18岁</li>
      <li style="line-height: 50px;border-bottom: 2px solid transparent;">职位:经理</li>
    </ul>
  </div>
 <div class="box">
   <el-calendar v-model="value">
   </el-calendar>
 </div>
  </div>
</template>

<script>
    export default {
        name: "Mself",
        data() {
            return {
                value: new Date(),
            }
        }
    }
</script>

<style scoped>
  .box{
    width: 950px;
    height: 600px;
    position: absolute;
    left: 614px;
    top: 137px;
    text-align: center;
  }
  .moon{
    position: absolute;
    top: 160px;
    left: 332px;
    width: 230px;
    height: 300px;
    border: 2px solid #3e1929;
  }
  img{
    margin-top: 10px;
    width: 120px;
    height: 120px;
    display: inline-block;
    border-radius: 50%;
    margin-bottom: 20px;
  }
  ul{
    width: 230px;
    height: 300px;
    text-align: center;
  }
  li{
    width: 226px;
    height: 50px;
    border-bottom: 2px solid #747a23;
    font-size:20px;
    line-height: 40px;
  }
  span{
    display: block;
  }
</style>
