<template>
    <div class="border bg-white p-5 rounded-md mb-10">
        <div class="flex justify-between mb-5">
            <h2 class="font-semibold text-xl text-theme-color">
                Categories
            </h2>
        </div>
        <div v-if="loading" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            <EShopSkeleton height="250px" v-if="loading" v-for="(_idx) of new Array(5).fill(null)" />
        </div>
        <div v-if="!loading" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            <router-link v-for="category of allCategory.result" :to="'/category/'+category?._id">
                <div class="border-2 rounded-lg bg-gray-200">
                    <img :src="category?.coverImage ||'/assets/poster.jpg'" class="h-[200px] w-full object-cover rounded-t-md" />
                    <div class="p-4">
                        <h6 class="text-base font-bold">{{ category?.name }}</h6>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { api, categoryEndpoint } from '../../api';
import { EShopSkeleton } from '../shared';

const allCategory = ref({});
const loading = ref(false);

const getCategory = async () => {
    loading.value = true
    try {
        allCategory.value = await api.get(categoryEndpoint.fetchCategory)
    } catch (error) {
        console.log(error)
    }
    loading.value = false
}
onMounted(() => {
    getCategory();
})


</script>