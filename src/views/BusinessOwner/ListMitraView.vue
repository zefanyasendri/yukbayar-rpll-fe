<template>
<div class="all">
    <h1 style="font-weight:bold;font-size:2rem;margin-left:1rem;">List Mitra</h1>
    <section>
        <b-collapse
            class="card"
            animation="slide"
            v-for="(collapse, index) of collapses"
            :key="index"
            :open="isOpen == index"
            @open="isOpen = index"
            :aria-id="'contentIdForA11y5-' + index"
            style="margin-bottom:2%;margin-top:2%;">
            <template #trigger="props">
                <div
                    class="card-header"
                    role="button"
                    :aria-controls="'contentIdForA11y5-' + index"
                    :aria-expanded="props.open"
                >
                    <p class="card-header-title">
                        {{ collapse.namaPerusahaan }}
                    </p>
                    <a class="card-header-icon">
                        <b-icon
                            :icon="props.open ? 'menu-down' : 'menu-up'">
                        </b-icon>
                    </a>
                </div>
            </template>
            <div class="card-content">
                <div class="content_mitra" style="text-align:left;">
                    <div class="container_1">
                        <h1>Nama Pemilik Perusahaan</h1>
                        <h1>Nomor Telepon Pemilik</h1>
                        <h1>Email Pemilik</h1>
                        <h1>Nama Perusahaan</h1>
                        <h1>Bidang Usaha</h1>
                        <h1>Jenis Usaha</h1>
                        <h1>Alamat Perusahaan</h1>
                    </div>
        
                    <div class="container_2">
                        <h1>:</h1>
                        <h1>:</h1>
                        <h1>:</h1>
                        <h1>:</h1>
                        <h1>:</h1>
                        <h1>:</h1>
                        <h1>:</h1>
                    </div>

                    <div class="container_3" style="margin-left: 1rem;">
                        <h1 class="con_kanan">{{collapse.pemilikBisnis}}</h1>
                        <h1 class="con_kanan">{{collapse.noTelpon }}</h1>
                        <h1 class="con_kanan">{{collapse.email }}</h1>
                        <h1 class="con_kanan">{{collapse.namaPerusahaan }}</h1>
                        <h1 class="con_kanan">{{collapse.bidangUsaha }}</h1>
                        <h1 class="con_kanan">{{collapse.badanUsaha }}</h1>
                        <h1 class="con_kanan">{{collapse.alamat }}</h1>
                    </div>
                </div>
            </div>
        </b-collapse>

    </section>
</div>
</template>

<script>
import axios from "axios";
    export default {
        name : "ListMitra",
        mounted() {
            this.fetchData();
        },
        data() {
            return {
                isOpen: 0,
                collapses: [
                {
                    pemilikBisnis:null,
                    noTelpon:null,
                    email:null,
                    alamat:null,
                    bidangUsaha:null,
                    badanUsaha:null,
                    namaPerusahaan:null
                },
                ]
            }
        },
        methods: {
            async fetchData() {
                axios
                .get("/mitra")
                .then((response) => (this.collapses = response.data.data))
                .catch((error) => {
                console.log(error);
                });
            },
        },
    }
</script>

<style scoped>
.all{
    margin-left: 10%;
    margin-right: 10%;
}
.content_mitra{
    display:flex;
}
.container_1{
    width: 250px;
    font-size:1.25rem;
}
.container_2{
    font-size:1.25rem;
    margin-left: 1rem;
}
.container_3{
    width: 300px;
    font-size:1.25rem;
}
.con_kanan{
    padding-left: 1rem;
}
</style>