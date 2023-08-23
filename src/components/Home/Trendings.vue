<template>
    <router-link :to="'/product/'+data?._id">
        <div class="border-2 rounded-lg bg-gray-200">
            <img :src="data?.colors[0]?.images[0] || '/assets/poster.jpg'"
                class="h-[200px] w-full object-cover rounded-t-md" />
            <div class="p-4">
                <h6 class="text-base font-bold">{{ data?.name }}</h6>
                <div class="">
                    <p class="font-semibold">Price: ${{ data?.discountAvailable ? data?.discountPrice : data?.price }} 
                        <span v-if="data?.discountAvailable" class="text-gray-500 font-semibold italic">
                            <s>${{ data?.price  }}</s>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script setup>
defineProps({
    data: Object
})
</script>