<template>
  <div id="home">
    <!-- NavBar-->
   <NavBar class="home-nav">
     <div class="center_p" slot="center">购物车</div>
   </NavBar>
   <!-- banner-->
   <Banner :banners='banner'/>
   <!--recommend -->
   <recommend :recommends='recommend'/>
   <!--featureView -->
   <featureView/>
   <!--TabControl -->
   <TabControl :titles="['流行','新款','精选']"/>
   <goodsList :goodsLists='list'/>
   <div class="height49"></div>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/navbar'
  import Banner from '@/components/common/banner/banner'
  import recommend from '@/views/home/childcompons/recommend'
  import featureView from './childcompons/featureView'
  import TabControl from '@/components/content/tabControl/TabControl'
  import goodsList from '@/components/content/goods/goodsList'

  import {getHomeMultidata,getHomeGoods} from '@/network/home.js' //引入封装好的axios

  export default{
    name:'Home',
    components:{
      NavBar,
      Banner,
      recommend,
      featureView,
      TabControl,
      goodsList,
      getHomeMultidata,
      getHomeGoods
    },
    data(){
      return{
        banner:[],
        recommend:[],
        list:[],
        /*接口没数据，导致商品无法获取*/
        /* goods:{
            list:[]
            'pop':{page:0,list:[]},
             'new':{page:0,list:[]},
            'sell':{page:0,list:[]}
          } */
      }
    },
    created(){
      this.getHomeMultidata()
      this.getHomeGoods()
      /*接口没数据，导致商品无法获取*/
     /* this.getHomeGoods('pop')
       this.getHomeGoods('new')
      this.getHomeGoods('sell') */
    },
    methods:{
      //发送请求
      getHomeMultidata(){
        getHomeMultidata().then(
          res=>{
            console.log(res.data.data);
            this.banner=res.data.data.banner.list;
            this.recommend=res.data.data.recommend.list;

            }
        ).catch(
          err=>{console.log(err)}
        )
      },
      /*接口没数据，导致商品无法获取*/
      /* 请求getHomeGoods
      getHomeGoods(){
        let page=this.goods[type].page+1
        console.log (page)
        getHomeGoods().then(
          res=>{
            console.log(res.data.data.banner.list)
            this.goods['list'].push(...res.data.data.banner.list)
            this.goods[type].page+=1
          }
        ).catch(
          err=>console.log(err)
        )
      } */
      //请求getHomeGoods
      getHomeGoods(){
        /* let page=this.goods[type].page+1   console.log (page) */
        getHomeGoods().then(
          res=>{
            console.log(res.data.data.banner.list)
            this.list.push(...res.data.data.banner.list)
            console.log(this.list)
            //this.goods[type].page+=1
          }
        ).catch(
          err=>console.log(err)
        )
      }
     }
  }
</script>

<style>
  .home-nav{
    background-color: var(--bg-color);
    box-shadow : 0 1px 5px #666;
   /* opacity: .1; */
  }
 .center_p{
   color: #fff;
   text-align: center;
 }
 .height49{
   height: 49px;
 }
</style>
