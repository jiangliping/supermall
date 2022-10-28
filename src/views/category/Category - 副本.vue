<template>
  <div>
    <p>分类</p>
    <Scroll class="wrapperbox" ref='wrapperbox' :probeType='3' @scroll='wrapperboxscroll' >
      <!--TabControl -->
      <TabControl :titles="['流行','新款','精选']"/>
      <goodsList :goodsLists='list'/>
      <ul>
        <li>我是内容1</li>
        <li>我是内容2</li>
        <li>我是内容3</li>
        <li>我是内容4</li>
        <li>我是内容5</li>
        <li>我是内容6</li>
        <li>我是内容7</li>
        <li>我是内容8</li>
        <li>我是内容9</li>
        <li>我是内容10</li>
        <li>我是内容11</li>
        <li>我是内容12</li>
        <li>我是内容13</li>
        <li>我是内容14</li>
        <li>我是内容15</li>
        <li>我是内容16</li>
        <li>我是内容17</li>
        <li>我是内容18</li>
        <li>我是内容19</li>
        <li>我是内容20</li>
        <li>我是内容21</li>
        <li>我是内容22</li>
        <li>我是内容23</li>
        <li>我是内容24</li>
        <li>我是内容25</li>
        <li>我是内容26</li>
        <li>我是内容27</li>
        <li>我是内容28</li>
        <li>我是内容29</li>
        <li>我是内容30</li>
        <li>我是内容31</li>
        <li>我是内容32</li>
        <li>我是内容33</li>
        <li>我是内容34</li>
        <li>我是内容35</li>
        <li>我是内容36</li>
        <li>我是内容37</li>
        <li>我是内容38</li>
        <li>我是内容39</li>
        <li>我是内容40</li>
        <li>我是内容41</li>
        <li>我是内容42</li>
        <li>我是内容43</li>
        <li>我是内容44</li>
        <li>我是内容45</li>
        <li>我是内容46</li>
        <li>我是内容47</li>
        <li>我是内容48</li>
        <li>我是内容49</li>
        <li>我是内容50</li>
      </ul>

    </Scroll>
    <Backup @click.native='backup' v-show="isshowBackup"></Backup>
  </div>
</template>

<script>
  import TabControl from '@/components/content/tabControl/TabControl'
  import goodsList from '@/components/content/goods/goodsList'
  import Scroll from '@/components/common/scroll/scroll'
  import Backup from '@/components/common/backup/backup'
  import {getHomeMultidata,getHomeGoods} from '@/network/home.js' //引入封装好的axios
  export default{
    name:'Category',
    components:{
      Scroll,
      Backup,
      TabControl,
      goodsList,
      getHomeMultidata,
      getHomeGoods

    },
    props:{
      probeType:{
        type:Number,
        default:0
      }
    },
    data(){
      return{
        banner:[],
        recommend:[],
        list:[],
        isshowBackup:false,
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
      wrapperboxscroll(position){
        console.log(position)
        this.isshowBackup=(-position.y)>300
      },

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
        this.$refs.wrapperbox.scrollTo(0,0,500)
      },
      }
  }

</script>

<style scoped>
  .wrapperbox{
    /* height: 300px; */
    position: absolute;
    top: 100px;
    bottom: 100px;
    left: 0;
    right: 0;
    overflow: hidden;
    background-color: red;
  }
</style>
