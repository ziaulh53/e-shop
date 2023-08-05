<template>
    <div class="grid grid-cols-3">
        <div></div>
        <div class="my-20 border-2 rounded-md p-5 bg-white">
            <h5 class="text-center mb-5 text-3xl">Welcome Back</h5>
            <div class="mb-4">
                <div class="mb-2 font-bold"><label>Email</label></div>
                <input type="email" class="w-full border-2 border-gray-300 rounded-lg p-2 px-4"
                    placeholder="e. g. john@example.com" @input="onChange" v-model="credentialData.email" name="email" />
            </div>
            <div class="mb-5">
                <div class="mb-2 font-bold"><label>Password</label></div>
                <input type="password" class="w-full border-2 border-gray-300 rounded-lg p-2 px-4" placeholder="* * * * * *"
                    @input="onChange" v-model="credentialData.password" name="password" />
            </div>
            <div class="mb-3">
                <EShopButton btnText="Singin" classes="w-full" :onclick="handleSubmit" :disabled="disabled" />
            </div>
            <div class="text-center">
                <p>Don't have an account? <router-link to="/signup" class="text-blue-500 hover:underline ml-3">Click
                        here</router-link></p>
            </div>
        </div>
    </div>
</template>

<script setup>

import { computed, ref } from 'vue';
import { EShopButton } from '../components/shared';
import { useAuthStore } from '../store'


const userStore = JSON.parse(JSON.stringify(useAuthStore()));

const credentialData = ref({ email: '', password: '' })
const disabled = computed(()=>!credentialData.value.email || !credentialData.value.password);

const handleSubmit = async () => {
    userStore.userLogin({ ...credentialData })
}

</script>