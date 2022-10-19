<template>
  <div id="app">
    <router-view/>
    <!-- <MainTabBar/>-->
    <main-tab-bar/>
    
  </div>
</template>

<script>

import MainTabBar from '@/components/content/mainTabbar/MainTabBar'


export default {
  name: 'App',
  components: {
    MainTabBar,

  }
}
</script>

<style>
@import url("assets/css/base.css");
#tab-bar-item{
    flex:1;
    text-align: center;
    vertical-align:middle;

  }
  #tab-bar-item img{
    margin-top: 3px;
    width: 20px;
    height: 20px;
    vertical-align:middle;
  }
</style>
