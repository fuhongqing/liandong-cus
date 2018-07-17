<template>
  <div class="laifang" v-if="khdata">
    <mt-header title="来访详情">
      <div slot="left">
        <mt-button @click="$router.back()"><img src="../../../assets/img/btn_back.png" height="18" width="24"/></mt-button>
      </div>
    </mt-header>
    <div class="customer">
      <p>
        {{khdata.customerName}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{khdata.customerPhone | formatPhone}}
      </p>
    </div>
    <div class="status">
      <span>{{visitNum}}访</span>
      {{khdata.realVisitTime}}
    </div>
    <div class="detail">
      <div><span class="label">来访人数:</span>{{khdata.visitorsNumber}}</div>
      <div><span class="label">是否落座:</span>{{khdata.isSitDown||''}}</div>
      <div><span class="label">是否落位:</span>{{khdata.isEngoyHouse||''}}</div>
      <div><span class="label">价格预算:</span>{{khdata.offerPrice|| '未填写'}}万元</div>
      <div><span class="label">下次来访时间:</span>{{khdata.nextComeTime || '未填写'}}</div>
      <div><span class="label">备注:</span>{{khdata.remark|| '未填写'}}</div>
      <div><span class="label">来访确认单:</span>
        <p class="image"><img width="103" height="76" v-for="(item,index) in image" :key="index"
                              @click="show(item)" :src="item + '?imageView2/1/w/103/h/76'"/></p>
      </div>
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
    name: "laifang-detail",
    data() {
      return {
        type:this.$route.params.type,
        id: this.$route.params.id,
        visitNum: this.$route.params.visitNum,
        khdata: null,
        popupVisible: false,
        img: ""
      }
    },
    created() {
      this.getBaobei();
    },
    computed: {
      image() {
        if (this.khdata && this.khdata.imageUrl.length) {
          return this.khdata.imageUrl.split(",")
        }
        return []
      }
    },
    filters:{
      formatPhone(number){
        return number.replace(/(\d{3})(\d{4})(\d{4})/, "$1****$3")
      },
    },
    methods: {
      getBaobei() {
        this.$axios.get(this.khApi + "/customer/v1/findCustomerInfoById?type=" + this.type+'&id='+this.id).then((res) => {
          if (res.data.code == "200") {
            this.khdata = res.data.data.visitInfo;
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
  .customer {
    padding: 16px 20px;
    background: #ffffff;
    font-weight: bold;
    p {
      padding: 8px 0;
      font-size: 16px;
    }
  }

  .status {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    color: rgba(0, 199, 186, 1);
    padding: 24px 20px 21px 20px;
    border-bottom: 1px solid #ddd;
    box-shadow: inset 0 2px 6px 0 rgba(0, 0, 0, 0.06);
    span {
      font-size: 20px;
      font-weight: bold;
    }
  }

  .detail {
    padding: 14px 20px;
    background: #ffffff;
    font-size: 16px;
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
    .image {
      display: inline-block;
      vertical-align: text-top;
      img:nth-child(2n+1) {
        margin-right: 12px;
      }
      img {
        margin-bottom: 20px;
        background-color: rgba(0, 0, 0, 0.1);
        opacity: 0.5;
      }
    }
  }
</style>
