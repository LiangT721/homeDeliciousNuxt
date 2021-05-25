<template>
  <div
    class="w-screen h-screen bg-primary grid justify-items-center content-center gap-y-10 relative"
  >
    <img class="w-1/3 md:w-1/6" src="../assets/img/logo.png" alt="" />
    <div class="login-windows mx-auto self-center">
      <p class="reg-title uppercase text-xl">Login In</p>
      <br />
      <p class="reg-title mt-2">username</p>
      <input
        class="input mt-2"
        type="text"
        v-model="username"
        placeholder="username"
      />
      <p class="reg-title mt-2">password</p>
      <input
        class="input mt-2"
        type="password"
        v-model="password"
        placeholder="password"
      />
      <div class="mt-3 btn flex justify-around">
        <button @click="login" class="button">Login</button>
        <button @click="back" class="button">back</button>
      </div>
      <p class="other text-center mt-10">
        or
        <span
          @click="
            () => {
              this.signup_pop_ups = true;
            }
          "
          class="ml-2 cursor-pointer underline hover:text-fontColorlight"
          >Sign up</span
        >
      </p>
      <div class="enter absolute bottom-5 w-full left-0 text-center">
        <div v-if="lan">
          直接进入<u class="cursor-pointer" @click="homepage">主页</u>
        </div>
        <div v-else>
          Go to the
          <u class="cursor-pointer" @click="homepage">homepage</u> without login
        </div>
      </div>
    </div>
    <div v-if="signup_pop_ups" class="absolute w-full h-full flex">
      <div class="sign-up-bg w-full h-full absolute z-10"></div>
      <sign-up @pop_up_false="pop_up_false" class="self-center mx-auto z-20" />
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import signUp from "../components/loginPage/signUp.vue";
export default {
  components: { signUp },
  data() {
    return {
      username: "",
      password: "",
      user: null,
      signup_pop_ups: false,
    };
  },
  computed: {
    lan() {
      return this.$store.getters.lan;
    },
  },
  methods: {
    async login() {
      const data = {
        username: this.username,
        password: this.password,
      };
      const result = await this.$axios
        .$post("https://homedelicious.ml/api/login", data)
        .catch(() => {
          alert("Username or Password is incorrect!");
        });
      if (result) {
        console.log(result);
        cookies.set("token", result.token);
        cookies.set("user", result);
        this.$router.push("/");
      }
    },
    pop_up_false() {
      console.log(this.signup_pop_ups);
      this.signup_pop_ups = false;
    },
    back() {
      window.history.back();
    },
    homepage() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>