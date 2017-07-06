<template>
  <div>
    <div class="mask" v-if="mask && show"></div>
    <transition name="fade">
      <div class="toast" v-show="show">
        <div class="toast__loading" v-if="type==='loading'">
          <i></i>
        </div>
        <span class="toast__content" :class="{'is-margin':type==='loading'}">
                    {{text}}
                </span>
      </div>
    </transition>
  </div>
</template>
<script>
  export default {
    props: {
      value: {
        type: Boolean,
        default: false
      },
      time: {
        type: Number,
        default: 1500
      },
      type: String,
      mask: {
        type: Boolean,
        default: false
      },
      text: String
    },
    data() {
      return {
        show: false
      }
    },
    created() {
      this.value = this.show
      if (this.value) {
        this.value = this.value
      }
    },
    watch: {
      show(val) {
        if (val) {
          this.$emit('input', true)
          this.$emit('on-show')
          if (this.time) {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
              this.show = false;
            }, this.time)
          }
        } else {
          this.$emit('input', false)
          this.$emit('on-hide')
        }
      },
      value(val) {
        this.show = val
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '../../assets/css/transition.less';
  .mask {
    position: fixed;
    z-index: 1002;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .5);
  }

  .toast {
    position: fixed;
    z-index: 1003;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(17, 17, 17, 0.7);
    text-align: center;
    border-radius: 3px;
    overflow: hidden;
    font-size: .12rem;
    color: #fff;
  }

  .toast__loading {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: .3rem;
    height: .4rem;
    >i {
      width: .24rem;
      height: .24rem;
      animation: loading 1s steps(12, end) infinite;
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 100 100'%3E%3Cpath fill='none' d='M0 0h100v100H0z'/%3E%3Crect xmlns='http://www.w3.org/2000/svg' width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.56)' rx='5' ry='5' transform='translate(0 -30)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.5)' rx='5' ry='5' transform='rotate(30 105.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.43)' rx='5' ry='5' transform='rotate(60 75.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.38)' rx='5' ry='5' transform='rotate(90 65 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.32)' rx='5' ry='5' transform='rotate(120 58.66 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.28)' rx='5' ry='5' transform='rotate(150 54.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.25)' rx='5' ry='5' transform='rotate(180 50 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.2)' rx='5' ry='5' transform='rotate(-150 45.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.17)' rx='5' ry='5' transform='rotate(-120 41.34 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.14)' rx='5' ry='5' transform='rotate(-90 35 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.1)' rx='5' ry='5' transform='rotate(-60 24.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.03)' rx='5' ry='5' transform='rotate(-30 -5.98 65)'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-size: 100%;
    }
  }

  .toast__content {
    height: .4rem;
    max-width: 3rem;
    line-height: .4rem;
    padding: 0 .10rem;
    &.is-margin {
      margin-left: .3rem;
      padding-left: 0;
    }
  }

  @keyframes loading {
    0% {
      transform: rotate3d(0, 0, 1, 0deg);
    }

    100% {
      transform: rotate3d(0, 0, 1, 360deg);
    }
  }
</style>