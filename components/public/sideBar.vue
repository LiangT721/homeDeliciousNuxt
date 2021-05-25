<template>
  <div class="menu-bar-md h-screen w-full sticky top-0 py-20">
    <logo />
    <div class="w-full h-20 my-10 flex justify-center">
      <user-icon class="h-full" />
    </div>
    <div class="btn w-1/3 mx-auto grid gap-y-5 text-center">
      <div class="side-bar-btn" :class="home" @click="toPath('/')">
        <span v-if="this.$store.getters.lan">首页</span><span v-else>HOME</span>
      </div>
      <div class="side-bar-btn" :class="user" @click="toProduction">
        <span v-if="this.$store.getters.lan">我的分享</span
        ><span v-else>PRODUCTION</span>
      </div>
      <div class="side-bar-btn" :class="collection" @click="toCollection">
        <span v-if="this.$store.getters.lan">我的收藏</span
        ><span v-else>COLLECTION</span>
      </div>
      <div class="side-bar-btn" :class="share" @click="sharePage">
        <span v-if="this.$store.getters.lan">上传美食</span
        ><span v-else>SHARE</span>
      </div>
      <div class="side-bar-btn" :class="search" @click="toPath('/search/tag/')">
        <span v-if="this.$store.getters.lan">搜索</span
        ><span v-else>SEARCH</span>
      </div>
      <div class="side-bar-btn logout" @click="logout">
        <span v-if="this.$store.getters.lan">注销</span
        ><span v-else>LOGOUT</span>
      </div>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import logo from "./logo.vue";
import UserIcon from "./userIcon.vue";
export default {
  components: { logo, UserIcon },
  data() {
    return {
      home: "button_select",
      user: "",
      collection: "",
      share: "",
      search: "",
      select: "button_select",
      unSelect: "",
    };
  },

  async asyncData({ params }) {
    const path = params;
  },
  methods: {
    toPath(data) {
      this.$router.push(data);
    },
    confirmLogin() {
      let res = confirm("Please login your account.");
      if (res == true) {
        this.$router.push("/login");
      }
    },
    toProduction() {
      if (cookies.get("user")) {
        const user_id = cookies.get("user").user_id;
        if (user_id) {
          this.$store.commit("userPage_shift", true);
          this.$router.push(`/user/${user_id}`);
          this.user = this.select;
          this.home = this.collection = this.share = this.search = this.unSelect;
        }
      } else {
        this.confirmLogin();
      }
    },
    toCollection() {
      if (cookies.get("user")) {
        const user_id = cookies.get("user").user_id;
        if (user_id) {
          this.$store.commit("userPage_shift", false);
          this.$router.push(`/user/${user_id}`);
          this.collection = this.select;
          this.home = this.user = this.share = this.search = this.unSelect;
        }
      } else {
        this.confirmLogin();
      }
    },
    sharePage() {
      if (cookies.get("user")) {
        this.$router.push(`/share`);
      } else {
        this.confirmLogin();
      }
    },
    logout() {
      cookies.remove("token");
      cookies.remove("user");
      this.$router.push("/login");
    },
  },
  computed: {
    userInfo() {
      return cookies.get("user");
    },
  },
  mounted() {
    let path = this.$route.path.replaceAll("/", "");
    if (path == "") {
      this.home = this.select;
      this.user = this.collection = this.share = this.search = this.unSelect;
    }
    if (path.includes("user")) {
      if (this.$store.state.userPageToggle) {
        this.user = this.select;
        this.home = this.collection = this.share = this.search = this.unSelect;
      } else {
        this.collection = this.select;
        this.home = this.user = this.share = this.search = this.unSelect;
      }
    }
    if (path == "share") {
      this.share = this.select;
      this.user = this.collection = this.home = this.search = this.unSelect;
    }
    if (path.includes("search")) {
      this.search = this.select;
      this.user = this.collection = this.share = this.home = this.unSelect;
    }
  },
};
</script>

<style lang="scss" scoped>
</style>