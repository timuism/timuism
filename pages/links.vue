<script setup lang="ts">
interface LinkInterface {
  url: string;
  text: string;
  isInternalLink?: boolean;
}

// @todo: add order prop for manual sorting
const links: LinkInterface[] = [
  {
    url: "/",
    text: "My Website",
    isInternalLink: true,
  },
  // {
  //   url: "https://instagram.com/timuism",
  //   text: "Instagram",
  // },
  {
    url: "https://www.youtube.com/channel/UCVCY5V1UVF8NtaIOV0ye3vQ",
    text: "YouTube",
  },
  {
    url: "https://linkedin.com/in/timothyjosephlong",
    text: "LinkedIn",
    isInternalLink: true,
  },
];
</script>

<template>
  <article class="font-medium">
    <h2 class="text-lg text-gray-500 font-sans mt-12">Links</h2>
    <section class="flex flex-col items-start space-y-6 mt-8">
      <div v-for="{url, text, isInternalLink} in links" :key="url">
          <a
            :href="url"
            class="
              outline-none ring-offset-4 ring-offset-transparent
              text-4xl font-display
              focus:ring-2 focus:ring-white/25
              duration-200
            "
            :target="isInternalLink ? '_self' : '_blank'"
          >
            {{text}}
          </a>
       </div>
    </section>
  </article>
</template>

