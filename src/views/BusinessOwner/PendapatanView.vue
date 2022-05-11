<template>
<div class="income">
    <section class="section">
        <div class="container">
            <div class="columns mt-1 is-12 is-variable is-centered is-family-sans-serif">
                <div class="column is-4-tablet is-4-desktop">
                    <div class="card">
                        <div class="card-content">
                            <p class="title is-4 pt-5">Rp {{transactionServices.countPendapatan(data)}}</p>
                            <p class="subtitle is-uppercase pt-5 is-5">pendapatan seluruh transaksi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>  
</div>

</template>
<script>
import axios from "axios";
import TransactionServices from "@/services/TransactionServices";

export default {
    name : "PendapatanBO",
    mounted() {
        this.fetchData();
    },
    data() {
        return {
        data: [
        {
          id_transaksi: null,
        }],
        transactionServices: new TransactionServices()
        };
    },
    methods: {
        async fetchData() {
            axios
                .get("/transaksi")
                .then((response) => (this.data = response.data.data))
                .catch((error) => {
                console.log(error);
            });
        },
    },
};
</script>
<style scoped>
    .container {
        width: 75%;
        padding-top: 1rem;
    }
</style>