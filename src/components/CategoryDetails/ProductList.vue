<template>
    <div class="flex justify-between items-center mb-5">
        <h2 class="font-bold text-2xl">{{ data?.name }}</h2>
        <span class="md:hidden"><i class="fa-solid fa-filter text-theme-light"></i></span>
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <router-link v-for="product of data?.products" :to="'/product/' + product?._id" :key="product?._id">
            <div class="relative border border-gray-400 rounded-lg bg-white shadow-lg overflow-hidden group hover:scale-105 transition-all duration-300">
                <img :src="product?.colors[0]?.images[0] || '/assets/poster.jpg'"
                    class="h-[200px] w-[200px] m-auto object-cover rounded-t-md" />
                <div class="p-4">
                    <h6 class="text-base font-bold">{{ product?.name }}</h6>
                    <div class="">
                        <p class="font-semibold">Price: ${{ product?.discountAvailable ? product?.discountPrice :
                            product?.price }}
                            <span v-if="product?.discountAvailable" class="text-gray-500 font-semibold italic">
                                <s>${{ product?.price }}</s>
                            </span>
                        </p>
                    </div>
                </div>
                <div
                    class="absolute inset-0 bg-black bg-opacity-50 opacity-0 transform scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:transition-all group-hover:duration-300 flex items-center justify-center">
                    <button class="bg-theme-color text-gray-300 py-2 px-4 rounded-md font-bold">View Details</button>
                </div>
            </div>
        </router-link>
    </div>
</template>
<script setup>
defineProps({
    data: Object
})
</script>