<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)

const showMobileNav = ref(false)
const h1 = ref(null)
const content = ref(null)

watch(showMobileNav, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
})

onMounted(() => {
  let siteNavLinks = gsap.utils.toArray(".site-nav li")

  gsap  
    .timeline({repeat: 0})
    .to(h1.value, {
      opacity: 1,
      x: 0,
    })
    .to(siteNavLinks, {
      opacity: 1,
      y: 0,
      stagger: 0.1,
    }, '-=0.5')
    .to(content.value, {
      opacity: 1,
      y: 0,
    }, '<0.25')
})
</script>

<template>
  <div class="wrapper w-full font-serif antialiased bg-gray-900 text-gray-100">
    <main class="w-full max-w-screen-lg mx-auto md:px-24 px-4 md:pt-12 flex flex-col items-start justify-center">
      <nav class="w-full mt-12 md:mt-4 border-b border-gray-100/5 px-6 py-2 space-y-4 md:px-0">
        <div class="flex justify-between mb-6 md:mb-0 md:block">
          <h1 ref="h1" class="opacity-0 -translate-x-9 site-h1 text-2xl text-white font-sans font-normal tracking-tight leading-snug">
            <NuxtLink to="/"
              class="hover:text-secondary focus:bg-gray-500/25 rounded px-4 py-2 bg-transparent duration-200 outline-none whitespace-nowrap focus:underline">
              Timothy Long
          </NuxtLink>
          </h1>

          <button @click="showMobileNav = true" class="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path fill-rule="evenodd"
                d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clip-rule="evenodd" />
            </svg>
          </button>
        </div>

        <ul class="site-nav hidden md:flex space-x-4">
          <li>
            <NavLink href="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink href="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink href="/work-history">Work History</NavLink>
          </li>
          <li>
            <NavLink href="/links">Links</NavLink>
          </li>
          <!-- <li>
            <NavLink href="/newsletter">Newsletter</NavLink>
          </li> -->
        </ul>
      </nav>


      <div :class="showMobileNav ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'"
        class="fixed w-screen h-[100dvh] overflow-hidden bg-black/75 backdrop-blur top-0 left-0 md:hidden duration-500">
        <div :class="showMobileNav ? 'translate-y-0' : 'translate-y-full'"
          class="absolute bottom-0 left-0 w-full duration-150">

          <nav class="bg-gray-900 border-white rounded-tl-2xl rounded-tr-2xl w-full px-3 pt-3 pb-8">
            <div class="w-full flex justify-end">
              <button @click="showMobileNav = false">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul class="site-nav flex flex-col space-y-4 py-2 w-full">
              <li>
                <NavLink href="/blog" @click="showMobileNav = false">Blog</NavLink>
              </li>
              <li>
                <NavLink href="/projects" @click="showMobileNav = false">Projects</NavLink>
              </li>
              <li>
                <NavLink href="/work-history" @click="showMobileNav = false">Work History</NavLink>
              </li>
              <li>
                <NavLink href="/links" @click="showMobileNav = false">Links</NavLink>
              </li>
              <!-- <li>
                <NavLink href="/newsletter" @click="showMobileNav = false">Newsletter</NavLink>
              </li> -->
            </ul>
          </nav>
        </div>
      </div>

      <section ref="content" class="opacity-0 grow w-full min-w-[320px] md:max-w-[640px] p-10 md:pb-0 md:px-0">
        <slot />
      </section>
    </main>

    <footer class="mt-12 w-full max-w-screen-lg mx-auto px-4 py-8 md:px-24">
      <div class="text-left">
        <p class="text-sm text-gray-500">
          &copy; {{ new Date().getFullYear() }} Timothy Long. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.wrapper {
  @apply min-h-screen grid;
  grid-template-rows: 1fr auto;
}

.site-nav li {
  @apply opacity-0 -translate-y-4;
}
</style>