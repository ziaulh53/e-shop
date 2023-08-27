<script setup>
import Navbar from './NavBar.vue';
import CustomFooter from './CustomFooter.vue';
</script>

<template>
    <Navbar />
    <main class="px-5 lg:px-20 h-full">
        <div class="my-10 min-h-[49vh]">
            <slot></slot> 
        </div>
    </main>
    <CustomFooter/>
</template>