<template>
  <div id="app">
    <div v-if="userType == ''">
      <HomeNavbar />
    </div>
    <div v-else-if="userType == 'customer'">
      <CustNavbar />
    </div>
    <div v-else-if="userType == 'owner'">
      <BONavbar />
    </div>
    <div v-else-if="userType == 'staff'">
      <StaffNavbar />
    </div>
    <router-view />
    <FooterPage />
  </div>
</template>

<script>
import HomeNavbar from "./components/Navigation/HomeNavbar";
import BONavbar from "./components/Navigation/BusinessOwnerNavbar.vue";
import StaffNavbar from "./components/Navigation/StaffNavbar.vue";
import CustNavbar from "./components/Navigation/CustNavbar";
import FooterPage from "./components/FooterApp";
import LoginService from "./service/LoginService";

export default {
  name: "App",
  mounted() {
    this.fetchData();
  },
  data: () => {
    const data = [];
    return {
      userType: "",
      loginService: new LoginService(),

      data,
    };
  },
  components: {
    HomeNavbar,
    CustNavbar,
    FooterPage,
    BONavbar,
    StaffNavbar,
  },
  methods: {
    async fetchData() {
      this.userType = this.loginService.getCurrentUserType();
    },
    async getUserType() {
      return this.userType;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
