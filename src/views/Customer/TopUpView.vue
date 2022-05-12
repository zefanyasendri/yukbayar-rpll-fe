<template>
  <div class="all">
    <div class="box_saldo">
      <p class="saldo">Saldo YukPay 
          <span style="font-weight: bold; color:#223196 ; padding-left: 3%;"> Rp 1.975.000 </span>
      </p>
    </div>
    <p class="metode_topup">Pilih Metode Top Up</p>
    <div class="form_control" style="font-size:1.5rem">
      <div class="box_method"><input type="radio" name="radio_metode" value="M-Banking BCA" v-model="topupData.metode"/> M-Banking BCA </div>
      <div class="box_method"><input type="radio" name="radio_metode" value="M-Banking Mandiri" v-model="topupData.metode"/> M-Banking Mandiri</div>
    </div>
    
    <p class="nominal_topup">Pilih Nominal Top Up</p>
    <div class="form_control" style="font-size:1.5rem">
        <div class="box_nominal"><input type="radio" name="radio_nominal" value=100000 v-model.number="topupData.nominal"/> Rp 100.000 </div>
        <div class="box_nominal"><input type="radio" name="radio_nominal" value=200000 v-model.number="topupData.nominal"/> Rp 200.000 </div>
        <div class="box_nominal"><input type="radio" name="radio_nominal" value=500000 v-model.number="topupData.nominal"/> Rp 500.000 </div>
        <div class="box_nominal"><input type="radio" name="radio_nominal" value=1000000 v-model.number="topupData.nominal"/> Rp 1.000.000 </div>
    </div>
  <br>
      <!-- <a href="/topup/pembayaran"> -->
        <span style="margin-top:2rem;">
          <button type="button" id="buttontopup" v-on:click="submitForm">Top Up Sekarang!</button>
        </span>
      <!-- </a> -->
  </div>
</template>

<script>
import axios from "axios";
import LoginService from "@/services/LoginService.js";

export default {
  name: "SignUp",
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      // id: "",
      topupData: {
        metode: null,
        nominal: 0.0,
        status: "Pending",
        id_pengguna: "",
      },
      loginService: new LoginService(),
    };
  },
  methods: {
    async fetchData() {
      this.data = this.loginService.getCurrentUserLoginData();
      this.topupData.id_pengguna = this.data[0].id;
      const res = await axios.get("/users/" + this.id);
      this.dataProfile = res.data.data;
      console.log(this.topupData.id_pengguna);
    },
    submitForm() {
      axios
        .post("/topups/topup", {
          metode: this.topupData.metode,
          nominal: this.topupData.nominal,
          status: this.topupData.status,
          id_pengguna: this.topupData.id_pengguna,
        })
        .then((response) => {
          console.log(response.data);
          alert("Silahkan lakukan Pembayaran!");
          // location.replace("/login");

        })
        .catch((error) => {
          console.log(error);
        });
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
.all{
    padding-top: 2rem;
}
.box_saldo{
    display: flex;
    justify-content: center;
}
.saldo{
    width : 500px;
    font-size: 2rem;
    border: 2px solid;
    border-radius: 10px;
}
.metode_topup{
    padding-top: 3rem;
    font-size: 1.85rem;
    text-align: center;
    font-weight: bold;
}
.nominal_topup{
    padding-top: 3rem;
    font-size: 1.85rem;
    text-align: center;
    font-weight: bold;
}
.form_control{
    position : relative;
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    font-family: system-ui, sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    padding : 2px;
}
.box_method{
    border: 2px solid;
    border-radius: 10px;
    margin:10px;
    width: 300px;
}
.box_nominal{
    border: 2px solid;
    border-radius: 10px;
    margin:10px;
    width: 200px;
}
#buttontopup{
    margin-top: 2rem;
    background-color: #78FFD7;
    border: none;
    color: #152349;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    font-weight: bold;
    border-radius: 20px;
}
#buttontopup:hover {
  background-color: #6fedc7;
}
</style>