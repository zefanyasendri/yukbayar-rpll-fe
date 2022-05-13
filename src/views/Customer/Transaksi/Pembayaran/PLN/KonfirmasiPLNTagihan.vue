<template>
  <div class="all">
    <div class="bagian_kiri">
      <h1 class="text_green">Informasi Pelanggan</h1>
      <div class="big_container">
        <div class="container_1">
          <h1 class="">No.Meter</h1>
          <h1 class="">Nama User</h1>
        </div>

        <div class="container_2">
          <h1 class="titik2atas">:</h1>
          <h1 class="titik2atas">:</h1>
        </div>

        <div class="container_3" style="margin-left: 1rem">
          <h1 class="con_kanan">{{ order.nomor_tagihan }}</h1>
          <h1 class="con_kanan">{{ order.nama_user }}</h1>
        </div>
      </div>
      <h1 class="text_green">Detail Pembayaran</h1>

      <div class="big_container">
        <div class="container_1">
          <h1 class="">Tagihan Listrik</h1>
          <h1 class="">Biaya Transaksi</h1>
          <h1 style="font-weight: bold">Total Pembayaran</h1>
          <h1 style="font-weight: bold">Saldo Anda</h1>
          <h1 style="font-weight: bold">Saldo Akhir</h1>
        </div>

        <div class="container_2">
          <h1>:</h1>
          <h1>:</h1>
          <h1>:</h1>
          <h1>:</h1>
          <h1>:</h1>
        </div>

        <div class="container_3" style="margin-left: 1rem">
          <h1 class="con_kanan">
            Rp {{ transactionServices.formatPrice(order.biaya) }}
          </h1>
          <h1 class="con_kanan">
            Rp {{ transactionServices.formatPrice(order.biaya_administrasi) }}
          </h1>
          <h1 class="con_kanan">
            Rp
            {{
              transactionServices.formatPrice(
                countBiayaAkhir(order.biaya_administrasi, order.biaya)
              )
            }}
          </h1>
          <h1 class="con_kanan" style="color: blue">
            Rp {{ transactionServices.formatPrice(order.saldo_user) }}
          </h1>
          <h1 class="con_kanan">
            Rp
            {{ transactionServices.formatPrice(countSaldoAkhir()) }}
          </h1>
        </div>
      </div>
    </div>
    <div class="bagian_kanan">
      <div class="button_pembayaran">
        <router-link to="/Customer/Transaksi/PLN/Tagihan/Konfirmasi/Berhasil">
          <span style="margin-top: 50%"
            ><button
              type="button"
              id="button_lanjut_pembayaran"
              v-on:click="submitForm"
            >
              Konfirmasi
            </button></span
          >
        </router-link>
        <router-link to="/Customer/Transaksi/PLN/Token">
          <span style="margin-top: 2rem"
            ><button
              type="button"
              id="button_batal_pembayaran"
              v-on:click="clearForm"
            >
              Batal
            </button></span
          >
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import TransactionServices from "@/services/TransactionServices";
import axios from "axios";
import LoginService from "@/services/LoginService.js";
import TagihanService from "@/services/TagihanService";

