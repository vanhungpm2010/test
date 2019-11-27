<template>
  <div id="listcontact">
    <a-list size="small" bordered :dataSource="data">
      <a-list-item slot="renderItem" slot-scope="item" v-on:click="edit(item.id)">
        {{item.firstname + ' ' + item.lastname}}
      </a-list-item>
      <div slot="header">
        <h1>Liên hệ</h1>
        <router-link to="/contact/store">
          <a-icon type="plus" />
        </router-link>
        <a-input placeholder="Tìm kiếm" v-model="userName" ref="userNameInput">
          <a-icon slot="prefix" type="search" />
        </a-input>
      </div>
    </a-list>
  </div>
</template>
<script>
import router from '../router/index'

export default {
  name: 'ListContact',
  data () {
    return {
      data: []
    }
  },
  methods: {
    edit: function (id) {
      router.push({name: 'Contact', params: { id }})
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
  #listcontact a {
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
