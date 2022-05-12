<template>
    <div class="all">
        <div class="pembayaran_berhasil title is-3">
          <p>Top Up Token </p>
        </div>
        <h1 style="font-weight:bold;">Berikut Kode Virtual Account Anda</h1>
        <h1 id='jumlah_pembayaran'>{{token}}</h1>
        <div class="big_container" style=''>
          <div class="container_1">
              <h1 class="">Nama User</h1>
              <h1 class="">Saldo Pembelian</h1>
          </div>
        
          <div class="container_2">
              <h1 class="titik2atas">:</h1>
              <h1 class="titik2atas">:</h1>
          </div>

          <div class="container_3" style="margin-left: 1rem;">
              <h1 class="con_kanan">{{nama}}</h1>
              <h1 class="con_kanan">Rp {{transactionServices.formatPrice(jumlahTopUp)}}</h1>
          </div>
        </div> 
        <div class="tutup">
          <span style="margin-top:2rem;"><button type="button" id="buttontutup" v-on:click="submitForm">Selesai</button></span>
        </div>
    </div>
</template>
<script>
import TransactionServices from '@/services/TransactionServices';
import TokenDataService from "@/services/TokenDataService.js";
import LoginService from "@/services/LoginService.js";
import axios from "axios";

export default {
  name : "TopUpToken",
  mounted(){
    this.fetchData();
  },
  data() {
    return {
      tokenDataService: new TokenDataService(),
      transactionServices: new TransactionServices(),
      loginService: new LoginService(),
      tokenId: "",
      nama:"",
      jumlahTopUp: null,
      token:"",
      saldo: null,
    };
  },
  methods: {
      async fetchData() {
        this.data = this.loginService.getCurrentUserLoginData();
        this.tokenId = this.tokenDataService.getCurrentTokenId();
        this.nama = this.data[0].nama;
        this.id = this.data[0].id;
        this.saldo = this.data[0].saldoYukPay;
        axios
          .get(`/topup/${this.tokenId}`)
          .then((response) => {
            this.token = response.data.data.kodeYukPay;
            this.jumlahTopUp = response.data.data.nominal;
          })
          .catch((error) => {
            console.log(error);
            alert(error);
          });
      },
      submitForm(){
          axios
            .put(`/topups/${this.id}/${this.tokenId}`, {
              saldoYukPay: this.jumlahTopUp,
            })
            .then((response) => {
              alert("Berhasil");
              this.tokenDataService.removeTokenId();
              console.log(response);
              location.replace("/home");
            })
            .catch((error) =>  {
              console.log(error);
              alert(error);
            });
      }
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
    position:relative;
}
.pembayaran_berhasil{
    font-weight: bold;
    background:#78FFD7;
    padding: 1rem;
    width : 300px;
    justify-content: center;
    margin: auto;
}
#logo_berhasil{
    width:25px;
    height:25px;
    padding-top: 5px;
}
h1{
    margin-top: 1rem;
}
h1#jumlah_pembayaran{
    margin-top:1rem;
    font-size:2rem;
    font-weight:bold;
}
.big_container{
    margin-top: 1rem;
    display:flex;
    text-align:left;
    justify-content: center;
}
.container_1{
    width: 250px;
    font-size:1.25rem;
}
.container_2{
    font-size:1.25rem;
}
.container_3{
    width: 300px;
    font-size:1.25rem;
}
.con_kanan{
    padding-left: 1rem;
    border: 1px solid white;
    box-shadow: 1px 0.5px 2px 0 black;
}
#buttontutup{
  background-color: #223196;
  border: none;
  border-radius: 1.25rem;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  margin: 4px 2px;
  margin-top: 3rem;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
}
</style>