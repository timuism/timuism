<template>
  <article class="post-content w-full">
    <ContentDoc v-slot="{ doc }">
      <h2>{{ doc.title }}</h2>
      <div class="post-md mt-4 w-full">
        <ContentRenderer :value="doc" />
      </div>
    </ContentDoc>
  </article>
</template>

<style>
.markup-p {
  @apply text-lg;
}

.post-content .post-md > div > *+*:not(pre),
.post-content .post-md > div > p+p {
  @apply pt-6;
}

.post-content p {
  @apply max-w-screen-md mx-auto leading-relaxed;
}

.post-content h2 {
  @apply text-secondary text-3xl font-sans font-light mt-10;
}

.post-content h3 {
  @apply text-xl font-semibold mt-8;
}

.post-content img {
  @apply rounded-md mx-auto my-4 border-2 border-gray-500/25;
}

.post-content code {
  @apply bg-black text-secondary text-sm p-0.5 my-1 rounded overflow-x-auto;
}

.post-content table {
  @apply border border-gray-500/75 my-4;
}

.post-content th {
  @apply text-left p-2;
}

.post-content table td {
  @apply p-2 border border-gray-500;
}

pre.shiki {
  @apply bg-black block w-full px-3 my-6 text-sm rounded-md whitespace-pre-wrap md:whitespace-nowrap overflow-x-auto md:text-base;
}

.post-content ul,
.post-content ol {
  @apply list-inside marker:text-gray-300;
}

.post-content ul {
  @apply list-disc;
}

.post-content ol {
  @apply list-decimal;
}

.post-content a {
  @apply outline-none text-secondary focus:underline hover:underline focus:text-secondary duration-200;
}
</style>