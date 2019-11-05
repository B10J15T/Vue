<template>
  <div>
    <Header/>
    <Dates/>
    <div class="list">
      <el-table :data="tableData" style="width:750px;height:500px" >
        <el-table-column prop="id" label="id" width="80"></el-table-column>
        <el-table-column prop="title" label="标题" width="180"></el-table-column>
        <el-table-column prop="body" label="内容"></el-table-column>
      </el-table>
      <el-pagination style="text-align: center;margin-top: 40px"
                     layout="prev, pager, next"
                     :total="total"
                     :page-size="pageSize"
                     @current-change="handleCurrentChange">
      </el-pagination>
    </div>
  </div>
</template>

<script>
    import Header from "./Header";
    import Dates from "./Dates";

    export default {
        name: "List",
        components: {
            Dates,
            Header
        },data(){
            return{
                message:[],
                total:0,//数据总量
                pageSize:5,//每页显示条目个数
                currentPage:1,//当前的页码数
            }
        }, methods:{
            handleCurrentChange(val){
                this.currentPage = val;
            }
        },
        created() {
          console.log(this.$store.state.statelist)
            /*this.$axios.get('./../../static/txt.json')
                .then((res)=>{
                    this.message = res.data;
                    this.total = res.data.length;
                }).catch(()=>{
                this.$message({
                    showClose:true,
                    message:'哎呀，数据丢失了！',
                    type:'error'
                })
            })*/
            // this.message=this.$store.state.statelist;
            // this.total=this.$store.state.statelist.length;
            this.message=JSON.parse(localStorage.getItem('list'));
            this.total=JSON.parse(localStorage.getItem('list')).length;
        },
        computed:{
            tableData(){
                return this.message.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
            }
        }

    }
</script>

<style scoped>
  .list {
    float: left;
  }
</style>
