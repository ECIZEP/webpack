<template>
  <div>
    <div class="vfly-table">
      <div class="vfly-table__header header-logo">
        阳澄联合旗舰店
      </div>
      <div class="vfly-table__cell">
        <div class="vfly-table__cell--pic">
          <img src="../../assets/images/temp.png">
        </div>
        <div class="vfly-table__cell--good">
          <h2 class="good--title">
            今锦上 阳澄湖大闸蟹礼券 公3.5-4.0两母2.4-2.9两 八只装
          </h2>
          <div class="good--price">
            <span class="good--priceNumber">￥{{singlePrice}}</span>
            <span class="vfly--pullright">x1</span>
          </div>
        </div>
      </div>
      <div class="vfly-table__cell">
        <div class="vfly-table__cell--title">
          <span>购买数量</span>
        </div>
        <div class="vfly-table__cell--value">
          <div class="vfly-counter">
            <span @click="minusNumber" class="vfly--icon__minus" :class="{'disable': this.number === 1}">
              <i class="icon-remove"></i>
            </span>
            <span class="vfly--icon__mount">{{number}}</span>
            <span @click="plusNumber" class="vfly--icon__plus" :class="{'disable': this.number === 99}">
              <i class="icon-add"></i>
            </span>
          </div>
        </div>
      </div>
      <router-link to="/receipt">
        <div class="vfly-table__cell cell-normal">
            <div class="vfly-table__cell--title">
              <span>发票信息</span>
            </div>
            <div class="vfly-table__cell--value more">
              <span>电子发票&nbsp;&nbsp;个人</span>
            </div>
        </div>
      </router-link>
      <div class="vfly-table__cell cell-disable">
        <div class="vfly-table__cell--title">
          <span>优惠卷</span>
        </div>
        <div class="vfly-table__cell--value">
          <span>不可用</span>
        </div>
      </div>
    </div>
    <div class="vfly-footer">
      <div class="vfly-footer__amount">
        实付款:￥{{totalPrice}} 
      </div>
      <div class="vfly-footer__action">
        下单支付
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      price: {
        type: Number,
        default: 268.00
      }
    },
    data() {
      return {
        headTitle: '确认订单',
        number: 1
      }
    },
    created() {
      document.title = '确认订单';
    },
    computed: {
      singlePrice: function () {
        return this.price.toFixed(2);
      },
      totalPrice: function () {
        return (this.number * this.singlePrice).toFixed(2);
      }
    },
    methods: {
      plusNumber: function () {
        if (this.number === 99) {
          return void 666;
        }
        this.number++;
      },
      minusNumber: function () {
        if (this.number === 1) {
          return void 666;
        }
        this.number--;
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '../../assets/style/mixin.less';
  .vfly-table {
    background-color: #FFFFFF;
    .border-bottom-1px(#e3e5e9);
  }

  .vfly-table__header {
    background-color: #FAFAFA;
    height: 0.9rem;
    line-height: 0.9rem;
    font-size: 0.28rem;
    .border-bottom-1px(#e3e5e9);
    &.header-logo {
      padding-left: 0.94rem;
      &:before {
        content: "自营";
        position: absolute;
        left: 0.3rem;
        top: 0.25rem;
        display: inline-block;
        text-align: center;
        width: 0.52rem;
        height: 0.3rem;
        line-height: 0.34rem;
        color: #f23030;
        font-size: 0.22rem;
        border: 1px solid #f23030;
        border-radius: 3px;
      }
    }
  }

  .vfly-table__cell {
    display: flex;
    justify-content: space-between;
    margin-left: 0.2rem;
    padding: 0.25rem 0.2rem 0.25rem 0;
    font-size: 0.28rem;
    .border-bottom-1px(#f1f1f1);
    &.cell-normal .vfly-table__cell--value span {
      color: #666666;
    }
    &.cell-danger .vfly-table__cell--value span {
      color: #e4393c;
    }
    &.cell-disable .vfly-table__cell--value span {
      color: #999999;
    }
  }

  .more:after {
    position: relative;
    display: inline-block;
    content: '';
    width: 0.2rem;
    height: 0.2rem;
    border-top: 1px solid #bfbfbf;
    border-right: 1px solid #bfbfbf;
    transform: rotate(45deg);
    margin-left: 0.17rem;
  }

  .vfly-table__cell--pic {
    float: left;
    width: 1.86rem;
    height: 1.86rem;
    margin-right: 0.24rem;
    border: 1px solid #dedede;
    & img {
      max-width: 1.86rem;
      height: 1.86rem;
    }
  }

  .vfly-table__cell--good {
    display: table-cell;
    width: 100%;
  }

  .good--title {
    height: 1.41rem;
    line-height: 0.4rem;
    font-size: 0.28rem;
  }

  .good--price {
    height: 0.45rem;
    & span {
      line-height: 0.45rem;
    }
  }

  .good--priceNumber {
    color: #f02b2b;
  }

  .vfly-footer {
    bottom: 0;
    left: 0;
    right: 0;
    height: 1rem;
    background-color: #ffffff;
    display: flex;
    .border-top-1px(#e3e5e9);
    position: fixed;

    .vfly-footer__amount {
      padding: 0.27rem 0 0.27rem 0.4rem;
      font-size: 0.32rem;
      line-height: 0.45rem;
      color: #E4393C;
      flex: 1 1 0;
    }

    .vfly-footer__action {
      box-sizing: border-box;
      flex: 0 0 2.4rem;
      background-color: #f23030;
      padding: 0.25rem 0.48rem;
      color: #ffffff;
      font-size: 0.36rem;
      line-height: 0.5rem;
      text-align: center;
    }
  } // vfly 计数器
  .vfly-counter {
    position: absolute;
    top: 0.2rem;
    right: 0.3rem;
    display: flex;
    width: 1.7rem;
    height: 0.46rem;
    line-height: 0.46rem;
    border: 1px solid #d8d8d8;
    border-radius: 3px;
    color: #232326;
    .vfly--icon__minus {
      flex: 0 0 0.46rem;
      text-align: center;
      height: 100%;
      width: 0.46rem;
      border-right: 1px solid #d8d8d8;
      &.disable {
        color: #bfbfbf;
      }
    }
    .vfly--icon__mount {
      flex: 1 1 0;
      text-align: center;
    }
    .vfly--icon__plus {
      text-align: center;
      flex: 0 0 0.46rem;
      height: 100%;
      width: 0.46rem;
      border-left: 1px solid #d8d8d8;
      &.disable {
        color: #bfbfbf;
      }
    }
  }
</style>