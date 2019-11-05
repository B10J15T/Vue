<template>
    <div class="box">
<h2>用户详情</h2>
      <div class="diss">
        <div class="box">
          <swiper :options="swiperOption" ref="mySwiper" >
            <!-- slides -->
            <swiper-slide><img src="./../assets/1.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="./../assets/2.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="./../assets/3.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="./../assets/4.jpg" alt=""></swiper-slide>

            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-scrollbar"   slot="scrollbar"></div>
          </swiper>
        </div>
      </div>
     <div>
       <h3>{{msg.id}}{{msg.title}}</h3>
   <article>{{msg.body}}</article>
     </div>
    </div>
</template>

<script>

    export default {
        name: "Single",
        data(){
            return {
                msg: {},
                id: this.$route.params.id,
                swiperOption: {
                    autoplay: 1000,//可选选项，自动滑动
                    loop: true,//可选选项，开启循环
                    pagination: '.swiper-pagination',
                    prevButton: '.swiper-button-prev',
                    nextButton: '.swiper-button-next',
                    autoplayDisableOnInteraction: false,
                }

            }
        },

        created() {
            this.$axios.get('http://jsonplaceholder.typicode.com/posts/'+this.id)
                .then((res)=>{
                console.log(res.data);
                this.msg=res.data
            })
        }
    }
</script>

<style scoped>
.box{
  width: 100%;
  height: 30px;
  text-align: center;
}
  h2{
    font-size: 26px;
  }
  .diss{
    margin:0 auto;
    width: 500px;
    height: 340px;

  }
</style>
