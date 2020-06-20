<template>
  <div>
    <h2>指令，插值</h2>

    <div>
        <p>文本插值{{message}}</p>

        <p> 三元表达式 {{flag ?  'true': 'false'}}</p>

        <p :id="dynamicData"> 动态属性</p>

        <p v-html="rawHTML">
            <span>有XSS的风险</span>
            <span>v-html将会覆盖子元素</span>
        </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TPLDemo",
  data(){
      return {
          message:"文本",
          flag:true,
          rawHTML:'原始html <b>加粗</b> <i>斜体</i>',
          dynamicData:`date-${Math.random()}`
      }
  }
};
</script>

<style></style>
