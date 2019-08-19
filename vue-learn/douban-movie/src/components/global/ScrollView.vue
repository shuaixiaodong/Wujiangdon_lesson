<template>
  <div class="scroll-wrapper" ref="wrapper"> 
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  props:{
    data:{
      type:Array,
      defult:()=>[]
    },
    pullUpLoad:{
      type: [Boolean,Object],
      defult:false
    }
  },
  mounted() {
    setTimeout(() =>{
      this.initScroll()
    },20)
  },
  watch:{
    data (newVal,oldVal) {
      setTimeout(() => {
        this.forceUpdate()
      },20)
    }
  },
  methods:{
    initScroll() {
      if (!this.$refs.wrapper) {
        return
      }
      this.scroll = new Bscroll(this.$refs.wrapper,{click:true,bounce:false,
      pullUpLoad:this.pullUpLoad})
      if (this.pullUpLoad){
        this.initPullUpLoad()
      }
      
    },
    initPullUpLoad(){
      this.scroll.on('pullingUp',()=>{
        this.$emit('pulling-up')
      })
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    forceUpdate() {
      if (this.PullUpLoad) {
        this.scroll.finishPullUp()
        this.refresh()
      }
    }
  }
}
</script>

