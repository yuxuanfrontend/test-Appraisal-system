<template lang="html">
  <div class="mainpage">
    <div class="btn-box btn-group" role="group" >
      <button type="button" class="btn btn-default" @click="apply">申请</button>
      <button type="button" class="btn btn-default" @click="transfer">调拨</button>
      <button type="button" class="btn btn-default" @click="outboud">出库</button>
      <button type="button" class="btn btn-default" @click="handover">提货</button>
      <button type="button" class="btn btn-default" @click="notify">通知</button>
      <button type="button" class="btn btn-default" @click="distribution">配货</button>
      <button type="button" class="btn btn-default" @click="queryDistribution">配货查询</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name:'mainpage',
  data () {
    return {
    }
  },
  methods:{
    apply(){
      this.$router.push({ path: 'apply', query: { userId: '1' }})
    },
    transfer(){
      this.$router.push({ path: 'transfer', query: { userId: '2' }})
    },
    outboud(){
      this.$router.push({ path: 'outbound', query: { userId: '3' }})
    },
    handover(){
      this.$router.push({ path: 'handover', query: { userId: '4' }})
    },
    notify(){
      this.$router.push({ path: 'notify', query: { userId: '5' }})
    },
    distribution(){
      this.$router.push({ path: 'distribution', query: { userId: '6' }})
    },
    queryDistribution(){
      this.$router.push({ path: 'querydistribution', query: { userId: '7' }})
    }
  }
}
</script>

<style lang="css">
.mainpage .btn-box{
  width: 100%;
  text-align: left;
}
.mainpage .btn-group{
  outline: none;
}
.mainpage .btn-group button{
  outline: none
}
</style>
