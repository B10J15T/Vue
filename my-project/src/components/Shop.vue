<template>
  <div>
    <Header/>

      <table class="table table-striped">
        <tr>
          <th style="text-align:center;" v-for="i of list">{{i}}</th>
        </tr>
        <tr v-for=" m of msg">
          <td>{{m.id}}</td>
          <td>{{m.brand}}</td>
          <td><img :src="m.src" alt="" class="img-circle"></td>
          <td>{{m.single}}</td>
          <td>{{m.price}}</td>
          <td>
            <button type="button" class="btn btn-success" :disabled="m.num === 0" @click="m.num-=1">-</button>
            {{m.num}}
            <button type="button" class="btn btn-success" @click="m.num+=1">+</button>
          </td>
          <td>{{m.price*m.num}}</td>
        </tr>
      </table>
      <h2>总计￥{{zongji}}</h2>

  </div>

</template>

<script>
    import Header from "./Header";

    export default {
        name: "Shop",
        data() {
            return {
                msg: [],
                list: ['排序', '产品', '图片', '全称', '价格', '数量', '小计'],
                id: '',

            }
        },
        computed:{
            zongji:function () {
                let ji=0;
                for(let i=0;i<this.msg.length;i++){
                    ji+=this.msg[i].price*this.msg[i].num;
                }
                return ji
            }
        },
        created() {
            this.$axios.get('./../../static/shop.json').then((res) => {
                console.log(res.data);
                this.msg = res.data;
                this.msg.map((v, i) => {
                    this.id = v.id;
                    console.log(this.id)
                })

            })
        },
        components: {
            Header
        }
    }
</script>

<style scoped>
  img {
    width: 50px;
    height: 50px;
  }
  table{
    height: 600px;
    text-align: center;
    margin-top: 20px;
  }
table th{
  font-size: 20px;
}
  table td {
    width: 185px;
    height: 100px;
    text-align: center;

  }
  h2{
    font-size: 30px;
    text-align: center;
  }
</style>
