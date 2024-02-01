<script setup lang="ts">
defineProps<{
  href: string,
  target?: boolean
}>()
</script>
<template>
<NuxtLink 
  :to="href" 
  :target="target ? '_blank' : '_self'"
  class="inline-block whitespace-nowrap text-gray-100 hover:text-secondary focus:text-secondary outline-none border-b border-gray-500 font-medium text-base hover:border-gray-100 duration-200"
  >
  <slot />
</NuxtLink>

</template>