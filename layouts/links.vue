<script setup lang="ts">
import gsap from 'gsap'

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
      <nav class="w-full mt-12 md:mt-4 border-b border-gray-100/5 md:px-6 py-2 space-y-4 px-0">
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
      </nav>

      <section ref="content" class="opacity-0 grow w-full min-w-[320px] md:max-w-[640px] p-4 md:p-10 md:pb-0">
        <slot />
      </section>
    </main>

    <footer class="mt-12 w-full max-w-screen-lg mx-auto p-8 md:px-24">
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