<template>
    <div class="all">
      <img id="PLN" src="@/assets/Home/PLN.png"/>
      <h1 id="txt_nomortoken">Masukkan Nomor Meter</h1>
      <input type="text" name='input_notagihan' v-model="pln.nomor_pelanggan" id='tagihan_pln' style='width: 300px; height: 50px;'/>
      <div class="button_listrik">
        <router-link to="/Customer/Transaksi/PLN/Tagihan/Konfirmasi">
          <span style="margin-top:2rem;"><button type="button" id="buttonlistrik">Lanjutkan Pembayaran</button></span>
        </router-link>
      </div>
    </div>
</template>
<script>

export default {
  name : "PLN_Tagihan",
  data() {
    return {
      pln: {
        nomor_pelanggan: ""
      },
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
    padding-top: 1rem;
}
#PLN{
  width: 200px;
  height: 200px;
}
#buttonlistrik{
    background-color: #223196;
    border: none;
    border-radius: 20px;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
    margin: 4px 2px;
    margin-top: 2rem;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
}
h1#txt_nomortoken{
    position : relative;
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    font-family: system-ui, sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    padding : 2px;
}
#tagihan_pln{
    margin-top: 1rem;
    border-radius: 25px;
    padding : 20px
}
</style>