<template>
    <div v-if="selectedColors._id">
        <VueMagnifier :src="selectedColors?.images[idx] || '/assets/logo.png'"
            class-name="h-[400px] w-full object-cover mb-4" height="300" />
        <div v-for="url of selectedColors?.images" :key="url"
            class="w-[70px] h-[70px] border-2 border-gray-400 cursor-pointer">
            <img :src="url || '/assets/logo.png'" class="w-full h-full" />
            
        </div>
    </div>
</template>

<script setup>
import VueMagnifier from '@websitebeaver/vue-magnifier'
import '@websitebeaver/vue-magnifier/styles.css'
import { ref, toRefs } from 'vue';

const props = defineProps({
    selectedColors: Object
})

const idx = ref(0);


</script>