<script setup lang="ts">
defineProps<{
  url: string,
  title: string,
  publishDate: string,
}>()
</script>
<template>
  <article class="max-w-screen-md mx-auto">
    <header class="mb-4">
      <NuxtLink :to="url" class="group outline-none">
        <h2 class="text-base font-serif text-gray-100 group-focus:text-secondary group-hover:text-secondary duration-200">
          {{title}}</h2>
        <p
          class="text-sm text-gray-500 group-focus:text-secondary group-hover:text-secondary font-sans font-medium uppercase tracking-wider duration-200">
          {{publishDate}}</p>
        </NuxtLink>
    </header>
</article></template>