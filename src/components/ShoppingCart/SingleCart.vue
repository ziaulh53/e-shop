<template>
    <div class="col-span-1 flex items-center">
        <img :alt="cart?.colors?.images[0]" :src="cart?.colors?.images[0]" class="h-[100px]" />
    </div>
    <div class="col-span-1 flex items-center">
        <h6 class="font-semibold text-lg">{{ cart?.name }}</h6>
    </div>
    <div class="col-span-1 flex items-center">
        <p class="font-semibold text-lg  mr-2">Color: {{ cart?.colors?.colorName }}</p>
        <div class="w-[20px] h-[20px] rounded-full border-2 border-black" :style="{ background: cart?.colors?.colorCode }">
        </div>
    </div>
    <div class="col-span-2 md:col-span-1 flex items-center">
        <div class="font-semibold text-lg">Quantity:
            <button class="bg-theme-color px-1 mr-2 disabled:bg-slate-400" :disabled="cart?.quantity < 2"
                @click="() => handleQuantityDecrease(cart)">
                <i class="fa-solid fa-chevron-down text-sm text-white"></i>
            </button>
            {{ cart?.quantity }}
            <button class="bg-theme-color px-1 py-0 disabled:bg-slate-400 ml-2" @click="() => handleQuantityIncrease(cart)">
                <i class="fa-solid fa-chevron-up text-sm text-white "></i>
            </button>
        </div>
    </div>
    <div class="col-span-1 flex items-center">
        <span @click="() => handleDelete(cart)" class="cursor-pointer"><i class="fa-solid fa-trash text-red-500"></i></span>
    </div>
</template>

<script setup>
import { useCartStore } from '../../store';

defineProps({
    cart: Object
})

const cartStore = useCartStore();

const handleDelete = (cart) => {
    cartStore.singleCartItemDelete(cart)
}

const handleQuantityIncrease = (cart) => {
    cartStore.cartQuantityIncrease(cart)
}
const handleQuantityDecrease = (cart) => {
    cartStore.cartQuantityDecrease(cart)
}
</script>