<template>
  <div id="tab-bar-item" @click="iteamClick">
     <div v-if='!isActive'><slot name="item-icon"></slot></div>
     <div v-else><slot name="item-icon-active"></slot></div>
     <div :class="{active:isActive}"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default{
    name:'tabbarIteam',
    props:{
      path:String
    },
    data(){
      return{
        //isActive:true,
      }
    },
    computed:{
      isActive(){
        //return this.$router.path.indexOf(this.path) !== -1
      }
    },
    methods:{
      iteamClick(){
        //console.log("iteamclick+++++")
        this.$router.replace(this.path);
      }
    }
  }
</script>

<style>
  .active{
    color: red;
  }

</style>
