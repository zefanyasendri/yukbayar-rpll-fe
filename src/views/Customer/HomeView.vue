<template>
  <div class="all container is-fluid">
    <div class="columns mt-2 ml-6 mr-6 mb-2 is-family-sans-serif">
      <div class="column is-one-third title is-36 is-size-5-mobile">
        Hello, {{ nama }}
      </div>
      <div class="column"></div>
      <div class="column is-one-third title is-36 is-size-5-mobile">
        Saldo :
        <span class="has-text-weight-bold"
          >Rp {{ transactionServices.formatPrice(saldoYukPay) }}</span
        >
      </div>
    </div>

    <div class="image_div">
      <router-link to="/Customer/Transaksi/PLN">
        <img src="@/assets/Home/PLN.png" />
      </router-link>

      <router-link to="/Customer/Transaksi/PDAM">
        <img src="@/assets/Home/PDAM.png" />
      </router-link>

      <router-link to="/Customer/Transaksi/Pajak">
        <img src="@/assets/Home/Pajak.png" />
      </router-link>

      <router-link to="/Customer/Transaksi/Internet">
        <img src="@/assets/Home/Internet.png" />
      </router-link>

      <router-link to="/Customer/Transaksi/Asuransi">
        <img src="@/assets/Home/Asuransi.png" />
      </router-link>

      <router-link to="/Customer/Transaksi/BPJS">
        <img src="@/assets/Home/BPJS.png" />
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import LoginService from "@/services/LoginService.js";
import TransactionServices from "@/services/TransactionServices";

export default {
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      nama: null,
      saldoYukPay: null,
      loginService: new LoginService(),
      transactionServices: new TransactionServices(),
    };
  },
  methods: {
    async fetchData() {
      this.data = this.loginService.getCurrentUserLoginData();
      this.id = this.data[0].id;
      axios
        .get(`/users/id/${this.id}`)
        .then((response) => {
          this.nama = response.data.data.nama;
          this.saldoYukPay = response.data.data.saldoYukPay;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

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
.image_div {
  position: relative;
}
img {
  width: 225px;
}
.title {
  color: #18234a;
}
</style>