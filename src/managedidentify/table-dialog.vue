<style lang="css">
.modal-background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.5);
}

.flatpickr-calendar{
  z-index: 9999!important;
}

.is-active {
  display: block;
}
</style>

<template lang="html">
  <div class="modal" :class="{'is-active': isActive}">
    <div class="modal-background" @click="closeDialog"></div>
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true" @click="closeDialog">×</button>
          <h4 class="modal-title" id="myModalLabel">产品清单</h4>
        </div>
        <div class="modal-body" style="overflow:hidden;">
          <div class="col-xs-6">
            <input type="text" class="form-control" style="width:70%" ref="startdate" v-model="startDate" @input="">
            <br>
          </div>
          <div class="col-xs-6">
            <input type="text" class="form-control" style="width:70%" ref="enddate" v-model="endDate" @input="">
            <br>
          </div>
          <div class="col-xs-12">
            <!-- <tablelist :titles="tableTitles" ref="twoTable" :data="boxes" :is-select="true" @confirm-select="tableSelect"></tablelist> -->
            <tablelist :titles="tableTitles" :trdatas="trDataArr" :suns="sunResult" :is-select="true" @confirm-select="tableSelect"></tablelist>
          </div>

          <div style="text-align:right;">
            <button type="button" class="btn btn-default">查询</button>
            <button type="button" class="btn btn-default" @click="$refs.twoTable.confirmSelect()">确定</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import _ from 'lodash'
import moment from 'moment'
import Flatpickr from 'flatpickr'
import datePickerZh from 'flatpickr/dist/l10n/zh'

import tablelist from '../components/table-List'

Flatpickr.localize(datePickerZh.zh)

export default {
  name: 'table-dialog',

  components: {
    tablelist
  },

  data() {
    return {
      boxes: [],
      // isActive:true,
      tableTitles:['产品代码','产品名称','提货数量','备注'],
      trDataArr:[31553,2,3,1],
      sunResult:['合计','',0,''],

      startDate: moment().format('YYYY-MM-DD'),
      endDate: moment().format('YYYY-MM-DD'),
    }
  },

  props: {
    // artwork: {
    //   required: true
    // }
  },

  computed: {
    isActive() {
      return this.$store.state.warehouse.isDialogActive
    }
  },

  mounted() {
    new Flatpickr(this.$refs.startdate)
    new Flatpickr(this.$refs.enddate)

    // this.queryBoxes()

  },

  methods: {
    closeDialog() {
      this.$store.commit('toggleSelectDialog')
    },

    queryBoxes() {
    //   if (this.startDate === '' || this.endDate === '') {
    //     return false
    //   }
    //
    //   this.ajaxBoxes()
    // },
    //
    // ajaxBoxes() {
    //   this.$request('get', 'warehouse-inrpc/warehouse/tinventory/query')
    //     .query({
    //       startDate: this.startDate,
    //       endDate: this.endDate,
    //       productNo: this.artwork
    //     })
    //     .then((res) => {
    //       this.boxes = res.body.dto
    //     })
    },

    tableSelect(selectedIndexes) {
    //   let selectedData = _.filter(this.boxes, (item, index) => {
    //     if (_.indexOf(selectedIndexes, index) >= 0) {
    //       return true
    //     }
    //   })
    //   this.$store.commit('toggleSelectBoxesDialog')
    //   this.$store.commit('appendSelectedBoxTable', selectedData)
    }
  },

}
</script>
