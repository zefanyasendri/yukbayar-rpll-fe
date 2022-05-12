<template>
  <div class="history">
    <div class="container is-fluid">
      <b-tabs>
        <b-tab-item label="History Transaksi">
          <div
            class="box is-align-content-center is-family-sans-serif"
            v-for="i in dataTransaksi"
            :key="i"
          >
            <div class="columns is-gapless is-multiline is-mobile">
              <div class="column is-half has-text-left ml-6">
                <p class="title is-3 has-text-weight-bold">
                  {{ i.varian  }}
                </p>
                <p class="subtitle is-5">{{ i.status }}</p>
              </div>

              <div class="column auto has-text-right ml-6">
                <p class="price is-size-3 has-text-weight-bold mr-6">
                  -Rp {{ transactionServices.formatPrice(i.totalHarga) }}
                </p>
                <p class="subtitle is-5 mr-6">{{ transactionServices.changeDateFormat(i.tanggal) }}</p>
              </div>
            </div>
          </div>
        </b-tab-item>

        <b-tab-item label="History Top Up">
          <div
            class="box is-align-content-center is-family-sans-serif"
            v-for="i in dataTopUp"
            :key="i"
          >
            <div class="columns is-gapless is-multiline is-mobile">
              <div class="column is-half has-text-left ml-6">
                <p class="title is-3 has-text-weight-bold">
                  {{ i.metode  }}
                </p>
                <p class="subtitle is-5">{{ i.status }}</p>
              </div>

              <div class="column auto has-text-right ml-6">
                <p class="price is-size-3 has-text-weight-bold mr-6 in">
                  +Rp {{ transactionServices.formatPrice(i.nominal) }}
                </p>
                <p class="subtitle is-5 mr-6">{{ transactionServices.changeDateFormat(i.tanggal) }}</p>
              </div>
            </div>
          </div>
        </b-tab-item>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import TransactionServices from "@/services/TransactionServices";
import LoginService from "@/services/LoginService.js";
import axios from "axios";

export default {
  name: "HistoryView",
  mounted(){
    this.fetchData();
  },
  data() {
    return {
      id: "",
      loginService: new LoginService(),
      transactionServices: new TransactionServices(),
      dataTransaksi: [
        {
          id_transaksi: null,
          nama: null,
          varian: null,
          totalHarga: null,
          tanggal: null,
          status: null,
        },
      ],
      dataTopUp: [
        {
          id_pengguna: null,
          metode: null,
          nominal: null,
          tanggal: null,
        },
      ],
      history: [
        {
          field: "varian",
        },
        {
          field: "status",
        },
        {
          field: "totalHarga",
          jumlahBayar: true,
        },
        {
          field: "tanggal",
        },
      ],
    };
  },
  methods: {
    async fetchData() {
      this.data = this.loginService.getCurrentUserLoginData();
      this.id = this.data[0].id;
      const axiosrequest1 = axios.get(`/transaksi/${this.id}`);
      const axiosrequest2 = axios.get(`/topups/${this.id}`);
      axios.all([axiosrequest1, axiosrequest2])
        .then(axios.spread((res1, res2) => {
          this.dataTransaksi = res1.data.data;
          this.dataTopUp = res2.data.data;
          console.log(this.transaksiData);
        }))
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
  .container {
    width: 75%;
    padding-top: 1rem;
  }
  .title,
  .subtitle {
    color: #1256f9;
  }
  .price,
  .out {
    color: red;
  }
  .in {
    color: green;
  }
</style>
