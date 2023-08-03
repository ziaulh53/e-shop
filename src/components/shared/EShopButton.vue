<script setup>
const props = defineProps({
    onclick: {
        type: Function,
        required: true
    },
    btnText: {
        type: String,
        required: true
    }
})
</script>

<template>
    <a-space wrap>
        <a-button type="primary" :onclick="onclick" class="bg-slate-600 text-base">{{ btnText }}</a-button>
    </a-space>
</template>