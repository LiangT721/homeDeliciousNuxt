<template>
  <div class="relative">
    <p class="capitalize mt-3">
      <span v-if="this.$store.getters.lan">用户名</span
      ><span v-else>username</span>
    </p>
    <input class="input-area" v-model="username" type="text" />
    <p class="capitalize mt-3">
      <span v-if="this.$store.getters.lan">电子邮箱</span
      ><span v-else>email</span>
    </p>
    <input class="input-area" v-model="email" type="text" />
    <p class="capitalize mt-3">
      <span v-if="this.$store.getters.lan">生日</span
      ><span v-else>birthday</span>
    </p>
    <input class="input-area" v-model="birthday" type="date" />
    <p class="capitalize mt-3">
      <span v-if="this.$store.getters.lan">所在地</span
      ><span v-else>location</span>
    </p>
    <input class="input-area" v-model="location" type="text" />
    <p class="capitalize mt-3">
      <span v-if="this.$store.getters.lan">简介</span><span v-else>bio</span>
    </p>
    <input class="input-area" v-model="bio" type="text" />
    <p class="capitalize mt-3">
      <span v-if="this.$store.getters.lan">头像</span><span v-else>icon</span>
    </p>
    <image-upload class="mt-3" @newImage="newImage" :image_type="type_user" />
    <image-edit-preview
      v-if="icon"
      :image_url="icon"
      :image_type="type_user"
      class="image-preview h-20 w-20 mx-auto relative pt-5"
    />
    <div>
      <button class="button mt-10" @click="updateAccount">update</button>
      <button class="button mt-10" @click="back">back</button>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import imageUpload from "../public/imageUpload.vue";
import PasswordComfirm from "./passwordComfirm.vue";
import ImageEditPreview from "./imageEditPreview.vue";
export default {
  components: { imageUpload, PasswordComfirm, ImageEditPreview },
  data() {
    return {
      username: "",
      email: "",
      birthday: "",
      location: "",
      bio: "",
      icon: "",
      type_user: "user",
    };
  },
  computed: {
    user() {
      return this.$store.getters.defaultUser;
    },
  },
  methods: {
     back() {
       console.log('back')
       this.$emit('finish','menu')     
    },
    newImage(data) {
      this.icon = data;
      console.log(this.icon);
    },
    delete_res(data) {
      console.log(data);
      switch (data) {
        case true:
          this.icon = null;
          break;
        case false:
          alert("Delete falied");
          break;

        default:
          break;
      }
    },
    async updateAccount() {
      console.log(this.username);
      console.log(this.birthday);
      console.log(this.email);
      console.log(this.location);
      console.log(this.bio);
      console.log(this.icon);
      let password = prompt("Please input your password");
      await this.$axios({
        url: "/api/users",
        method: "patch",
        data: {
          token: cookies.get("token"),
          username: this.username,
          old_password: password,
          email: this.email,
          birthday: this.birthday,
          location: this.location,
          bio: this.bio,
          icon: this.icon,
        },
      }).then((res) => {
        console.log(res.data);
        cookies.set("user", res.data);
        alert("Edit Success");
        this.$emit("finish", "menu");
      });
    },
  },
  mounted() {
    if (this.user.username != "visiter") {
      this.username = this.user.username;
      this.birthday = this.user.birthday;
      this.email = this.user.email;
      this.location = this.user.location;
      this.bio = this.user.bio;
      this.icon = this.user.icon;
    }
  },
};
</script>

<style lang="scss" scoped>
</style>