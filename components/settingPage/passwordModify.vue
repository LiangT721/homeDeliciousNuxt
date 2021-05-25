<template>
  <div class="relative">
    <p class="capitalize mt-3">
      <span v-if="this.$store.getters.lan">请输入原有密码:</span
      ><span v-else>Please input old password:</span>
    </p>
    <input class="input-area" v-model="oldPassword" type="password" />
    <p class="capitalize mt-3">
      <span v-if="this.$store.getters.lan">请输入新密码:</span
      ><span v-else>Please input new password:</span>
    </p>
    <input class="input-area" v-model="confirmPassword" type="password" />
    <p class="capitalize mt-3">
      <span v-if="this.$store.getters.lan">请再次输入新密码:</span
      ><span v-else>Please re-input new password:</span>
    </p>
    <input class="input-area" v-model="newPassword" type="password" />
    <div>
      <button class="button mt-10" @click="passwordChange">update</button>
      <button class="button mt-10" @click="back">back</button>
    </div>
  </div>
</template>

<script>
import cookies from 'vue-cookies';
export default {
  data() {
    return {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    };
  },
  methods: {
    back() {
       console.log('back')
       this.$emit('finish','menu')     
    },
    async passwordChange() {
      if (this.newPassword == this.confirmPassword) {
          await this.$axios({
              url:'/api/users',
              method:'patch',
              data: {
                  token: cookies.get('token'),
                  old_password: this.oldPassword,
                  password: this.newPassword,
              }
          }).then((res)=> {
              console.log(res.data);
              cookies.remove('user');
              cookies.remove('token');
              this.$emit('finish','menu')
              this.$router.push('/login/')
          }).catch((res)=>{
              alert(res);

          })

      } else {
        if (this.$store.getters.lan) {
          alert("您两次输入的密码不符！");
        } else {
          alert("The passwords you entered do not match");
        }
        this.newPassword = this.confirmPassword = this.oldPassword = '';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>