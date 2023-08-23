<template>
    <Layout>
        <div class="my-10">
            <h4 class="text-2xl font-semibold uppercase mb-5"><i class="fa-solid fa-bag-shopping"></i> Shopping Cart</h4>
            <div class="grid grid-cols-2 md:grid-cols-5 border-2 border-gray-300 p-5 rounded-lg bg-white hover:shadow-md mb-10 gap-5"
                v-for="cart of cartStore.shoppingCart" :key="cart?._id">
                <SingleCart :cart="cart" />

            </div>
            <div v-if="!cartStore.shoppingCart.length" class="flex justify-center">
                You have no cart items
            </div>
            <div v-if="cartStore.shoppingCart?.length" class="text-right">
                <router-link :to="isAuthenticated ? '/checkout' : '/signin'">
                    <span class="btn-class cursor-pointer">Checkout</span>
                </router-link>
            </div>
        </div>
    </Layout>
</template>

<script setup>
import { Layout } from '../components/Layout';
import { SingleCart } from '../components/ShoppingCart';
import { useAuthStore, useCartStore } from '../store';

const cartStore = useCartStore();
const { isAuthenticated } = useAuthStore().user;

</script>