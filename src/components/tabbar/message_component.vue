<template>
  <div>
    <h3>message 组件</h3>
    <!-- 轮播图区域-->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotulist" :key="item.id">
        <img :src="item.img" alt="item.img">
      </mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格区域-->

 
  </div>
</template>
<script>

export default{
  data(){
    return{
      lunbotulist:[
        {id:1,img:"../../images/g37.jpeg"},
        {id:2,img:"../../images/g38.jpeg"},
        {id:3,img:"../../images/g39.jpeg"}
      ]
    };
  },
 
  methods:{
   
  }
}
</script>
<style  lang="scss" scoped>
.mint-swipe {
  height: 200px;
  border: 1px solid;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: rgb(10, 133, 47);
      height: 200px;
      border: 1px solid;
    }
      &:nth-child(2) {
      background-color: rgba(14, 161, 105, 0.623);
      height: 200px;
      border: 1px solid;
    }
      &:nth-child(3) {
      background-color: rgba(38, 14, 173, 0.555);
      height: 200px;
      border: 1px solid;
    }
    img{
      width:100%;
      height:100%;
    }
  }
}
.mui-grid-view.mui-grid-9{
  background-color: rgb(172, 149, 20);
  border:2px dashed darkcyan;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
   border:2px solid rgb(16, 17, 16);
}
.mui-table-view-cell {
  img{
    width: 60px;
    height: 60px;
  }
}
</style>
