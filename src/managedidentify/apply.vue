<style lang="css">

</style>
<template lang="html">
  <div class="apply">
    <h4 class="title">申请</h4>
    <div class="main-apply">
        <div class="row">
          <div class="input-box col-xs-4">
            <p>申请单号&预约号</p>
            <div class="input-group">
              <input type="text" class="form-control w50" name="" placeholder="申请单号">
              <input type="text" class="form-control w50" name="" placeholder="预约号">
              <span class="input-group-btn">
                <button class="btn btn-default" type="button">查询预约单</button>
                <button class="btn btn-default" type="button">查询申请单</button>
              </span>
            </div>
          </div>
          <div class="input-box col-xs-4">
            <p>客户帐号&姓名&排队号</p>
            <div class="input-group">
              <input type="text" name="" class="form-control w30" value="" placeholder="客户帐号">
              <input type="text" name="" class="form-control w20" value="" placeholder="姓名">
              <input type="text" name="" class="form-control w20" value="" placeholder="排队号">
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
            <p>机构名称</p>
            <div class="input-group">
              <input type="text" name="" class="form-control w50 bd-radius" value="" placeholder="机构名称">
            </div>
          </div>
          <div class="input-box col-xs-4">
            <p>交付方式</p>
            <div class="input-group">
              <select class="form-control w50 bd-radius">
                <option>托管人</option>
                <option>受托人</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="input-box col-xs-4">
            <p>艺术品名称&最小单位</p>
            <div class="input-group">
              <input type="text" name="" class="form-control w30" value="" readonly>
              <input type="text" name="" class="form-control w30" value="" readonly>
            </div>
          </div>
          <div class="input-box col-xs-4">
            <p>艺术品代码</p>
            <div class="input-group w50">
              <input type="text" name="" class="form-control" value="" placeholder="艺术品代码">
              <span class="input-group-btn">
                <button class="btn btn-default" type="button">查询</button>
              </span>
            </div>
          </div>
          <div class="input-box col-xs-4">
            <p>预约数量</p>
            <div class="input-group">
              <input type="text" name="" class="form-control w50 bd-radius" placeholder="预约数量">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="input-box col-xs-4">
            <p>清点数量</p>
            <div class="input-group w50">
              <input type="text" name="" class="form-control" placeholder="清点数量">
              <span class="input-group-btn">
                <button class="btn btn-default" type="button">计算鉴定费</button>
              </span>
            </div>
          </div>
          <div class="input-box col-xs-4">
            <p>挂牌价</p>
            <div class="input-group">
              <input type="text" name="" class="form-control w50 bd-radius" placeholder="挂牌价">
            </div>
          </div>
          <div class="input-box col-xs-4">
            <p>鉴定费率&金额</p>
            <div class="input-group">
              <input type="text" name="" class="form-control w20" value="" readonly>
              <input type="text" name="" class="form-control w30" value="" readonly>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="input-box col-xs-4">
            <p>合格数量</p>
            <div class="input-group w50">
              <input type="text" name="" class="form-control" placeholder="合格数量">
              <span class="input-group-btn">
                <button class="btn btn-default" type="button">计算挂牌费</button>
              </span>
            </div>
          </div>
          <div class="input-box col-xs-4">
            <p>退回数量</p>
            <div class="input-group">
              <input type="text" name="" class="form-control w50 bd-radius" readonly>
            </div>
          </div>
          <div class="input-box col-xs-4">
            <p>挂牌费率&金额</p>
            <div class="input-group">
              <input type="text" name="" class="form-control w20" value="" readonly>
              <input type="text" name="" class="form-control w30" value="" readonly>
            </div>
          </div>
        </div>
        <tablelist :titles="tableTitles" :trdatas="trDataArr" ref="oneTables" :suns="sunResult"></tablelist>
        <div class="btn-box" role="group">
          <button type="button" class="btn btn-default">新单据</button>
          <button type="button" class="btn btn-default">删除行</button>
          <button type="button" class="btn btn-default">增加行</button>
          <button type="button" class="btn btn-default">选择产品</button>
          <button type="button" class="btn btn-default">保存</button>
          <button type="button" class="btn btn-default">打印申请单</button>
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
      tableTitles:['箱号','数量','合格','退回','备注'],
      trDataArr:[0,0,0,0,0],
      sunResult:['合计','',0,0,'']


      // data: [
      //   {
      //     boxid: 1,
      //     num: 1000,
      //     quality: true,
      //     back: true,
      //     note: 'hello'
      //   },
      //   {
      //     boxid: 1,
      //     num: 1000,
      //     quality: true,
      //     back: true,
      //     note: 'hello'
      //   },
      // ],
      //
      // newData: [
      //   [1,1000,true,true,'hello'],
      //   [1,1000,true,true,'hello'],
      // ]
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
