<template>
  <div class="wrapper" ref='wrapper' >
  	<div class="content">
  		<slot></slot>
  	</div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default{
    name:'Scroll',
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default:false
      }
    },
    data(){
      return{
        scroll:null,

      }
    },
    mounted(){
      /* 创建BScroll实例 */
      this.scroll = new BScroll(this.$refs.wrapper,{
        click:true,
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad,

      })
      /* 监听滚动事件 */
      this.scroll.on('scroll',(postion)=>{
        this.$emit('scroll',postion)

      })
      /* 监听上拉加载 */
      this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp')
      })

    },
    methods:{
      scrollTo(x,y,time=500){
        this.scroll.scrollTo(x,y,time)
      },
      refresh(){
        this.scroll.refresh()
      }
    }
  }
</script>

<style>

</style>
