<template>
    <div class="all">
        <div class="pembayaran_berhasil">
          <p>Top Token </p>
        </div>
        <h1 style="font-weight:bold;">Berikut Kode Virtual Account Anda</h1>
        <h1 id='jumlah_pembayaran'>{{dataToken.kodeyukpay}}</h1>
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
              <h1 class="con_kanan">{{data.nama_user}}</h1>
              <h1 class="con_kanan">Rp {{transactionServices.formatPrice(data.saldoPembelian)}}</h1>
          </div>
        </div> 
        <div class="tutup">
            <router-link to="/">
              <span style="margin-top:2rem;"><button type="button" id="buttontutup" v-on:click="submitForm">Selesai</button></span>
            </router-link>
        </div>
    </div>
</template>
<script>
import TransactionServices from '@/services/TransactionServices';

export default {
  name : "TopUpToken",
  data() {
    return {
      data: {
        id_user : "594486395839",
        nama_user: "Hanx Xxxxxx Sxxxxx Xxxba",
        saldoPembelian: 92000
      },
      transactionServices: new TransactionServices(),
      dataToken:{
          kodeyukpay:"102938 1209183092830912893021389012"
      }
    };
  },
  methods: {
      submitForm(){
          alert("Ya Selesai, mo gmn lagi")
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
    font-size:1.25rem;
    font-weight: bold;
    background:#78FFD7;
    border-radius: 2rem;
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