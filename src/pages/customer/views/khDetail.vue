<template>
  <div class="kh-detail" v-if="kh">
    <mt-header fixed title="客户详情">
      <div slot="left">
        <mt-button @click="backHome"><img src="../../../assets/img/btn_back.png" height="18" width="24"/></mt-button>
      </div>
    </mt-header>
    <div class="customer">
      <p class="name">{{baseInfoData.customerName}} {{baseInfoData.customerPhone | formatPhone}}</p>
      <p class="xiangmu"><img src="../../../assets/img/icon_qudao.png" height="16" width="15"/>
        项目名称：{{baseInfoData.propertyName}}
      </p>
      <p class="anchang">
        <span><img src="../../../assets/img/icon_person.png" height="16" width="15"/>
        案场：{{baseInfoData.salesUserName || '暂无'}}</span>
      </p>
    </div>
    <div id="khDetail-card">
      <div @click="toDetail('5')" id="sign-card" v-if="isSignCard" class="items-card">
        <div class="title">
          <div class="time-icon">{{signCardData.signTime?signCardData.signTime:''}}</div>
          <h2>签约</h2>
        </div>
        <ul>
          <li>
            <div>
              <img style="width: 16px;height: 16px;margin-right: 4px" src="../../../assets/img/icon_checking.png" alt=""><span>{{signCardData.examineState}}</span>
            </div>
            <div></div>
          </li>
          <li class="propert-name">
            <div>
              <img style="width: 18px;height: 18px;margin-right: 8px" src="../../../assets/img/icon_hotel.png" alt=""><span>{{signCardData.houseName}}</span>
            </div>
            <div></div>
          </li>
          <li>
            <div>
              <span class="lable">首付金额</span><span>{{signCardData.firstPrice}}元</span>
            </div>
            <div></div>
          </li>
          <li>
            <div>
              <span class="lable">总价</span><span>{{signCardData.totalPrice}}元</span>
            </div>
            <div><img style="width: 8px;height: 19px;" src="../../../assets/img/btn_right.png" alt=""></div>
          </li>
          <li class="border-bottom area-width">
            <div>
              <span class="lable">面积</span><span>{{signCardData.signArea}}元</span>
            </div>
            <div></div>
          </li>
          <li class="remark">
            <div>
              <span class="lable">备注</span><span>{{signCardData.remark}}</span>
            </div>
            <div></div>
          </li>
          <li>
            <div>
              <img style="width: 17px;height: 20px;margin-right: 6px" src="../../../assets/img/money-package.png" alt=""><span>申佣中</span>
            </div>
            <div><img style="width: 8px;height: 19px;" src="../../../assets/img/btn_right.png" alt=""></div>
          </li>
        </ul>
      </div>
      <div @click="showSignCard()" v-if="!isSignCard&&signCardData" class="sign-card fold-card">
        <div class="title">
          <div class="time-icon">{{signCardData.signTime||''}}</div>
          <h3>正签</h3>
        </div>
      </div>
      <div @click="toDetail('4')" id="preSign-card" v-if="isPresignCard" class="items-card">
        <div class="title">
          <div class="time-icon">{{preSignCardData.signTime?preSignCardData.signTime:''}}</div>
          <h2>草签</h2>
        </div>
        <ul>
          <li>
            <div>
              <img style="width: 16px;height: 16px;margin-right: 4px" src="../../../assets/img/icon_checking.png" alt=""><span>{{preSignCardData.examineState}}</span>
            </div>
            <div></div>
          </li>
          <li class="propert-name">
            <div>
              <img style="width: 18px;height: 18px;margin-right: 8px" src="../../../assets/img/icon_hotel.png" alt=""><span>{{preSignCardData.houseName}}</span>
            </div>
            <div></div>
          </li>
          <li>
            <div>
              <span class="lable">首付金额</span><span>{{preSignCardData.firstPrice}}元</span>
            </div>
            <div></div>
          </li>
          <li>
            <div>
              <span class="lable">总价</span><span>{{preSignCardData.totalPrice}}元</span>
            </div>
            <div><img style="width: 8px;height: 19px;" src="../../../assets/img/btn_right.png" alt=""></div>
          </li>
          <li class="border-bottom area-width">
            <div>
              <span class="lable">面积</span><span>{{preSignCardData.signArea}}元</span>
            </div>
            <div></div>
          </li>
          <li class="remark">
            <div>
              <span class="lable">备注</span><span>{{preSignCardData.remark}}</span>
            </div>
            <div></div>
          </li>
          <li>
            <div>
              <img style="width: 17px;height: 20px;margin-right: 6px" src="../../../assets/img/money-package.png" alt=""><span>申佣中</span>
            </div>
            <div><img style="width: 8px;height: 19px;" src="../../../assets/img/btn_right.png" alt=""></div>
          </li>
        </ul>
      </div>
      <div @click="showPreSignCard()" v-if="!isPresignCard&&preSignCardData" class="preSign-card fold-card">
        <div class="title">
          <div class="time-icon">{{preSignCardData.signTime||''}}</div>
          <h3>草签</h3>
        </div>
      </div>
      <div @click="toDetail('3')" id="buy-card" v-if="isBuyCard" class="items-card">
        <div class="title">
          <div class="time-icon">{{buyCardData.createTime?buyCardData.createTime:''}}</div>
          <h2>认购</h2>
        </div>
        <ul>
          <li>
            <div>
              <img style="width: 16px;height: 16px;margin-right: 4px" src="../../../assets/img/icon_checking.png" alt=""><span>{{buyCardData.examineState}}</span>
            </div>
            <div></div>
          </li>
          <li class="propert-name">
            <div>
              <img style="width: 18px;height: 18px;margin-right: 8px" src="../../../assets/img/icon_hotel.png" alt=""><span>{{buyCardData.houseName}}</span>
            </div>
            <div></div>
          </li>
          <li>
            <div>
              <span class="lable">认购金额</span><span>{{buyCardData.price}}元</span>
            </div>
            <div></div>
          </li>
          <li>
            <div>
              <span class="lable">总价</span><span>{{buyCardData.totalPrice}}元</span>
            </div>
            <div><img style="width: 8px;height: 19px;" src="../../../assets/img/btn_right.png" alt=""></div>
          </li>
          <li class="border-bottom area-width">
            <div>
              <span class="lable">面积</span><span>{{buyCardData.dadingArea}}元</span>
            </div>
            <div></div>
          </li>
          <li class="remark">
            <div>
              <span class="lable">备注</span><span>{{buyCardData.remark}}</span>
            </div>
            <div></div>
          </li>
        </ul>
      </div>
      <div @click="showBuyCard()" v-if="!isBuyCard&&buyCardData" class="buy-card fold-card">
        <div class="title">
          <div class="time-icon">{{buyCardData.createTime||''}}</div>
          <h3>认购</h3>
        </div>
      </div>
      <div @click="toDetail('2')" id="visit-card" v-if="isVisitCard&&visitCardData" class="items-card">
        <div class="title">
          <div class="time-icon">{{visitCardData[selectedIndex].realVisitTime||''}}</div>
          <h2 v-if="visitCardData">{{visitCardData.length-selectedIndex}}访</h2>
        </div>
        <ul>
          <li>
            <div>
              <span class="lable">落座</span><span>{{visitCardData[selectedIndex].isSitDown}}</span>
            </div>
            <div></div>
          </li>
          <li>
            <div>
              <span class="lable">落位</span><span>{{visitCardData[selectedIndex].isEngoyHouse}}</span>
            </div>
            <div></div>
          </li>
          <li>
            <div>
              <span style="margin-right: 10px">{{visitCardData[selectedIndex].realVisitTime||''}}</span><span>{{visitCardData[selectedIndex].visitorsNumber}}人</span>
            </div>
            <div><img style="width: 8px;height: 19px;" src="../../../assets/img/btn_right.png" alt=""></div>
          </li>
          <li class="remark">
            <div>
              <span class="lable">备注</span><span>{{visitCardData[selectedIndex].remark}}</span>
            </div>
            <div></div>
          </li>
        </ul>
      </div>
      <div v-if="visitCardData&&!isVisitCard&&visitCardData.length==1||selectedIndex!=0&&isVisitCard" @click="showVisitCard();selectedIndex=0" class="visit-card fold-card">
        <div class="title">
          <div class="time-icon">{{visitCardData[0].realVisitTime||''}}</div>
          <h3 v-if="visitCardData">{{visitCardData.length}}访</h3>
        </div>
      </div>
      <div v-if="visitCardData&&selectedIndex!=index+1&&visitCardData.length>1&&isVisitCard" v-for="(item,index) in visitsCardData" :key="index" @click="showVisitCard();selectedIndex=index+1;" class="visit-card fold-card">
        <div class="title">
          <div class="time-icon">{{item.realVisitTime||''}}</div>
          <h3 v-if="visitCardData">{{visitsCardData.length-index}}访</h3>
        </div>
      </div>
      <div v-if="visitCardData&&!isVisitCard&&visitCardData.length>1" v-for="(item,index) in visitCardData" :key="index" @click="showVisitCard();selectedIndex=index;" class="visit-card fold-card">
        <div class="title">
          <div class="time-icon">{{item.realVisitTime||''}}</div>
          <h3 v-if="visitCardData">{{visitCardData.length-index}}访</h3>
        </div>
      </div>
      <div @click="toDetail('1')" id="report-card" v-if="isReportCard" class="items-card">
        <div class="title">
          <div class="time-icon">{{reportCardData.createTime?reportCardData.createTime:''}}</div>
          <h2>报备</h2>
        </div>
        <ul>
          <li>
            <div>
              <span class="lable">预约时间:</span><span>{{reportCardData.visitTime}}</span>
            </div>
            <div></div>
          </li>
          <li>
            <div>
              <span class="lable">来访人数:</span><span>{{reportCardData.visitorsNumber}}人</span>
            </div>
            <div></div>
          </li>
          <li>
            <div>
              <span class="lable">来访方式:</span><span>{{reportCardData.isBus}}</span>
            </div>
            <div><img style="width: 8px;height: 19px;" src="../../../assets/img/btn_right.png" alt=""></div>
          </li>
          <li class="remark">
            <div>
              <span class="lable">备注信息:</span><span>{{reportCardData.remark}}</span>
            </div>
            <div></div>
          </li>
        </ul>
      </div>
      <div @click="showReportCard()" v-if="!isReportCard&&reportCardData" class="report-card fold-card">
        <div class="title">
          <div class="time-icon">{{reportCardData.createTime||''}}</div>
          <h3>报备</h3>
        </div>
      </div>
    </div>
    <div class="qudao">
      <div class="qd-title">
        <img src="../../../assets/img/icon_tie.png" width="8"/>&nbsp;&nbsp;&nbsp;&nbsp;渠道信息
      </div>
      <div class="qd-main">
        <a @click="phone(companyInfoData.memberPhone)" class="name">{{companyInfoData.memberName || "暂无"}}&nbsp;&nbsp;&nbsp;&nbsp;{{companyInfoData.memberPhone || "暂无"}}
          <img v-if="isShowPhone1" src="../../../assets/img/icon_call.png" style="float: right" height="28" width="28"/></a>
        <div style="padding: 7px 0">
          <p class="qd-item"><span>所属分行:</span>{{companyInfoData.branchName || "暂无"}}</p>
          <p class="qd-item"><span>所属公司:</span>{{companyInfoData.companyName || "暂无"}}</p>
        </div>
      </div>
    </div>
    <div class="liandong">
      <div class="ld-main">
        <a @click="phone(companyInfoData.placeUserPhone)" class="name">联动归属：{{companyInfoData.placeUserName || "暂无"}}&nbsp;{{companyInfoData.placeUserPhone || "暂无"}}<span></span>
          <img v-if="isShowPhone2" src="../../../assets/img/icon_call.png" style="float: right" height="28" width="28"/></a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "kh-detail",
    data() {
      return {
        visitsCardData:[],
        selectedIndex:0,
        isSignCard:false,
        isPresignCard:false,
        signCardData:[],
        preSignCardData:[],
        isBuyCard:false,
        buyCardData:[],
        isVisitCard:false,
        visitCardData:[],
        isReportCard:false,
        reportCardData:[],
        kh: null,
        baseInfoData:[],
        companyInfoData:[],
        customerId: this.$route.params.customerId,
        thisType: this.$route.params.type,
        dadingId:this.$route.params.dadingId,
        signId:this.$route.params.signId,
        isShowPhone1:true,
        isShowPhone2:true
      }
    },
    created() {
      this.getkh();
    },

    methods: {
      showBuyCard(){
        this.selectedIndex=0;
        this.isSignCard=false;
        this.isPresignCard=false;
        this.isBuyCard=true;
        this.isVisitCard=false;
        this.isReportCard=false;
      },
      showVisitCard(){
        this.isSignCard=false;
        this.isPresignCard=false;
        this.isBuyCard=false;
        this.isVisitCard=true;
        this.isReportCard=false;
      },
      showReportCard(){
        this.selectedIndex=0;
        this.isSignCard=false;
        this.isPresignCard=false;
        this.isBuyCard=false;
        this.isVisitCard=false;
        this.isReportCard=true;
      },
      showSignCard(){
        this.selectedIndex=0;
        this.isSignCard=true;
        this.isPresignCard=false;
        this.isBuyCard=false;
        this.isVisitCard=false;
        this.isReportCard=false;
      },
      showPreSignCard(){
        this.selectedIndex=0;
        this.isSignCard=false;
        this.isPresignCard=true;
        this.isBuyCard=false;
        this.isVisitCard=false;
        this.isReportCard=false;
      },
      getkh() {
        if(this.dadingId=="undefined"){
          this.dadingId='';
        }
        if(this.signId=="undefined"){
          this.signId='';
        }
        this.$axios.get(this.khApi + "/customer/v1/findCustomerInfo?customerId="+this.customerId+'&type='+
          this.thisType+'&dadingId='+
          this.dadingId+'&signId='+
          this.signId).then((res) => {
          if (res.data.code =="200") {
            this.kh=res.data.data;
            this.baseInfoData =this.kh.baseInfo;
            this.companyInfoData = this.kh.companyInfo;
            this.signCardData = this.kh.signInfo;
            this.preSignCardData = this.kh.presignInfo;
            this.buyCardData = this.kh.dadingInfo;
            this.visitCardData = this.kh.visitInfo;
            this.reportCardData = this.kh.reportInfo;
            if(this.reportCardData){
              this.isReportCard=true;
            }
            if(this.visitCardData){
              this.isReportCard=false;
              this.isVisitCard=true;
            }
            if(this.visitCardData&&this.visitCardData.length>1){
              this.visitsCardData=this.visitCardData.slice(1);
            }
            if(this.buyCardData){
              this.isBuyCard=true;
              this.isReportCard=false;
              this.isVisitCard=false;
            }
            if(this.preSignCardData){
              this.isPresignCard=true;
              this.isReportCard=false;
              this.isVisitCard=false;
              this.isBuyCard=false;
            }
            if(this.signCardData){
              this.isSignCard=true;
              this.isReportCard=false;
              this.isVisitCard=false;
              this.isBuyCard=false;
              this.isPresignCard=false;
            }
            if(!/^1[3456789]\d{9}$/.test(this.kh.companyInfo.placeUserPhone)){
              this.isShowPhone2=false;
            }
            if(!/^1[3456789]\d{9}$/.test(this.kh.companyInfo.memberPhone)){
              this.isShowPhone1=false;
            }
          }
        }).catch((error) => {
          this.Toast("网络错误");
        })
      },
      toDetail(t) {
        switch (t) {
          case "1":
            this.$router.push('/baobeiDetail/1/' + this.customerId);
            break;
          case "2":
            this.$router.push('/laifangDetail/2/' + this.visitCardData[this.selectedIndex].visitId+'/'+(this.visitCardData.length-this.selectedIndex));
            break;
          case "3":
            this.$router.push('/dadingDetail/3/' + this.dadingId);
            break;
          case "4":
            this.$router.push('/presignDetail/4/' + this.preSignCardData.id);
            break;
          case "5":
            this.$router.push('/signDetail/5/' + this.signCardData.id);
            break;
          default:
            break;
        }
      },
      backHome() {
        var u = navigator.userAgent;
        if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
          //安卓手机
          AndroidWebView.backHome()
        } else if (u.indexOf('iPhone') > -1) {
          //苹果手机
          window.webkit.messageHandlers.xianshi.postMessage("");
          window.webkit.messageHandlers.shuaxin.postMessage();
        } else {
          //pc
          this.$router.back()
        }
      },
      phone(number) {
        var u = navigator.userAgent;
        if (u.indexOf('iPhone') > -1) {
          //苹果手机
          window.webkit.messageHandlers.phone.postMessage({"body": number});
        } else {
          AndroidWebView.call(number)
        }
      }
    },
    filters: {
      type(type) {
        switch (type) {
          case '1':
            return "报备";
          case '3':
            return "认购";
          case '4':
            return "正签";
          case '5':
            return "草签";
          default:
            break;
        }
      },
      formatPhone(number) {
        return number.replace(/(\d{3})(\d{4})(\d{4})/, "$1****$3")
      }
    },
  }
