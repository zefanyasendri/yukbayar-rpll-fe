<template>
  <div class="history">
    <div class="container is-fluid">
      <div
        class="box is-align-content-center is-family-sans-serif"
        v-for="i in history"
        :key="i"
      >
        <div class="columns is-gapless is-multiline is-mobile">
          <div class="column is-half has-text-left ml-6">
            <p class="title is-3 has-text-weight-bold">
              {{ i.jenisTransaksi }}
            </p>
            <p class="subtitle is-5">{{ i.status }}</p>
          </div>

          <div class="column auto has-text-right ml-6">
            <p class="price is-size-3 has-text-weight-bold mr-6">
              -Rp {{ i.jumlahBayar }}
            </p>
            <p class="subtitle is-5 mr-6">2022-05-09 22:13:04</p>
          </div>

          <!-- <div class="column auto has-text-right">
            <p class="price is-size-3 has-text-weight-bold mr-6">
              -Rp {{ i.jumlahBayar }}
            </p>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HistoryView",
  data() {
    return {
      history: [
        {
          jenisTransaksi: "PLN",
          status: "Pembayaran",
          jumlahBayar: "100.000",
        },
        {
          jenisTransaksi: "PLN",
          status: "Pembayaran",
          jumlahBayar: "50.000",
        },
        {
          jenisTransaksi: "BPJS",
          status: "Pembayaran",
          jumlahBayar: "150.000",
        },
      ],
    };
  },
};
</script>

<style scoped>
  .container {
    width: 75%;
    padding-top: 1rem;
  }
  .title,
  .subtitle {
    color: #1256f9;
  }
  .price,
  .out {
    color: red;
  }
  .in {
    color: green;
  }
</style>
