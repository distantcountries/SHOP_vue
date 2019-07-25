<template>
    <div>
        <router-view />
        <form @submit.prevent="addCustomer">
            <input type="text" placeholder="First Name" v-model="newCustomer.firstName"/>
            <input type="text" placeholder="Last Name" v-model="newCustomer.lastName"/>
            <input type="email" placeholder="Email" v-model="newCustomer.email"/>
            <!-- <input type="text" placeholder="First Name" v-model="newCustomer.firstName"/> -->
            <button type="submit">Add customer</button>
        </form>

        <ul>
            <li v-for="(customer, index) in customers" :key="index">
                {{ customer.firstName }} {{ customer.lastName }}
                <button @click="deleteCustomer(customer)">Delete customer</button>
                <router-link :to="latestPurchases(customer)">Latest Purchases</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { customerService } from './../services/CustomersService'
export default {
    data() {
        return {
            customers: customerService.list(), 
            newCustomer: {
                firstName:'', 
                lastName:'', 
                email:''
            }
        }
    }, 

    methods: {
        deleteCustomer(customer) {
            customerService.remove(customer)
        }, 

        addCustomer() {
            customerService.add(this.newCustomer)
        }, 

        latestPurchases(customer) {
            return `/customers/${customer.id}`
        }
    }
}
</script>

<style>

</style>
