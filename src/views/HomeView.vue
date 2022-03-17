<template>
  <!-- <div class="home"> -->
  <!-- <router-link to="/order"> -->
  <div class="image_div">
    <router-link to="/PLN">
      <img src="../assets/Home/PLN.png" />
    </router-link>

    <router-link to="/PDAM">
      <img src="../assets/Home/PDAM.png" />
    </router-link>

    <router-link to="/Pajak">
      <img src="../assets/Home/Pajak.png" />
    </router-link>

    <router-link to="/Internet">
      <img src="../assets/Home/Internet.png" />
    </router-link>

    <router-link to="/Asuransi">
      <img src="../assets/Home/Asuransi.png" />
    </router-link>

    <router-link to="/BPJS">
      <img src="../assets/Home/BPJS.png" />
    </router-link>
  </div>
  <!-- </router-link> -->
  <!-- </div> -->
</template>

<style scoped>
.column {
  padding: 0;
}

@media screen and (max-width: 667px) {
  .font {
    font-size: 25px !important;
  }
  .hero-body {
    padding-left: 24px !important;
  }
}
@media screen and (min-width: 668px) and (max-width: 1023px) {
  .font {
    font-size: 35px !important;
  }
  .hero-body {
    padding-left: 36px !important;
  }
}
/* .home {
  position: relative;
  padding: 10px;
} */
.image_div {
  position: relative;
}
img {
  width: 225px;
}
</style>