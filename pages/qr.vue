<script setup lang="ts">
import QrCode from '~/assets/images/qr-code.png'
</script>

<template>
  <div class="w-full">
    <h2 class="md:ml-16 w-full text-center md:text-left text-xl text-secondary font-sans mt-12">Let's connect!</h2>
    <article class="mt-6 font-medium w-full max-w-[400px] rounded-lg border-2 border-secondary p-6">
      <section class="flex flex-col items-start space-y-6">
        <figure class="w-full  rounded-lg overflow-hidden">
          <img :src="QrCode" alt="QR Code" class="object-cover" />
        </figure>
      </section>
    </article>
    <div class="w-full text-center md:text-left mt-6 md:ml-16">
      <Link href="/links">View Links</Link>
    </div>
  </div>
</template>