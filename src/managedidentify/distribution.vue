<style lang="css">
</style>
<template lang="html">
  <div class="apply">
    <div class="panel panel-primary">
      <div class="panel-heading">配货</div>
        <div class="panel-body">
          <div class="row">
            <div class="input-box col-xs-4">
              <div class="input-group">
                <label for="">开始日期</label>
                <input type="text" class="form-control bd-radius" style="width:50%" ref="startdate" v-model="startDate" @input="">
              </div>
            </div>
            <div class="input-box col-xs-4">
              <div class="input-group">
                <label for="">结束日期</label>
                <input type="text" class="form-control bd-radius" style="width:50%" ref="enddate" v-model="endDate" @input="">
              </div>
            </div>
            <div class="input-box col-xs-4">
              <div class="input-group">
                <button class="btn btn-primary bd-radius w30" type="button">查询</button>
                <button class="btn btn-info bd-radius w30" type="button" @click="selectProduct">配货</button>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="input-box col-xs-4">
              <div class="input-group">
                <label for="">提货单号</label>
                <input type="text" class="form-control bd-radius" style="width:50%" placeholder="请输入提货单号">
              </div>
            </div>
            <div class="input-box col-xs-4">
              <div class="input-group">
                <label for="">产品代码</label>
                <input type="text" class="form-control bd-radius" style="width:50%" placeholder="请输入产品代码">
              </div>
            </div>
          </div>
        </div>
    </div>
    <div class="table-box">
      <table class="table table-striped">
        <thead>
          <tr>
            <th v-for='titleBox in tableBoxTitles'>{{ titleBox }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td v-for='boxTrTxt in boxTrDataArr'>{{ boxTrTxt }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th v-for='sun in suns'>{{ sun }}</th>
          </tr>
        </tfoot>
      </table>
    </div>
    <distributiondialog></distributiondialog>
  </div>
</template>

<script>
import distributiondialog from './distribution-dialog'

import _ from 'lodash'
import moment from 'moment'
import Flatpickr from 'flatpickr'
import datePickerZh from 'flatpickr/dist/l10n/zh'

export default {
  name:'apply',
  data () {
    return {
      tableBoxTitles:['提货申请单号','产品代码','产品名称','最小包装单位','提货申请数量','状态'],
      boxTrDataArr:['00212','2121','航天钞',1,22,'未锁定'],
      suns:['合计','','','',22,''],

      startDate: moment().format('YYYY-MM-DD'),
      endDate: moment().format('YYYY-MM-DD')
    }
  },
  components: {
    distributiondialog
  },
  mounted(){
    new Flatpickr(this.$refs.startdate)
    new Flatpickr(this.$refs.enddate)
  },
  methods:{
    selectProduct(){
      this.$store.commit('toggleSelectDialog')
    }
  }
}
</script>
