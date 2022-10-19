<template>
  <div class="goodsListIteam">
        <div class="iteamImg"><a href=""><img :src="goodsListIteams.image" alt=""></a></div>
        <p class="iteamP"><span>{{goodsListIteams.height}}</span><span>{{goodsListIteams.width}}</span></p>
  </div>
</template>

<script>
  export default {
    name:'goodsListIteam',
    props:{
      goodsListIteams:{
        type:Object,
        default(){
          return{}
        }
      }
    }
  }
</script>

<style>
 .goodsListIteam{
   width: 46%;
   overflow: hidden;
   background-color: #fff;;
 }
 .iteamImg img{
   border-radius: 1rem;
   width: 100%;
   height: 240px;
 }
 .iteamP{
   width: 100%;
   height: 40px;
   line-height: 40px;
   margin: 0!important;
 }
 .iteamP span:nth-child(2)::before{
   content: "***";
   color: #FF0000;
 }

</style>
