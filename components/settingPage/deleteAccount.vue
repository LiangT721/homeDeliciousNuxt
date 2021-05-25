<template>
  <div class="relative">
    <p class="capitalize mt-3">
      <span v-if="this.$store.getters.lan">请输入您的密码:</span
      ><span v-else>Please input your password:</span>
    </p>
    <input class="input-area" v-model="password" type="password" />
    <div>
      <button class="button mt-10" @click="deleteUser">Delete</button>
      <button class="button mt-10" @click="back">back</button>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
export default {
  data() {
    return {
      password: "",
    };
  },
  methods: {
    back() {
      console.log("back");
      this.$emit("finish", "menu");
    },
    async deleteUser() {
      if (confirm("Do you make sure to delete this user?")) {
        await this.$axios({
          url: "/api/users",
          method: "delete",
          data: {
            token: cookies.get("token"),
            password: this.password,
          },
        }).then((res) => {
          console.log(res.data);
          cookies.remove("user");
          cookies.remove("token");
          this.$emit("finish", "menu");
          this.$router.push("/login");
        }).catch((res)=>{
            alert(res)
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>