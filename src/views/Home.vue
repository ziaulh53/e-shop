<template>
    <Layout>
        <div class="my-10">
            <EShopSkeleton height="400px" v-if="loading" />
            <Poster v-if="homepageData?.result?.banners?.length" :posters="homepageData?.result?.banners" />
        </div>
        <div class="border bg-white p-5 rounded-md mb-10">
            <div class="flex justify-between mb-5">
                <h2 class="font-semibold text-xl text-theme-color">
                    <i class="fa-solid fa-arrow-trend-up mr-2 text-red-600"></i>Trending Now
                </h2>
                <router-link to="/trending"
                    class="font-semibold px-3 py-1 rounded-lg text-white bg-red-600 hover:bg-red-500 transition-all">Show
                    More</router-link>
            </div>
            <div v-if="loading" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                <EShopSkeleton height="300px" v-if="loading" v-for="(_idx) of new Array(5).fill(null)" />
            </div>
            <div v-if="!loading" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                <Trending v-for="product of homepageData.result?.trendings" :key="product._id" :data="product" />
            </div>
        </div>
        <Categories />
    </Layout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Poster, Trending, Categories } from '../components/Home';
import { Layout } from '../components/Layout';
import { api, landingEndpoint } from '../api';
import { EShopSkeleton } from '../components/shared';

const homepageData = ref({});
const loading = ref(false);

const getHomepageData = async () => {
    loading.value = true
    try {
        homepageData.value = await api.get(landingEndpoint.fetchHomepage)
    } catch (error) {
        console.log(error)
    }
    loading.value = false
}
onMounted(() => {
    getHomepageData();
})


</script>