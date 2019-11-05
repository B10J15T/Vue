<template>
  <div class="back">
<div class="Login">
  <div class="demo-input-suffix">
    <h2>用户登录</h2>
    <el-input
      placeholder="请输入用户名"
      prefix-icon="el-icon-mobile-phone"
      v-model="user">
    </el-input>
    <el-input
      placeholder="请输入密码"
      prefix-icon="el-icon-key"
      v-model="pass">
    </el-input>
  </div>
  <el-button type="primary" @click="submit">提交</el-button>
  <el-button type="danger" @click="reset">重置</el-button>
</div>
  </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                user:'',
                pass:'',
            }
        },
        methods:{
            submit(){
                this.$axios.post('/api',{
                    user:this.user,
                    pass:this.pass,
                }).then((res)=>{
                 /*   console.log(res.data)*/
                    if(res.data===1){
                        this.$router.push({path:'/',query:{user:this.user}})
                    }else{
                        this.$message({
                            showClose: true,
                            message: '用户或密码错误了',
                            type: 'error'
                        });
                    }
                }).catch(()=>{
                    this.$message({
                        showClose: true,
                        message: '服务器失踪了',
                        type: 'error'
                    });
                })
            },
            reset(){
                this.user='';
                this.pass='';
            }
        }
    }
</script>

<style scoped>
.Login{
  width: 400px;
  height: 300px;
  margin:200px auto;

  border:1px solid transparent;
  text-align: center;
}
  h2{
    font-size: 30px;
    line-height: 30px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 30px;
  }
.el-input{
  width: 360px;
 height: 40px;
  margin-bottom: 30px;
}
.back{
  border:1px solid transparent;
  width: 100%;
  height: 100%;
  background:url("./../assets/star.gif")   no-repeat fixed center;
  background-size: 100%;
}
</style>
