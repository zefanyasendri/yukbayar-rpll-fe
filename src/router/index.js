import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//add component
import HomeView from '../views/Customer/HomeView.vue'
import HistoryView from '../views/Customer/HistoryView.vue'
import LoginView from '../views/Customer/LoginView.vue'
import TopUpView from '../views/Customer/TopUpView.vue'
import RegisterView from '../views/Customer/RegisterView'
import AboutView from '../views/Customer/AboutView.vue'
import ProfileView from '../views/Customer/ProfileView.vue'
import PLNView from '@/views/Customer/Transaksi/PLNView.vue'
import PLNTagihan from '@/views/Customer/Transaksi/Pembayaran/PLN/TagihanPLN.vue'
import PLNToken from '@/views/Customer/Transaksi/Pembayaran/PLN/TokenPLN.vue'
import PLNKonfirmasi from '@/views/Customer/Transaksi/Pembayaran/PLN/KonfirmasiPLN.vue'
import PLNKonfirmasiTagihan from '@/views/Customer/Transaksi/Pembayaran/PLN/KonfimasiPLNTagihan.vue'
import PLNBerhasil from '@/views/Customer/Transaksi/Pembayaran/PLN/BerhasilPLN.vue'
import PLNBerhasilTagihan from '@/views/Customer/Transaksi/Pembayaran/PLN/BerhasilPLNTagihan.vue'
import AsuransiView from '@/views/Customer/Transaksi/AsuransiView.vue'
import AsuransiKonfirmasi from '@/views/Customer/Transaksi/Pembayaran/Asuransi/KonfirmasiAsuransi.vue'
import AsuransiBerhasil from '@/views/Customer/Transaksi/Pembayaran/Asuransi/BerhasilAsuransi.vue'
import BPJSView from '@/views/Customer/Transaksi/BPJSView.vue'
import BPJSKonfirmasi from '@/views/Customer/Transaksi/Pembayaran/BPJS/KonfirmasiBPJS.vue'
import BPJSBerhasil from '@/views/Customer/Transaksi/Pembayaran/BPJS/BerhasilBPJS.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: AboutView
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
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router