<script setup>
import Navbar from './NavBar.vue';
import CustomFooter from './CustomFooter.vue';
</script>

<template>
    <Navbar />
    <main class="px-20 h-full">
        <router-view />
    </main>
    <CustomFooter/>
</template>