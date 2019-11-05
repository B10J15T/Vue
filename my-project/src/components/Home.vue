<template>
  <div class="hello">

    <Header/>

    <p v-chang-text:col="{font:'30px'}"></p>
    <ul>
      <li  v-for="i of list.slice(0,a)" class="new_box" :key="i.id">
<!--<li  v-for="i of list" class="new_box" :key="i.id">-->
        <router-link :to="'/Single/'+i.id">
          <h3 v-change-color:ita="{font:'20px'}">{{i.id}}.{{i.title|upcase}}</h3>
        </router-link>
        <article>{{i.body}}</article>
      </li>
    </ul>
    <el-button type="success" plain @click="dian" v-if="a<=30">加载更多</el-button>
    <div v-else>没有更多了</div>
    <el-button type="success" plain @click="shou">收起</el-button>
  </div>
</template>

<script>
  import Header from "./Header";

    export default {
        name: 'Home',
        data() {
            return {
                list: [],
                a:10,
            }
        },
        components:{
            Header,

        },
       methods:{
            dian(){
                this.a+=10
                /*
                if(a<=20){
                * this.$axios.get('./../../state/txt.json')
                * .then((res)=>{
                * let data=res.data.slice(5+a,10+a)
                * this.list=this.list.concat(data)
                *
                * })
                this.a+=10;
                }else{
                .catch(()=>{
                * showClose: true,
                * message: '错了哦，这是一条错误消息',
                * })
                }
                */
            },
           shou(){
                this.a=10
           }
       },
        created() {
            console.log(this.$store.state.statelist);

      this.$axios.get('./../../static/txt.json')
          .then((res)=>{
              this.list=res.data;
              this.$store.commit('yujubing',res.data)
          }).catch(()=>{
          this.$message({
              showClose: true,
              message: '错了哦，这是一条错误消息',
              type: 'error'
          });
      })
        }
    }
</script>

<style scoped>
  .new_box{
    line-height: 40px;
    margin-top: 10px;
    text-align: center;
    background: rgba(204, 208, 231, 0.49);

  }
  .new_box h3:hover{
    text-align: center;
    text-decoration:underline;

  }
  .hello{
    text-align: center;
  }
  p{
    font-size:30px;
    background-color:#eb0800;
  }
  .router-link-active{

  }
</style>
