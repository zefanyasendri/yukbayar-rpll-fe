<template>
    <div class="all">
        <div class="box_atas">
            <img id="PLN" src="@/assets/Home/PLN.png"/>
            <div class="box_atas_2">
              <h1 id="txt_nomortoken">Masukkan Nomor Meter</h1>
              <input type="text" name='input_notagihan' id='input_tagihan_pln' style='width: 300px; height: 50px; display: flex;' maxlength="12" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" />
              <!--Max Length di set ke 12 karna biasanya nomor tagihan PLN itu 12 angkaw-->

              <h1 id="txt_nomortoken" style="margin-top: 1.5rem;">
                Pilih Nominal
              </h1>

              <section>
                <div class="all_radio">
                  <!--Bagi Kelompok Radio Button (Bagian Atas)-->
                  <div class='top_radio'>
                    <!--Button 20rb-->
                    <span class="border_atas"><input type="radio" name='select' id='c_01' value='1'>
                    <label for='c_01'>
                      <h2>
                        Rp 20.000
                      </h2>
                    </label>
                    </span>
                    <span class="border_atas">
                    <!--Button 50rb-->
                    <input type="radio" name='select' id ='c_02' value='2'>
                    <label for='c_02'>
                      <h2>
                        Rp 50.000
                      </h2>
                    </label>
                    </span>
                    <span class="border_atas">
                    <!--Button 100rb-->
                    <input type="radio" name='select' id='c_03' value='3'>
                    <label for='c_03'>
                      <h2>
                        Rp 100.000
                      </h2>
                    </label>
                    </span>
                  </div>
                  <!--Bagi Kelompok Radio Button (Bagian Bawah)-->
                  <div class='bot_radio'>
                    <!--Button 150rb-->
                    <span class="border_atas">
                    <input type="radio" name='select' id='c_04' value='4'>
                    <label for='c_04'>
                      <h2>
                        Rp 150.000
                      </h2>
                    </label>
                    </span>
                    <span class="border_atas">
                    <!--Button 500rb-->
                    <input type="radio" name='select' id='c_05' value='5'>
                    <label for='c_05'>
                      <h2>
                        Rp 500.000
                      </h2>
                    </label>
                    </span>
                    <span class="border_atas">
                    <!--Button 1jt-->
                    <input type="radio" name='select' id='c_06' value='6'>
                    <label for='c_06'>
                      <h2>
                        Rp 1.000.000
                      </h2>
                    </label>
                    </span>
                  </div>
                </div>
              </section>
            </div>
        </div>
        <div class="bagian_bawah">
          <select name='kupon' id='kupon_dropdown' >
            <option value='kupon_1'>Kupon 10% YukPay Akhir Bulan</option>
            <option value='kupon_2'>Kupon 5% Anniversary YukBayar</option>
          </select>
          <div class="button_listrik">
            <router-link to="/Transaksi/PLN/Token/Konfirmasi">
              <span style="margin-top:2rem;"><button type="button" id="buttonlistrik">Lanjutkan Pembayaran</button></span>
            </router-link>
          </div>
        </div>
    </div>
</template>

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
    position: relative;
}
.box_atas{
    display:flex;
}
.box_atas_2{
  margin-left: 2rem;
  position:relative;
}
#PLN{
  margin-left: 4rem;
  width: 200px;
  height: 200px;
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
h1#txt_nomortoken{
  position : relative;
  display: flex;
  margin-top: 1rem;
  font-family: system-ui, sans-serif;
  font-size: 2rem;
  font-weight: bold;
  padding : 0.125rem;
}
h2{
  font-size: 1.5rem;
}
#input_tagihan_pln{
  position:relative;
  margin-top: 1rem;
  border-radius: 25px;
  box-shadow: 1px 1px black;
  padding : 1rem;
  text-align: center;
  font-size: 1.125rem;
}
.all_radio{
  margin: 1rem 1rem 2rem;
  position:relative;
}
.top_radio{
  display: flex;
}
.bot_radio{
  display: flex;
}
input[type="radio"]{
  opacity: 0.01;
  z-index: 100;
  cursor: pointer;
  border: 2px solid red !important;
  border-radius: 1rem;
}
input[type='radio']:checked+label,.Checked+label{
  background: #223196;
  color: white;
}
.border_atas{
  display: flex;
  justify-content: center;
  border: 2px solid black;
  width: 12rem;
  border-radius: 1rem;
  margin: 1rem;
}
.bagian_bawah{
  display: flex;
  position: relative;
  margin-left: 10%;
}
#kupon_dropdown{
  border-radius: 20px;
  color: #223196;
  font-size: 1rem;
  font-weight: bold;
  width: 20rem;
  height: 3rem;
  padding:10px;
  margin-top: 2.1rem;
  margin-right: 10%;
}
</style>