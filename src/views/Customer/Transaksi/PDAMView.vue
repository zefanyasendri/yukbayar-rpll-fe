<template>
    <div class="all">
      <div class="big_container">
        <img id="img_main" src="@/assets/Home/PDAM.png"/>
        <div class='input_content'>
          <h1 id="txt_nomortagihan">Masukkan Nomor Pelanggan</h1>
          <input type="text" name='input_nomor' id='tagihan_pdam' maxlength="20" style='width: 300px; height: 50px;' oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"/>
          <div id="dropdown_lokasi">
            <h1>Silahkan Pilih Lokasi</h1>
                <select v-model="selected" class="pilihan_lokasi" >
                  <option disabled value="">Please select one</option>
                  <option>Jawa Barat - Kab Sumedang</option>
                  <option>Sulawesi - Kota Palopo</option>
                  <option>Jawa Timur - Kab Tulangagung</option>
                  <option>Sumatra - Kota Jambi</option>
                  <option>DKI Jakarta - PALYJA</option>
                  <option>Jawa Tengah - Kab Purbalingga</option>
                  <option>Jawa Timur - Kota Mojokerto</option>
                  <option>Kalimantan Timur - Kab Paser</option>
                  <option>Jawa Barat - Kab Bandung</option>
                  <option>Jawa Tengah - Kab Tegal</option>
                  <option>Jawa Tengah - Kab Temanggung</option>
                  <option>Jawa Timur - Kab Tuban</option>
                </select>
          </div>
        </div>
      </div>
      <div class="button_lanjut">
        <router-link to="/Customer/Transaksi/PDAM/Konfirmasi">
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
  width: 250px;
  height: 250px;
}
h1#txt_nomortagihan{
  font-weight: bold;
}
#tagihan_pdam{
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
.pilihan_lokasi{
  border-radius: 20px;
  color: #223196;
  font-size: 1rem;
  font-weight: bold;
  width: 20rem;
  height: 3rem;
  padding:0.75rem;
}
#dropdown_lokasi{
  margin-top:2rem;
}
</style>