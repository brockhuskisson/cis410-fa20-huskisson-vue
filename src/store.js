import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        token: null,
        user: null,
        clothes: []
    },
    mutations:{
        storeTokenInApp(state, myToken){
            state.token = myToken;
        },
        storeTokenInApp(state, myUser){
            state.user = myUser
        }

    },
    actions:{

    }

})