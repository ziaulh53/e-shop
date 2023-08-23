<template>
    <h2 class="font-bold text-2xl mb-5">Filter</h2>
    <div class="p-2 bg-white border rounded-md border-gray-300">
        <div class="mb-4">
            <h6 class="text-gray-500">Price</h6>
            <a-slider v-model:value="price" @afterChange="onAfterChange" />
        </div>
        <div>
            <h6 class="text-gray-500 mb-2">Brands</h6>
            <div>
                <a-checkbox-group v-model:value="brandsState" class="block">
                    <div v-for="brand of brands" :key="brand._id" class="mb-1">
                        <a-checkbox :value="brand._id">{{ brand?.name
                        }}</a-checkbox>
                    </div>

                </a-checkbox-group>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
defineProps({
    brands: Array
})
const price = ref('');

const onAfterChange = (value) => {
    console.log(value)
}

const brandsState = ref([]);

</script>