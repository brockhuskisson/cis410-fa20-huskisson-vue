import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import routes from './routes.js'

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
        storeUserInApp(state, myUser){
            state.user = myUser
        },
        storeClothes(state, myClothes){
            state.clothes = myClothes
        },
        clearAuthData(state){
            state.token = null;
            state.user = null;
        }

    },
    actions:{
        getClothes({commit}){
            axios.get('/clothes')
            .then((myResponse)=>{
                console.log("responses from getClothes action", myResponse);
                commit('storeClothes', myResponse.data)
            })
            .catch(()=>{
                console.log("error in getClothes action")
            })
        },
        logout({commit, state}){
            axios.post('/customers/logout', null, {
                headers:{
                    Authorization: `Bearer ${state.token}`
                }
            });

            commit('clearAuthData');

            routes.replace("/");


        }

    }

})