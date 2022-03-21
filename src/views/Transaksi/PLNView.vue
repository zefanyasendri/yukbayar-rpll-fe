<template>
    <div class="all">
      <img id="PLN" src="@/assets/Home/PLN.png"/>
      <div class="button_listrik">
        <router-link to="/Transaksi/PLN/Token">
          <span style="margin-top:2rem;"><button type="button" id="buttonlistrik">Token Listrik</button></span>
        </router-link>
        <router-link to="/Transaksi/PLN/Tagihan">
          <span style="margin-top:2rem;"><button type="button" id="buttonlistrik">Tagihan Listrik</button></span>
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
    padding-top: 3.5rem;
}
#PLN{
  width: 200px;
  height: 200px;
}
#buttonlistrik{
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
</style>