<template>
  <div class="tabcontrol">
    <div class="tabcontrolIteam"  v-for="(iteam,index) in titles" :class="{active:index===currentIndex}" @click="iteamClick(index)">
      <span >{{iteam}}</span>
    </div>
  </div>
</template>

<script>
  export default{
    name:'TabControl',
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        currentIndex:0
      }
    },
    methods:{
      iteamClick(index){
        this.currentIndex=index
        console.log(this.currentIndex)
      }
    }
  }
</script>

<style>
  .tabcontrol{
    display: flex;
    justify-content:space-around;
    background-color: #fff;
    padding-bottom: 10px;
  }
  .tabcontrolIteam{

  }
  .tabcontrolIteam span{
    padding-bottom: 5px;
    font-size: 20px;
    height: 40px;
    line-height: 40px;

  }
  .active span{
    color: #FFC0CB;
    border-bottom: #FFC0CB 2px solid;
  }
</style>
