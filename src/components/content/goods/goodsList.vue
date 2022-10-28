<template>
  <div class="goodsList">
    <goodsListIteam  v-for="iteam in goodsLists" :goodsListIteams='iteam'></goodsListIteam>
    <goodsListIteam  v-for="iteam in goodsLists" :goodsListIteams='iteam'></goodsListIteam>
    <goodsListIteam  v-for="iteam in goodsLists" :goodsListIteams='iteam'></goodsListIteam>
    <goodsListIteam  v-for="iteam in goodsLists" :goodsListIteams='iteam'></goodsListIteam>
    <goodsListIteam  v-for="iteam in goodsLists" :goodsListIteams='iteam'></goodsListIteam>
    
  </div>
</template>

<script>
  import goodsListIteam from './goodsListIteam'
  export default {
    name:'goodsList',
    components:{goodsListIteam},
    props:{
      goodsLists:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style>
  .goodsList{
   display: flex;
   flex: 1;
   flex-wrap: wrap;
   justify-content:space-around;
  }
</style>
