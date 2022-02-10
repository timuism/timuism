<template>
    <div>
        <button @click="state.showMobileNav = !state.showMobileNav">
            <i class="md:hidden fa-solid fa-bars text-primary text-4xl"></i>
        </button>

        <div 
            class="md:hidden absolute right-0 top-12 w-auto bg-gray-extra-dark border-2 border-primary/25 rounded p-8 mt-8 mr-8 flex flex-col md:flex-row ml-0 flex-no-wrap space-y-2 md:space-y-0 md:space-x-6 text-xl md:text-2xl"
            v-show="state.showMobileNav"
        >
            <a href="/portfolio" class="w-1/2 md:w-auto text-primary-dark hover:underline hover:text-primary">Portfolio</a>
            <a href="/posts" class="w-1/2 md:w-auto text-primary-dark hover:underline hover:text-primary">Blog</a>
            <div class="flex space-x-4 pt-4 border-t-2 border-primary/25">
                <a href="https://github.com/timuism" class="w-1/2 md:w-auto text-primary-dark hover:underline hover:text-primary" target="_new"><i class="fa-brands fa-github text-4xl"></i></a>
                <a href="https://twitter.com/timuism" class="w-1/2 md:w-auto text-primary-dark hover:underline hover:text-primary" target="_new"><i class="fa-brands fa-twitter text-4xl"></i></a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {reactive} from 'vue'

const state = reactive({
    showMobileNav: false
})
</script>