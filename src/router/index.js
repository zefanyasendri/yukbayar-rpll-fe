import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//home component
import Home from '../views/HomePageView.vue'
import RegisterView from '../views/Customer/RegisterView.vue'
import LoginView from '../views/Customer/LoginView.vue'

//customer component (main)
import HomeView from '../views/Customer/HomeView.vue'
import HistoryView from '../views/Customer/HistoryView.vue'
import TopUpView from '../views/Customer/TopUpView.vue'
import ProfileView from '../views/Customer/ProfileView.vue'
import ProfileEditView from '../views/Customer/ProfileEditView.vue'
import GenerateTokenView from '@/views/Customer/Transaksi/Pembayaran/TopUpToken.vue'

//customer component (transaksi PLN)
import PLNView from '@/views/Customer/Transaksi/PLNView.vue'
import PLNTagihan from '@/views/Customer/Transaksi/Pembayaran/PLN/TagihanPLN.vue'
import PLNToken from '@/views/Customer/Transaksi/Pembayaran/PLN/TokenPLN.vue'
import PLNKonfirmasi from '@/views/Customer/Transaksi/Pembayaran/PLN/KonfirmasiPLN.vue'
import PLNKonfirmasiTagihan from '@/views/Customer/Transaksi/Pembayaran/PLN/KonfirmasiPLNTagihan.vue'
import PLNBerhasil from '@/views/Customer/Transaksi/Pembayaran/PLN/BerhasilPLN.vue'
import PLNBerhasilTagihan from '@/views/Customer/Transaksi/Pembayaran/PLN/BerhasilPLNTagihan.vue'

//customer component (transaksi asuransi)
import AsuransiView from '@/views/Customer/Transaksi/AsuransiView.vue'
import AsuransiKonfirmasi from '@/views/Customer/Transaksi/Pembayaran/Asuransi/KonfirmasiAsuransi.vue'
import AsuransiBerhasil from '@/views/Customer/Transaksi/Pembayaran/Asuransi/BerhasilAsuransi.vue'

//customer component (transaksi BPJS)
import BPJSView from '@/views/Customer/Transaksi/BPJSView.vue'
import BPJSKonfirmasi from '@/views/Customer/Transaksi/Pembayaran/BPJS/KonfirmasiBPJS.vue'
import BPJSBerhasil from '@/views/Customer/Transaksi/Pembayaran/BPJS/BerhasilBPJS.vue'

//customer component (transaksi PDAM)
import PDAMView from '@/views/Customer/Transaksi/PDAMView.vue'
import PDAMKonfirmasi from '@/views/Customer/Transaksi/Pembayaran/PDAM/KonfirmasiPDAM.vue'
import PDAMBerhasil from '@/views/Customer/Transaksi/Pembayaran/PDAM/BerhasilPDAM.vue'

//customer component (transaksi internet)
import InternetView from '@/views/Customer/Transaksi/InternetView.vue'
import InternetKonfirmasi from '@/views/Customer/Transaksi/Pembayaran/Internet/KonfirmasiInternet.vue'
import InternetBerhasil from '@/views/Customer/Transaksi/Pembayaran/Internet/BerhasilInternet.vue'

//customer component (transaksi PBB)
import PBBView from '@/views/Customer/Transaksi/PBBView.vue'
import PBBKonfirmasi from '@/views/Customer/Transaksi/Pembayaran/PBB/KonfirmasiPBB.vue'
import PBBBerhasil from '@/views/Customer/Transaksi/Pembayaran/PBB/BerhasilPBB.vue'

//Staff
import DaftarPelangganView from '@/views/Staff/DaftarPelangganView.vue'
import PendaftaranMitraView from '@/views/Staff/PendaftaranMitraView.vue'
import TransaksiPelangganView from '@/views/Staff/TransaksiPelangganView.vue'

