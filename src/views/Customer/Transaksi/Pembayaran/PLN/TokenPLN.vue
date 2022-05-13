<template>
    <div class="all">
        <div class="box_atas">
            <img id="PLN" src="@/assets/Home/PLN.png"/>
            <div class="box_atas_2">
              <!--Max Length di set ke 12 karna biasanya nomor tagihan PLN itu 12 angka-->
              <b-field label="Masukkan Nomor Meter">
                <b-input v-model="pln.nomor_pelanggan" 
                  maxlength="12"
                  oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                  size="is-medium"
                  style="text-align:center;width: 50%;margin:auto;justify-items:center;" required></b-input>
              </b-field>
            </div>
        </div>
        <p class="saldo_user">
          Saldo Anda : Rp {{transactionServices.formatPrice(pln.saldo_user)}}
        </p>

        <section>
          <div class="nominal_selection">
            <b-field label="Pilih Nominal" required>
              <b-radio-button v-model="pln.pilihan_saldo"
                native-value=20000
                type="is-primary is-light is-outlined">
                <!--Button 20rb-->
                  Rp 20.000
              </b-radio-button>
              <b-radio-button v-model="pln.pilihan_saldo"
                native-value=50000
                type="is-primary is-light is-outlined">
                <!--Button 50rb-->
                  Rp 50.000
              </b-radio-button>
              <b-radio-button v-model="pln.pilihan_saldo"
                native-value=100000
                type="is-primary is-light is-outlined">
                <!--Button 100rb-->
                  Rp 100.000
              </b-radio-button>
              <b-radio-button v-model="pln.pilihan_saldo"
                native-value="150000"
                type="is-primary is-light is-outlined">
                <!--Button 150rb-->
                  Rp 150.000
              </b-radio-button>
              <b-radio-button v-model="pln.pilihan_saldo"
                native-value=500000
                type="is-primary is-light is-outlined">
                <!--Button 500rb-->
                  Rp 500.000
              </b-radio-button>
              <b-radio-button v-model="pln.pilihan_saldo"
                native-value=1000000
                type="is-primary is-light is-outlined">
                <!--Button 1jt-->
                  Rp 1.000.000
              </b-radio-button>
            </b-field>
          </div>
        </section>
        <div class="bagian_bawah">
          <select name='kupon' id='kupon_dropdown' v-model="pln.kupon" >
            <!-- <template v-for="kupon in dataDiskon" > -->
                <option v-for="(value, key) in dataDiskon" v-bind:key="key" :value="value.jumlahPotongan" >{{value.nama}}</option>
            <!-- </template> -->
          </select>
          <div class="button_listrik">
            <span style="margin-top:2rem;"><button type="button" id="buttonlistrik" v-on:click="submitForm">Lanjutkan Pembayaran</button></span>
          </div>
        </div>
    </div>
</template>
<script>
import TransactionServices from '@/services/TransactionServices';
import LoginService from "@/services/LoginService";
import axios from "axios";

export default {
  mounted() {
    this.fetchData();
  },
  name : "PLN_Token",
  data() {
    return {
      saldoPilihan : 0,
      dataUser : [],
      pln: {
        nomor_pelanggan: "",
        pilihan_saldo: null,
        kupon: "",
        nama : null,
        saldo_user: null,
        id_user: null,
        jenisVarian : "",
      },
      dataDiskon : [{
        id : null,
        kode : null,
        nama : null,
        jumlahPotongan : null,
      }],
      transactionServices: new TransactionServices(),
      loginService: new LoginService()
    };
  },
  methods : {
    async fetchData() {
      this.transactionServices.removeFromCart()
      this.data = this.loginService.getCurrentUserLoginData();
      this.pln.nama = this.data[0].nama;
      this.pln.id_user = this.data[0].id;

      //axios
      const axiosrequest1 = axios.get(`/users/${this.pln.id_user}`);
      const axiosrequest2 = axios.get('/diskon/');
      axios.all([axiosrequest1, axiosrequest2])
        .then(axios.spread((res1, res2) => {
          this.pln.saldo_user = res1.data.data.saldoYukPay;
          this.dataDiskon = res2.data.data;
        }))
        .catch((error) => {
          console.log(error);
        });
    },
    submitForm() {
      let perbandingan = this.pln.saldo_user
      this.saldoPilihan = this.pln.pilihan_saldo
      if(perbandingan < this.saldoPilihan){
        this.pln.pilihan_saldo = null
        alert("Saldo anda tidak cukup!!")
      } else if (this.pln.nomor_pelanggan == null || this.pln.nomor_pelanggan == "" || this.pln.nomor_pelanggan == " " || this.pln.nomor_pelanggan.length != 12){
          alert("Nomor Token Listrik belum terisi atau tidak valid")
      } else {
        if (this.saldoPilihan == null || this.saldoPilihan == 0){
          alert("Anda belum memilih pilihan saldo!")
        } else {
          if (this.saldoPilihan == 20000){
            this.pln.jenisVarian = "V1"
          } else if (this.saldoPilihan == 50000){
            this.pln.jenisVarian = "V2"
          } else if (this.saldoPilihan == 100000){
            this.pln.jenisVarian = "V3"
          } else if (this.saldoPilihan == 150000){
            this.pln.jenisVarian = "V4"
          } else if (this.saldoPilihan == 500000){
            this.pln.jenisVarian = "V5"
          } else if (this.saldoPilihan == 1000000){
            this.pln.jenisVarian = "V6"
          }
          let dataTransaksi = [];
          dataTransaksi = this.pln
          this.transactionServices.addToCart(dataTransaksi)
          alert("Data :" + this.pln.pilihan_saldo)
          location.replace("/Customer/Transaksi/PLN/Token/Konfirmasi")
        }
      }
    },
  }
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
.all{
    position: relative;
    justify-content: center;
    padding-top: 1rem;
}
.box_atas{
    margin-bottom: 1rem;
}
.saldo_user{
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
#PLN{
  width: 150px;
  height: 150px;
}
#buttonlistrik{
  background-color: #223196;
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
}
.nominal_selection{
  text-align: center;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}
#kupon_dropdown{
  border-radius: 20px;
  color: #223196;
  font-size: 1rem;
  font-weight: bold;
  width: 20rem;
  height: 3rem;
  padding:10px;
}
</style>