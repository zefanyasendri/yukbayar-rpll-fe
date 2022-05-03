<template>
<div class="all">     
    <div class="tile is-ancestor">
        <div class="tile is-vertical"  style="width:30rem;height:20rem;margin-left:2%;margin-right:2%;">
            <div class="tile">
                <div class="tile is-parent is-vertical">
                    <article class="tile is-child notification">
                        <div class="box" style="height:8rem;">
                            <article class="media">
                                <div class="media-content">
                                    <div class="content">
                                        <p>
                                        <strong>Rp {{transactionServices.formatPrice(income.sebulan)}}</strong>
                                        <br><br>
                                        <span style="text-transform:uppercase;"> pendapatan selama 30 hari terakhir</span>
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </article>
                    <article class="tile is-child notification">
                        <div class="box" style="height:8rem;">
                            <article class="media">
                                <div class="media-content">
                                    <div class="content">
                                        <p>
                                        <strong>Rp {{transactionServices.formatPrice(income.perkiraanbeban)}}</strong>
                                        <br><br>
                                        <span style="text-transform:uppercase;"> perkiraan beban sebulan</span>
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
    <div class="tile is-ancestor">
        <div class="tile is-vertical"  style="width:30rem;margin-left:2%;margin-right:2%;">
            <div class="tile">
                <div class="tile is-parent is-vertical">
                    <article class="tile is-child notification">
                        <div class="box" style="height:8rem;">
                            <article class="media">
                                <div class="media-content">
                                    <div class="content">
                                        <p>
                                        <strong>{{income.penggunaaktifsebulan}}</strong>
                                        <br><br>
                                        <span style="text-transform:uppercase;"> pengguna yang aktif selama 30 hari terakhir</span>
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </article>
                    <article class="tile is-child notification">
                        <div class="box" style="height:8rem;">
                            <article class="media">
                                <div class="media-content">
                                    <div class="content">
                                        <p>
                                        <strong>Rp {{transactionServices.formatPrice(income.perkiraanpenghasilan-income.perkiraanbeban)}} - Rp {{transactionServices.formatPrice(income.perkiraanpenghasilan+income.perkiraanbeban)}}</strong>
                                        <br><br>
                                        <span style="text-transform:uppercase;"> perkiraan penghasilan sebulan</span>
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
    <div class="tile is-ancestor">
        <div class="tile is-vertical" style="width:30rem;height:20rem;margin-left:2%;margin-right:2%;">
            <div class="tile">
                <div class="tile is-parent is-vertical">
                    <article class="tile is-child notification">
                        <div class="box" style="height:8rem;">
                            <article class="media">
                                <div class="media-content">
                                    <div class="content">
                                        <p>
                                        <strong>{{income.transaksisebulan}}</strong>
                                        <br><br>
                                        <span style="text-transform:uppercase;"> transaksi selama 30 hari terakhir</span>
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </article>
                    <article class="tile is-child notification">
                        <div class="box" style="height:8rem;">
                            <article class="media">
                                <div class="media-content">
                                    <div class="content">
                                        <p>
                                        <strong>Rp {{transactionServices.formatPrice((income.perkiraanpenghasilan-income.perkiraanbeban) * 12)}} - Rp {{transactionServices.formatPrice((income.perkiraanpenghasilan+income.perkiraanbeban) * 12)}}</strong>
                                        <br><br>
                                        <span style="text-transform:uppercase;"> perkiraan penghasilan setahun</span>
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
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
.all{
    display:flex;
    position: relative;
}
</style>