<template>
  <!-- 用来展示密码的输入框 -->
  <div class="passwdInps">
    <div
      v-for="(item, index) in list"
      :key="index"
      :class="{'hide-pwd' : showPwd}"
      class="passwdInps-input"
    >
      <input
        v-if="!item.value.toString()"
        v-model="item.value"
        :class="`pas${index}`"
        type="password"
        maxlength="1"
        disable
      >

      <!-- 显示隐藏符号 -->
      <template
        v-if="item.value.toString() && !showPwd"
      >
        *
      </template>

      <!--显示密码明文-->
      <div
        v-if="item.value.toString() && showPwd"
        class="passwdInps-input-number"
        v-text="item.value"
      />
    </div>
  </div>
</template>

<script>
const PASSWDLEN = 6
import { passwdEventVue } from '../plugins/eventbridge'
export default {
  props: {
    // 是否显示数字明文
    showPwd: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      list: Array.from({ length: PASSWDLEN }, () => ({ value: '' })),
      // 当前输入位置指针
      passwdIndex: 1
    }
  },
  computed: {
    password () {
      return this.list
        .map(item => item.value)
        .filter(item => item !== '')
        .join('')
    },
    filled () {
      return +this.password.length === PASSWDLEN
    }
  },
  watch: {
    list (val) {
      if (val.every(item => item.value !== '')) {
        // 可以触发父级完成填写的方法了
        this.$emit('finishFill', this.password)
      }
    }
  },
  mounted () {
    this.receiveNum()
  },
  methods: {
    // 接收发送事件信息，当有passwdKeyboard配合时，可以直接使用
    receiveNum () {
      passwdEventVue.$on('increaseNum', this.increaseNum)
      passwdEventVue.$on('decreaseNum', this.decreaseNum)
    },
    // 密码获取到之后的逻辑
    increaseNum (no) {
      // 首先判断获取到的总数是否已经大于等于6个
      // 如果大于设定常量值就不接了
      if (this.filled) return
      // 将接收到的数字值加到list里
      this.list.splice(this.passwdIndex - 1, 1, { value: no })
      ++this.passwdIndex
    },
    // 删除密码的逻辑
    decreaseNum () {
      if (!this.password.length) return
      // 逐一消减密码list
      this.passwdIndex--
      this.list.splice(this.passwdIndex - 1, 1, { value: '' })
    },
    // 清空密码
    clearNum () {
      this.list = Array.from({ length: PASSWDLEN }, () => ({ value: '' }))
      this.passwdIndex = 1
    }
  }
}
</script>

<style lang="less" scoped>
@BG-WHITE: #ffffff;
.passwdInps {
  display: flex;
  justify-content: center;
  width: 670px;
  height: 100px;
  margin: 20px auto;
  &-input {
    width: 110px;
    height: 98px;
    background: @BG-WHITE;
    border: 2px solid #dfdfdf;
    font-size: 60px;
    font-weight: 500;
    line-height: 115px;
    &-number {
      font-weight: 600;
    }
    &:not(:last-child) {
      border-right: 0;
    }
    &:disabled {
      color: #000;
    }

    & > input {
      width: 80px;
    }
    &:first-of-type {
      border-radius: 5px 0 0 5px;
    }
    &:last-of-type {
      border-radius: 0 5px 5px 0;
    }
  }
}
</style>