export default {
  mounted() {
    this.fetchData();
  },
  name: "PLN_Tagihan_Konfirmation",
  data() {
    return {
      order: {
        nomor_tagihan: null,
        biaya: null,
        diskon: 0,
        biaya_administrasi: 2000,
        biaya_akhir: null,
        nama_user: null,
        saldo_user: null,
        saldo_akhir: null,
        id_varian: null,
        id_tagihan: null,
      },
      loginService: new LoginService(),
      tagihanService: new TagihanService(),
      transactionServices: new TransactionServices(),
      dataTransaksi: {
        id_pengguna: null,
        totalHarga: null,
        id_varian: null,
        status: null,
      },
    };
  },
  methods: {
    async fetchData() {
      let noMeter;
      this.data = this.loginService.getCurrentUserLoginData();
      noMeter = this.tagihanService.getCurrentNoMeter();
      this.order.nomor_tagihan = noMeter;
      this.id = this.data[0].id;
      const axiosrequest1 = axios.get(`/users/id/${this.id}`);
      const axiosrequest2 = axios.get(`/tagihan/KL2/${this.id}`);
      axios
        .all([axiosrequest1, axiosrequest2])
        .then(
          axios.spread((res1, res2) => {
            this.order.nama_user = res1.data.data.nama;
            this.order.saldo_user = res1.data.data.saldoYukPay;
            this.order.biaya = res2.data.data[0].harga;
            this.order.id_tagihan = res2.data.data[0].id_transaksi;
            console.log(this.transaksiData);
          })
        )
        .catch((error) => {
          console.log(error);
        });
    },
    countDiskon() {
      this.order.diskon = this.order.diskon * this.order.biaya;
      if (this.order.diskon == 0) {
        return 0;
      }
      return this.diskon;
    },
    countBiayaAkhir(biayaAdmin, biaya) {
      this.order.biaya_akhir = biaya + biayaAdmin;
      return this.order.biaya_akhir;
    },
    countSaldoAkhir() {
      this.order.saldo_akhir = this.order.saldo_user - this.order.biaya_akhir;
      return this.order.saldo_akhir;
    },
    submitForm() {
      const axiosrequest1 = axios.post("/transaksi/", {
        totalHarga: this.order.biaya_akhir,
        id_pengguna: this.id,
        id_varian: "TL1",
      });
      var bodyFormData = new FormData();
      bodyFormData.append("saldo", this.order.saldo_akhir);
      const axiosrequest2 = axios({
        method: "put",
        url: `/users/id/${this.id}/saldo`,
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      const axiosrequest3 = axios({
        method: "put",
        url: `/tagihan/${this.order.id_tagihan}`,
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      axios
        .all([axiosrequest1, axiosrequest2, axiosrequest3])
        .then(
          this.transactionServices.removeFromCart(),
          this.transactionServices.addToCart(this.order),
          alert("Pembayaran Berhasil!"),
          location.replace("/history")
        )
        .catch((error) => {
          console.log(error);
        });
    },
    clearForm() {
      this.transactionServices.removeFromCart();
      this.tagihanService.removeNoMeter();
      location.replace("/Customer/Transaksi/PLN/Tagihan");
    },
  },
};
</script>
<style scoped>
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
.all {
  margin-top: -1rem;
  margin-left: 7rem;
  text-align: left;
  display: flex;
  position: relative;
}
.text_green {
  font-size: 1.25rem;
  font-weight: bold;
  background: #78ffd7;
  border-radius: 2rem;
  padding: 1rem;
}
.container_1 {
  width: 250px;
  font-size: 1.25rem;
  border: 2px solid white;
}
.container_2 {
  font-size: 1.25rem;
}
.container_3 {
  width: 300px;
  font-size: 1.25rem;
}
.con_kanan {
  padding-left: 1rem;
  border: 1px solid white;
  box-shadow: 1px 0.5px 2px 0 black;
  margin-bottom: -0.15rem;
}
.big_container {
  display: flex;
}
h1 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.bagian_kiri {
  float: left;
}
.bagian_kanan {
  margin: auto;
  display: block;
  text-align: center;
  align-items: center;
}
.button_pembayaran {
  top: 50%;
  position: relative;
}
#button_lanjut_pembayaran {
  background-color: #223196;
  box-shadow: 2px 2px 2px;
  border: none;
  border-radius: 1.25rem;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  margin: 4px 2px;
  margin-top: 2rem;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  width: 150px;
}
#button_batal_pembayaran {
  background-color: white;
  box-shadow: 2px 2px 2px;
  border: none;
  border-radius: 1.25rem;
  color: #223196;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  margin: 4px 2px;
  margin-top: 2rem;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  width: 150px;
}
</style>