<template>
  <div id="index">
    <mt-header fixed title="业绩" class="black"></mt-header>
    <main>
      <section class="section">
        <filterTitle title="组内业绩" @resetYeji="resetYeji" type="allYeji"></filterTitle>
        <div class="filter-value">
          <p><span class="value-title">新增渠道<br></span><span class="value-number">2098</span></p>
          <p><span class="value-title">来访<br></span><span class="value-number">2098</span></p>
          <p><span class="value-title">认购业绩(万元)<br></span><span class="value-number">2098</span></p>
        </div>
      </section>
      <section class="section">
        <filterTitle title="业绩走势" @resetYeji="resetYeji" type="allChart"></filterTitle>
        <div class="chart-value">
          <ve-line :data="chartData" :settings="chartSettings" :colors="colors"></ve-line>
        </div>
      </section>
      <section class="section">
        <filterTitle title="员工业绩" @resetYeji="resetYeji" type="allList"></filterTitle>
        <div class="table-value">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <th>组员</th>
              <th width="20px"></th>
              <th>新增</th>
              <th>踩盘</th>
              <th>报备</th>
              <th>来访</th>
              <th>成交</th>
              <th>成交全额</th>
              <th>发佣全额</th>
            </tr>
            <tr>
              <td @click="$router.push('/placeUser')"><span>组员</span></td>
              <th width="20px"></th>
              <td><span>1234</span></td>
              <td><span>2345</span></td>
              <td><span>4567</span></td>
              <td><span>789</span></td>
              <td><span>90</span></td>
              <td><span>12345</span></td>
              <td><span>45657</span></td>
            </tr>
          </table>
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
    name: "index",
    components: {filterTitle},
    data() {
      return {
        chartSettings: {
          yAxisName: ['数值'],
        },
        colors: ['#FF7A63', '#FFC639', '#0076FF'],
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
          case 'allYeji':
            this.getAllYeji(time);
            break;
          case 'allChart':
            this.getAllChart(time);
            break;
          case 'allList':
            this.getAllList(time);
            break;
          default:
            break;
        }
      },
      getAllYeji(time) {
        // console.log(time)
      },
      getAllChart(time) {
        // console.log(time)
      },
      getAllList(time) {
        // console.log(time)
      }
    },
    created() {
      this.getAllYeji('4')
    }
  }
</script>

<style scoped lang="scss">
  .filter-value {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
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
      tr th:first-child, tr td:first-child {
        width: 55px;
        position: absolute;
        z-index: 1;
        background: #ffffff;
        padding-left: 20px;
      }
      tr td:nth-child(2n-1):not(:first-child), tr th:nth-child(2n-1):not(:first-child) {
        background: #f8f6f6;
      }
    }
  }
</style>
