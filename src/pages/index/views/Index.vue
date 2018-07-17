<template>
  <div id="index">
    <mt-header fixed title="首页" class="black">
      <span slot="right" class="shenpi"><img src="../../../assets/img/icon_shenpi.png" height="45" width="44"/><em
        class="s-p-tip">2</em></span>
    </mt-header>
    <main>
      <section class="section">
        <div class="all-yeji">
          <div class="a-y-number">
            <p>500000<span>元</span></p>
            <p class="tip">本月成交金额</p>
          </div>
          <div class="a-y-bing">
            <span></span>
            <span></span>
            <p style="text-align: center;position: relative"><b style="font-size: 18px;">1001</b> <br><font
              style="font-size: 12px">套</font></p>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="all">
          <p class="all-time"><span :class="{'active':active==='4'}" @click="resetYeji('4')">本月</span>
            <span :class="{'active':active==='5'}" @click="resetYeji('5')">本年</span></p>
          <p class="h2">本组业绩完成</p>
          <div class="all-process">
            <mt-progress :value="60" :bar-height="16">
              <div slot="start"><span class="a-p-name">新增</span></div>
              <div slot="end"><span class="a-p-value">100%</span></div>
            </mt-progress>
            <mt-progress :value="80" :bar-height="16">
              <div slot="start"><span class="a-p-name">踩盘</span></div>
              <div slot="end"><span class="a-p-value">100%</span></div>
            </mt-progress>
            <mt-progress :value="40" :bar-height="16">
              <div slot="start"><span class="a-p-name">来访</span></div>
              <div slot="end"><span class="a-p-value">100%</span></div>
            </mt-progress>
            <mt-progress :value="30" :bar-height="16">
              <div slot="start"><span class="a-p-name">认购</span></div>
              <div slot="end"><span class="a-p-value">100%</span></div>
            </mt-progress>
          </div>
          <div class="all-list">
            <div class="a-l-li" @click="toPlaceUser">
              <div class="left">
                <img class="avater" src="../../../assets/img/btn_right.png" height="46" width="46"/>
                <div>
                  <p class="name">名字</p>
                  <p class="data">新增<span></span> 来访<span></span> 踩盘<span></span> 认购<span></span></p>
                </div>
              </div>
              <div class="right"><img src="../../../assets/img/btn_right.png" height="14" width="8"/></div>
            </div>
            <div class="a-l-li">
              <div class="left">
                <img class="avater" src="../../../assets/img/btn_right.png" height="46" width="46"/>
                <div>
                  <p class="name">名字</p>
                  <p class="data">新增<span></span> 来访<span></span> 踩盘<span></span> 认购<span></span></p>
                </div>
              </div>
              <div class="right"><img src="../../../assets/img/btn_right.png" height="14" width="8"/></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        active: '4'
      }
    },
    mounted: function () {
      this.$nextTick(() => {
        this.paint()
      })
    },
    methods: {
      resetYeji(time) {
        this.active = time;
      },
      paint() {

      },
      toPlaceUser() {
        window.location.href = 'http://localhost:8080/yeji.html#/placeUser'
      }
    }
  }
</script>

<style scoped lang="scss">
  .all-yeji {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    .a-y-number {
      font-size: 24px;
      color: #FF6A00;
      line-height: 24px;
      font-weight: bold;
      span {
        font-size: 16px;
      }
      .tip {
        font-size: 12px;
        color: #999;
        font-weight: normal;
      }
    }
  }

  .all {
    text-align: center;
    border-bottom: 2px solid #f3f3f3;
  }

  .all-time {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    margin-bottom: 8px;
    border: 1px solid #f3f3f3;
    span {
      width: 57px;
      height: 28px;
      line-height: 28px;
      text-align: center;
      color: #999;
      font-weight: normal;
      &.active {
        color: #0076FF;
      }
      &:not(:last-child) {
        border-right: 1px solid #f3f3f3;
      }
    }
  }

  .all-process {
    padding: 0 20px 20px 20px;
  }

  .h2 {
    padding: 20px;
    font-size: 16px;
    text-align: left;
    font-weight: bold;
    border-top: 1px solid #f3f3f3;
  }

  .a-l-li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    padding: 16px 20px;
    border-top: 1px solid #f3f3f3;
    .left {
      display: inline-flex;
      justify-content: flex-start;
      align-items: center;
    }
    .avater {
      border-radius: 50%;
      margin-right: 12px;
    }
    .name {
      font-size: 16px;
      font-weight: bold;
    }
    .data {
      font-size: 14px;
      color: #999;
      span {
        color: #ff6a00;
      }
    }
  }

  .shenpi {
    position: relative;
    .s-p-tip {
      position: absolute;
      right: -6px;
      top: -26px;
      font-style: normal;
      border-radius: 50%;
      width: 16px;
      height: 16px;
      background: #FF4848;
      font-size: 12px;
      text-align: center;
    }
  }

  .a-y-bing {
    position: relative;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    overflow: hidden;
    span {
      display: block;
      width: 100%;
      height: 0;
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 0;
      &:first-child {
        background: url("../../../assets/img/canvas_bg1.png") no-repeat center top;
        background-size: 100%;
      }
      &:nth-child(2) {
        background: url("../../../assets/img/canvas_bg2.png") no-repeat center top;
        background-size: 100%;
      }
    }
  }
</style>
