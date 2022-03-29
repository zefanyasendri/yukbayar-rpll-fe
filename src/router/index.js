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
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router