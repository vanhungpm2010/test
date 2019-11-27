<template>
  <a-form @submit.prevent="onSubmit">
    <div class="topnav">
      <router-link to="/contact">Hủy</router-link>
      <div class="topnav-right">
        <button type="submit" class="btn btn-success">Xong</button>
        <!-- <router-link to="/contact/store">Xong</router-link> -->
      </div>
    </div>
    <a-input v-model="user.firstname" placeholder="Họ"/>
    <a-input v-model="user.lastname" placeholder="Tên"/>
    <a-input v-model="user.phone" placeholder="Số điện thoại"/>
    <a-input v-model="user.address" placeholder="Địa chỉ"/>
    <a-input v-model="user.email" placeholder="Email"/>
    <a-input v-model="user.fb" placeholder="Facebook"/>
    <a-input v-model="user.note" placeholder="Ghi chú"/>
    <a-popconfirm
      title="Xóa liên hệ?"
      @confirm="confirm"
      @cancel="cancel"
      okText="Ok"
      cancelText="Hủy"
    >
      <a href="#" id="delete">Xóa liên hệ</a>
    </a-popconfirm>
    <a-button @click="showConfirm">
    Confirm
  </a-button>
  </a-form>
</template>
<script>
import Topnav from './Topnav'

export default {
  name: 'Store',
  components: {
    Topnav
  },
  data () {
    return {
      user: {}
    }
  },
  methods: {
    onSubmit (event) {
      console.log('aaaaa 1')
      const data = JSON.parse(localStorage.getItem('data'))
      const newUser = JSON.parse(JSON.stringify(this.user))
      data.push(newUser)
    },
    confirm (e) {
      this.$message.success('Click on Yes')
    },
    showConfirm () {
      this.$confirm({
        title: 'Xóa liên hệ?',
        onOk () {
          return new Promise((resolve, reject) => {
            setTimeout(Math.random() > 0.5 ? resolve : reject, 1000)
          }).catch(() => console.log('Oops errors!'))
        },
        onCancel () {}
      })
    }
  },
  mounted () {
    const id = parseInt(this.$route.params.id)
    if (id) {
      const data = JSON.parse(localStorage.getItem('data'))
      const contact = data.filter(ur => ur.id === id)
      this.user = contact[0]
    }
  }
}
</script>
<style scoped>
.ant-form {
  padding: 15px;
}
.ant-input {
  border: none;
  border-bottom: 1px solid #d9d9d9;
  border-radius: 0;
  outline: none;
  margin-bottom: 15px;
}
.ant-input:focus {
  box-shadow: none;
}
.ant-calendar-picker {
  width: 100%;
}
.ant-form-item{
  margin: 0;
}
.topnav1 {
  background: #f4f6f6a3;
}
.topnav {
  overflow: hidden;
}
.topnav a {
  float: left;
  /* padding: 12px 16px; */
  color: #1890ff;
}
.topnav .topnav-right{
  float: right;
}
.topnav-right button {
  border: none;
  background: none;
  color: #1890ff;
  outline: none;
  cursor: pointer;
}
a#delete {
  text-align: left;
  color: red;
}

</style>
