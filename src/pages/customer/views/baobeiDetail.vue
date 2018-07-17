<template>
  <div class="baobei" v-if="khdata">
    <mt-header title="报备详情">
      <div slot="left">
        <mt-button @click="$router.back()"><img src="../../../assets/img/btn_back.png" height="18" width="24"/></mt-button>
      </div>
    </mt-header>
    <div class="status">
      <span>报备</span>
      {{khdata.createTime}}
    </div>
    <div class="detail">
      <div><span class="label">姓名:</span>{{khdata.customerName}}</div>
      <div><span class="label">电话:</span>{{khdata.customerPhone|| '未填写'}}</div>
      <div><span class="label">预约项目:</span>{{khdata.propertyName|| '未填写'}}</div>
      <div><span class="label">预约时间:</span>{{khdata.visitTime|| '未填写'}}</div>
      <div><span class="label">来访方式:</span>{{khdata.isBus|| '未填写'}}</div>
      <div v-if="khdata.isBus == '班车'"><span class="label">上车时间:</span>{{khdata.carTime|| '未填写'}}</div>
      <div v-if="khdata.isBus == '班车'"><span class="label">上车地点:</span>{{khdata.address || '未填写'}}</div>
      <div><span class="label">备注:</span>{{khdata.remark || '未填写'}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "baobei-detail",
    data() {
      return {
        type:this.$route.params.type,
        id: this.$route.params.id,
        khdata: null
      }
    },
    created() {
      this.getBaobei()
    },
    methods: {
      getBaobei() {
        this.$axios.get(this.khApi + "/customer/v1/findCustomerInfoById?type=" + this.type+'&id='+this.id).then((res) => {
          if (res.data.code == 200) {
            this.khdata = res.data.data.reportInfo;
          }
        }).catch((error) => {
          this.Toast("网络错误");
        })
      },
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
    line-height: 1;
    > div {
      padding: 8px 0;
    }
    .label {
      width: 116px;
      color: RGBA(153, 153, 153, 1);
      display: inline-block;
      vertical-align: middle;
    }
  }
</style>
