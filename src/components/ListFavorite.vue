<template>
  <div id="favorite">
    <a-list size="small" bordered :dataSource="data">
      <a-list-item slot="renderItem" slot-scope="item" v-if="item.isFavorite">
        {{item.firstname + ' ' + item.lastname}}
      </a-list-item>
      <div slot="header">
        <h1>Mục ưu thích</h1>
      </div>
    </a-list>
  </div>
</template>
<script>

export default {
  name: 'ListFavorite',
  data () {
    return {
      data: []
    }
  },
  created () {
    this.data = JSON.parse(localStorage.getItem('data'))
  }
}
</script>
<style scoped>
  .ant-list-bordered.ant-list-sm .ant-list-item {
    padding-left: 0;
  }
  h1 {
    text-align: left;
    font-weight: 600;
    margin: 0;
  }
  #favorite a {
    color: #1890ff;
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 22px;
    padding: 0;
  }
  .ant-list-bordered {
    position: relative;
  }
</style>
