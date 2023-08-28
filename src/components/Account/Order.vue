<template>
    <div v-if="loading" class="grid grid-cols-3 gap-5">
        <EShopSkeleton v-for="(_, idx) of new Array(6).fill(null)" :key="idx" height="350px" />
    </div>
    <div v-if="!loading" class="grid grid-cols-3 gap-5">
        <router-link v-for="({ _id, items, status, orderId }) of allOrders?.result" :to="'/order-details/' + _id" :key="_id">
            <div class="border-2 rounded-lg bg-white">
                <img :src="items[0]?.colors?.images?.[0] || '/assets/poster.jpg'"
                    class="h-[250px] w-full object-cover rounded-t-md" />
                <div class="p-4">
                    <h6 class="text-base font-bold mb-3">{{ items[0]?.name }}</h6>
                    <div class="flex justify-between items-center">
                        <div class="text-base font-semibold">Status: <a-tag :color="getStatusColor(status)">{{ status
                        }}</a-tag></div>
                        <div class="text-base font-semibold">Order ID: {{ orderId }}</div>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { api, orderEndpoint } from '../../api'
import { EShopSkeleton } from '../shared';
import { getStatusColor } from '../../helpers';

const allOrders = ref({});
const loading = ref(false);

const getAllOrders = async () => {
    loading.value = true
    try {
        allOrders.value = await api.get(orderEndpoint.getOrders)
    } catch (error) {
        console.log(error)
    }
    loading.value = false
}
onMounted(() => {
    getAllOrders();
})
</script>