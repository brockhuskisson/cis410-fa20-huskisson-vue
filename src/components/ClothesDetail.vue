<template>
    <div>
       <div class = "card">
           <div class ="card-body">
               <h2 class = "text-primary">{{clothes.BrandName}}</h2>
               <br/>
               <p>Type: <br/><strong>{{clothes.Type}}</strong></p>
               <p>Material: <br/><strong>{{clothes.Material}}</strong></p>
           </div>
       </div>
        <br/>
       <router-link v-if="auth" :to="`/clothes/${this.$route.params.pk}/order`">
       <button type ="button" class = "btn btn-success">Place an Order</button>
       </router-link>

       <router-link v-else :to="`/signin`">
       <button type ="button" class = "btn btn-outline-success">Sign In to Place an Order</button>
       </router-link>
    </div>
</template>

<script>
export default {
    computed: {
        clothes(){
            var clothes = this.$store.state.clothes;
            var thisClothes = clothes.find((aClothe)=> aClothe.ClothesPK == this.$route.params.pk)

            //console.log("here is the clothe you want", thisClothes)
            return thisClothes
        },
        auth(){return this.$store.state.token}
    }
}
</script>

<style scoped>

</style>