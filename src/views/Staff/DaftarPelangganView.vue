<template>
    <div class="all">
        <b-tabs>
      <b-tab-item label="Table Data Pelanggan">
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
                <div v-if="column.saldo">
                  Rp.
                  {{ transactionServices.formatPrice(props.row[column.field]) }}
                </div>
                <div v-else-if="!column.saldo">
                  {{ props.row[column.field] }}
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
    import axios from "axios";
    import TransactionServices from '@/services/TransactionServices';

    export default {
        name:"DaftarPelanggan",
        mounted() {
            this.fetchData();
        },
        data() {
            return {
                customerType : "customer",
                transactionServices : new TransactionServices(),
                data: [
                    {
                        id: null,
                        email: null,
                        nama: null,
                        noTelpon: null,
                        gender: null,
                        saldoYukPay : null,
                    },
                ],
                checkboxPosition: 'left',
                checkboxType: 'is-primary',
                checkedRows: [],
                columns: [
                    {
                        field: 'id',
                        label: 'ID',
                        searchable:true,
                    },
                    {
                        field: 'nama',
                        label: 'Nama',
                        searchable:true,
                    },
                    {
                        field: 'email',
                        label: 'Email',
                        searchable:true,
                    },
                    {
                        field: 'noTelpon',
                        label: 'No - Telp',
                        searchable:true,
                    },
                    {
                        field: 'saldoYukPay',
                        label: 'Saldo YukPay',
                        saldo:true,
                        searchable:true,
                    },
                    {
                        field: 'gender',
                        label: 'Gender',
                        searchable:true,
                    }
                ],
               
            };
        },
        methods: {
            async fetchData() {
                axios
                .get(`/users/type/${this.customerType}`)
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