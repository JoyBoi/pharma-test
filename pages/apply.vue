<script setup lang="ts">
import { ref, computed } from 'vue'
// Remove useWindowScroll, import useParallax
import { useParallax } from '@vueuse/core'
// Removed: import { useParallaxBackground } from '~/composables/useParallaxBackground'
import { useFadeIn } from '~/composables/useFadeIn'

import type { TabsItem } from '@nuxt/ui'

const sectionRef = ref<HTMLElement | null>(null)
// Removed: const { parallaxStyle } = useParallaxBackground({ target: sectionRef, intensity: 18 })

// --- New Parallax Logic using useParallax ---
const { roll, tilt } = useParallax(sectionRef)

const parallaxStyle = computed(() => {
  // Adjust the intensity/range of the effect as needed
  const tiltValue = tilt.value * 20 // Example: Multiply tilt by 20px
  const rollValue = roll.value * 20 // Example: Multiply roll by 20px

  return {
    transform: `translateX(${rollValue}px) translateY(${tiltValue}px) scale(1.10)`,
    transition: 'transform 0.1s linear' // Smooth transition
  }
})
// --- End New Parallax Logic ---

// Fade-in refs and instances
const heroContentRef = ref<HTMLElement | null>(null)
const formRef = ref<HTMLElement | null>(null)

useFadeIn({ target: heroContentRef, delay: 200 })
useFadeIn({ target: formRef, delay: 300 })

const tabs = [
  {
    label: 'Register',
    description: 'Create a new account to start your application.',
    icon: 'fa6-solid:user-plus',
    slot: 'register' as const
  },
  {
    label: 'Login',
    description: 'Already have an account? Log in to continue your application.',
    icon: 'mdi:login',
    slot: 'login' as const
  }
] satisfies TabsItem[]

const registerForm = reactive({
  name: '',
  email: '',
  phone: '',
  password: ''
})
const loginForm = reactive({
  email: '',
  password: ''
})
const registerLoading = ref(false)
const loginLoading = ref(false)

function resetForms() {
  registerForm.name = ''
  registerForm.email = ''
  registerForm.phone = ''
  registerForm.password = ''
  loginForm.email = ''
  loginForm.password = ''
}

async function onRegister() {
  registerLoading.value = true
  setTimeout(() => {
    registerLoading.value = false
    resetForms()
  }, 1200)
}

async function onLogin() {
  loginLoading.value = true
  setTimeout(() => {
    loginLoading.value = false
    resetForms()
  }, 1200)
}
</script>

<template>
  <div>
    <section ref="sectionRef"
      class="relative bg-gradient-to-br from-blue-200/50 to-white/50 min-h-screen flex flex-col overflow-hidden">
      <!-- Blurred Background Image -->
      <div class="absolute inset-0 -z-10 w-full h-full overflow-hidden">
        <NuxtImg src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80"
          alt="Blurred Background" class="w-full h-full object-cover scale-110" :style="parallaxStyle" width="1200"
          height="800" format="webp" quality="80" loading="eager" priority />
        <div class="absolute inset-0 bg-white/5 dark:bg-black/5" />
      </div>
      <div
        class="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto w-full py-12 md:py-20 px-4 gap-10 md:gap-16 z-10">
        <!-- Left: Image & Text -->
        <div ref="heroContentRef" class="flex-1 flex flex-col justify-center md:justify-end w-full">
          <NuxtImg
            src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80"
            alt="Apply Hero" class="rounded-xl shadow-lg w-full max-w-md object-cover mb-6" width="400" height="400"
            format="webp" quality="80" loading="lazy" />
          <div class="w-full flex flex-col items-center md:items-start">
            <div class="inline-flex items-center gap-2 mb-4">
              <UIcon name="fa6-solid:graduation-cap" class="text-blue-700 text-3xl" />
              <span class="font-semibold text-blue-700 text-lg tracking-wide">Apply to Pharma Education Institute</span>
            </div>
            <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4 text-center md:text-left">
              Start <span class="text-green-600">Your Pharma Journey</span>
            </h1>
            <p class="text-lg md:text-xl text-gray-600 mb-8 max-w-xl text-center md:text-left">
              Join a legacy of excellence. Register or log in to begin your application.
            </p>
          </div>
        </div>
        <!-- Right: Form -->
        <div ref="formRef" class="flex-1 flex flex-col items-center md:items-start w-full">
          <div class="w-full h-110 max-w-md bg-white/50 shadow-xl rounded-2xl p-8 mb-8 border border-blue-100">
            <UTabs :items="tabs" class="mb-6 w-full" variant="link" :ui="{ trigger: 'flex-1' }">
              <template #register="{ item }">
                <div class="flex flex-row items-center gap-2 mb-4">
                  <UIcon :name="item.icon" class="text-blue-700 text-lg" />
                  <h2 class="text-xl font-semibold text-blue-700">{{ item.label }}</h2>
                </div>
                <form class="flex flex-col justify-between h-70 gap-4" @submit.prevent="onRegister">
                  <div class="flex flex-col gap-4">
                    <UInput v-model="registerForm.name" placeholder="Enter your full name" required size="lg" />
                    <UInput v-model="registerForm.email" placeholder="Enter your email" type="email" required
                      size="lg" />
                    <UInput v-model="registerForm.phone" placeholder="Enter your phone number" required size="lg" />
                    <UInput v-model="registerForm.password" placeholder="Create a password" type="password" required
                      size="lg" />
                  </div>
                  <UButton type="submit" color="primary" size="lg" block :loading="registerLoading">Register</UButton>
                </form>
              </template>
              <template #login="{ item }">
                <div class="flex flex-row items-center gap-2 mb-4">
                  <UIcon :name="item.icon" class="text-blue-700 text-xl" />
                  <h2 class="text-xl font-semibold text-blue-700">{{ item.label }}</h2>
                </div>
                <form class="flex flex-col justify-between h-70 gap-4" @submit.prevent="onLogin">
                  <div class="flex flex-col gap-4">
                    <UInput v-model="loginForm.email" placeholder="Enter your email" type="email" required size="lg" />
                    <UInput v-model="loginForm.password" placeholder="Enter your password" type="password" required
                      size="lg" />
                  </div>
                  <UButton type="submit" color="primary" size="lg" block :loading="loginLoading">Login</UButton>
                </form>
              </template>
            </UTabs>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Add any page-specific styles here */
</style>