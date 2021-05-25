<template>
  <div class="page-background">
    <div class="page">
      <div class="left">
        <side-bar />
      </div>
      <div class="right">
        <search-bar class="search-bar" />
        <div
          v-if="pop_up == 'menu'"
          class="setting-content font-fonts mx-10 mt-10"
        >
          <h2 class="title text-2xl font-bold mb-5">
            <span v-if="lang">设置：</span>
            <span v-else>SETTING： </span>
          </h2>
          <div class="content grid gap-y-6 justify-items-start">
            <button class="button" @click="toggle('account_modify')">
              <span v-if="this.$store.getters.lan">修改用户信息</span>
              <span v-else>MODIFY ACCOUNT</span>
            </button>
            <button class="button" @click="toggle('password')">
              <span v-if="this.$store.getters.lan">修改密码</span>
              <span v-else>MODIFY PASSWORD</span>
            </button>
            <button class="button" @click="toggle('deleteUser')">
              <span v-if="this.$store.getters.lan">删除用户</span>
              <span v-else>DELETE ACCOUNT</span>
            </button>
            <button class="button" @click="toggle('language')">
              <span v-if="this.$store.getters.lan">更改语言</span>
              <span v-else>LANGUAGE SETTING</span>
            </button>
            <button class="button" @click="logout()">
              <span v-if="this.$store.getters.lan">退出登陆</span>
              <span v-else>LOGOUT</span>
            </button>
          </div>
        </div>
        <account-modify v-else-if="pop_up == 'account_modify'" class="pop-up font-fonts mt-10 mx-auto text-center"  @finish="toggle"/>
        <password-modify v-else-if="pop_up == 'password'" class="pop-up font-fonts mt-10 mx-auto text-center" @finish="toggle"/>
        <delete-account v-else-if="pop_up == 'deleteUser'" class="pop-up font-fonts mt-10 mx-auto text-center" @finish='toggle' />
        <lanuage-setting v-else-if="pop_up == 'language'" lass="pop-up font-fonts mt-10 mx-auto text-center" @finish='toggle' />
      </div>
    </div>
    <bottom-bar />
  </div>
</template>
<script>
import BottomBar from '../components/public/bottomBar.vue';
import searchBar from "../components/public/searchBar.vue";
import SideBar from "../components/public/sideBar.vue";
import AccountModify from "../components/settingPage/accountModify.vue";
import DeleteAccount from '../components/settingPage/deleteAccount.vue';
import LanuageSetting from '../components/settingPage/lanuageSetting.vue';
import PasswordModify from '../components/settingPage/passwordModify.vue';
import cookies from 'vue-cookies';
export default {
  components: { SideBar, searchBar, AccountModify, BottomBar, PasswordModify, DeleteAccount, LanuageSetting },
  data() {
    return {
      pop_up: "menu",
    };
  },
  computed: {
    lang() {
      return this.$store.getters.lan 
    }
  },
  methods: {
      toggle(data) {
          this.pop_up = data
      },
      logout() {
        cookies.remove('user');
        cookies.remove('token');
        this.$router.push('/login');
      }
  },
};
</script>SideBar