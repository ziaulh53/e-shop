<template>
    <div class="grid grid-cols-3 gap-5">
        <router-link v-for="({_id, items}) of allOrders?.result" :to="'/order/' + _id" :key="_id">
            <div class="border-2 rounded-lg bg-white">
                <img :src="items[0]?.colors?.images?.[0] || '/assets/poster.jpg'"
                    class="h-[300px] w-full object-cover rounded-t-md" />
                <div class="p-4">
                    <h6 class="text-base font-bold">{{ items[0]?.name }}</h6>
                    <div class="">
                        <!-- <p class="font-semibold">Price: ${{ items[0]?.discountAvailable ? items[0]?.discountPrice :
                            items[0]?.price }}
                        </p> -->
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { api, orderEndpoint } from '../../api'

const allOrders = ref({});

const getAllOrders = async () => {
    try {
        allOrders.value = await api.get(orderEndpoint.getOrders)
    } catch (error) {
        console.log(error)
    }
}
onMounted(() => {
    getAllOrders();
})
</script>