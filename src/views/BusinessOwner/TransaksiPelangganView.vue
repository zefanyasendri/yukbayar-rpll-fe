<template>
    <div class="all">
        <b-tabs>
            <b-tab-item label="Table Transaksi Pelanggan">
                <b-table :data="data">
                    <template v-for="column in columns">
                        <b-table-column :key="column.id" v-bind="column">
                            <template v-if="column.searchable" #searchable="props">
                                <p style="font-size: 0.65rem">Search By {{ column.label }}</p>
                                <b-input
                                v-model="props.filters[props.column.field]"
                                placeholder="Type Here .."
                                icon="magnify"
                                size="is-small"
                                />
                            </template>
                            <template v-slot="props">
                              <div v-if="column.pembayaran">
                                Rp. 
                                {{ transactionServices.formatPrice(props.row[column.field]) }}
                              </div>
                              <div v-else-if="column.date">
                                {{ transactionServices.changeDateFormat(props.row[column.field]) }}
                              </div>
                              <div v-else-if="!column.pembayaran">
                                {{props.row[column.field]}}
                              </div>
                            </template>
                        </b-table-column>
                    </template>
                </b-table>
            </b-tab-item>
        </b-tabs>
    </div>
</template>

<script>
    import TransactionServices from "@/services/TransactionServices";
    import axios from "axios";

    export default {
        name: "DataAkun",
        mounted() {
            this.fetchData();
        },
        data() {
            return {
            transactionServices: new TransactionServices(),
            data: [
                {
                id_transaksi: null,
                nama: null,
                varian: null,
                totalHarga: null,
                tanggal: null,
                status: null,
                },
            ],
            columns: [
                {
                field: "id_transaksi",
                label: "Id Transaksi",
                searchable: true,
                },
                {
                field: "nama",
                label: "Name",
                searchable: true,
                },
                {
                field: "varian",
                label: "Jenis Transaksi",
                searchable: true,
                },
                {
                field: "totalHarga",
                label: "Jumlah Pembayaran",
                pembayaran: true,
                searchable: true,
                },
                {
                field: "tanggal",
                label: "Tanggal Transaksi",
                date:true,
                searchable: true,
                },
                {
                field: "status",
                label: "Status",
                searchable: true,
                },
            ],
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
    margin-left:5%;
    margin-right:5%;
    text-align:left;
}
</style>