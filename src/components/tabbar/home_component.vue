<template>
  <div>
    <h3>home 组件</h3>
    <!-- 轮播图区域-->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotulist" :key="item.id">
        <img :src="item.img" alt="item.img">
      </mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格区域-->
 <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="/home_component/newslist_component">
		                    <img src="../../images/g37.jpeg" alt="#">
		                    <div class="mui-media-body">进入新闻列表组件</div>
                  </router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/g38.jpeg" alt="#"><span class="mui-badge">5</span>
		                    <div class="mui-media-body">新闻资讯</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/g39.jpeg" alt="#">
		                    <div class="mui-media-body">新闻资讯</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../../images/g40.jpeg" alt="#">
		                    <div class="mui-media-body">新闻资讯</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../../images/g41.jpeg" alt="#">
		                    <div class="mui-media-body">新闻资讯</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/g42.jpeg" alt="#">
		                    <div class="mui-media-body">新闻资讯</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/g43.jpeg" alt="#">
		                    <div class="mui-media-body">新闻资讯</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/g44.jpeg" alt="#">
		                    <div class="mui-media-body">新闻资讯</div></a></li>        
		        </ul> 
 
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
      background-color: rgb(88, 3, 46);
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
