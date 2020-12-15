<template>
    <div>
        <h1>Clothes</h1>
        <hr/>

        <table class = "table">
            <thead>
                <tr>
                    <th>Brand Name</th>
                    <th>Type</th>
                    <th>Material</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="thisClothe in clothes" :key="thisClothe.ClothesPK">
                    <th>{{thisClothe.BrandName}}</th>
                    <td>{{thisClothe.Type}}</td>
                    <td>{{thisClothe.Material}}</td>
                    <td>
                        <router-link :to="`/clothes/${thisClothe.ClothesPK}`">
                        <button type = "button" class = "btn btn-primary">Details</button>
                        </router-link>
                    </td>

                </tr>
            </tbody>
        </table>    
    </div>
</template>

<script>
export default {
    computed:{
        clothes(){return this.$store.state.clothes}
    }
}
</script>

<style scoped>

</style>