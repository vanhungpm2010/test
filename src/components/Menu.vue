<template>
  <a-tabs defaultActiveKey="2">
    <a-tab-pane key="1">
      <span slot="tab">
        <router-link to="/favorite">
          <a-icon type="star" />
          Mục ưu thích
        </router-link>
      </span>
    </a-tab-pane>
    <a-tab-pane key="2">
      <span slot="tab">
        <router-link to="/contact">
          <a-icon type="team" />
          Danh bạ
        </router-link>
      </span>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
export default {
  name: 'Menu'
}
</script>
<style>
a {
  padding: 12px 16px;
  display: block;
  color: #333;
}
a:focus {
  text-decoration: none;
}
.ant-tabs-nav .ant-tabs-tab {
  padding: 0;
}
.ant-tabs-nav .ant-tabs-tab-active a {
    color: #1890ff;
    font-weight: 500;
}
.ant-tabs-ink-bar {
  display: none !important;
}
.ant-tabs {
    bottom: 0;
    position: absolute;
    width: 100%;
    border-top: 1px solid #d9d9d9;
}
.ant-tabs-bar {
  margin: 0;
  border-bottom: none;
}
</style>
