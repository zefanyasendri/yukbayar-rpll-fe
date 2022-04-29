<template>
    <div class="all">
      <div class="bagian_kiri">
        <h1 class="text_green">Informasi Pelanggan</h1>
        <div class="big_container">
          <div class="container_1">
              <h1 class="">No. BPJS</h1>
              <h1 class="">Sampai Dengan</h1>
              <h1 class="">ID User</h1>
              <h1 class="">Nama User</h1>
          </div>
        
          <div class="container_2">
              <h1 class="titik2atas">:</h1>
              <h1 class="titik2atas">:</h1>
              <h1 class="titik2atas">:</h1>
              <h1 class="titik2atas">:</h1>
          </div>

          <div class="container_3" style="margin-left: 1rem;">
              <h1 class="con_kanan">{{order.nomor_bpjs}}</h1>
              <h1 class="con_kanan">{{order.waktu_pilihan}}</h1>
              <h1 class="con_kanan">{{order.id_user}}</h1>
              <h1 class="con_kanan">{{order.nama_user}}</h1>
          </div>
          
        </div> 
        <h1 class="text_green">Detail Pembayaran</h1>

        <div class="big_container">
          
          <div class="container_1">
              <h1 class="">Biaya BPJS</h1>
              <h1 class="">Biaya Transaksi</h1>
              <h1 style='font-weight:bold;'>Total Pembayaran</h1>
              <h1 style='font-weight:bold;'>Saldo Anda</h1>
              <h1 style='font-weight:bold;'>Saldo Akhir</h1>
          </div>
        
          <div class="container_2">
              <h1>:</h1>
              <h1>:</h1>
              <h1>:</h1>
              <h1>:</h1>
              <h1>:</h1>
          </div>

          <div class="container_3" style="margin-left: 1rem;">
              <h1 class="con_kanan">Rp {{transactionServices.formatPrice(order.biaya_bpjs)}}</h1>
              <h1 class="con_kanan">Rp {{transactionServices.formatPrice(order.biaya_administrasi)}}</h1>
              <h1 class="con_kanan">Rp {{transactionServices.formatPrice(order.biaya_bpjs + order.biaya_administrasi)}}</h1>
              <h1 class="con_kanan" style='color:blue;'>Rp {{transactionServices.formatPrice(order.saldo_user)}}</h1>
              <h1 class="con_kanan">Rp {{transactionServices.formatPrice(order.saldo_user - (order.biaya_bpjs + order.biaya_administrasi))}}</h1>
          </div>
        </div>
      </div>
      <div class="bagian_kanan">
        <div class="button_pembayaran">
            <router-link to="/Customer/Transaksi/BPJS/Konfirmasi/Berhasil">
              <span style="margin-top:50%;"><button type="button" id="button_lanjut_pembayaran">Konfirmasi</button></span>
            </router-link>
            <router-link to="/Customer/Transaksi/BPJS">
              <span style="margin-top:2rem;"><button type="button" id="button_batal_pembayaran">Batal</button></span>
            </router-link>
        </div>
      </div>
    </div>
</template>
<script>
import TransactionServices from '@/services/TransactionServices';

export default {
  name : "BPJS_Konfirmation",
  data() {
    return {
      order: {
        nomor_bpjs: "0110152090512345",
        waktu_pilihan : "April 2022",
        id_user : "594486395839",
        nama_user: "Hanx Xxxxxx Sxxxxx Xxxba",
        biaya_bpjs: 100000,
        biaya_administrasi : 2000,
        saldo_user: 200000
      },
      transactionServices: new TransactionServices()
    };
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
.all{
    margin-top: -1rem;
    margin-left: 7rem;
    text-align: left;
    display:flex;
    position:relative;
}
.saldo_user{
  font-weight: bold;
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.text_green{
    font-size:1.25rem;
    font-weight: bold;
    background:#78FFD7;
    border-radius: 2rem;
    padding: 1rem;
}
.container_1{
    width: 250px;
    font-size:1.25rem;
    border: 2px solid white;
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
    margin-bottom: -0.15%;
}
.big_container{
    display:flex;
}
h1{
    margin-top: 1rem;
    margin-bottom: 1rem;
}
.bagian_kiri{
    float:left;
}
.bagian_kanan{
  margin:auto;
  display:block;
  text-align: center;
  align-items: center;
}
.button_pembayaran{
  top: 50%;
  position:relative;
}
#button_lanjut_pembayaran{
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
#button_batal_pembayaran{
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