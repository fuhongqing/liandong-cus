<template>
  <div class="baobei" v-if="khdata">
    <mt-header title="草签详情">
      <div slot="left">
        <mt-button @click="$router.back()"><img src="../../../assets/img/btn_back.png" height="18" width="24"/></mt-button>
      </div>
    </mt-header>
    <div class="title">
      <img src="../../../assets/img/icon_house.png" height="16" width="16"/>
      房源信息
      <div style="flex: 1"></div>
      <img src="../../../assets/img/icon_caoqian.png" height="16" width="36"/>
    </div>
    <div class="detail">
      <div><span class="label">房源:</span>
        {{baseInfoData.propertyName||''}}
      </div>
      <div><span class="label">房屋类型:</span>{{baseInfoData.buildType || '未填写'}}</div>
      <div><span class="label">房源价格:</span>{{baseInfoData.houseprice}}元</div>
      <div><span class="label">户型:</span>{{baseInfoData.layoutName}}</div>
      <div><span class="label">房源面积:</span>{{baseInfoData.buildArea}}m²</div>
    </div>
    <div class="title">
      <img src="../../../assets/img/icon_client.png" height="16" width="16"/>
      客户信息
    </div>
    <div class="detail">
      <div><span class="label">客户姓名:</span>{{customerInfoData.customerName}}</div>
      <div><span class="label">电话号码:</span>{{customerInfoData.customerPhone | formatPhone}}</div>
      <div><span class="label">身份证号码:</span>{{customerInfoData.customerCard}}</div>
    </div>
    <div class="detail">
      <div><span class="label">客户地址:</span>{{customerInfoData.address || '未填写'}}</div>
      <div><span class="label">身份证照片:</span>
        <p class="image"><img width="100" height="76" v-for="(item,index) in customerImgData" :key="index"
                              @click="show(item)" :src="item + '?imageView2/1/w/103/h/76'"/></p>
      </div>
    </div>
    <div class="title">
      <img src="../../../assets/img/icon_ordered.png" height="16" width="16"/>
      草签信息
    </div>
    <div class="detail">
      <div><span class="label">草签日期:</span>{{khdata.presignTime}}</div>
      <div><span class="label">草签总价:</span>{{khdata.totalPrice}}元</div>
      <div><span class="label">首付金额:</span>{{khdata.firstPrice}}元</div>
      <div><span class="label">草签面积:</span>{{khdata.presignArea}}</div>
      <div><span class="label">草签合同:</span>
        <p class="image"><img width="103" height="76" v-for="(item,index) in khdata.presign_img.split(',')" :key="index"
                              @click="show(item)" :src="item + '?imageView2/1/w/103/h/76'"/></p>
      </div>
      <div><span class="label">首付收据:</span>
        <p class="image"><img width="103" height="76" v-for="(item,index) in khdata.firstPrice_img.split(',')" :key="index"
                              @click="show(item)" :src="item + '?imageView2/1/w/103/h/76'"/></p>
      </div>
      <div><span class="label">首付POS单:</span>
        <p class="image"><img width="103" height="76" v-for="(item,index) in khdata.pos_img.split(',')" :key="index"
                              @click="show(item)" :src="item + '?imageView2/1/w/103/h/76'"/></p>
      </div>
    </div>
    <div class="title">
      <img src="../../../assets/img/icon_sale.png" height="16" width="16"/>
      团购佣金
    </div>
    <div class="detail">
      <div><span class="label">团购方案:</span>{{groupInfoData.groupName || '未填写'}}</div>
      <div><span class="label">应收团购:</span>{{groupInfoData.shouldGroupMoney}}元</div>
      <div><span class="label">佣金方案:</span>{{commissionInfoData.commissionPlanName || '未填写'}}</div>
      <div><span class="label">佣金金额:</span>{{commissionInfoData.commissionMoney||''}}元</div>
      <div><span class="label">折佣:</span>{{commissionInfoData.discountCommission||''}}元</div>
      <div><span class="label">奖金:</span>{{commissionInfoData.bonus}}元</div>
      <div><span class="label">应发佣金:</span>
        {{commissionInfoData.realHairMoney||''}}元
      </div>
      <div v-if="groupImgData.length"><span class="label">团购书:</span>
        <p class="image"><img width="100" height="76" v-for="(item,index) in groupImgData" :key="index"
                              @click="show(item)" :src="item + '?imageView2/1/w/103/h/76'"/></p>
      </div>
      <div v-if="commissionImgArr.length"><span class="label">折佣凭证:</span>
        <p class="image"><img width="100" height="76" v-for="(item,index) in commissionImgArr" :key="index"
                              @click="show(item)" :src="item+ '?imageView2/1/w/103/h/76'"/></p>
      </div>
    </div>
    <div class="title">
      <img src="../../../assets/img/icon_man.png" height="16" width="16"/>
      人员信息
    </div>
    <div class="detail">
      <div><span class="label">案场:</span>{{userInfoData.salesUserName||''}}</div>
      <div><span class="label">联动:</span>{{userInfoData.placeUserName||''}}</div>
      <div><span class="label">渠道公司:</span>{{userInfoData.companyName||''}}</div>
      <div><span class="label">经纪人:</span>{{userInfoData.memberName||''}}</div>
    </div>
    <mt-popup
      pop-transition="popup-fade"
      v-model="popupVisible">
      <img style="max-width: 100%" :src="img"/>
    </mt-popup>
  </div>

