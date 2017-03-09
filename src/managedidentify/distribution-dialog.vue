<style lang="css">
.modal-background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.5);
}

.is-active {
  display: block;
}
</style>

<template lang="html">
  <div class="modal" :class="{'is-active': isActive}">
    <div class="modal-background" @click="closeDialog"></div>
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true" @click="closeDialog">×</button>
          <h4 class="modal-title" id="myModalLabel">配货清单</h4>
        </div>
        <div class="modal-body" style="overflow:hidden;">
          <div class="col-xs-12">
            <div class="input-group">
              <label for="">选择仓库</label>
              <select class="form-control w50 bd-radius">
                <option>仓库</option>
                <option>仓库</option>
                <option>仓库</option>
                <option>仓库</option>
              </select>
            </div>
          </div>
          <div class="col-xs-12">
            <!-- <tablelist :titles="tableTitles" ref="twoTable" :data="boxes" :is-select="true" @confirm-select="tableSelect"></tablelist> -->
            <tablelist :titles="tableTitles" :trdatas="trDataArr" :suns="sunResult" :is-select="true" @confirm-select="tableSelect"></tablelist>
          </div>

          <div style="text-align:right;">
            <button type="button" class="btn btn-default">查询</button>
            <button type="button" class="btn btn-default">确定</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import tablelist from '../components/table-List'


export default {
  name: 'distribution-dialog',
  components: {
    tablelist
  },

  data() {
    return {
      boxes: [],
      tableTitles:['仓库名称','箱号','流转单号','库存数量','已分配数量','本单分配数量'],
      trDataArr:[],
      sunResult:['合计','','','0','0','0'],
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
