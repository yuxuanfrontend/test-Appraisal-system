<template lang="html">
  <div class="table-box">
    <table class="table table-striped">
      <thead>
        <tr>
          <th v-for='title in titles'>{{ title }}</th>
        </tr>
      </thead>
      <tbody>
        <!-- <tr v-for='(tableData,index) in tableDatas' @click="clickTr(index)" v-bind:class="{'info': index === trIndex }"> -->
        <tr v-for='tddata in tddatas'>
          <td v-for='data in tddata'>
            <input type="text" :value='data' />
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th v-for="sun in suns">{{ sun }}</th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  name:'table',
  data(){
    return{
      trIndex:0,
      Total:0,
      qualifiedCount:0,
      gobackcount:0,
      tableDatas:[],
      tddatas:[]
    }
  },
  props:{
    titles: {
      type: Array,
      required: true
    },
    tddatas:{
      type: Array,
      required: true
    },
    suns:{
      type: Array,
      required: true
    }
  },
  computed:{
  },
  mounted(){
    console.log(this.$route.query.userId)
  },
  methods:{
    clickTr(index){
      this.trIndex = index

    },
    addLine(){

      this.tddatas.push(this.tddata)
    },
    delete_line(){
      console.log(11111)
    },
    deleteLine(){
      this.tableDatas.splice(this.trIndex,1)
      this.trIndex = 0
      this.countBlur()
      this.qualifiedBlur()
      this.gobackBlur()
    },
    boxNumBlur(index){
      console.log(this.tableDatas[index].boxNum)
    },
    countBlur(index){
      this.Total = 0
      var dataArr = []
      for(var i=0;i<this.tableDatas.length;i++){
        dataArr.push(Number(this.tableDatas[i].count))
      }
      for (var i = 0; i < dataArr.length; i++) {
        this.Total += dataArr[i]
      }
    },
    qualifiedBlur(index){
      this.qualifiedCount = 0
      var dataArr = []
      for(var i=0;i<this.tableDatas.length;i++){
        dataArr.push(Number(this.tableDatas[i].qualified))
      }
      for (var i = 0; i < dataArr.length; i++) {
        this.qualifiedCount += dataArr[i]
      }
    },
    gobackBlur(index){
      this.gobackcount = 0
      var dataArr = []
      for(var i=0;i<this.tableDatas.length;i++){
        dataArr.push(Number(this.tableDatas[i].goback))
      }
      for (var i = 0; i < dataArr.length; i++) {
        this.gobackcount += dataArr[i]
      }
    }
  }
}
</script>

<style lang="css">

</style>
