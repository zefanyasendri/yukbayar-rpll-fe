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
                  style="text-align:center;width: 50%;margin:auto;justify-items:center;"></b-input>
              </b-field>
            </div>
        </div>
        <p class="saldo_user">
          Saldo Anda : Rp {{transactionServices.formatPrice(pln.saldo_user)}}
        </p>

        <section>
          <div class="nominal_selection">
            <b-field label="Pilih Nominal">
              <b-radio-button v-model="pln.pilihan_saldo"
                native-value="20000"
                type="is-primary is-light is-outlined">
                <!--Button 20rb-->
                  Rp 20.000
              </b-radio-button>
              <b-radio-button v-model="pln.pilihan_saldo"
                native-value="50000"
                type="is-primary is-light is-outlined">
                <!--Button 50rb-->
                  Rp 50.000
              </b-radio-button>
              <b-radio-button v-model="pln.pilihan_saldo"
                native-value="100000"
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
                native-value="500000"
                type="is-primary is-light is-outlined">
                <!--Button 500rb-->
                  Rp 500.000
              </b-radio-button>
              <b-radio-button v-model="pln.pilihan_saldo"
                native-value="1000000"
                type="is-primary is-light is-outlined">
                <!--Button 1jt-->
                  Rp 1.000.000
              </b-radio-button>
            </b-field>
          </div>
        </section>
        <div class="bagian_bawah">
          <select name='kupon' id='kupon_dropdown' v-model="pln.kupon" >
            <option value='kupon_1'>Kupon 10% YukPay Akhir Bulan</option>
            <option value='kupon_2'>Kupon 5% Anniversary YukBayar</option>
          </select>
          <div class="button_listrik">
            <router-link to="/Customer/Transaksi/PLN/Token/Konfirmasi">
              <span style="margin-top:2rem;"><button type="button" id="buttonlistrik">Lanjutkan Pembayaran</button></span>
            </router-link>
          </div>
        </div>
    </div>
</template>
<script>
import TransactionServices from '@/services/TransactionServices';

export default {
  name : "PLN_Token",
  data() {
    return {
      pln: {
        nomor_pelanggan: "",
        pilihan_saldo: "",
        kupon: "",
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