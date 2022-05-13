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

          <div class="container_3" style="margin-left: 1rem;">
              <h1 class="con_kanan">Rp {{transactionServices.formatPrice(order.biaya)}}</h1>
              <h1 class="con_kanan">Rp {{transactionServices.formatPrice(order.biaya_administrasi)}}</h1>
              <h1 class="con_kanan" style='color:red;'>Rp {{countDiskon()}}</h1>
              <h1 class="con_kanan">Rp {{transactionServices.formatPrice(countBiayaAkhir(order.biaya_administrasi, order.biaya))}}</h1>
              <h1 class="con_kanan" style='color:blue;'>Rp {{transactionServices.formatPrice(order.saldo_user)}}</h1>
              <h1 class="con_kanan">Rp {{transactionServices.formatPrice(countSaldoAkhir())}}</h1>
          </div>
        </div>
      </div>
      <h1 class="text_green">Detail Pembayaran</h1>

      <div class="big_container">
        <div class="container_1">
          <h1 class="">Biaya Token Listrik</h1>
          <h1 class="">Biaya Transaksi</h1>
          <h1 style="font-weight: bold">Diskon</h1>
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
          <h1>:</h1>
        </div>

        <div class="container_3" style="margin-left: 1rem">
          <h1 class="con_kanan">
            Rp {{ transactionServices.formatPrice(order.biaya) }}
          </h1>
          <h1 class="con_kanan">
            Rp {{ transactionServices.formatPrice(order.biaya_administrasi) }}
          </h1>
          <h1 class="con_kanan" style="color: red">
            Rp {{ transactionServices.formatPrice(countDiskon()) }}
          </h1>
          <h1 class="con_kanan">
            Rp
            {{
              transactionServices.formatPrice(
                countBiayaAkhir(
                  order.biaya_administrasi,
                  order.diskon,
                  order.biaya
                )
              )
            }}
          </h1>
          <h1 class="con_kanan" style="color: blue">
            Rp {{ transactionServices.formatPrice(order.saldo_user) }}
          </h1>
          <h1 class="con_kanan">
            Rp {{ transactionServices.formatPrice(countSaldoAkhir()) }}
          </h1>
        </div>
      </div>
    </div>
    <div class="bagian_kanan">
      <div class="button_pembayaran">
        <span style="margin-top: 50%"
          ><button
            type="button"
            id="button_lanjut_pembayaran"
            v-on:click="submitForm"
          >
            Konfirmasi
          </button></span
        >
        <span style="margin-top: 2rem"
          ><button
            type="button"
            id="button_batal_pembayaran"
            v-on:click="clearForm"
          >
            Batal
          </button></span
        >
      </div>
    </div>
  </div>
</template>
<script>
import TransactionServices from "@/services/TransactionServices";
import axios from "axios";

export default {
  mounted() {
    this.fetchData();
  },
  name: "PLN_Token_Konfirmation",
  data() {
    return {
      // statusPaid: "Paid",
      order: {
        nomor_pelanggan: null,
        biaya: null,
        diskon: null,
        biaya_administrasi : 2000,
        biaya_akhir : null,
        nama_user: null,
        saldo_user: null,
        saldo_akhir: null,
        id_user: null,
        id_varian: null,
      },
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
      this.data = this.transactionServices.getCurrentTokenTransactionData();
      this.order.nama_user = this.data[0].nama
      this.order.saldo_user = this.data[0].saldo_user
      this.order.nomor_pelanggan = this.data[0].nomor_pelanggan
      this.order.biaya = parseInt(this.data[0].pilihan_saldo)
      this.order.diskon = this.data[0].kupon
      this.order.id_varian = this.data[0].jenisVarian
      this.order.id_user = this.data[0].id_user
    },
    countDiskon(){
      var temp
      temp = this.order.diskon * parseFloat(this.order.biaya)
      if(temp==0){
        return 0
      }
      // this.order.diskon = temp
      return temp
    },
    countBiayaAkhir(biayaAdmin, biaya){
      this.order.biaya_akhir = (biaya - this.countDiskon()) + biayaAdmin 
      return this.order.biaya_akhir
    },
    countSaldoAkhir() {
      this.order.saldo_akhir = this.order.saldo_user - this.order.biaya_akhir;
      return this.order.saldo_akhir;
    },
    submitForm(){
        const axiosrequest1 = axios.post("/transaksi/", {
          totalHarga: this.order.biaya_akhir,
          id_pengguna: this.order.id_user,
          id_varian: this.order.id_varian,
        });
        var bodyFormData = new FormData();
        bodyFormData.append('saldo',this.order.saldo_akhir)
        const axiosrequest2 = axios({
          method: "put",
          url: `/users/id/${this.order.id_user}/saldo`,
          data: bodyFormData,
          headers: { "Content-Type": "multipart/form-data" }
        });
        axios.all([axiosrequest1, axiosrequest2])
        .then(
          this.transactionServices.removeFromCart(),
          this.transactionServices.addToCart(this.order),
          location.replace("/Customer/Transaksi/PLN/Token/Konfirmasi/Berhasil")
        )
        .catch((error) => {
          console.log(error);
        });
    },
    clearForm() {
      this.transactionServices.removeFromCart();
      location.replace("/Customer/Transaksi/PLN/Token");
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
  margin-left: 10%;
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
  margin-bottom: -0.15rem;
  padding-left: 1rem;
  border: 1px solid white;
  box-shadow: 1px 0.5px 2px 0 black;
}
.big_container {
  display: flex;
}
h1 {
  margin-top: 1rem;
  margin-bottom: 0.25rem;
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