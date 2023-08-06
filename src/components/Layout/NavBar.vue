<template>
    <header class="bg-theme-color h-[60px] w-full">
        <div class="h-full px-20 flex items-center justify-between">
            <router-link to="/"><img src="/assets/logo.png" class="w-[40px]" /></router-link>
            <div>
                <Dropdown />
                <router-link to="/shopping-cart" class="px-4 py-2  mx-2 text-white font-semibold hover:bg-slate-600">
                    <i class="fa-solid fa-cart-shopping mr-1"></i>
                </router-link>
                <UserDropdown v-if="isAuthenticated" />
                <router-link to="/signin" class="px-4 py-2  ml-2 text-white font-semibold hover:bg-slate-600"
                    v-if="!isAuthenticated">
                    <i class="fa-regular fa-user mr-1"></i> <span>Login</span>
                </router-link>
            </div>
        </div>
    </header>
</template>

<script setup>
import Dropdown from './Navbar/Dropdown.vue';
import UserDropdown from './Navbar/UserDropown.vue'
import { useAuthStore } from '../../store';

const { isAuthenticated } = useAuthStore().auth;
</script>