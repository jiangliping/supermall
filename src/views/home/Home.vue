<template>
  <div id="home">
<!-- NavBar-->
         <NavBar class="home-nav">
           <div class="center_p" slot="center">购物车</div>
         </NavBar>
          <TabControl :titles="['流行','新款','精选']" ref='TabControl01' class="TabControl" v-show="istabFixed" @tabclick='hometabclick'/>
         <Scroll
         class='wrapperbox'
         ref='wrapperboxs'
         :probeType='3'
         @scroll='wrapperboxscroll'
         :pullUpLoad='true'
         @pullingUp='loadMore'>
             <!-- banner-->
             <Banner :banners='banner' @bannerimgload='bannerimgload'/>
             <!--recommend -->
             <recommend :recommends='recommend'/>
             <!--featureView -->
             <featureView/>
             <!--TabControl -->
             <TabControl :titles="['流行','新款','精选']" ref='TabControl02' @tabclick='hometabclick'/>
             <goodsList :goodsLists='list'/>

          </Scroll>
          <Backup @click.native='backup' v-show="isshowBackup"></Backup>

  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/navbar'
  import Banner from '@/components/common/banner/banner'
  import recommend from '@/views/home/childcompons/recommend'
  import featureView from './childcompons/featureView'
  import TabControl from '@/components/content/tabControl/TabControl'
  import goodsList from '@/components/content/goods/goodsList'
  import Scroll from '@/components/common/scroll/scroll'
  import Backup from '@/components/common/backup/backup'

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
      Scroll,
      Backup,
      getHomeMultidata,
      getHomeGoods
    },
    data(){
      return{
        banner:[],
        recommend:[],
        list:[],
        isshowBackup:false,
        taboffsetTop:0,
        istabFixed:false,
        /*接口没数据，导致商品无法获取*/
        /*goods:{
            list:[]
            'pop':{page:0,list:[]},
             'new':{page:0,list:[]},
            'sell':{page:0,list:[]}
        }*/
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
            console.log(res.data.data)
            this.banner=res.data.data.banner.list
            this.recommend=res.data.data.recommend.list
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
            //console.log(res.data.data.banner.list)
            this.list.push(...res.data.data.banner.list)
            console.log(this.list)
            //this.goods[type].page+=1
          }
        ).catch(
          err=>console.log(err)
        )
      },
      backup(){
        this.$refs.wrapperboxs.scrollTo(0,0,500)
      },
      bannerimgload(){
        console.log("banner图片加载完毕")
        console.log(this.$refs.TabControl02.$el.offsetTop)
        this.taboffsetTop=this.$refs.TabControl02.$el.offsetTop
        },
      wrapperboxscroll(position){
        //监听按钮显示与隐藏
        this.isshowBackup=(-position.y)>500
        //监听tabctrol吸顶
        this.istabFixed=(-position.y)>this.taboffsetTop

      },
      loadMore(){
        //console.log("上拉加载更多")
        this.getHomeGoods(this.currentIndex)
        this.$refs.wrapperboxs.refresh()
      },
       hometabclick(index){       
        this.$refs.TabControl01.currentIndex=index
        this.$refs.TabControl02.currentIndex=index
      },

   }
  }
</script>

<style scoped>
  #home{
    position: relative;
    height: 100vh;
  }
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
   height: 490px;
 }
 .wrapperbox{
  position: absolute;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
 }
 .TabControl{
   position: relative;
   z-index: 99;
 }
</style>
