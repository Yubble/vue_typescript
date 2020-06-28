<template>
  <div class="passwdKeyboard">
    <ul>
      <li
        v-for="item in 9"
        :key="item"
        @click="select(item)"
        v-text="item"
      />
      <li class="passwdKeyboard-huise">
        &nbsp;
      </li>
      <li @click="select(0)">
        0
      </li>
      <li
        class="passwdKeyboard-huise"
        @click="removeInput"
      >
        <i class="iconfont icon-remove">&times;</i>
      </li>
    </ul>
  </div>
</template>

<script>
import { passwdEventVue } from '@/plugins/eventbridge'
export default {
  data () {
    return {
      list: Array.from({ length: 6 }, () => ({ value: '' }))
    }
  },
  methods: {
    select (no) {
      // 如果父级存在获取密码数字方法，优先使用父组件的
      if (this.$listeners.getPassNumber) {
        this.$emit('getPassNumber', no)
        return
      }
      // 向事件车输出所按数字
      passwdEventVue.$emit('increaseNum', no)
    },
    removeInput () {
      // 如果父级存在取消数字方法则调用，优先使用父组件
      if (this.$listeners.removePassNumber) {
        this.$emit('removePassNumber')
        return
      }
      // 向事件车执行删除数字命令
      passwdEventVue.$emit('decreaseNum')
    }
  }
}
</script>

<style lang="less" scoped>
.iconfont {
  font-size: 50px;
}
.passwdKeyboard {
  & > ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    & > li {
      position: relative;
      width: calc(~'750px / 3');
      background: #fff;
      text-align: center;
      height: 100px;
      line-height: 100px;
      font-size: 40px;
      font-weight: 500;
      border-top: 1px solid #f1f1f1;
      &:not(:nth-child(3n)):after {
        position: absolute;
        content: '';
        border-right: 1px solid #f1f1f1;
        width: 1px;
        height: 100px;
        top: 0;
        right: 0;
      }

      &:active {
        background: #ececec !important;
      }
    }
  }
  &-huise {
    position: relative;
    background: #ececec !important;
    & > i.iconfont.icon-remove {
      position: absolute;
      top: 0;
      left: 10px;
      right: 0;
      bottom: 2px;
      margin: auto;
      width: 24px;
      height: 30px;
      text-align: left;
      line-height: 32px;
      font-size: 26px;
      color: #ececec;
      background-color: #333;
      z-index: 0;
      &::after {
        content: '';
        position: absolute;
        left: -10px;
        top: 4px;
        width: 20px;
        height: 21px;
        transform: rotate(45deg);
        background-color: #333;
        z-index: -1;
      }
    }
  }
}
</style>
