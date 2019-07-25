<template>
    <div>
        <h3>{{ product.name }}</h3><br>
        Quantity: {{ product.quantity }}
        <template v-if="product.quantity">
            <select v-model="selectedCustomer">
                <option v-for="customer in customers" :key="customer.id" :value="customer">
                    {{ customer.firstName }} {{ customer.lastName }} 
                </option>
            </select>
            <button @click="confirmBuy">Confirm</button>
            <button @click="cancelBuy">Cancel</button>
        </template>
        <template v-else>
            <router-link to="/products">Go Back to Products</router-link>
        </template>
    </div>
</template>

<script>
import { productService } from './../services/ProductsService'
import { customerService } from './../services/CustomersService'
export default {
    data() {
        return {
            selectedCustomer:null,
            product:productService.find(this.$route.params.id), 
        }
    }, 

    created() {
        this.customers = customerService.list()
    },

    methods: {
        confirmBuy() {
            if(!this.selectedCustomer) {
                alert('Please select the customer!')
            } else {
                customerService.addProductToCustomer(this.selectedCustomer, this.product)
                productService.decrement(this.product)
            }
        }, 

        cancelBuy() {
            this.$router.push('/products')
        }
    }
}
</script>

