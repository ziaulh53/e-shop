<template>
    <header class="bg-theme-color h-[60px] w-full">
        <div class="h-full px-20 flex items-center justify-between">
            <router-link to="/"><img src="/assets/logo.png" class="w-[40px]" /></router-link>
            <div>
                <!-- <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" type="button"
                    class="px-4 py-2  mx-2 text-white font-semibold hover:bg-slate-600">
                    <span>Categories</span>
                </button> -->
                <Dropdown />

                <router-link to="/shopping-cart" class="px-4 py-2  mx-2 text-white font-semibold hover:bg-slate-600">
                    <i class="fa-solid fa-cart-shopping mr-1"></i>
                </router-link>
                <router-link to="/signin" class="px-4 py-2  ml-2 text-white font-semibold hover:bg-slate-600">
                    <i class="fa-regular fa-user mr-1"></i> <span>Login</span>
                </router-link>
            </div>
        </div>
    </header>
</template>

<script setup>
import Dropdown from './Navbar/Dropdown.vue';
</script>