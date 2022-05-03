<template>
<div class="income">
    <section class="section">
        <div class="container">
            <div class="columns mt-1 is-12 is-variable is-centered is-family-sans-serif">
                <div class="column is-4-tablet is-4-desktop">
                    <div class="card">
                        <div class="card-content">
                            <p class="title is-4 pt-5">Rp {{transactionServices.formatPrice(income.sebulan)}}</p>
                            <p class="subtitle is-uppercase pt-5 is-5">pendapatan selama 30 hari terakhir</p>
                        </div>
                    </div>
                </div>

                <div class="column is-4-tablet-is-4-desktop">
                    <div class="card">
                        <div class="card-content">
                            <p class="title is-4 pt-5">{{income.penggunaaktifsebulan}}</p>
                            <p class="subtitle is-5 is-uppercase pt-5">pengguna yang aktif selama 30 hari terakhir</p>
                        </div>
                    </div>
                </div>

                <div class="column is-4-tablet-is-4-desktop">
                    <div class="card">
                        <div class="card-content">
                            <p class="title is-4 pt-5">{{income.transaksisebulan}}</p>
                            <p class="subtitle is-uppercase pt-5 is-5">transaksi selama 30 hari terakhir</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="columns mt-5 is-12 is-variable is-centered is-family-sans-serif">
                <div class="column is-4-tablet is-4-desktop">
                    <div class="card">
                        <div class="card-content">
                            <p class="title is-4 pb-5 pt-5">
                                Rp {{transactionServices.formatPrice(income.perkiraanbeban)}} 
                            </p>
                            <p class="subtitle is-uppercase pt-5 is-5">perkiraan beban sebulan</p>
                        </div>
                    </div>
                </div>

                <div class="column is-4-tablet-is-4-desktop">
                    <div class="card">
                        <div class="card-content">
                            <p class="title is-4 pb-5 pt-5">Rp {{transactionServices.formatPrice(income.perkiraanpenghasilan-income.perkiraanbeban)}} - Rp {{transactionServices.formatPrice(income.perkiraanpenghasilan+income.perkiraanbeban)}}</p>
                            <p class="subtitle is-5 is-uppercase pt-5">perkiraan penghasilan sebulan</p>
                        </div>
                    </div>
                </div>

                <div class="column is-4-tablet-is-4-desktop">
                    <div class="card">
                        <div class="card-content">
                            <p class="title is-4 pt-5">Rp {{transactionServices.formatPrice((income.perkiraanpenghasilan-income.perkiraanbeban) * 12)}} - Rp {{transactionServices.formatPrice((income.perkiraanpenghasilan+income.perkiraanbeban) * 12)}}</p>
                            <p class="subtitle is-uppercase pt-5 is-5">perkiraan penghasilan setahun</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>  
</div>

</template>
<script>

    import TransactionServices from "@/services/TransactionServices"

    export default {
    name : "PendapatanBO",
    data() {
        return {
        income: {
            sebulan: 508000,
            penggunaaktifsebulan: 307,
            transaksisebulan: 254,
            perkiraanbeban: 139000,
            perkiraanpenghasilan: 567000
        },
        transactionServices: new TransactionServices()
        };
    },
    };
</script>
<style scoped>
    .container {
        width: 75%;
        padding-top: 1rem;
    }
</style>