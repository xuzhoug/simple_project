<template>
  <div class="app_container">
    <h1>App根组件</h1>
    <br>
    <!-- header-->
    <mt-header fixed title="mintHead模板"></mt-header>
    <!-- middle-->
    <transition>
      <router-view></router-view>
    </transition>

    <!-- tabbar -->
    <!-- home_component  message_component  plus_component search_component -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home_component">
        <span class="mui-icon mui-icon-home-filled"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/message_component">
        <span class="mui-icon mui-icon-email">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">消息</span>
      </router-link>
      <router-link class="mui-tab-item" to="/plus_component">
        <span class="mui-icon mui-icon-plus-filled"></span>
        <span class="mui-tab-label">采购</span>
      </router-link>
      <router-link class="mui-tab-item" to="search_component">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>
<script>
</script>   
<style  lang="scss" scoped>
.app_container {
  padding-top: 100px;
  overflow-x: hidden;
}
.title {
  margin: 20px 15px 10px;
  color: #6d6d72;
  font-size: 15px;
}

.oa-contact-cell.mui-table .mui-table-cell {
  padding: 11px 0;
  vertical-align: middle;
}

.oa-contact-cell {
  position: relative;
  margin: -11px 0;
}

.oa-contact-avatar {
  width: 75px;
}
.oa-contact-avatar img {
  border-radius: 50%;
}
.oa-contact-content {
  width: 100%;
}
.oa-contact-name {
  margin-right: 20px;
}
.oa-contact-name,
oa-contact-position {
  float: left;
}
.v-enter
 {
  opacity: 0;
  transform: translateX(100%);
}
 .v-leave-to{
  opacity: 0;
  transform: translateX(-50%);
}
.v-enter-active,
.v-leave-active {
  transition: all 1s ease;
}
.v-move {
  transition: all 04s ease;
}
.v-leave-active {
  position: absolute;
}
  
</style>
