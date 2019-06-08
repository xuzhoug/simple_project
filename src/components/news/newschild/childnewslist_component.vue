<template>
  <div>
    <h3>显示组件 根据参数匹配内容, 内容获取的请求 接收 遍历内容根据id显示 </h3>     
    <h2>{{id}}</h2>
  </div>
</template>
<script>
export default{
  data(){
    return{
      id:this.$route.params.id
      //数据传递: 当前路由对象的id 传递给当前模板;
    };
  }
}
</script>
<style  scoped> 
div{
  color: rgb(59, 211, 216);
}
</style>
