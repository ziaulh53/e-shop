<template>
    <div>
        <div class="grid grid-cols-4">
            <div class="col-span-1"></div>
            <div class="col-span-2 my-20 border-2 rounded-md p-5 bg-white">
                <h5 class="text-center mb-5 text-3xl">Registration</h5>
                <div class="grid grid-cols-2 gap-5 mb-5">
                    <div>
                        <div class="mb-2 font-bold"><label>First Name</label></div>
                        <input class="w-full border-2 border-gray-300 rounded-lg p-2 px-4" placeholder="e. g. john"
                            name="firstName" v-model="firstName" onchange="onChange"/>
                    </div>
                    <div>
                        <div class="mb-2 font-bold"><label>Last Name</label></div>
                        <input class="w-full border-2 border-gray-300 rounded-lg p-2 px-4 " placeholder="e. g. bell"
                            v-model="lastName" />
                    </div>
                    <div>
                        <div class="mb-2 font-bold"><label>Email</label></div>
                        <input class="w-full border-2 border-gray-300 rounded-lg p-2 px-4 "
                            placeholder="e. g. john@example.com" v-model="email" />
                    </div>
                    <div>
                        <div class="mb-2 font-bold"><label>Phone</label></div>
                        <input class="w-full border-2 border-gray-300 rounded-lg p-2 px-4 " v-model="phone" />
                    </div>
                    <div>
                        <div class="mb-2 font-bold"><label>Password</label></div>
                        <input class="w-full border-2 border-gray-300 rounded-lg p-2 px-4 " placeholder="* * * * * *"
                            v-model="password" />
                    </div>
                    <div>
                        <div class="mb-2 font-bold"><label>Confirm Password</label></div>
                        <input class="w-full border-2 border-gray-300 rounded-lg p-2 px-4 " placeholder="* * * * * *" />
                    </div>
                </div>
                <div class="mb-3 text-center">
                    <EShopButton btnText="Singin" classes="w-1/2" :onclick="submit" />
                </div>
                <div class="text-center">
                    <p>Already have an Account? <router-link to="/signin" class="text-blue-500 hover:underline ml-3">Click
                            here</router-link></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import EShopButton from '../components/shared/EShopButton.vue';

const handleSubmit = async () => {

}

</script>

<script>
export default {
    data() {
        return {
            firstName: "",
            lastName: '',
            email: '',
            phone: '',
            password: '',
        }
    },
    methods: {
        submit() {
        },
        onChange(e){
            console.log(e.target.name, e.target.value)
        }
    }
}
</script>