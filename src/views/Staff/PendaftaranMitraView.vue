<template>
  <div class="all">
    <div class="box">
      <span class="title">Register Mitra</span>
      <br />
      <div class="input_item">
        <label>Identitas Pemilik Usaha</label>
        <div class="input_pendek">
          <input
            type="text"
            v-model="mitra.nama_owner"
            placeholder="Nama Lengkap"
            id="namaowner"
          />
        </div>
        <div class="input_pendek">
          <input
            type="text"
            v-model="mitra.notelp"
            placeholder="Nomor Telepon"
            id="notelp"
          />
        </div>
      </div>
      <div class="input_item">
        <div class="input_panjang">
          <input
            type="text"
            v-model="mitra.email"
            placeholder="Alamat Email"
            id="email"
          />
        </div>
      </div>
      <div class="input_item">
        <div class="input_panjang">
          <input
            type="text"
            v-model="mitra.nama_perusahaan"
            placeholder="Nama Perusahaan"
            id="namaperusahaan"
          />
        </div>
      </div>
      <div class="input_item">
        <label>Jenis Usaha</label>
        <div class="input_pendek">
          <input
            type="text"
            v-model="mitra.bidang_usaha"
            placeholder="Jenis Bidang Usaha"
            id="bidang"
          />
        </div>
        <div class="input_pendek">
          <input
            type="text"
            v-model="mitra.badan_usaha"
            placeholder="Jenis Badan Usaha"
            id="badan"
          />
        </div>
      </div>
      <div class="input_item">
        <div class="input_panjang">
          <input
            type="text"
            v-model="mitra.alamat_perusahaan"
            placeholder="Alamat Perusahaan (Sertakan Kota dan Kode Pos)"
            id="alamat"
          />
        </div>
      </div>
    <button class="btn_style" v-on:click="submitForm">Daftar</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "DaftarMitra",
  data() {
    return {
      mitra: {
        nama_owner: "",
        notelp: "",
        email: "",
        nama_perusahaan: "",
        bidang_usaha: "",
        badan_usaha: "",
        alamat_perusahaan: "",
      },
    };
  },
  methods: {
    submitForm() {
      axios
        .post("/mitras/mitra", {
          pemilikBisnis: this.mitra.nama_owner,
          noTelpon: this.mitra.notelp,
          email: this.mitra.email,
          namaPerusahaan: this.mitra.nama_perusahaan,
          bidangUsaha: this.mitra.bidang_usaha,
          badanUsaha: this.mitra.badan_usaha,
          alamat: this.mitra.alamat_perusahaan,
        })
        .then((response) => {
          const inputs = document.querySelectorAll('#namaowner, #notelp, #email, #namaperusahaan, #bidang, #badan, #alamat');
          console.log(response.data);
          alert("Pendaftaran Mitra Berhasil!!");
          inputs.forEach(input => {
            input.value = '';
          });
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
    font-weight: bold;
}
.box {
  width: 600px;
  height: 450px;
  background-color: #152349;
  margin: 0 auto;
  border-radius: 30px;
}
.title {
  color: #78ffd7;
  border-bottom: 2px solid #78ffd7;
}
.input_item > label {
  color: #78ffd7;
  display: block;
  text-align: left;
  margin-left: 1.5rem;
  margin-bottom: 5px;
}
.input_item {
  padding-top: 1rem;
  padding-bottom: 2rem;
}
.input_pendek {
  width: 15rem;
  height: 1rem;
  background-color: white;
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 15px;
  float: left;
  margin-left: 1.6rem;
}
.input_panjang{
    width: 31.5rem;
  height: 1rem;
  background-color: white;
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 15px;
  float: left;
  margin-left: 1.6rem;
}
.input_panjang > input, .input_pendek > input {
  flex: 1;
  height: 20px;
  border: none;
  outline: none;
  padding-left: 10px;
  color: black;
}
button {
  background-color: #78ffd7;
  border: none;
  border-radius: 1.25rem;
  color: #223196;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  margin: 4px 2px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
    margin-top:1.5rem;
}
button:hover {
  background-color: #6fedc7;
}
</style>