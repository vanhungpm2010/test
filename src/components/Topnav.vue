<template>
  <div>
    <div class="topnav topnav1" v-if="$route.name === 'Contact'">
      <router-link to="/contact" >
        <a-icon type="left" />
        Liên hệ
      </router-link>
      <div class="topnav-right">
        <router-link to="/contact/1">Sửa</router-link>
      </div>
    </div>
    <div class="topnav" v-if="$route.name === 'Store'">
      <router-link to="/contact">Hủy</router-link>
      <div class="topnav-right">
        <router-link to="/contact/store">Xong</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Topnav'
}
</script>
<style scoped>
.topnav1 {
  background: #f4f6f6a3;
}
.topnav {
  overflow: hidden;
}
.topnav a {
  float: left;
  padding: 12px 16px;
  color: #1890ff;
}
.topnav .topnav-right{
  float: right;
}
</style>
