<template>
<div class="income">
    <section class="section">
        <div class="container">
            <div class="columns mt-1 is-12 is-variable is-centered is-family-sans-serif">
                <div class="column is-4-tablet is-4-desktop">
                    <div class="card">
                        <div class="card-content">
                            <div class="countTopUp" v-for="i in dataTopUp" :key="i">
                                    {{countTopUp(i.nominal)}}
                                </div>
                            <p class="title is-4 pt-5">Rp {{transactionServices.formatPrice(transactionServices.countPendapatan(dataTransaksi)+changeTotalFormat(total))}}</p>
                            <p class="subtitle is-uppercase pt-5 is-5">pendapatan seluruh</p>
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
            dataTransaksi: [
                {
                    id_transaksi: null,
                }],
            dataTopUp: [
                {
                    nominal: null,
                }],
                total: 0,
            transactionServices: new TransactionServices()
        };
    },
    methods: {
        async fetchData() {
            const axiosrequest1 = axios.get('/transaksi');
            const axiosrequest2 = axios.get('/topup');
            axios.all([axiosrequest1, axiosrequest2])
                .then(axios.spread((res1, res2) => {
                this.dataTransaksi = res1.data.data;
                this.dataTopUp = res2.data.data;
                }))
                .catch((error) => {
                console.log(error);
                });
        },
        countTopUp(nominalTopup){
            this.total += nominalTopup
        },
        changeTotalFormat(nominalTotal){
            var strTotal = nominalTotal.toString()
            var substrTotal = strTotal.substr(2)
            return(parseInt(substrTotal))
        }
    },
};
</script>
<style scoped>
    .container {
        width: 75%;
        padding-top: 1rem;
    }
</style>