<template>
  <div>
    <transition name="fade">
      <div class="err-toptips err-warn" v-show="visible">
        <span v-text="content"></span>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    content: {
      type: String
    },
    visible: {
      type: Boolean
    }
  }
}
</script>
<style>
body {
  margin: 0;
  padding: 0;
}
</style>
<style scoped>
.err-toptips {
  position: fixed;
  width: 90%;
  left: 0; right: 0;
  margin: 0 auto;
  z-index: 9000;
  top: 20px;
  display: flex;
  align-items: center;
  border-radius: 2px;
  line-height: 74px;
  padding: 0 40px;
  box-sizing: border-box;
  font-size: 30px;
  font-weight: 300;
  color: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24);
}

.err-toptips.err-warn {
  background-color: #f44336;
}

.fade-enter-active {
  animation: enter .3s;
}
.fade-leave-active {
  animation: leave .3s;
}

@keyframes enter {
  0% {
    transform: translate3d(0, -100%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes leave {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(0, -100%, 0);
  }
}
</style>
