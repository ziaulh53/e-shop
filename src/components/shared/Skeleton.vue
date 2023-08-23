<template>
    <div class="shadow rounded-md w-full mx-auto">
        <div v-if="type=='box'" class="animate-pulse">
            <div class="bg-gray-300 rounded" :style="{height: height}"></div>
        </div>

        <!-- <div class="animate-pulse flex space-x-4">
            <div class="rounded-full bg-slate-200 h-10 w-10"></div>
            <div class="flex-1 space-y-6 py-1">
                <div class="h-2 bg-slate-200 rounded"></div>
                <div class="space-y-3">
                    <div class="grid grid-cols-3 gap-4">
                        <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                        <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div class="h-2 bg-slate-200 rounded"></div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script setup>
defineProps({
    type: {
        type: String,
        default: 'box',
        validator: value => ['box', 'circle'].indexOf(value) >= 0
    },
    height: {
        type: String,
        default: '400px'
    },
})
</script>