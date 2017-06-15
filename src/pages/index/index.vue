<template>
    <div class="index">Hi Vue</div>
</template>
<script>
  import Toast from 'Components/Toast/index'

  export default {
    data() {
      return {
        test: true
      }
    },
    created() {
      document.title = '设置页面title'
    },
    mounted() {
      this.toast(3000, '获取信息失败jo');
    },
    methods: {
      toast(time, msg) {
        Toast({
          show: 'true',
          duration: time,
          message: msg
        });
      }
    }
  }
</script>
<style scoped>
  @import '../../assets/css/suit.css';
  @import "./index.css";
</style>