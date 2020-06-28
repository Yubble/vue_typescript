/*
  author:  caihanyong
  组件名称: 确认对话框
  适用范围: 适合双态或单态询问用户确认状态，取消按钮和确认按钮默认存在，也可以隐藏
  2018.9.11 更新到最新ui，扩展按钮可隐藏，添加slot支持@wangkai
*/
<template>
  <transition name="fade" mode="in-out">
    <div class="overlay" v-if="visible">
    <div class="confirm">
      <div
        class="confirm-content"
        :style="{
          'text-align': textAlign,
          'font-weight': fontWeight
        }"
        v-html="content"
      />
      <slot />
      <div
        class="confirm-btn"
        v-if="!hideCancel || !hideConfirm">
        <div
          v-if="!hideCancel"
          class="confirm-btn__left"
          @click="cancel"
          v-text="cancelText"
        />
        <div
          v-if="!hideConfirm"
          class="confirm-btn__right"
          :class="{
            'confirm-btn__right--confirm': hideCancel && !hideConfirm
          }"
          @click="confirm"
          v-text="confirmText"
        />
      </div>
    </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    hideCancel: {
      type: Boolean,
      default: false
    },
    hideConfirm: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: false
    },
    content: {
      type: String
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确认'
    },
    cancelCall: {
      type: Function,
      default: function () {}
    },
    confirmCall: {
      type: Function,
      default: function () {}
    },
    textAlign: {
      type: String,
      default: 'center'
    },
    fontWeight: {
      type: String,
      default: '300'
    }
  },
  methods: {
    cancel () {
      this.$emit('cancel')
      this.cancelCall()
    },
    confirm () {
      this.$emit('confirm')
      this.confirmCall()
    }
  }
}
</script>
<style lang="less" scoped>
@BG-BLUE: #0056fe;
.overlay {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  transition: opacity .3s;
}

.fade-enter,
.fade-leave {
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  opacity: 1;
  transition: all .4s;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}
.confirm {
  width: 80%;
  flex-direction: column;
  background-color: #fff;
  border-radius: 50px;
  &-content {
    text-align: center;
    font-size: 32px;
    line-height: 45px;
    color: #444444;
    padding: 60px 36px 50px 36px;
    box-sizing: border-box;
  }
  &-btn {
    display: flex;
    justify-content: space-between;
    padding: 0 20px 20px;
    height: 100px;
    line-height: 100px;
    font-size: 30px;
    div {
      margin: 0 30px;
      text-align: center;
      width: 100%;
      height: 80px;
      line-height: 80px;
      border-radius: 40px;
    }
    &__left {
      background: #F1F1F1;
      color: @BG-BLUE;
    }
    &__right {
      background: @BG-BLUE;
      color: #fff;
      border-radius: 40px;
      &--confirm {
        border-bottom-left-radius: 20px;
      }
    }
  }
}
</style>
