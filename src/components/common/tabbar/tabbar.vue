<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name:'tabbar',
    components:{
     
    }
  }
</script>

<style>
  #tab-bar{
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 49px;
    box-shadow: -10px 2px 5px rgba(100,100,100,.8);
  }

</style>
