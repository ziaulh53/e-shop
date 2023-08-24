<template>
    <div class="bg-white border-2 border-gray-300 shadow-sm rounded-lg p-3">
        <h6 class="text-lg font-semibold mb-6">Order Items</h6>
        <div class="mb-2 border-b-2 pb-2 border-gray-300" v-for="(cart, idx) of cartItems" :key="idx">
            <div class="flex justify-between">
                <div>
                    <p class="text-gray-600 font-bold">Product name</p>
                    <p>Color: Red</p>
                    <p>Price: USD 500 X 3</p>
                    <p>Quantity: 3</p>
                </div>
                <img :src="'/assets/logo.png'" class="w-[100px] h-[100px]" />
            </div>
        </div>
        <div class="mt-5">
            <div class="flex justify-between items-center">
                <div class="font-bold text-lg">Total Price:</div>
                <div class="w-[62%] h-[1px] bg-gray-600"></div>
                <di class="font-bold text-gray-00">USD 3000</di>
            </div>

        </div>
    </div>
</template>

<script setup>
defineProps({
    cartItems: Array
})
</script>