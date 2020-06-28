<!--
 * @Author: liuyanbao
 * @Date: 2020-02-26 15:54:18
 * @LastEditTime: 2020-04-20 15:31:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /manage/plugins/dialog/dialog.vue
 -->

<template>
  <transition
    name="dialog"
  >
    <div
      v-if="visible"
      class="overlay"
    >
      <div class="dialog-box">
        <h3
          class="dialog-box-content"
          v-html="content"
        />
        <span
          v-if="tips"
          class="dialog-box-tips"
          v-html="tips"
        />
        <div
          class="dialog-box-btns"
        >
          <template
            v-if="btnNo === 1"
          >
            <button
              class="dialog-box-btn mid"
              @click="confirm"
            >
              {{ confirmText }}
            </button>
          </template>
          <template
            v-else
          >
            <button
              class="dialog-box-btn mini gray"
              @click="cancel"
            >
              {{ cancelText }}
            </button>
            <button
              class="dialog-box-btn mini"
              @click="confirm"
            >
              {{ confirmText }}
            </button>
          </template>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean
    },
    tips: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    confirmText: {
      type: String,
      default: ''
    },
    onConfirm: {
      type: Function,
      default: () => {}
    },
    cancelText: {
      type: String,
      default: ''
    },
    onCancel: {
      type: Function,
      default: () => {}
    },
    btnNo: {
      type: Number,
      default: 1
    }
  },
  watch: {
    visible (val) {
      if (val) window.scrollTo(0, 0)
    }
  },
  methods: {
    confirm () {
      this.onConfirm()
      this.visible = false
    },
    cancel () {
      this.onCancel()
      this.visible = false
    }
  }
}
</script>

<style lang="less" scoped>
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
  transition: opacity 0.3s;
}

.dialog-enter,
.dialog-leave {
  opacity: 0;
}
.dialog-enter-active,
.dialog-leave-active {
  opacity: 1;
  transition: all 0.4s;
}

.dialog-enter,
.dialog-leave-active {
  opacity: 0;
}
.dialog-box {
  background: #ffffff;
  width: 590px;
  padding: 50px 0 40px 0;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &-content {
    width: 379px;
    font-size: 35px;
    font-weight: 500;
    line-height: 48px;
    text-align: center;
  }

  &-tips {
    font-size: 30px;
    margin-top: 30px;
    color: #848484;
  }

  &-btns {
    display: flex;
    justify-content: space-around;
    width: 530px;
    margin-top: 70px;
  }

  &-btn {
    background: #0056fe;
    color: #ffffff;
    font-size: 32px;
    &.mid {
      width: 510px;
      height: 90px;
      border-radius: 90px;
    }
    &.mini {
      width: 210px;
      height: 74px;
      border-radius: 74px;
    }
    &.gray {
      background: #ededed;
      color: #0056fe;
    }
  }
}
</style>
