  <template>
     <div class="row justify-content-center">
         <div class="col-lg-10">
             <div class="card">
                 <div class="card-body">
                     <h4>Place an Order</h4> 
                     <form id="order-form" @submit.prevent="submitOrder">
                        <div class="form-group">
                             <label for="quantityinput">Quantity</label> 
                             <input type="number" id="quantityinput" name=" quantity" min="1" max="10" required="required" class="form-control" v-model="quantity">
                        </div> 
                        <div class="form-group">
                            <label for="sizeinput">Size</label> <textarea row="3" id="sizeinput" name="size" required="required" class="form-control" v-model="size"></textarea>
                        </div> 
                        
                        <button type="submit" class="btn btn-primary">Place Order</button> 
                        
                        <button v-on:click="cancelOrder" type="clear" class="btn btn-outline-danger">
                        Cancel
                        </button>

                        <p v-if="errorMessage" class="form-text text-danger">{{errorMessage}}</p>
                    </form>
                </div>
        </div>
        </div>
        </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return {
           quantity: null,
           size: "",
           errorMessage: null
        }
    },
    methods:{
    submitOrder(){
        const myOrder={
            quantity: this.quantity,
            size: this.size,
            clothesFK: this.$route.params.pk
        };
        console.log("here is the order", myOrder)

        const token = this.$store.state.token;
        console.log(token)

        axios.post("/Order", myOrder,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then(()=>{this.$router.replace('/account')})
        .catch(()=>{
            this.errorMessage = "Unable to place an order, please try again later."
        })
    },
    cancelOrder(){
        this.$router.go(-1)
    }
    }
}
</script>

<style scoped>

</style>