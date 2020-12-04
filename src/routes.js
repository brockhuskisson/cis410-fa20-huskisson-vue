import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import Account from './components/Account.vue';
import Login from './components/Login.vue';
import ClothesDetail from './components/ClothesDetail.vue';
import Clothes from './components/Clothes.vue';
import NotFound from './components/NotFound.vue';
import OrderCreate from './components/OrderCreate.vue';
import Signup from './components/Signup.vue';

Vue.use(VueRouter);

const routes = [
    {path: '/', component: Home},
    {path: '/account', component: Account},
    {path: '/signin', component: Login},
    {path: '/clothes', component: Clothes},
    {path: '/clothes/:pk', component: ClothesDetail,
        children: [
            {path: 'order', component: OrderCreate}
        ]},
        {path: '/signup', component: Signup},
        {path: '/:invalidroute(.*)', component: NotFound}
]

export default new VueRouter({mode: 'history', routes})