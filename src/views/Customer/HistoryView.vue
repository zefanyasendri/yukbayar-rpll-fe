<template>
  <div class="history">
    <div class="container is-fluid">
        <div class="box is-align-content-center is-family-sans-serif">
            <div class="columns is-gapless is-multiline is-mobile">
                <div class="column is-half has-text-left ml-6">
                    <p class="title is-3 has-text-weight-bold">PLN</p>
                    <p class="subtitle is-5">Pembayaran</p>
                </div>
                <div class="column auto has-text-right">
                    <p class="price is-size-3 has-text-weight-bold mr-6 pt-1">-Rp 100.000</p>
                </div>
            </div>
        </div>

        <div class="box is-align-content-center is-family-sans-serif">
            <div class="columns is-gapless is-multiline is-mobile">
                <div class="column is-half has-text-left ml-6">
                    <p class="title is-3 has-text-weight-bold">PLN</p>
                    <p class="subtitle is-5">Pembayaran</p>
                </div>
                <div class="column auto has-text-right">
                    <p class="price is-size-3 has-text-weight-bold mr-6">-Rp 50.000</p>
                </div>
            </div>
        </div>

        <div class="box is-align-content-center is-family-sans-serif">
            <div class="columns is-gapless is-multiline is-mobile">
                <div class="column is-half has-text-left ml-6">
                    <p class="title is-3 has-text-weight-bold">BPJS</p>
                    <p class="subtitle is-5">Pembayaran</p>
                </div>
                <div class="column auto has-text-right">
                    <p class="price is-size-3 has-text-weight-bold mr-6">-Rp 150.000</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

    export default {
    name: 'HistoryView',
    }
</script>

<style scoped>
    .container {
        width: 75%;
        padding-top: 1rem;
    }
    .price, .title, .subtitle {
        color: #1256F9;
    }
</style>
