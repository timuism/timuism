<script setup lang="ts">
const projects = [
  {
    name: 'Torch',
    description: 'A Web App for capturing, logging and sharing strength training workouts',
    url: 'https://torchfitness.app'
  },
  {
    name: 'Torc',
    description: 'Capture workout data from text using a simple syntax',
    url: 'https://github.com/timuism/torc',
  },
  {
    name: 'Vida',
    description: 'A Todo app based around walking you through personal sprints',
    url: 'https://github.com/timuism/vida'
  }
]
</script>
<template>
  <article>
    <h2 class="text-lg text-gray-500 font-sans mt-12 ml-4">Projects</h2>
    <ul class="mt-12 space-y-12 md:pr-24">
      <li v-for="{ url, name, description } in projects" :key="url">
        <a :href="url"
          class="group block border-2 border-transparent outline-none focus:border-secondary focus:bg-gray-500/25 hover:border-secondary rounded p-4 duration-200">
          <h3 class="font-display font-semibold text-xl text-primary group-hover:text-secondary duration-200">
            {{ name }}
          </h3>
          <p class="mt-2 text-lg font-sans font-medium italic">{{ description }}</p>
        </a>
      </li>
    </ul>
  </article>
</template>