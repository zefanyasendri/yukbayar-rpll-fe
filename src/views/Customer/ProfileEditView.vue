<template>
  <div class="container is-max-desktop">

    <div class="columns">
      <div class="column is-5"></div>
      <div class="column is-1 mt-3">
        <figure class="image is-128x128">
          <img src="https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg">
        </figure>
      </div>
    </div>

    <div class="columns">
      <div class="column is-12">
        <div class="field">
          <p class="control">
            <button class="button is-rounded has-text-weight-bold subtitle is-5">Unggah Foto</button>
          </p>
        </div>
      </div>
    </div>

    <div class="field columns is-family-sans-serif">
      <div class="column is-3 has-text-left mt-3">
        <label class="label subtitle is-4">Name</label>
      </div>
      <div class="column is-1 mt-3"> : </div>
      <div class="control column is-8">
        <input class="input subtitle is-4" type="text" :value="dataProfile.nama">
      </div>
    </div>

    <div class="field columns is-family-sans-serif">
      <div class="column is-3 has-text-left mt-3">
        <label class="label subtitle is-4">Email</label>
      </div>
      <div class="column is-1 mt-3"> : </div>
      <div class="control column is-8">
        <input class="input subtitle is-4" type="email" :value="dataProfile.email" disabled>
      </div>
    </div>
    
    <div class="field columns is-family-sans-serif">
      <div class="column is-3 has-text-left mt-3">
        <label class="label subtitle is-4">Password Lama</label>
      </div>
      <div class="column is-1 mt-3"> : </div>
      <div class="control column is-8">
        <input class="input subtitle is-4" type="password" :value="profileServices.hidePassword(dataProfile.password)">
      </div>
    </div>

    <div class="field columns is-family-sans-serif">
      <div class="column is-3 has-text-left mt-3">
        <label class="label subtitle is-4">Password Baru</label>
      </div>
      <div class="column is-1 mt-3"> : </div>
      <div class="control column is-8">
        <input class="input subtitle is-4" type="password" :value="profileServices.hidePassword(dataProfile.password)">
      </div>
    </div>

    <div class="field columns is-family-sans-serif">
      <div class="column is-3 has-text-left mt-3">
        <label class="label subtitle is-4">No. Telp</label>
      </div>
      <div class="column is-1 mt-3"> : </div>
      <div class="control column is-8">
        <input class="input subtitle is-4" type="text" :value="dataProfile.noTelpon">
      </div>
    </div>

    <div class="field columns is-family-sans-serif">
      <div class="column is-3 has-text-left mt-3">
        <label class="label subtitle is-4">Tgl. Lahir</label>
      </div>
      <div class="column is-1 mt-3"> : </div>
      <div class="control column is-8">
        <input class="input subtitle is-4" type="text" :value="dataProfile.tglLahir" disabled>
      </div>
    </div>

    <div class="field columns is-family-sans-serif">
      <div class="column is-3 has-text-left mt-3">
        <label class="label subtitle is-4">Gender</label>
      </div>
      <div class="column is-1 mt-3"> : </div>
      <div class="control column is-8">
        <input class="input subtitle is-4" type="text" :value="dataProfile.gender" disabled>
      </div>
    </div>

    <div class="field">
      <p class="control">
        <router-link to="/Profile">
          <button class="button is-rounded has-text-weight-bold subtitle is-5">Simpan</button>
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import ProfileServices from "@/services/ProfileServices"

  export default {
    mounted() {
      this.fetchData();
    },
    data() {
      return {
        dataProfile: [],
        profileServices: new ProfileServices(),
      };
    },
    methods: {
      async fetchData() {
        const res = await axios.get("/users/1");
        this.dataProfile = res.data.data;
      },
    },
  };
</script>

<style scoped>
  .container {
        padding-top: 1rem;
  }
  .input {
    cursor: auto;
  }
  .button {
    background-color: #223196;
    color: white;
    padding: 1rem 4rem;
  }
  .button:hover {
    color: white;
    background-color: #192676;
  }
</style>