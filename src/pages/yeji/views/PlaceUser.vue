<template>
  <div id="place-user">
    <mt-header fixed title="个人业绩" class="white">
      <span @click="$router.back()" slot="left">
        <img src="../../../assets/img/btn_back.png" height="18" width="24"/>
      </span>
    </mt-header>
    <main>
      <section class="section">
        <div class="p-u">
          <div class="p-u-avater">
          </div>
          <div>
            <p class="p-u-name">张三</p>
            <p class="p-u-time">入职时间：2017-09-19</p>
          </div>
        </div>
      </section>
      <section class="section">
        <filterTitle title="业绩总览" @resetYeji="resetYeji" type="Yeji"></filterTitle>
        <div class="filter-value">
          <p><span class="value-title">新增渠道<br></span><span class="value-number">2098</span></p>
          <p><span class="value-title">来访<br></span><span class="value-number">2098</span></p>
          <p><span class="value-title">认购业绩(万元)<br></span><span class="value-number">2098</span></p>
        </div>
      </section>
      <section class="section">
        <filterTitle title="业绩走势" @resetYeji="resetYeji" type="Chart"></filterTitle>
        <div class="chart-value">
          <ve-line :data="chartData" :settings="chartSettings" :colors="colors"></ve-line>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
  import filterTitle from './../../../components/FilterTitle'

  const year = (new Date()).getFullYear();
  const month = (new Date()).getMonth() + 1;
  export default {
    name: "place-user",
    components: {filterTitle},
    data() {
      return {
        chartSettings: {
          yAxisName: ['数值'],
        },
        colors: ['#ff0000', '#00ff00', '#0000ff'],
        chartData: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            {'日期': year + "-" + month + '-5', '访问用户': 1393, '下单用户': 1093, '下单率': 32},
            {'日期': year + "-" + month + '-10', '访问用户': 3530, '下单用户': 3230, '下单率': 26},
            {'日期': year + "-" + month + '-15', '访问用户': 2923, '下单用户': 2623, '下单率': 76},
            {'日期': year + "-" + month + '-20', '访问用户': 1723, '下单用户': 1423, '下单率': 49},
            {'日期': year + "-" + month + '-25', '访问用户': 3792, '下单用户': 3492, '下单率': 323},
          ]
        },
      }
    },
    methods: {
      getData() {
        setTimeout(() => {
          this.chartData.rows = [
            {'日期': '1', '访问用户': 1393, '下单用户': 1093, '下单率': 32},
            {'日期': '2', '访问用户': 3530, '下单用户': 3230, '下单率': 26},
            {'日期': '3', '访问用户': 2923, '下单用户': 2623, '下单率': 76},
            {'日期': '4', '访问用户': 1723, '下单用户': 1423, '下单率': 49},
            {'日期': '5', '访问用户': 3792, '下单用户': 3492, '下单率': 323},
            {'日期': '6', '访问用户': 3792, '下单用户': 3492, '下单率': 323},
            {'日期': '7', '访问用户': 3792, '下单用户': 3492, '下单率': 323},
          ]
        }, 5000)
      },
      // 时间维度(1为本日,2为上周,3为本周,4为本月,5为本年,6为全部)
      resetYeji(time, type) {
        switch (type) {
          case 'Yeji':
            this.getYeji(time);
            break;
          case 'Chart':
            this.getChart(time);
            break;
          default:
            break;
        }
      },
      getYeji(time) {
        // console.log(time)
      },
      getChart(time) {
        // console.log(time)
      },
    },
    created() {
      this.getYeji('4')
    }
  }
</script>

<style scoped lang="scss">
  .filter-value {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px 0 20px;
    text-align: left;
    .value-title {
      font-size: 12px;
      color: #999;
    }
    .value-number {
      font-size: 20px;
      color: #FF6A00;
      font-weight: bold;

    }
  }

  .table-value {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    margin-left: 20px;
    width: calc(100% - 20px);
    overflow-x: scroll;
    table {
      table-layout: fixed;
      word-break: break-all;
      width: 545px;
      font-size: 14px;
      line-height: 46px;
      text-align: center;
      border-collapse: collapse;
      overflow: hidden;
      tr {
        position: relative;
        top: 0;
        left: 0;
      }
      tr th:first-child {
        font-weight: bold;
        color: #999;
      }
      tr th:first-child, tr td:first-child {
        width: 55px;
        position: absolute;
        left: 20px;
        z-index: 1;
        background: #ffffff;
      }
      tr td:not(:first-child), tr th:not(:first-child) {
        width: 70px;
      }
      tr td:first-child span {
        color: #0076FF;
        padding-bottom: 2px;
        border-bottom: 1px solid #0076FF;
        text-align: left;
      }
      tr td, tr th {
        border-right: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
      }
    }
  }

  .p-u {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 20px;
    &-avater {
      margin-right: 16px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      overflow: hidden;
      background: #ddd;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-name {
      font-size: 24px;
    }
    &-time {
      font-size: 12px;
      color: #999;
    }
  }
</style>
