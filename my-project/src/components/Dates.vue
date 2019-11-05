<template>
  <div>
    <div class="box">
      <el-calendar v-model="value"></el-calendar>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Dates",
        data(){
            return{
                value: new Date()
            }
        }
    }
</script>

<style scoped>
  .box{
    width:800px;
    height: 500px;
    float: right;
  }
</style>
