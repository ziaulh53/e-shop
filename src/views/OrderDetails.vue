<template>
    <Layout>
        <div class="grid grid-cols-2 gap-5 mb-5">
            <div>
                <h2 class="text-lg font-semibold mb-5">#ORDER ID:
                    <span v-if="!loading" class="bg-white px-4 py-1 border border-gray-300 text-gray-500">{{ order?.result?.orderId
                    }}</span>
                </h2>
                <EShopSkeleton v-if="loading" type="content" :conten-number="3"/>
                <AddressDetails v-if="!loading" :data="order?.result?.shippingAddress" title="Shipping Details" />
                <!-- <a-card v-if="order?.result?.logistics" class="border border-gray-300">
                    <h2 class="text-lg font-semibold uppercase mb-5">Logistic Details:</h2>
                    <div>
                        <p class="text-base">Name: <span class="font-bold">REDX</span></p>
                        <div class="text-base">Tracking: <a href="https://www.facebook.com" class="text-blue-600">Click Here</a></div>
                    </div>
                </a-card> -->
            </div>
            <div>
                <Status :data="order?.result" :refetch="getOrderDetails"/>
                <EShopSkeleton v-if="loading" type="content" :conten-number="4"/>
                <AddressDetails v-if="!loading" :data="{...order?.result?.billingAddress,...order?.result?.payment}" title="Billing Details" type="billing"/>
            </div>
        </div>
        <div class="mb-5">
            <EShopSkeleton v-if="loading" type="box" height="200px"/>
            <OrderItems v-if="Array.isArray(order?.result?.items) && !loading" :data="order?.result?.items" />
        </div>
    </Layout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Layout } from '../components/Layout';
import { api, orderEndpoint } from '../api';
import { useRoute } from 'vue-router';
import { AddressDetails, OrderItems, Status } from '../components/OrderDetails'
import { EShopSkeleton } from '../components/shared';

const route = useRoute();
const order = ref({})
const loading = ref(false)

const getOrderDetails = async () => {
    loading.value = true;
    try {
        order.value = await api.get(orderEndpoint.getSingleOrder + route.params.id)
    } catch (error) {
        console.log(error)
    }
    loading.value = false
}

onMounted(() => {
    getOrderDetails();
})



</script>