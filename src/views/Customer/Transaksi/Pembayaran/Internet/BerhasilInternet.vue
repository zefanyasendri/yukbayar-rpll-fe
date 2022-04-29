<template>
    <div class="all">
          <div class="pembayaran_berhasil">
            <p>Pembayaran Berhasil <img id='logo_berhasil' src="@/assets/clarity_success-standard-solid.png"/></p>
          </div>
        <h1 id='jumlah_pembayaran'>Rp {{transactionServices.formatPrice(order.biaya)}}</h1>
        <p class="saldo_user">
          Saldo Anda : Rp {{transactionServices.formatPrice(order.saldo_user)}}
        </p>
        <div class="big_container" style=''>
          <div class="container_1">
              <h1 class="">No. Pelanggan</h1>
              <h1 class="">Domain</h1>
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
              <h1 class="con_kanan">{{order.nomor_pelanggan}}</h1>
              <h1 class="con_kanan">{{order.pilihan_domain}}</h1>
              <h1 class="con_kanan">{{order.id_user}}</h1>
              <h1 class="con_kanan">{{order.nama_user}}</h1>
          </div>
        </div> 
        <div class="tutup">
            <router-link to="/">
              <span style="margin-top:2rem;"><button type="button" id="buttontutup">Tutup</button></span>
            </router-link>
        </div>
    </div>
</template>

<script>
import TransactionServices from '@/services/TransactionServices';

export default {
  name : "Internet_Berhasil",
  data() {
    return {
      order: {
        nomor_pelanggan: "0110152090512345",
        pilihan_domain: "MyRepublic",
        id_user : "594486395839",
        nama_user: "Hanx Xxxxxx Sxxxxx Xxxba",
        biaya: 102000,
        saldo_user: 98000
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
    position:relative;
}
.saldo_user{
  font-weight: bold;
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
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
    margin-bottom: -0.15rem;
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