//BusinessOwner
import PendapatanView from '@/views/BusinessOwner/PendapatanView.vue'
import ListMitraView from '@/views/BusinessOwner/ListMitraView.vue'
import TransaksiPelangganBOView from '@/views/BusinessOwner/TransaksiPelangganView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        name : 'login',
        component: LoginView
    },
    {
        path: '/register',
        name : 'register',
        component: RegisterView
    },
    {
        path: '/home',
        name: 'userhome',
        component: HomeView
    },
    {
        path: '/history',
        name: 'history',
        component: HistoryView
    },
    {
        path: '/profile',
        name: 'profile',
        component: ProfileView
    },
    {
        path:'/topup',
        name: 'topup',
        component: TopUpView
    },{
        path:'/customer/transaksi/pln',
        name:'pln',
        component: PLNView
    },{
        path:'/customer/transaksi/pln/tagihan',
        name:'tagihanpln',
        component: PLNTagihan
    },{
        path:'/customer/transaksi/pln/tagihan/konfirmasi',
        name:'konfirmasiplntagihan',
        component: PLNKonfirmasiTagihan
    },{
        path:'/customer/transaksi/pln/tagihan/konfirmasi/berhasil',
        name:'berhasilplntagihan',
        component: PLNBerhasilTagihan
    },{
        path:'/customer/transaksi/pln/token',
        name:'tokenpln',
        component: PLNToken
    },{
        path:'/customer/transaksi/pln/token/konfirmasi',
        name:'konfirmasipln',
        component: PLNKonfirmasi
    },{
        path:'/customer/transaksi/pln/token/konfirmasi/berhasil',
        name:'berhasilpln',
        component: PLNBerhasil
    },{
        path:'/customer/transaksi/asuransi',
        name:'asuransi',
        component: AsuransiView
    },{
        path:'/customer/transaksi/asuransi/konfirmasi',
        name:'konfirmasiasuransi',
        component:AsuransiKonfirmasi
    },{
        path:'/customer/transaksi/asuransi/konfirmasi/berhasil',
        name:'berhasilasuransi',
        component:AsuransiBerhasil
    },{
        path:'/customer/transaksi/bpjs',
        name:'bpjs',
        component:BPJSView
    },{
        path:'/customer/transaksi/bpjs/konfirmasi',
        name:'konfirmasibpjs',
        component:BPJSKonfirmasi
    },{
        path:'/customer/transaksi/BPJS/konfirmasi/berhasil',
        name:'berhasilbpjs',
        component: BPJSBerhasil
    },{
        path:'/customer/transaksi/PDAM',
        name:'pdam',
        component:PDAMView
    },{
        path:'/customer/transaksi/PDAM/konfirmasi',
        name:'konfirmasipdam',
        component:PDAMKonfirmasi
    },{
        path:'/customer/transaksi/PDAM/konfirmasi/berhasil',
        name:'berhasilpdam',
        component:PDAMBerhasil
    },{
        path:'/customer/transaksi/Internet',
        name:'internet',
        component:InternetView
    },{
        path:'/customer/transaksi/Internet/konfirmasi',
        name:'konfirmasiinternet',
        component:InternetKonfirmasi
    },{
        path:'/customer/transaksi/Internet/konfirmasi/berhasil',
        name:'berhasilinternet',
        component:InternetBerhasil
    },{
        path:'/customer/transaksi/Pajak',
        name:'pbb',
        component:PBBView
    },{
        path:'/customer/transaksi/Pajak/konfirmasi',
        name:'konfirmasipajak',
        component:PBBKonfirmasi
    },{
        path:'/customer/transaksi/Pajak/konfirmasi/berhasil',
        name:'berhasilpajak',
        component:PBBBerhasil
    },{
        path:'/profile/update',
        name:'profileupdate',
        component:ProfileEditView
    },{
        path:'/staff/daftarpelanggan',
        name:'daftarpelanggan',
        component:DaftarPelangganView
    },{
        path:'/staff/pendaftaranmitra',
        name:'pendaftaranmitra',
        component:PendaftaranMitraView
    },{
        path:'/staff/transaksipelanggan',
        name:'transaksipelanggan',
        component:TransaksiPelangganView
    },{
        path:'/bo/transaksipelanggan',
        name:'transaksipelanggan',
        component:TransaksiPelangganBOView
    },{
        path:'/bo/listmitra',
        name:'listmitra',
        component:ListMitraView
    },{
        path:'/bo/pendapatan',
        name:'pendapatan',
        component:PendapatanView
    },{
        path:'/topup/generate-token',
        name:'GenerateToken',
        component:GenerateTokenView
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router