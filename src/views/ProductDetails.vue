<template>
    <Layout>
        <div class="my-10">
            <div class="grid grid-cols-4 gap-x-24">
                <div class="col-span-2">
                    <ImageViewer v-if="!loading" :colors="product?.result?.colors" :selected-colors="selectedColors" />
                    <EShopSkeleton v-if="loading" height="400px"/>
                    <EShopSkeleton v-if="loading" height="70px" class="mt-5"/>
                </div>
                <div class="col-span-2">
                    <EShopSkeleton v-if="loading" height="400px" type="content"/>
                    <EShopSkeleton v-if="loading" height="400px" type="content"/>
                    <EShopSkeleton v-if="loading" height="400px" type="content"/>
                    <ProductInfo v-if="!loading" :data="product?.result" :handleSelectColor="handleSelectColor" :selected-colors="selectedColors" />
                    <div v-if="!loading" class="mb-5">
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
    
    try {
        loading.value = true
        product.value = await api.get(productEndpoint.fetchSingleProduct + route.params.id);
        selectedColors.value = product.value.result?.colors[0];
        loading.value = false
    } catch (error) {
        console.log(error)
    }
    
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