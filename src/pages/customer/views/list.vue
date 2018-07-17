<template>
  <div class="list">
    <mt-navbar fixed v-model="managerCustomerParams.type">
      <mt-tab-item id="1" @click.native="managerCustomer('1',1)"><span>预约</span></mt-tab-item>
      <mt-tab-item id="2" @click.native="managerCustomer('2',1)"><span>来访</span></mt-tab-item>
      <mt-tab-item id="3" @click.native="managerCustomer('3',1)"><span>认购</span></mt-tab-item>
      <mt-tab-item id="4" @click.native="managerCustomer('4',1)"><span>签约</span></mt-tab-item>
    </mt-navbar>
    <div class="record">
      <span>总计:{{totalCount}}</span>
    </div>
    <ul class="list-ul"
        v-infinite-scroll="loadMore"
        :infinite-scroll-disabled="loading"
        infinite-scroll-immediate-check="false"
        infinite-scroll-distance="10">
      <li v-for="(item,index) in listData"
          @click="goDetail(item.customerId,item.type,item.dadingId,item.signId)"
          :key="index">
        <div class="left">
          <p class="name">{{item.customerName}}&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="checking"
                  v-if="(managerCustomerParams.type == '3' || managerCustomerParams.type == '4') && item.examineState === '审核中'">
            <img src="../../../assets/img/icon_checking.png" width="16" height="16"/>{{item.examineState}}</span>
            <span class="checking"
                  v-if="(managerCustomerParams.type == '3' || managerCustomerParams.type == '4') && item.examineState === '驳回'">
            <img src="../../../assets/img/icon_reject.png" width="16" height="16"/>{{item.examineState}}</span>
          </p>
          <p><span class="inline-flex">
              <img src="../../../assets/img/icon_qudao.png" width="15"/>{{item.abbreviation}}</span></p>
        </div>
        <div class="center">
          <p style="margin-bottom: 15px;"><span class="property-span">{{item.propertyName}}</span></p>
          <p class="qudao">
            <span class="inline-flex" v-if="managerCustomerParams.type =='1'">
              <img src="../../../assets/img/icon_car.png" width="15"/>{{item.isBus}}</span>
            <span class="inline-flex" v-if="managerCustomerParams.type == '2'">
              <img src="../../../assets/img/icon_1fang.png" width="15"/>{{item.visitTimes}}访</span>
            <span class="inline-flex" v-if="managerCustomerParams.type == '3'">
              <img src="../../../assets/img/icon_order.png" width="15"/>认购</span>
            <span class="inline-flex" v-if="managerCustomerParams.type == '4'">
              <img src="../../../assets/img/icon_contract.png" width="15"/>{{item.signType}}</span>
          </p>
        </div>
        <div class="right">
          <p class="time">{{item.createTime||item.realVisitTime||item.signTime}}</p>
          <p class="inline-flex"><img src="../../../assets/img/icon_person.png" height="16" width="15"/>{{item.salesUserName}}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'list',
    data() {
      return {
        loading: false,
        totalCount: 0,
        listData: [],
        managerCustomerParams: {
          marketManagerId: 3220,//this.$route.query.userId,
          pageSize: 8,
          pageIndex: 1,
          propertyIds: '1,5,6,7,8,9,123,10195',//this.$route.query.propertyId,
          type: "1",  // 列表类别标识(1-报备2-来访3-大定4-草签正签)
        },
      }
    },
    created() {
      this.managerCustomer('1',1);
    },
    methods: {
      managerCustomer(customerState, pageNo) {
        this.loading = true;
        this.Indicator.open();
        this.managerCustomerParams.type = customerState;
        this.managerCustomerParams.pageIndex = pageNo;
        this.$axios.get(this.khApi + "/customer/v1/findCustomerList", {params: this.managerCustomerParams}).then((res) => {
          if (res.data.code == "200") {
            if (!res.data.data.count) {
              this.loading = false;
              this.Indicator.close();
              this.totalCount = 0;
              this.listData = [];
              return false;
            }
            if (pageNo === 1) {
              this.listData = res.data.data.list;
            } else {
              this.listData = this.listData.concat(res.data.data.list);
            }
            this.totalCount = res.data.data.count;
            this.managerCustomerParams.pageIndex++;
            this.loading = false;
          } else {
            this.Toast(res.data.info);
            this.totalCount = 0;
            this.listData = [];
          }
          this.Indicator.close();
        }).catch((error) => {
          this.Toast("服务器内部错误");
          if (window.webkit.messageHandlers) {
            window.webkit.messageHandlers.xianshi.postMessage("");
          }
        })
      },
      loadMore() {
        this.managerCustomer(this.managerCustomerParams.type, this.managerCustomerParams.pageIndex);
      },
      goDetail(cusId,type,dadingId,signId) {

        var u = navigator.userAgent;
        if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {//安卓手机
          AndroidWebView.open(this.khWeb + "/khDetail/" + cusId+"/"+type+"/"+dadingId+"/"+signId);
        } else if (u.indexOf('iPhone') > -1) {//苹果手机
          window.webkit.messageHandlers.yincang.postMessage("");
          this.$router.push("/khDetail/" + cusId +"/"+type+"/"+dadingId+"/"+signId)
        } else { // pc
          this.$router.push("/khDetail/" + cusId+"/"+type+"/"+dadingId+"/"+signId)
        }
      }
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .property-span{
    border: 1px solid #999999;
    color: #999999;
    font-size: 12px;
    height: 18px;
    display: inline-block;
    line-height: 18px;
    padding: 0 4px;
  }
  .list {
    padding-top: 0.1px;
    margin-top: 44px;
  }

  .inline-flex {
    display: inline-flex;
    align-items: center;
    &:nth-child(2n+1) {
      width: 80px;
      overflow: hidden;
      word-break: keep-all;
      text-overflow: ellipsis;
    }
    img {
      margin-right: 7px;
    }
  }

  .record {
    background: #ffffff;
    padding: 10px 20px;
    margin-bottom: 4px;
    margin-top: 16px;
    color: #0B79EB;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .reset-record {
      width: 91px;
      height: 28px;
      line-height: 26px;
      text-align: center;
      font-weight: normal;
      border-radius: 22px;
      border: 1px solid #0B79EB;
      font-size: 12px;
    }
  }

  img {
    vertical-align: middle;
  }

  .list-ul li {
    height: 82px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(238, 238, 238, 1);
    padding: 16px 20px;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    line-height: 1;
    margin-bottom: 4px;
    color: #999999;
    img {
      margin-right: 7px;
    }
    .left,.center,.right{
      width: 33%;
    }
    .left .name {
      font-weight: bold;
      font-size: 16px;
      color: #333333;
      margin-bottom: 15px;
    }
    .left .checking {
      font-size: 14px;
      color: #FFBC00;
      display: inline-flex;
      align-items: center;
    }
    .right .time {
      margin-bottom: 15px;
    }
  }

  .popup {
    width: 100%;
    .pop-action {
      position: absolute;
      width: 100%;
      line-height: 44px;
      top: 0;
      > div {
        display: flex;
        margin: 0 20px;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba(244, 243, 244, 1);
      }
    }
  }

  .list-manager {
    width: 100%;
    max-height: 217px;
    margin-top: 44px;
    overflow-y: scroll;
    ul > li {
      padding: 12px 20px;
      text-align: center;
      font-size: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .list-manager-out {
      color: #999999;
    }
  }
</style>
