<!--
 * @Author: liuyanbao
 * @Date: 2020-02-25 15:14:28
 * @LastEditTime: 2020-04-01 18:02:29
 * @LastEditors: Please set LastEditors
 * @Description: 展示支付成功
 * @FilePath: /manage/pages/pay/success.vue
 -->
<template>
  <div class="success">
    <!-- 展示支付成功与支付成功提示文案部分 -->
    <figure class="success-info">
      <img src="./../assets/success-tick.png">
      <h2>{{successType === 'pay' ? '支付' : '签约'}}成功</h2>
      <p>{{successType === 'pay' ? '支付' : '签约'}}成功5S后自动返回</p>
    </figure>

    <div class="success-button">
      <button
        class="button-small"
        @click="finishPay"
      >
        完成
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    successType: {
      type: String,
      default: 'pay'
    }
  },
  mounted () {
    document.title = '支付结果'
    setTimeout(() => this.$emit('successPay'), 5000)
  },
  beforeDestroy () {
    document.title = '支付中心'
  },
  methods: {
    finishPay () {
      this.$emit('successPay')
    }
  }
}
</script>

<style lang="less" scoped>
@BG-LIGHTGREY: #ededed;
@BG-BLUE: #0056fe;
.success {
  background: @BG-LIGHTGREY;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  // 展示图表与支付成功文字部分
  &-info {
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      height: 90px;
      width: 90px;
    }
    h2 {
      font-size: 43px;
      margin-top: 30px;
    }
    p {
      font-size: 30px;
      color: #666666;
      margin-top: 20px;
    }
  }

  &-button {
    margin-top: 80px;
  }
  .button-small {
    background: @BG-BLUE;
    color: #ffffff;
    font-size: 32px;
    margin-top: 80px;
    height: 90px;
    width: 510px;
    border-radius: 45px;
  }
}
</style>
