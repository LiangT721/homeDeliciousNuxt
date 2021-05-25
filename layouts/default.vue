<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
import cookies from "vue-cookies";
export default {
  computed: {
    user() {
      return this.$store.getters.defaultUser;
    },
  },
  methods: {
    async getCollectionList() {
      if (this.user.user_id) {
        const params = {
          user_id: this.user.user_id,
        };
        const res = await this.$axios.get("/api/collection", { params });
        console.log(res.data);
        this.$store.commit("setCollectionList", res.data);
      }
    },
    setLanguage() {
      const lan = Boolean(cookies.get("lang") == 'true');
      if (cookies.get("lang")) {
        this.$store.commit("setLang", lan);
      }
    },
  },
  mounted() {
    this.getCollectionList();
    this.setLanguage();
  },
};
</script>


