<template>
    <div class="all">
      <div class="big_container">
        <img id="img_main" src="@/assets/Home/Pajak.png"/>
        <div class='input_content'>
          <h1 id="txt_nomortagihan">Masukkan Nomor Objek Pajak</h1>
          <input type="text" name='input_nomor' id='tagihan_pbb' minlength="18" maxlength="18" style='width: 300px; height: 50px;' oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"/>
          <div id="dropdown_domain">
            <h1>Silahkan Pilih Lokasi</h1>
                <select v-model="selected" class="pilihan_domain" >
                  <option disabled value="">Please select one</option>
                  <option>PBB Kab Bandung</option>
                  <option>PBB Kab Bandung Barat</option>
                  <option>PBB Kab Cirebon</option>
                  <option>PBB Kab Palembang</option>
                  <option>PBB Kab Medan</option>
                </select>
          </div>
          <div id="dropdown_domain">
            <h1>Silahkan Pilih Tahun Pembayaran</h1>
                <select v-model="selected" class="pilihan_domain" >
                  <option disabled value="">Please select one</option>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020</option>
                  <option>2019</option>
                  <option>2018</option>
                  <option>2017</option>
                </select>
          </div>
        </div>
      </div>
      <div class="button_lanjut">
        <router-link to="/Customer/Transaksi/Pajak/Konfirmasi">
          <span style="margin-top:2rem;"><button type="button" id="buttonlanjut">Lanjutkan Pembayaran</button></span>
        </router-link>
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
  justify-content: center;
}
.big_container{
  display: flex;
  justify-content: center;
}
.input_content{
  margin-left: 2rem;
}
#img_main{
    margin-top: 1rem;
  width: 250px;
  height: 250px;
}
h1#txt_nomortagihan{
  font-weight: bold;
}
#tagihan_pbb{
  margin-top: 1rem;
  border-radius: 1rem;
}
input[type='text']{
  font-size: 1.5rem;
  text-align:center;
}
#buttonlanjut{
    background-color: #78FFD7;
    border: none;
    border-radius: 20px;
    color: #152349;
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
.pilihan_domain{
  border-radius: 20px;
  color: #223196;
  font-size: 1rem;
  font-weight: bold;
  width: 20rem;
  height: 3rem;
  padding:0.75rem;
}
#dropdown_domain{
  margin-top:1rem;
}
</style>