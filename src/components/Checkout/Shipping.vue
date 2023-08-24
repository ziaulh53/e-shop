<template>
    <h6 class="text-lg font-semibold mb-6">Shipping Address</h6>
    <div class="grid grid-cols-2 gap-x-5">
        <EShopInput label="First Name" placeholder="first name" v-model="shippingAddress.firstName" />
        <EShopInput label="Last Name" placeholder="last name" v-model="shippingAddress.lastName" />
        <EShopInput label="Apertment (optional)" placeholder="apertment" v-model="shippingAddress.apertment" />
        <EShopInput label="Phone" placeholder="phone number" v-model="shippingAddress.phone" />
        <EShopInput label="Address" placeholder="address" v-model="shippingAddress.address" />
        <EShopInput label="City" placeholder="city" v-model="shippingAddress.city" />
        <EShopInput label="State" placeholder="state" v-model="shippingAddress.state" />
        <EShopInput label="Country" placeholder="Country" v-model="shippingAddress.country" />
    </div>
</template>

<script setup>
import { EShopInput } from '../shared';

defineProps({
    shippingAddress: Object
})

</script>