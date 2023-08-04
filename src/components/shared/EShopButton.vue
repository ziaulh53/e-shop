<script setup>
const props = defineProps({
    onclick: {
        type: Function,
        required: true
    },
    btnText: {
        type: String,
        required: true
    },
    classes: {
        type: String
    },
    disabled:{
        type: Boolean
    }
})
</script>

<template>
    <button type="primary" :onclick="onclick" :disabled="disabled"
        :class="classes+' bg-theme-color px-4 py-2 text-white font-bold rounded-lg disabled:bg-slate-400 hover:bg-theme-light disabled:cursor-not-allowed'">{{
        btnText }}
    </button>
</template>