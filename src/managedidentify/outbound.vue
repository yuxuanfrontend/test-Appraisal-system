<style lang="css">
.table-box .table-center tr th,
.table-box .table-center tr td {
  text-align: center!important;
}
</style>
<template lang="html">
  <div class="apply">
    <h4 class="title">出库</h4>
    <div class="main-apply">
        <div class="row">
          <div class="input-box col-xs-4">
            <p>出库单号</p>
            <div class="input-group w50">
              <input type="text" class="form-control" name="" placeholder="出库单号" v-model="outbound_no">
              <span class="input-group-btn">
                <button class="btn btn-default" type="button" @click="outbound_search">查询</button>
              </span>
            </div>
          </div>
          <div class="input-box col-xs-4">
            <p>提货单号</p>
            <div class="input-group w50">
              <input type="text" class="form-control" name="" placeholder="提货单号" v-model="handover_no">
              <span class="input-group-btn">
                <button class="btn btn-default" type="button" @click="handover_search">查询</button>
              </span>
            </div>
          </div>
          <div class="input-box col-xs-4">
            <p>客户帐号&姓名</p>
            <div class="input-group">
              <input type="text" name="" class="form-control w50" placeholder="客户帐号" readonly v-model="custom_no">
              <input type="text" name="" class="form-control w50" placeholder="姓名" readonly v-model="custom_name">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="input-box col-xs-4">
            <p>登记日期</p>
            <div class="input-group">
              <input type="text" name="" class="form-control w30" value="" readonly v-model="outbound_date">
              <input type="text" name="" class="form-control w30" value="" readonly v-model="outbound_time">
            </div>
          </div>
          <div class="input-box col-xs-4">
            <p>提货日期</p>
            <div class="input-group">
              <input type="text" name="" class="form-control w30" value="" readonly v-model="notify_date">
              <!-- <input type="text" name="" class="form-control w30" value="" readonly v-model="notify_time"> -->
            </div>
          </div>
        </div>
        <div class="table-box">
          <table class="table table-striped table-center">
            <thead>
              <tr>
                <th v-for='titleBox in tableBoxTitles'>{{ titleBox }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="trbox in trboxes">
                <td v-for="tdbox in tdboxes">{{ trbox[tdbox] }}</td>
              </tr>
            </tbody>
          </table>
          <table-editable :titles="tableTitles" ref="oneTable" :data="boxes" :keys="boxkeys" :is-calculate="true" :is-editable="true" :calculable-key="['invQty']" @delete-line="deleteBoxes" @add-line="addBox">
        </div>
        </table-editable>
        <div class="btn-box" role="group">
          <button type="button" class="btn btn-default" @click="outbound_new">新单据</button>
          <button type="button" class="btn btn-default" @click="$refs.oneTable.deleteLine()">删除行</button>
          <button type="button" class="btn btn-default" @click="$refs.oneTable.addLine()">增加行</button>
          <button type="button" class="btn btn-default" @click="selectProduct">选择产品</button>
          <button type="button" class="btn btn-default" @click="outbound_save">保存</button>
          <a class="btn btn-default" target="_blank" :href="'outbound_print.jsp?code='+ outbound_no">打印出库单</a>
        </div>
    </div>
    <!-- <tabledialog></tabledialog> -->
  </div>
</template>

<script>
// import tablelist from '../components/table-List'
import tableEditable from '../components/table-editable'
import moment from 'moment'
// import tabledialog from './table-dialog'
export default {
  name:'apply',
  data () {
    return {
      tableBoxTitles:['产品代码','产品名称','单位','提货数量','备注'],
      trboxes:[],
      tdboxes:['productNo','productName','productUnit','handoverQty','handoverRemark'],
      tableTitles:['箱号','流转单号','产品代码','提货数量'],
      boxes:[],
      boxkeys:['boxNo','checkNo','productNo','invQty'],
      // sunResult:['合计','',0,''],
      // suns:['合计','','',10000,3,9997],
      outbound_no:'',
      handover_no:'',
      custom_no:'',
      custom_name:'',
      outbound_date:'',
      outbound_time:'',
      notify_date:'',
    }
  },
  components: {
    // tablelist,
    tableEditable
  },
  mounted(){
  },
  methods:{
    selectProduct(){
      this.$store.commit('toggleSelectDialog')
    },
    outbound_new(){
      this.$request('get','api/v1/handovers/currentDateTime')
      .then(
        (res) => {
          // console.log(res.body.handoverDate)
          this.outbound_no = ''
          this.handover_no =''
          this.custom_no = ''
          this.custom_name = ''
          this.notify_date = ''
          this.outbound_date = res.body.handoverDate
          this.outbound_time = res.body.handoverTime
          this.trboxes.splice(0,this.trboxes.length)
        },
        (err) => {
          // console.log(err)
        }
      )
    },
    outbound_search(){
      this.$request('get','api/v1/inventories/inventory/'+this.outbound_no)
      .then(
        res => {
          console.log(res.body)
        this.outbound_date = res.body.invDate
        this.outbound_time = res.body.invTime
        this.custom_name = res.body.deliveryUser
        // this.handover_no = res.body.invNo
        this.boxes = res.body.inventoryDetails
          // res.body.invDate
        },
        err => {

        }
      )
    },
    outbound_save(){
      this.$request('post','api/v1/inventories/inventory')
      .send({
        // invNo : this.handover_no,
        // this.custom_no
        deliveryUser : this.custom_name,
        invDate : this.outbound_date,
        invTimeStr : this.outbound_time,
        inventoryDetails : this.boxes
      })
      .then(
        res => {

        },
        err => {

        }
      )
    },
    handover_search(){
      this.$request('get','api/v1/handovers/handover/'+this.handover_no)
      .then(
        res => {
          console.log(res)
          this.trboxes = res.body.handoverDetails
          this.custom_no = res.body.customNo
          this.custom_name = res.body.customName
          this.notify_date = moment(res.body.notifyData).format('YYYY-MM-DD')
        },
        err => {

        }
      )
    },
    deleteBoxes(indexes) {
      for (let i = 0; i < indexes.length; i++) {
        this.boxes.splice(indexes[i],1)
      }
    },
    addBox() {
      this.boxes.push({
        boxNo:'',
        checkNo:'',
        productNo: '',
        invQty:''
      })
    }
  }
}
</script>
