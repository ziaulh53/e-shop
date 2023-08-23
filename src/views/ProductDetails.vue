<template>
    <Layout>
        <div class="my-10">
            <div v-if="product?.result?.colors?.length" class="grid grid-cols-4 gap-x-24">
                <div class="col-span-2">
                    <ImageViewer :colors="product?.result?.colors" :selected-colors="selectedColors" />
                </div>
                <div class="col-span-2">
                    <ProductInfo :data="product?.result" :handleSelectColor="handleSelectColor" />
                    <div class="mb-5">
                        <EShopButton iconclass="fa-solid fa-bag-shopping" btn-text="ADD CART" :onclick="handleAddCart" />
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { Layout } from '../components/Layout';
import { api, productEndpoint } from '../api';
import { useRoute } from 'vue-router';
import { useCartStore } from '../store'
import { ImageViewer, ProductInfo } from '../components/ProductDetails'

import { EShopButton, EShopSkeleton } from '../components/shared';

const cartStore = useCartStore()


const product = ref({});
const selectedColors = ref({})

const loading = ref(false);

const route = useRoute()

const getProductDetails = async () => {
    loading.value = true
    try {
        product.value = await api.get(productEndpoint.fetchSingleProduct + route.params.id);
        selectedColors.value = product.value.result?.colors[0]
    } catch (error) {
        console.log(error)
    }
    loading.value = false
}

onMounted(() => {
    getProductDetails()
})

const handleSelectColor = async (idx) => {
    selectedColors.value = product.value.result?.colors[idx];
}

//add cart
const handleAddCart = () => {
    const data = {
        ...product.value.result,
        colors: selectedColors.value,
        quantity: 1
    }
    cartStore.userAddCart(data)
}


</script>