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
              <h1 class="">No.Meter</h1>
              <h1 class="">Nama User</h1>
              <h1 class="">Stroom Token</h1>
          </div>
        
          <div class="container_2">
              <h1 class="titik2atas">:</h1>
              <h1 class="titik2atas">:</h1>
              <h1 class="titik2atas">:</h1>
          </div>

          <div class="container_3" style="margin-left: 1rem;">
              <h1 class="con_kanan">{{order.nomor_pelanggan}}</h1>
              <h1 class="con_kanan">{{order.nama_user}}</h1>
              <h1 class="con_kanan">{{order.stroom}}</h1>
          </div>
        </div> 
        <div class="tutup">
            <span style="margin-top:2rem;"><button type="button" id="buttontutup" v-on:click="submitForm">Tutup</button></span>
        </div>
    </div>
</template>
<script>
import TransactionServices from '@/services/TransactionServices';

export default {
  mounted() {
    this.fetchData();
  },
  name : "PLN_Token_Konfirmation",
  data() {
    return {
      order: {
        nomor_pelanggan: null,
        id_user : null,
        nama_user: null,
        biaya: null,
        stroom: null,
        saldo_user:null
      },
      transactionServices: new TransactionServices()
    };
  },
  methods : {
    async fetchData() {
      this.data = this.transactionServices.getCurrentTokenTransactionData();
      this.order.nama_user = this.data[0].nama_user
      this.order.saldo_user = this.data[0].saldo_akhir
      this.order.nomor_pelanggan = this.data[0].nomor_pelanggan
      this.order.biaya = this.data[0].biaya_akhir
      this.order.id_user = this.data[0].id_user
      this.order.stroom = this.generateStroom()
    },
    generateStroom(){
      var str = ""
      for(let i = 1; i < 25; i++){
        if ((i%5)==0){
          str += "-"
        } else {
          str += Math.floor(Math.random() * 10).toString()
        }
      }
      return str
    },
    submitForm(){
      this.transactionServices.removeFromCart()
      location.replace("/home")
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
.saldo_user{
  font-weight: bold;
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
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