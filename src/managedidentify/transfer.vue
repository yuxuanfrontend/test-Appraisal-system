<style lang="css">
</style>
<template lang="html">
  <div class="apply">
    <h4 class="title">调拨入库</h4>
    <div class="main-apply">
        <div class="row">
          <div class="input-box col-xs-4">
            <p>调拨入库单号</p>
            <div class="input-group w50">
              <input type="text" class="form-control" name="" placeholder="调拨入库单号">
              <span class="input-group-btn">
                <button class="btn btn-default" type="button" @click="transfer_search">查询</button>
              </span>
            </div>
          </div>
          <div class="input-box col-xs-4">
            <p>提货车牌号</p>
            <div class="input-group">
              <select class="form-control w50 bd-radius">
                <option>沪A1Y655</option>
                <option>沪BH4148</option>
                <option>沪BH8552</option>
                <option>沪Dk0365</option>
              </select>
            </div>
          </div>
          <div class="input-box col-xs-4">
            <p>交接人&提货人</p>
            <div class="input-group">
              <select class="form-control w30 bd-radius">
                <option v-for="carrier in carriers" :value="carrier.uid">
                  {{ carrier.uname }}
                </option>
              </select>
              <select class="form-control w30 bd-radius">
                <option v-for="receiver in receivers" :value="receiver.uid">
                  {{ receiver.uname }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="input-box col-xs-4">
            <p>登记日期</p>
            <div class="input-group">
              <input type="text" name="" class="form-control w30" value="" readonly>
              <input type="text" name="" class="form-control w30" value="" readonly>
            </div>
          </div>
          <div class="input-box col-xs-4">
            <p>车辆后门&侧门铅封条</p>
            <div class="input-group">
              <input type="text" name="" class="form-control w30 bd-radius" placeholder="后门铅封号">
              <input type="text" name="" class="form-control w30 bd-radius" placeholder="侧门铅封号">
            </div>
          </div>
          <div class="input-box col-xs-4">
            <p>出库仓库&入库仓库</p>
            <div class="input-group">
              <select class="form-control w30 bd-radius">
                <option>引立仓库</option>
              </select>
              <select class="form-control w30 bd-radius">
                <option>中工美仓库</option>
              </select>
            </div>
          </div>
        </div>
        <!-- <tablelist :titles="tableTitles" :trdatas="trDataArr" :suns="sunResult"  ></tablelist> -->
        <div class="btn-box" role="group">
          <button type="button" class="btn btn-default">新单据</button>
          <button type="button" class="btn btn-default">删除行</button>
          <button type="button" class="btn btn-default">增加行</button>
          <button type="button" class="btn btn-default">选择产品</button>
          <button type="button" class="btn btn-default">保存</button>
          <button type="button" class="btn btn-default">打印调拨单</button>
        </div>
    </div>
  </div>
</template>

<script>
import tablelist from '../components/table-List'
export default {
  name:'apply',
  data () {
    return {
      tableTitles:['箱号','流转单号','藏品代码','藏品名称','件数','提货'],
      trDataArr:[1,2,3,1,0,0],
      sunResult:['合计','','','',0,''],
      receivers:[],
      carriers:[],
    }
  },
  components: {
    tablelist
  },
  mounted(){
    this.$request('get','api/v1/allocate/initialize')
    .then(
      res => {
        console.log(res)
        this.receivers = res.body.receivers
        this.carriers = res.body.carriers
      }
    )
  },
  methods:{
    transfer_search(){
    }
  }
}
</script>
