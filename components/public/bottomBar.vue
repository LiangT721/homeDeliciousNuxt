<template>
  <div
    class="fixed bottom-0 w-screen h-16 md:hidden z-50 rounded-t-md shadow-md bg-white flex justify-around items-center"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-7 w-7 text-fontColordark"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      @click="
        () => {
          this.$router.push('/');
        }
      "
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-7 w-7 text-fontColordark"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      @click="toUserPage"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-7 w-7 text-fontColordark"
      @click="share"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-7 w-7 text-fontColordark"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      @click="
        () => {
          this.$router.push('/search/tag');
        }
      "
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  </div>
</template>

<script>
import cookies from "vue-cookies";
export default {
  methods: {
    confirmLogin() {
      let res = confirm("Please login your account.");
      if (res == true) {
        this.$router.push("/login");
      }
    },
    toUserPage() {
      if (cookies.get("user")) {
        const user_id = cookies.get("user").user_id;
        if (user_id) {
          this.$router.push(`/user/${user_id}`);
        }
      } else {
        this.confirmLogin();
      }
    },
    share() {
      if (cookies.get("user")) {
        this.$router.push(`/share`);
      } else {
        this.confirmLogin();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>