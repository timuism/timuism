<script setup lang="ts">
defineProps<{
  href: string
}>()
</script>
<template>
  <NuxtLink :to="href"
    class="inline-block whitespace-nowrap bg-transparent px-4 py-2 rounded-md duration-200 focus:bg-gray-500/25 focus:text-secondary outline-none text-base font-sans font-medium hover:text-secondary">
    <slot />
  </NuxtLink>
</template>
