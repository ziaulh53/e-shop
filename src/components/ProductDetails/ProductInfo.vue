<template>
    <div class="mb-3">
        <h1 class="text-3xl font-semibold">{{ data?.name }}</h1>
    </div>
    <div class="mb-5">
        <h6 class="text-lg">Price: USD {{ data?.discountAvailable ? data?.discountPrice : data?.price }} <span
                v-if="data?.discountAvailable"><s class="italic">{{ data?.price }}</s></span></h6>
    </div>
    <div class="flex">
        <div class="mr-20">
            <p class="text-gray-500 font-semibold">Category: <span class="text-blue-500"><router-link
                        :to="'/category/' + data?.category?._id">{{
                            data?.category?.name }}</router-link></span>
            </p>
        </div>
        <div class="mr-20">
            <p class="text-gray-500 font-semibold">Brand: <span class="text-blue-500">{{ data?.brands?.name }}</span></p>
        </div>
    </div>
    <div v-html="data?.description" class="my-5">
    </div>
    <div class="mb-4">
        Colors:
        <div class="flex mt-2">
            <div v-for="({ color, _id }, idx) of data?.colors" :key="_id" @click="() => handleSelectColor(idx)"
                :class="(selectedColors?.color?._id === color?._id ? 'border-2 border-black' : 'border border-gray-400') + ' w-[20px] h-[18px] rounded-full mr-2 cursor-pointer'"
                :style="{ background: color?.colorCode }"></div>
        </div>
    </div>
</template>

<script setup>

defineProps({
    data: Object,
    handleSelectColor: Function,
    selectedColors: Object
})
</script>