

<template>
    <button type="primary" :onclick="onclick" :disabled="disabled || loading" :class="classes + ' btn-class'">
       <span v-if="loading"><i class="fa-solid fa-spinner fa-spin mr-2" ></i> </span> {{ btnText }}
    </button>
</template>

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
    disabled: {
        type: Boolean
    },
    loading: {
        type: Boolean
    }
})
</script>