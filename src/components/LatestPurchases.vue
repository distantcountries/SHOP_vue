<template>
    <div>
        <router-link to="/customers">Go back</router-link>
        <h3>{{ fullName }}</h3>

        <h5>Products:</h5>
        <ol>
            <li v-for="product in customer.products" :key="product.id">
                {{ product }}
            </li>
        </ol>

    </div>
</template>

<script>
import { customerService } from './../services/CustomersService'
export default {
    data() {
        return {
            customer:customerService.find(this.$route.params.id)
        }
    }, 

    computed: {
        fullName() {
            return this.customer.firstName + ' ' + this.customer.lastName
        }
    }, 

    methods: {

    }
}
</script>

<style>

</style>
