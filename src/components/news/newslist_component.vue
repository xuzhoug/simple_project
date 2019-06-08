<template>
  <div>
    <h3>newslist_component 组件</h3>

    <ul class="mui-table-view" v-for="item in reportlist" :key="item.id">
      <li class="mui-table-view-cell mui-media" >
        <router-link :to=item.router_link+item.id>
          <img class="mui-media-object mui-pull-left" :src="item.url">
          <div class="mui-media-body">
            {{item.title}}
            <p class="mui-ellipsis">
              <span>发表时间:{{item.Date|dateFormat}}</span>
              <span>点击次数:{{item.clickNumber}}</span>
            </p>
          </div>
        </router-link>
      </li>
    
    </ul>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      reportlist: [] //存放服务器返回的数据
    };
  },
  created() {
    this.sendRequest();
  },
  methods: {
    sendRequest() {
      //发送请求
      console.log('发送请求');
      this.$http.get("server_data/newslist_data.json").then(result => {
        if (result.body.status === 0) {
          this.reportlist = this.resutl.body.message;
          console.log(this.reportlist);
        } else {
          Toast("---获取服务器信息失败!---");
          this.reportlist=result.body;
          console.log(result.body);
          console.log(result.body.status);

        }
      });
    }
  }
};
</script>
<style  scoped>
div {
  color: hotpink;
}
.mui-ellipsis {
  color: darkturquoise;
  display: flex;
  justify-content: space-between;
  /*
* 设置文字,分别靠左和靠右对齐.
*/
}
</style>
