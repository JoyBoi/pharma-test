<template>
  <UApp>
    <div
      ref="parallaxBgRef"
      class="fixed inset-0 -z-10 pointer-events-none select-none"
      :style="parallaxStyle"
      aria-hidden="true"
    >
      <svg width="100%" height="100%" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
        <defs>
          <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="#e0e7ef" />
          </pattern>
        </defs>
        <rect width="1440" height="900" fill="url(#dots)" />
      </svg>
    </div>
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
    <!-- Topbar -->
    <header class="w-full bg-blue-700 backdrop-blur border-b border-blue-100 sticky top-0 z-30">
      <nav class="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <a href="/" class="flex items-center gap-2">
          <UIcon name="fa6-solid:graduation-cap" class="text-gray-100 text-2xl" />
          <span class="font-bold text-gray-100 text-lg tracking-wide">Pharma Education Institute</span>
        </a>
        <div class="hidden md:flex gap-6 items-center">
          <a href="/about" class="text-gray-200 hover:text-gray-100 font-medium transition">About</a>
          <a href="/apply" class="text-gray-200 hover:text-gray-100 font-medium transition">Apply</a>
          <a href="mailto:info@pharmaedu.example"
            class="text-gray-200 hover:text-gray-100 font-medium flex items-center gap-1 transition">
            <UIcon name="fa6-solid:envelope" class="text-gray-100 text-lg" />
            Contact
          </a>
        </div>
        <div class="md:hidden">
          <UButton icon="fa6-solid:align-justify" color="neutral" variant="ghost" size="sm" aria-label="Open menu"
            disabled />
        </div>
      </nav>
    </header>
    <NuxtPage />
    <!-- Footer -->
    <footer class="mt-auto bg-blue-900 text-white py-6 px-6">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-2">
          <UIcon name="fa6-solid:graduation-cap" class="text-white text-2xl" />
          <span class="font-semibold">Pharma Education Institute</span>
        </div>
        <div class="flex gap-4">
          <a href="/about" class="hover:underline">About</a>
          <a href="/apply" class="hover:underline">Apply</a>
          <a href="mailto:info@pharmaedu.example" class="hover:underline flex items-center gap-1">
            <UIcon name="fa6-solid:envelope" class="text-white text-lg" />
            Contact
          </a>
        </div>
        <span class="text-sm">&copy; 2024 Pharma Education Institute. All rights reserved.</span>
      </div>
    </footer>
  </UApp>
</template>

<script setup lang="ts">
const parallaxBgRef = ref<HTMLElement | null>(null)
const { parallaxStyle } = useParallaxBackground({ target: parallaxBgRef, intensity: 60 })
</script>
