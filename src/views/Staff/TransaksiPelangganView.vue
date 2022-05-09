<template>
  <div class="all">
    <b-field grouped group-multiline>
      <b-button
        label="Clear checked"
        type="is-danger"
        icon-left="close"
        class="field"
        @click="checkedRows = []"
      />
    </b-field>
    <b-tabs>
      <b-tab-item label="Table">
        <b-table
          :data="data"
          :columns="columns"
          :checked-rows.sync="checkedRows"
          checkable
          :checkbox-position="checkboxPosition"
          :checkbox-type="checkboxType"
        >
        </b-table>
      </b-tab-item>

      <b-tab-item label="Checked rows">
        <pre>{{ checkedRows }}</pre>
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
export default {
  name: "DataAkun",
  data() {
    const data = [
      {
        uuid: "31bc7282-c799-11ec-9d64-0242ac120002",
        name: "Jesse",
        jenistransaksi: "TopUp",
        jumlahbayar: "50000",
        date: "2016-10-15 3:43:27",
        status: "TopUp",
      },
      {
        uuid: "31bc7552-c799-11ec-9d64-0242ac120002",
        name: "John",
        jenistransaksi: "PLN",
        jumlahbayar: "102000",
        date: "2020-9-13 7:33:27",
        status: "Pembayaran",
      },
      {
        uuid: "31bc76a6-c799-11ec-9d64-0242ac120002",
        name: "Tina",
        jenistransaksi: "PDAM",
        jumlahbayar: "300000",
        date: "2021-8-11 8:44:27",
        status: "Pembayaran",
      },
      {
        uuid: "31bc78a4-c799-11ec-9d64-0242ac120002",
        name: "Clarence",
        jenistransaksi: "PLN",
        jumlahbayar: "250000",
        date: "2022-7-9 9:56:27",
        status: "Pembayaran",
      },
      {
        uuid: "31bc7c50-c799-11ec-9d64-0242ac120002",
        name: "Anne",
        jenistransaksi: "Internet",
        jumlahbayar: "360000",
        date: "2017-6-7 1:12:27",
        status: "Pembayaran",
      },
      {
        uuid: "31bc7282-c799-11ec-9d64-0242ac120002",
        name: "Jesse",
        jenistransaksi: "TopUp",
        jumlahbayar: "50000",
        date: "2016-10-15 3:43:27",
        status: "TopUp",
      },
      {
        uuid: "31bc7552-c799-11ec-9d64-0242ac120002",
        name: "John",
        jenistransaksi: "PLN",
        jumlahbayar: "102000",
        date: "2020-9-13 7:33:27",
        status: "Pembayaran",
      },
      {
        uuid: "31bc76a6-c799-11ec-9d64-0242ac120002",
        name: "Tina",
        jenistransaksi: "PDAM",
        jumlahbayar: "300000",
        date: "2021-8-11 8:44:27",
        status: "Pembayaran",
      },
      {
        uuid: "31bc78a4-c799-11ec-9d64-0242ac120002",
        name: "Clarence",
        jenistransaksi: "PLN",
        jumlahbayar: "250000",
        date: "2022-7-9 9:56:27",
        status: "Pembayaran",
      },
      {
        uuid: "31bc7c50-c799-11ec-9d64-0242ac120002",
        name: "Anne",
        jenistransaksi: "Internet",
        jumlahbayar: "360000",
        date: "2017-6-7 1:12:27",
        status: "Pembayaran",
      },
    ];
    return {
      data,
      checkboxPosition: "left",
      checkboxType: "is-primary",
      checkedRows: [],
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