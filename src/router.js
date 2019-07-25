import Vue from 'vue'
import Router from 'vue-router'
import AppCustomers from './components/AppCustomers'
import AppProducts from './components/AppProducts'
import LatestPurchases from './components/LatestPurchases'
import BuyProduct from './components/BuyProduct'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            redirect: '/customers'
        },
        {
            path: '/customers',
            name: 'customers',
            component: AppCustomers
        },
        {
            path: '/products',
            name: 'products',
            component: AppProducts
        },
        {
            path: '/customers/:id',
            name: 'latest-purchases',
            component: LatestPurchases
        },
        {
            path: '/products/:id',
            name: 'buy-product',
            component: BuyProduct
        },


    ]
})