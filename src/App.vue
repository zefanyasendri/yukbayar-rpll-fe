<template>
  <div id="app">
    <BONavbar />
    <!-- <CustNavbar /> -->
    <!-- <HomeNavbar /> -->
    <!-- <StaffNavbar /> -->
    <router-view />
    <FooterPage />
  </div>
</template>

<script>
// import HomeNavbar from "./components/Navigation/HomeNavbar";
import BONavbar from "./components/Navigation/BusinessOwnerNavbar.vue";
// import StaffNavbar from "./components/Navigation/StaffNavbar.vue";
// import CustNavbar from "./components/Navigation/CustNavbar";
import FooterPage from "./components/FooterApp";

export default {
  name: "App",
  components: {
    // HomeNavbar,
    // CustNavbar,
    FooterPage,
    BONavbar,
    // StaffNavbar,
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
