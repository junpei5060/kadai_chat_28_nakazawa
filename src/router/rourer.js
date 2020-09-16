import Vue from 'vue';
import Router from 'vue-router';
import VueCarousel from 'vue-carousel';
import Login from '../components/views/Login.vue'
import Home from '../components/views/Home.vue'
import Success from '../components/views/Success.vue'
import firebase from 'firebase/app'


Vue.use(Router);
Vue.use(VueCarousel);
Vue.config.productionTip = false


const router =  new Router({
    mode:'history',
    routes:[{
        path: '/',
        component: Home
        
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/success',redirect: '/',
        name: 'success',
        component: Success
    },
    {
        path: '*',
        name: 'login',
        component: Login
    }
]
})

router.beforeResolve((to, from, next) => {
console.log(to)
if (to.path == '/login') {
    next()
} else {
    firebase.auth().onAuthStateChanged(user => {
    if (user) {
        console.log('認証中')
        next()
    } else {
        console.log('未認証')
        next({path: '/login'})
    }
    })
}
})

export default router