</template>

<script>
  export default {
    name: "presign-detail",
    data() {
      return {
        type:this.$route.params.type,
        id: this.$route.params.id,
        userInfoData: null,
        baseInfoData: null,
        groupInfoData: null,
        customerInfoData: null,
        commissionInfoData: null,
        groupImgData:[],
        commissionImgArr:[],
        khdata: null,
        customerImgData:[],
        popupVisible: false,
        img: ""
      }
    },
    created() {
      this.getkhdata()
    },
    filters:{
      formatPhone(number){
        return number.replace(/(\d{3})(\d{4})(\d{4})/, "$1****$3")
      },
    },
    methods: {
      getkhdata() {
        this.$axios.get(this.khApi + "/customer/v1/findCustomerInfoById?type=" + this.type+'&id='+this.id).then((res) => {
          if (res.data.code == "200") {
            this.khdata = res.data.data.presignInfo;
            this.userInfoData = res.data.data.userInfo;
            this.baseInfoData = res.data.data.baseInfo;
            this.customerInfoData = res.data.data.customerInfo;
            this.groupInfoData = res.data.data.groupInfo;
            this.commissionInfoData = res.data.data.commissionInfo;
            this.groupImgData =  this.groupInfoData.group_img.split(',');
            this.commissionImgArr = this.commissionInfoData.commission_img.split(',');
            this.customerImgData=this.customerInfoData.imageUrl.split(',');
          }
        }).catch((error) => {
          this.Toast("网络错误");
        })
      },
      show(item) {
        this.img = item;
        this.popupVisible = true
      }
    }
  }
</script>

<style scoped lang="scss">
  .status {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    color: rgba(0, 199, 186, 1);
    padding: 24px 20px 21px 20px;
    border-bottom: 1px solid #ddd;
    span {
      font-size: 20px;
      font-weight: bold;
    }
  }

  .detail {
    padding: 14px 20px;
    background: #ffffff;
    font-size: 16px;
    border-bottom: 1px solid #dddddd;
    line-height: 1;
    > div {
      padding: 8px 0;
      display: flex;
    }
    .label {
      width: 116px;
      flex-shrink: 0;
      color: RGBA(153, 153, 153, 1);
    }
  }

  .baobei .title:first-child {
    margin-top: 0;
  }

  .title {
    font-size: 16px;
    line-height: 16px;
    padding-top: 24px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 6px;
    font-weight: bold;
    margin-top: 16px;
    background: #ffffff;
    padding-left: 20px;
    img {
      margin-right: 8px;
    }
  }

  .image {
    display: inline-block;
    vertical-align: text-top;
    img:nth-child(2n+1) {
      margin-right: 12px;
    }
    img {
      margin-bottom: 20px;
      background-color: rgba(0, 0, 0, .1);
      opacity: 0.5;
    }
  }
</style>
