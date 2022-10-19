<template>
 <tabbar>
     <tabbarIteam path='/home'>
       <img slot="item-icon" src="~assets/img/tabbar/1.jpeg" alt="">
       <img slot="item-icon-active" src="~assets/img/tabbar/1.png" alt="">
       <div slot="item-text">首页</div>
     </tabbarIteam>
     <tabbarIteam path='/category'>
       <img slot="item-icon" src="~assets/img/tabbar/1.jpeg" alt="">
       <img slot="item-icon-active" src="~assets/img/tabbar/1.png" alt="">
       <div slot="item-text">分类</div>
     </tabbarIteam>
     <tabbarIteam path='/cart'>
       <img slot="item-icon" src="~assets/img/tabbar/1.jpeg" alt="">
       <img slot="item-icon-active" src="~assets/img/tabbar/1.png" alt="">
       <div slot="item-text">购物车</div>
     </tabbarIteam>
     <tabbarIteam path='/profile'>
       <img slot="item-icon" src="~assets/img/tabbar/1.jpeg" alt="">
       <img slot="item-icon-active" src="~assets/img/tabbar/1.png" alt="">
       <div slot="item-text">我的</div>
     </tabbarIteam>
   </tabbar>
</template>

<script>

  import tabbar from "@/components/common/tabbar/tabbar";
  import tabbarIteam from "@/components/common/tabbar/tabbarIteam";

  export default {
    name:'MainTabBar',
    components:{
      tabbar,
      tabbarIteam
    }
  }
</script>

<style>
</style>
