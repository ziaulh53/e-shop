<template>
    <div class="flex justify-between items-center mb-5">
        <h2 class="font-bold text-2xl">{{ data?.name }}</h2>
        <span class="md:hidden"><i class="fa-solid fa-filter text-theme-light"></i></span>
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <router-link v-for="product of data?.products" :to="'/product/' + product?._id">
            <div class="border-2 rounded-lg bg-gray-200">
                <img :src="product?.colors[0]?.images[0] || '/assets/poster.jpg'"
                    class="h-[300px] w-full object-cover rounded-t-md" />
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
            </div>
        </router-link>
    </div>
</template>
<script setup>
defineProps({
    data: Object
})
</script>