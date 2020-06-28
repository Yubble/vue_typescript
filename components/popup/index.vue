<template>
  <div class="overlay" @click.self="$emit('hide')">
    <transition name="popup" mode="in-out">
      <div class="popup" ref="popup">
        <div class="popup-header" v-if="title">
          <div class="popup-header__close" @click="onHide"></div>
          <h1 class="popup-header__title" v-text="title"></h1>
        </div>
        <div v-if="visible" class="popup-content">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  },
  watch: {
    visible (val) {
      if (val) {
        // 弹框出现的时候禁止body滚动
        document.body.style.overflow = 'hidden'
        setTimeout(() => {
          this.$refs.popup.style.bottom = '0'
          this.$el.style.top = '0'
        })
      } else {
        document.body.style.overflow = 'auto'
        this.$refs.popup.style.bottom = '-100%'
        this.$el.style.top = '-100%'
      }
    }
  },

  methods: {
    onHide () {
      this.$emit('hide')
    }
  }
}
</script>
<style lang="less" scoped>
.overlay {
  position: fixed;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  // transition: all .3s;
}
.popup {
  position: fixed;
  bottom: -100%;
  margin: 0 auto;
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 20px 20px 0 0;
  transition: all .5s;
  &-header {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #efefef;
    padding: 30px;
    margin: 0 auto;
    &__title {
      text-align: center;
      color: #333333;
      font-size: 32px;
      font-weight: 500;
      height: 60px;
      line-height: 60px;
      flex: 1;
    }

    &__close {
      background: url('../../assets/close.png') 0 0 no-repeat;
      background-size: 100%;
      width: 28px;
      height: 28px;
    }
  }

  &-content {
    min-height: 300px;
    overflow: scroll;
    // height: 50vh;
  }
}
</style>
