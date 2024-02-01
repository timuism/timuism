<script setup lang="ts">

</script>

<template>
  <article>
    <h2 class="text-lg text-gray-500 font-sans mt-12">Blog</h2>
    <section aria-label="Blog post list" class="mt-12 space-y-12">
      <ContentList 
        :query="{
          path: 'posts',
          sort: [{
            title: -1
          }]
        }" 
        v-slot="{ list }"
      >
        <div v-for="p in list" :key="p.slug">
          <InlinePost  
            :url="p._path"
            :title="p.title"
            :publish-date="p.publishDate"
          />
        </div>
      </ContentList>
    </section>
  </article>
</template>