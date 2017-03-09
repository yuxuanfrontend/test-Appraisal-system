<style lang="css">
</style>
<template lang="html">
  <div class="apply">
    <h4 class="title">提货通知</h4>
    <div class="main-apply">
        <div class="row">
          <div class="input-box col-xs-4">
            <p>提货通知单号</p>
            <div class="input-group w50">
              <input type="text" class="form-control" name="" placeholder="提货通知单号">
              <span class="input-group-btn">
                <button class="btn btn-default" type="button">查询</button>
              </span>
            </div>
          </div>
          <div class="input-box col-xs-4">
            <p>客户帐号&姓名</p>
            <div class="input-group">
              <input type="text" name="" class="form-control w30" placeholder="客户帐号">
              <input type="text" name="" class="form-control w30" placeholder="姓名">
            </div>
          </div>
          <div class="input-box col-xs-4">
            <p>客户证件号&电话号码</p>
            <div class="input-group">
              <input type="text" name="" class="form-control w30"  value="" placeholder="客户证件号">
              <input type="text" name="" class="form-control w30" value="" placeholder="电话号码">
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
            <p>提货日期</p>
            <div class="input-group">
              <input type="text" name="" class="form-control w30" value="" readonly>
              <input type="text" name="" class="form-control w30" value="" readonly>
            </div>
          </div>
        </div>
        <tablelist :titles="tableTitles" :trdatas="trDataArr" :suns="sunResult" @increment="saveBtn"></tablelist>
        <div class="btn-box" role="group">
          <button type="button" class="btn btn-default">新单据</button>
          <button type="button" class="btn btn-default">删除行</button>
          <button type="button" class="btn btn-default">增加行</button>
          <button type="button" class="btn btn-default">选择产品</button>
          <button type="button" class="btn btn-default">保存</button>
          <button type="button" class="btn btn-default">打印通知单</button>
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
      tableTitles:['产品代码','名称','提货数量','备注'],
      trDataArr:[1,2,3,1],
      sunResult:['合计','',0,'']
    }
  },
  components: {
    tablelist
  },
  mounted(){
  },
  methods:{
  }
}
</script>
