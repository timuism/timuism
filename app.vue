<script setup lang="ts">
useHead({
  title: 'timuism | Timothy Long | Software Engineer, User Interface Developer & Front-end Developer',
  meta: [
    {
      name: 'description',
      content: 'A blog about web development and programming'
    }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>