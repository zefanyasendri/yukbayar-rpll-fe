<template>
    <div class="all">
        <b-tabs>
            <b-tab-item label="Table Transaksi Pelanggan">
                <b-table :data="data">
                    <template v-for="column in columns">
                        <b-table-column :key="column.id" v-bind="column">
                            <template
                                v-if="column.searchable"
                                #searchable="props">
                                <p style="font-size:0.65rem;">Search By {{column.label}}</p>
                                <b-input
                                    v-model="props.filters[props.column.field]"
                                    placeholder="Type Here .."
                                    icon="magnify"
                                    size="is-small" />
                            </template>
                            <template v-slot="props">
                              <div v-if="column.numeric">
                                Rp. {{transactionServices.formatPrice(props.row[column.field]) }}
                              </div>
                              <div v-else-if="!column.numeric">
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
import TransactionServices from '@/services/TransactionServices';
export default {
  name: "DataAkun",
  data() {
    return {
      transactionServices: new TransactionServices(),
      data : [
      {
        uuid: "31bc7282-c799-11ec-9d64-0242ac120002",
        name: "Jesse",
        jenistransaksi: "TopUp",
        jumlahbayar: 50000,
        date: "2016-10-15 3:43:27",
        status: "TopUp",
      },
      {
        uuid: "31bc7552-c799-11ec-9d64-0242ac120002",
        name: "John",
        jenistransaksi: "PLN",
        jumlahbayar:102000,
        date: "2020-9-13 7:33:27",
        status: "Pembayaran",
      },
      {
        uuid: "31bc76a6-c799-11ec-9d64-0242ac120002",
        name: "Tina",
        jenistransaksi: "PDAM",
        jumlahbayar: 300000,
        date: "2021-8-11 8:44:27",
        status: "Pembayaran",
      },
      {
        uuid: "31bc78a4-c799-11ec-9d64-0242ac120002",
        name: "Clarence",
        jenistransaksi: "PLN",
        jumlahbayar: 250000,
        date: "2022-7-9 9:56:27",
        status: "Pembayaran",
      },
      {
        uuid: "31bc7c50-c799-11ec-9d64-0242ac120002",
        name: "Anne",
        jenistransaksi: "Internet",
        jumlahbayar: 360000,
        date: "2017-6-7 1:12:27",
        status: "Pembayaran",
      },
      {
        uuid: "31bc7282-c799-11ec-9d64-0242ac120002",
        name: "Jesse",
        jenistransaksi: "TopUp",
        jumlahbayar: 50000,
        date: "2016-10-15 3:43:27",
        status: "TopUp",
      },
      {
        uuid: "31bc7552-c799-11ec-9d64-0242ac120002",
        name: "John",
        jenistransaksi: "PLN",
        jumlahbayar: 102000,
        date: "2020-9-13 7:33:27",
        status: "Pembayaran",
      },
      {
        uuid: "31bc76a6-c799-11ec-9d64-0242ac120002",
        name: "Tina",
        jenistransaksi: "PDAM",
        jumlahbayar: 300000,
        date: "2021-8-11 8:44:27",
        status: "Pembayaran",
      },
      {
        uuid: "31bc78a4-c799-11ec-9d64-0242ac120002",
        name: "Clarence",
        jenistransaksi: "PLN",
        jumlahbayar: 250000,
        date: "2022-7-9 9:56:27",
        status: "Pembayaran",
      },
      {
        uuid: "31bc7c50-c799-11ec-9d64-0242ac120002",
        name: "Anne",
        jenistransaksi: "Internet",
        jumlahbayar: 360000,
        date: "2017-6-7 1:12:27",
        status: "Pembayaran",
      },
    ],
      columns: [
        {
          field: "uuid",
          label: "UUID",
          searchable: true,
        },
        {
          field: "name",
          label: "Name",
          searchable: true,
        },
        {
          field: "jenistransaksi",
          label: "Jenis Transaksi",
          searchable: true,
        },
        {
          field: "jumlahbayar",
          label: "Jumlah Pembayaran",
          numeric:true,
          searchable: true,
        },
        {
          field: "date",
          label: "Tanggal Transaksi",
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
.all {
  margin-left: 5%;
  margin-right: 5%;
  text-align: left;
}
</style>