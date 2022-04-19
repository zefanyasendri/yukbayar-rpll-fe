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

    <div class="field columns is-family-sans-serif">
      <div class="column is-3 has-text-left mt-3">
        <label class="label subtitle is-4">Name</label>
      </div>
      <div class="column is-1 mt-3"> : </div>
      <div class="control column is-8">
        <input class="input subtitle is-4" type="text" value="Alex Smith" disabled>
      </div>
    </div>

    <div class="field columns is-family-sans-serif">
      <div class="column is-3 has-text-left mt-3">
        <label class="label subtitle is-4">Email</label>
      </div>
      <div class="column is-1 mt-3"> : </div>
      <div class="control column is-8">
        <input class="input subtitle is-4" type="email" value="alexsmith@gmail.com" disabled>
      </div>
    </div>
    
    <div class="field columns is-family-sans-serif">
      <div class="column is-3 has-text-left mt-3">
        <label class="label subtitle is-4">Password</label>
      </div>
      <div class="column is-1 mt-3"> : </div>
      <div class="control column is-8">
        <input class="input subtitle is-4" type="password" value="***************" disabled>
      </div>
    </div>

    <div class="field columns is-family-sans-serif">
      <div class="column is-3 has-text-left mt-3">
        <label class="label subtitle is-4">No. Telp</label>
      </div>
      <div class="column is-1 mt-3"> : </div>
      <div class="control column is-8">
        <input class="input subtitle is-4" type="text" value="081549384953" disabled>
      </div>
    </div>

    <div class="field columns is-family-sans-serif">
      <div class="column is-3 has-text-left mt-3">
        <label class="label subtitle is-4">Tgl. Lahir</label>
      </div>
      <div class="column is-1 mt-3"> : </div>
      <div class="control column is-8">
        <input class="input subtitle is-4" type="text" value="17 - 8 - 2001" disabled>
      </div>
    </div>

    <div class="field columns is-family-sans-serif">
      <div class="column is-3 has-text-left mt-3">
        <label class="label subtitle is-4">Gender</label>
      </div>
      <div class="column is-1 mt-3"> : </div>
      <div class="control column is-8">
        <input class="input subtitle is-4" type="text" value="Laki-laki" disabled>
      </div>
    </div>

    <div class="field">
      <p class="control">
        <router-link to="/Profile/Update">
          <button class="button is-rounded has-text-weight-bold subtitle is-5">Ubah Profile</button>
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>

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
    padding: 1rem 5rem;
  }
  .button:hover {
    color: white;
    background-color: #192676;
  }
  .input {
    background-color: rgb(250, 250, 250);
  }
</style>