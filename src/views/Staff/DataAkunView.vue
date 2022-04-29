<template>
    <div class="all">
        <b-field grouped group-multiline>
            <b-button
                label="Clear checked"
                type="is-danger"
                icon-left="close"
                class="field"
                @click="checkedRows = []" />
        </b-field>
        <b-tabs>
            <b-tab-item label="Table">
                <b-table 
                    :data="data" 
                    :columns="columns" 
                    :checked-rows.sync="checkedRows"
                    checkable
                    :checkbox-position="checkboxPosition"
                    :checkbox-type="checkboxType">
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
        name:"DataAkun",
        data() {
            const data = [
                    { 'uuid': "31bc7282-c799-11ec-9d64-0242ac120002", 'name': 'Jesse', 'email': 'Jesse@gmail.com', 'notelp': '081234567890', 'tgllahir': '17 - 8 - 2001', 'gender': 'Laki - Laki' },
                    { 'uuid': "31bc7552-c799-11ec-9d64-0242ac120002", 'name': 'John', 'email': 'John@gmail.com', 'notelp': '083456789012', 'tgllahir': '7 - 9 - 2001', 'gender': 'Laki - Laki' },
                    { 'uuid': "31bc76a6-c799-11ec-9d64-0242ac120002", 'name': 'Tina', 'email': 'Tina@gmail.com', 'notelp': '087891234560', 'tgllahir': '17 - 10 - 2001', 'gender': 'Perempuan' },
                    { 'uuid': "31bc78a4-c799-11ec-9d64-0242ac120002", 'name': 'Clarence', 'email': 'Clarence@gmail.com', 'notelp': '081236789450', 'tgllahir': '7 - 11 - 2001', 'gender': 'Laki - Laki' },
                    { 'uuid': "31bc7c50-c799-11ec-9d64-0242ac120002", 'name': 'Anne', 'email': 'Anne@gmail.com', 'notelp': '081290345678', 'tgllahir': '17 - 12 - 2001', 'gender': 'Laki - Laki' }
                ]
            return {
                data,
                checkboxPosition: 'left',
                checkboxType: 'is-primary',
                checkedRows: [],
                columns: [
                    {
                        field: 'uuid',
                        label: 'UUID',
                        searchable:true,
                    },
                    {
                        field: 'name',
                        label: 'Name',
                        searchable:true,
                    },
                    {
                        field: 'email',
                        label: 'Email',
                        searchable:true,
                    },
                    {
                        field: 'notelp',
                        label: 'No - Telp',
                        searchable:true,
                    },
                    {
                        field: 'tgllahir',
                        label: 'Tanggal Lahir',
                        searchable:true,
                    },
                    {
                        field: 'gender',
                        label: 'Gender',
                        searchable:true,
                    }
                ]
            }
        }
    }
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