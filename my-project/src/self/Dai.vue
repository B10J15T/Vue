<template>
  <div>
    <div class="box">
      <h2>代办事项</h2>
      <el-transfer  v-model="value" :data="data"></el-transfer>
    </div>
    <div class="img">
      <img src="./../assets/3.jpg" alt="图片鉴赏" class="img-thumbnail">
      <span>图片鉴赏</span>
    </div>
    <div class="liebiao">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="一致性 Consistency" name="1">
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </el-collapse-item>
        <el-collapse-item title="反馈 Feedback" name="2">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </el-collapse-item>
        <el-collapse-item title="效率 Efficiency" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>

        </el-collapse-item>

      </el-collapse>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Dai",

        data() {
            const generateData = _ => {
                const data = [];
                const list = ['吃饭', '睡觉', '工作', '跑步', '阅读', '打豆豆']
                for (let i = 0; i <= list.length; i++) {
                    data.push({
                        key: i,
                        label: list[i],
                    });
                }
                return data;
            };
            return {
                data: generateData(),
                value: [1, 4],
                activeNames: ['1']
            };
        },
        methods: {
            handleChange(val) {
                console.log(val);
            }
        }


    }
</script>

<style scoped>
  .box {
    width: 500px;
    height: 600px;
    position: absolute;
    left: 323px;
    top: 123px;
  }

  h2 {
    text-align: center;
    font-size: 20px;
    margin-bottom: 10px;

  }

  .img {
    width: 400px;
    height: 400px;
    position: absolute;
    left: 900px;
    top: 137px;
  }

  img {
    width: 400px;
    height: 300px;
  }

  span {
    display: block;
    text-align: center;
    margin-top: 10px;
    font-size: 20px;
  }
  .liebiao{
    width: 1232px;
    height: 288px;
    position: absolute;
    left: 320px;
    top: 481px;
  }
</style>