</script>

<style scoped lang="scss">
  img {
    vertical-align: middle
  }
  #khDetail-card{
    background: #fff;
    padding-bottom: 30px;
  }
  .time-icon{
    background: url("../../../assets/img/bg_time_active.png") no-repeat center center;
    background-size: contain;
    width: 90px;
    height: 24px;
    line-height: 24px;
    padding-left: 8px;
    color: #fff;
    margin-left: -3px;
    font-size: 12px;
    overflow: hidden;
  }
  .title{
    padding-top: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
  }
  .items-card{
    margin:0 20px;
    border-left: 2px dashed #2AD7C7;
    h2{
      font-size: 24px;
    }
    ul{
      padding-left: 20px;
    }
    li{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 40px;
    }
    .propert-name{
      color: #4681EB;
    }
    .lable{
      width: 70px;
      display: inline-block;
      color: #999999;
      font-size: 16px;
    }
    .border-bottom{
      border-bottom: 1px solid #F4F3F4;
    }
    .area-width{
      width: 425px;
    }
  }
  .items-card:last-child{
    border-left: none;
    .title{
      border-left: 2px dashed #2AD7C7;
    }
  }
  .fold-card{
    border-top: 1px solid #DEDEDE;
    padding: 0 20px;
    .title{
      border-left: 2px dashed #DEDEDE;
      height: 56px;
      padding-top: 0;
    }
    .time-icon{
      background: url("../../../assets/img/bg_time_old.png") no-repeat center center;
      background-size: contain;
    }
    h3{
      color: #DEDEDE;
      font-size: 16px;
    }
  }
  .fold-card:last-child{
    position: relative;
    height: 40px;
    &>div{
      align-items: flex-start;
      padding-top: 15px;
      height: 24px;
      h3{
        position: relative;
        bottom: 15px;
      }
    }
  }
  .customer {
    background: #ffffff;
    padding: 16px 20px;
    font-weight: bold;
    margin-top: 40px;
    margin-bottom: 5px;
    box-shadow: 0 2px 6px 0 RGBA(0, 0, 0, 0.06);
    > p {
      padding: 8px 0;
      line-height: 1;
    }
    .name {
      font-size: 16px;
      text-decoration: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #333;
      padding: 8px 0;
    }
    .xiangmu {
      margin-top: 9px;
      color: #999999;
      display: flex;
      align-items: center;
      font-size: 14px;
      img {
        margin-right: 7px;
      }
    }
    .anchang {
      color: #999;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      img {
        margin-right: 7px;
      }
    }
    .addchang {
      border-radius: 15px;
      border: 1px solid #0B79EB;
      text-align: center;
      color: #0B79EB;
      padding: 7px 12px;
      display: inline-block;
      line-height: 1;
    }
  }

  .qudao {
    margin-bottom: 24px;
    .qd-title {
      padding: 8px 20px;
      font-weight: bold;
      font-size: 12px;
      color: rgba(176, 172, 172, 1);
      line-height: 1;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .qd-main {
      background: #ffffff;
      .name {
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        padding: 10px 20px;
        border-bottom: 1px solid #f3f3f3;
        text-decoration: none;
        color: #333;
      }
      .qd-item {
        font-size: 16px;
        line-height: 1;
        padding: 8px 20px;
        span {
          color: #999999;
          display: inline-block;
          vertical-align: middle;
          margin-right: 10px;
        }
      }
    }
  }

  .liandong {
    margin-bottom: 54px;
    .ld-main {
      background: #ffffff;
      padding: 10px 20px;
      font-size: 16px;
      font-weight: bold;
      a {
        text-decoration: none;
        color: #333;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      span {
        color: #999999;
        font-weight: normal;
        display: inline-block;
        vertical-align: middle;
        margin-left: 16px;
      }
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
  }
</style>
