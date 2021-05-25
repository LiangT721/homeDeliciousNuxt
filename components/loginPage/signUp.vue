<template>
  <div
    class="w-3/4 md:w-1/3 bg-white shadow-2xl py-10 text-center font-fonts rounded-md"
  >
    <h3 class="mb-5 text-2xl uppercase">
      <span v-if="this.$store.getters.lan">用户注册</span
      ><span v-else>Sign Up</span>
    </h3>
    <p class="capitalize mt-3">
      <span v-if="this.$store.getters.lan">用户名</span
      ><span v-else>username</span>
    </p>
    <input
      class="border rounded-md border-gray-600"
      v-model="username"
      type="text"
    />
    <p class="capitalize mt-3">
      <span v-if="this.$store.getters.lan">密码</span
      ><span v-else>password</span>
    </p>
    <input
      class="border rounded-sm border-gray-600"
      v-model="password"
      type="password"
    />
    <p class="capitalize mt-3">
      <span v-if="this.$store.getters.lan">电子邮箱</span
      ><span v-else>email</span>
    </p>
    <input
      class="border rounded-md border-gray-600"
      v-model="email"
      type="text"
    />
    <p class="capitalize mt-3">
      <span v-if="this.$store.getters.lan">生日</span
      ><span v-else>birthday</span>
    </p>
    <input
      class="border rounded-md border-gray-600"
      v-model="birthday"
      type="date"
    />
    <p class="capitalize mt-3">
      <span v-if="this.$store.getters.lan">所在地</span
      ><span v-else>location</span>
    </p>
    <input
      class="border rounded-md border-gray-600"
      v-model="location"
      type="text"
    />
    <p class="capitalize mt-3">
      <span v-if="this.$store.getters.lan">简介</span><span v-else>bio</span>
    </p>
    <input
      class="border rounded-md border-gray-600"
      v-model="bio"
      type="text"
    />
    <p class="capitalize mt-3">
      <span v-if="this.$store.getters.lan">头像</span><span v-else>icon</span>
    </p>
    <image-upload class="mt-3" @newImage="newImage" :image_type="type_user" />
    <image-preview
      v-if="icon"
      :image_url="icon"
      :image_type="type_user"
      @delete_res="delete_res"
      class="image-preview h-20 w-20 mx-auto relative pt-5"
    />
    <div class="btn-area mt-10">
      <button class="button" @click="signUp">
        <span v-if="this.$store.getters.lan">注册</span
        ><span v-else>SignUp</span>
      </button>
      <button class="button" @click="back">
        <span v-if="this.$store.getters.lan">返回</span><span v-else>Back</span>
      </button>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import imageUpload from "../public/imageUpload.vue";
import ImagePreview from "../public/imagePreview.vue";
export default {
  components: { imageUpload, ImagePreview },
  data() {
    return {
      username: "",
      password: "",
      email: "",
      birthday: "",
      location: "",
      bio: "",
      icon: "",
      type_user: "user",
    };
  },
  props: {
    image_type: {
      type: String,
    },
  },
  methods: {
    async signUp() {
      await this.$axios({
        url: "/api/users",
        method: "post",
        data: {
          username: this.username,
          password: this.password,
          email: this.email,
          birthday: this.birthday,
          location: this.location,
          bio: this.bio,
          icon: this.icon,
        },
      })
        .then((response) => {
          console.log(response.data);
          this.user = response.data;
          cookies.set("user", response.data);
          cookies.set("token", response.data.token);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    back() {
      this.$emit("pop_up_false", false);
    },

    newImage(data) {
      this.icon = data;
      console.log(this.icon);
    },
    delete_res(data) {
			console.log(data)
			switch (data) {
				case true:
						this.icon = null
					break;
				case false:
						alert('Delete falied')
					break;
			
				default:
					break;
			}
		}
  },
};
</script>

<style lang="scss" scoped>
</style>