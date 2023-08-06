<template>
    <Layout>
        <div class="mb-10">
            <Poster />
        </div>
        <div class="border bg-white p-3 rounded-md mb-10">
            <div class="flex justify-between mb-5">
                <h2 class="font-semibold text-xl text-theme-color">
                    <i class="fa-solid fa-arrow-trend-up mr-2 text-red-600"></i>Trending Now
                </h2>
                <router-link to="/trending"
                    class="font-semibold px-3 py-1 rounded-lg text-white bg-red-600 hover:bg-red-500 transition-all">Show
                    More</router-link>
            </div>
            <div class="grid grid-cols-5 gap-5">
                <Trending />
                <Trending />
                <Trending />
                <Trending />
                <Trending />
                <Trending />
                <Trending />
                <Trending />
                <Trending />
                <Trending />
            </div>

        </div>
        <div class="border bg-white p-3 rounded-md mb-10">
            <div class="flex justify-between mb-5">
                <h2 class="font-semibold text-xl text-theme-color">
                    Categories
                </h2>
            </div>
            <div class="grid grid-cols-5 gap-5">
                <Categories />
                <Categories />
                <Categories />
                <Categories />
                <Categories />
                <Categories />
                <Categories />
            </div>
        </div>
    </Layout>
</template>

<script setup>
import { Poster, Trending, Categories } from '../components/Home';
import { Layout } from '../components/Layout';


</script>