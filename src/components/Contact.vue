<template>
    <div class="contact">
      <div class="header-contact">
        <img src="../assets/user.png"/>
        <h1>{{user.firstname + ' ' + user.lastname}}</h1>
        <ul>
          <li>
            <img src="../assets/chat.png"/>
            <span>nhắn tin</span>
          </li>
          <li>
            <img src="../assets/call-answer.png"/>
            <span>gọi điện</span>
          </li>
          <li>
            <img src="../assets/video-camera.png"/>
            <span>video</span>
          </li>
          <li>
            <img src="../assets/email.png"/>
            <span>gửi thư</span>
          </li>
        </ul>
      </div>
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item label="Điện thoại">
          <a-input placeholder="Số điện thoại" v-model="user.phone"/>
        </a-form-item>
        <a-form-item label="Ghi chú">
          <a-input  placeholder="Ghi chú" v-model="user.note"/>
        </a-form-item>
        <a @click="addFavorite">Thêm vào Mục ưu thích</a>
      </a-form>
    </div>
</template>
<script>

export default {
  name: 'Contact',
  data () {
    return {
      user: []
    }
  },
  methods: {
    addFavorite () {
      this.$message.success('Thành công', 5)
    }
  },
  mounted () {
    const id = parseInt(this.$route.params.id)

    const data = JSON.parse(localStorage.getItem('data'))
    const contact = data.filter(ur => ur.id === id)
    console.log(contact[0])
    this.user = contact[0]
  }
}
</script>
<style scoped>
.header-contact {
  background: #f4f6f6a3;
}
.header-contact img {
  width: 100px;
}
.contact ul {
  list-style: none;
  display: inline-flex;
  padding: 0;
}
.contact li {
  padding: 10px 15px;
}
.contact li img {
  background: #036dd0;
  padding: 10px;
  border-radius: 40%;
  width: 79%;
  display: block;
  margin:auto;
  margin-bottom: 8px;
}
.contact li span {
  font-size: 13px;
  color: #036dd0;
}
.ant-form {
  padding: 14px;
}
.ant-input {
  border: none;
  border-bottom: 1px solid #d9d9d9;
  border-radius: 0;
  outline: none;
  margin-bottom: 15px;
  padding-left: 0;
}
.ant-input:focus {
  box-shadow: none;
}
.ant-form a {
  text-align: left;
  padding: 4px 0;
  border-bottom: 1px solid #d9d9d9;
  color: #036dd0;
}
.ant-form-item {
  text-align: left;
  margin: 0;
}
</style>
