<template>
    <div>
        <input  placeholder="Search product" v-model="term"/>
        <h3>Products:</h3>
        <ol>
            <li v-for="product in filteredProducts" :key="product.id">
                {{ product.name }} {{ product.quantity }}
                <button @click="incrementProducts(product)">+</button>
                <button @click="decrementProducts(product)">-</button>
                <router-link :to="buyProduct(product)">Buy</router-link>
            </li>
        </ol>
    </div>
</template>

<script>
import { productService } from './../services/ProductsService'
export default {
    data() {
        return {
            products:productService.list(), 
            term:''
        }
    }, 

    computed: {
        filteredProducts() {
            return this.products.filter(product => { 
                return product.name.toLowerCase().includes(this.term.toLowerCase())
            })
        }
    }, 

    methods: {
        incrementProducts(product) {
            productService.increment(product)
        },

        decrementProducts(product) {
            productService.decrement(product)
        }, 

        buyProduct(product) {
            return `/products/${product.id}`
        }

    }
}
</script>

<style>

</style>
