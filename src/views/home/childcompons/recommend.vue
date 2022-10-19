<template>
  <div class="recommend-view">
    <div class="recommendIteam" v-for="iteam in recommends">
      <a :href="iteam.link"><img :src="iteam.image" alt="" ></a>
      <p>{{iteam.title}}</p>
    </div>
  </div>
</template>

<script>
  export default{
    name:'recommend',
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    }

  }
</script>

<style>
.recommend-view{
  display: flex;
  padding-top: 10px;
}
.recommendIteam{
  flex:1;
  text-align: center;
}
.recommendIteam img{
  width: 70px;
}
.recommendIteam p{
  font-size:14px;
  line-height: 20px;
}
</style>
