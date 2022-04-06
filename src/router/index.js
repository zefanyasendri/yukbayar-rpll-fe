import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//add component
import HomeView from '../views/HomeView.vue'
import HistoryView from '../views/HistoryView.vue'
import LoginView from '../views/LoginView.vue'
import TopUpView from '../views/TopUpView.vue'
import PLNView from '@/views/Transaksi/PLNView.vue'
import PLNTagihan from '@/views/Transaksi/Pembayaran/PLN/TagihanPLN.vue'
import PLNToken from '@/views/Transaksi/Pembayaran/PLN/TokenPLN.vue'
import PLNKonfirmasi from '@/views/Transaksi/Pembayaran/PLN/KonfirmasiPLN.vue'
import PLNBerhasil from '@/views/Transaksi/Pembayaran/PLN/BerhasilPLN.vue'
import AsuransiView from '@/views/Transaksi/AsuransiView.vue'
import AsuransiKonfirmasi from '@/views/Transaksi/Pembayaran/Asuransi/KonfirmasiAsuransi.vue'
import AsuransiBerhasil from '@/views/Transaksi/Pembayaran/Asuransi/BerhasilAsuransi.vue'
import BPJSView from '@/views/Transaksi/BPJS.vue'
import BPJSKonfirmasi from '@/views/Transaksi/Pembayaran/BPJS/KonfirmasiBPJS.vue'
import BPJSBerhasil from '@/views/Transaksi/Pembayaran/BPJS/BerhasilBPJS.vue'

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
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/history',
        name: 'history',
        component: HistoryView
    },
    {
        path: '/login',
        name : 'login',
        component: LoginView
    },
    {
        path:'/topup',
        name: 'topup',
        component: TopUpView
    },{
        path:'/transaksi/pln',
        name:'pln',
        component: PLNView
    },{
        path:'/transaksi/pln/tagihan',
        name:'tagihanpln',
        component: PLNTagihan
    },{
        path:'/transaksi/pln/token',
        name:'tokenpln',
        component: PLNToken
    },{
        path:'/transaksi/pln/token/konfirmasi',
        name:'konfirmasipln',
        component: PLNKonfirmasi
    },{
        path:'/transaksi/pln/token/konfirmasi/berhasil',
        name:'berhasilpln',
        component: PLNBerhasil
    },{
        path:'/transaksi/asuransi',
        name:'asuransi',
        component: AsuransiView
    },{
        path:'/transaksi/asuransi/konfirmasi',
        name:'konfirmasiasuransi',
        component:AsuransiKonfirmasi
    },{
        path:'/transaksi/asuransi/konfirmasi/berhasil',
        name:'berhasilasuransi',
        component:AsuransiBerhasil
    },{
        path:'/transaksi/bpjs',
        name:'bpjs',
        component:BPJSView
    },{
        path:'/transaksi/bpjs/konfirmasi',
        name:'konfirmasibpjs',
        component:BPJSKonfirmasi
    },{
        path:'/transaksi/BPJS/konfirmasi/berhasil',
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