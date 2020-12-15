<template>
    <div>
        <h1>Account</h1>
        <hr/>
        <h3> {{firstName}}'s Orders </h3>

        <p v-if="accountError" class="form-text text-danger">Can not get your account information, please try again later</p>
        
        <table v-if="ordersByUser" class = "table">
            <thead>
                <th>Price</th>
                <th>Type</th>
                <th>Material</th>
                <th>Size</th>
            </thead>
            <tbody>
                <tr v-for="thisOrder in ordersByUser" :key="thisOrder.OrderPK"> 
                    <th><router-link :to="`/clothes/${thisOrder.ClothesFK}`">
                    {{thisOrder.Price}}</router-link></th>
                    <th>{{thisOrder.Type}}</th>
                    <th>{{thisOrder.Material}}</th>
                    <th>{{thisOrder.Size}}</th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            ordersByUser: null,
            accountError: false
        }
    },
    computed: {
        firstName(){
            console.log(this.$store.state)
            return this.$store.state.user.FirstName
        }
    },
    created(){
        axios.get("/Order/me", {
            headers: {
                Authorization: `Bearer ${this.$store.state.token}`
            }
        })
        .then((response)=>{
            console.log("here is the order/me response", response)
            this.ordersByUser = response.data
        })
            .catch(()=>{
                this.accountError = true
            })
        
    }
}

</script>

<style scoped>

</style>