<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useParallaxBackground } from '~/composables/useParallaxBackground'
import { useFadeIn } from '~/composables/useFadeIn'
import { useIntervalFn } from '@vueuse/core'
import { useMotion } from '@vueuse/motion'
import type { MotionVariants } from '@vueuse/motion'

const sectionRef = ref<HTMLElement | null>(null)
const { parallaxStyle } = useParallaxBackground({ target: sectionRef, intensity: 18 })

const heroSectionRef = ref<HTMLElement | null>(null)
const { parallaxStyle: heroParallaxStyle } = useParallaxBackground({ target: heroSectionRef, intensity: 18 })

// Fade-in refs and instances
const heroTextRef = ref<HTMLElement | null>(null)
const highlightsRef = ref<HTMLElement | null>(null)
const aboutSectionRef = ref<HTMLElement | null>(null)
const updatesSectionRef = ref<HTMLElement | null>(null) // Ref for the new section

useFadeIn({ target: heroTextRef, delay: 200 })
useFadeIn({ target: highlightsRef, delay: 100 })
useFadeIn({ target: aboutSectionRef, delay: 100 })
useFadeIn({ target: updatesSectionRef, delay: 100 }) // Apply fade-in to the new section

// Dummy Notifications Data
interface Notification {
  id: number
  title: string
  date: string
  content: string
}

const notifications = ref<Notification[]>([
  { id: 1, title: 'New Course Enrollment Open', date: '2024-07-20', content: 'Enrollment for the Fall 2024 semester is now open.' },
  { id: 2, title: 'Campus Event: Pharma Symposium', date: '2024-07-18', content: 'Join us for the annual Pharma Symposium next week.' },
  { id: 3, title: 'Library Hours Update', date: '2024-07-15', content: 'Summer library hours are now in effect.' },
  { id: 4, title: 'Research Grant Deadline Approaching', date: '2024-07-12', content: 'Submit your research grant proposals by July 30th.' },
  { id: 5, title: 'Guest Lecture: Dr. Anya Sharma', date: '2024-07-10', content: 'Dr. Sharma will discuss advancements in drug delivery.' },
  { id: 6, title: 'Student Association Elections', date: '2024-07-08', content: 'Vote for your student representatives next Monday.' },
  { id: 7, title: 'Lab Safety Training Mandatory', date: '2024-07-05', content: 'Complete the online lab safety module by end of month.' },
  { id: 8, title: 'Career Fair Announcement', date: '2024-07-02', content: 'Meet top pharmaceutical companies at our career fair.' },
  { id: 9, title: 'Holiday Closure Notice', date: '2024-06-30', content: 'The institute will be closed for the upcoming public holiday.' },
  { id: 10, title: 'Alumni Networking Event', date: '2024-06-28', content: 'Connect with fellow alumni at our virtual networking night.' },
])

const currentNotificationIndex = ref(0)

const currentNotification = computed(() => {
  return notifications.value[currentNotificationIndex.value]
})

const notificationMotion = ref()

const notificationVariants: MotionVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 500, ease: 'easeOut' },
  },
  leave: {
    opacity: 0,
    y: -10,
    transition: { duration: 300, ease: 'easeIn' },
  },
}

// Removed manual watch for leave animation; v-motion handles this with v-if

const { pause, resume } = useIntervalFn(() => {
  currentNotificationIndex.value = (currentNotificationIndex.value + 1) % notifications.value.length
}, 3000) // Increased interval to 3 seconds

// No logic needed for static landing page
</script>
<template>
  <!-- Topbar (commented out) -->
  <section ref="sectionRef" class="relative bg-gradient-to-br from-blue-50/25 to-white/25 min-h-screen flex flex-col">
    <div class="absolute inset-0 -z-10 w-full h-full overflow-hidden">
      <NuxtImg src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=70"
        alt="Abstract Mountain Background" class="w-full h-full object-cover scale-110" :style="parallaxStyle"
        width="1200" height="800" format="webp" quality="80" loading="eager" priority />
      <div class="absolute inset-0 bg-white/5 dark:bg-black/5" />
    </div>
    <!-- Hero Section -->
    <section ref="heroSectionRef"
      class="relative bg-gradient-to-br from-blue-100/25 to-white/25 min-h-[80vh] flex flex-col overflow-hidden">
      <!-- Parallax Background Image -->
      <div class="absolute inset-0 -z-10 w-full h-full overflow-hidden">
        <NuxtImg src="https://images.unsplash.com/photo-1584515933487-75980c16ea60?auto=format&fit=crop&w=1200&q=70"
          alt="Abstract Science Background" class="w-full h-full object-cover scale-110" :style="heroParallaxStyle"
          width="1200" height="800" format="webp" quality="80" loading="eager" priority />
        <div class="absolute inset-0 bg-white/5 dark:bg-black/5" />
      </div>
      <div class="flex flex-col md:flex-row items-center justify-between px-6 py-16 max-w-7xl mx-auto w-full z-10">
        <div class="flex-1 text-center md:text-left">
          <div class="inline-flex items-center gap-2 mb-4">
            <UIcon name="fa6-solid:graduation-cap" class="text-blue-700 text-3xl" />
            <span class="font-semibold text-blue-700 text-lg tracking-wide">Pharma Education Institute</span>
          </div>
          <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Empowering Future Pharmacists
          </h1>
          <p class="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
            Modern pharmaceutical education rooted in tradition, innovation, and care. Join a legacy of excellence
            inspired by the best academic institutions.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <UButton size="lg" color="primary" class="font-semibold" to="/apply">Apply Now</UButton>
            <UButton size="lg" color="neutral" variant="solid"
              class="font-semibold text-gray-600 bg-white/20 hover:bg-white" to="/about">Learn More</UButton>
          </div>
        </div>
        <div class="flex-1 flex justify-center mt-10 md:mt-0">
          <NuxtImg src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
            alt="Pharma Institute Hero" class="rounded-xl shadow-lg w-full max-w-md object-cover" width="400"
            height="400" format="webp" quality="80" loading="lazy" />
        </div>
      </div>
    </section>
    <!-- Highlights Section -->
    <section ref="highlightsRef" class="bg-white/75 py-12 px-6 shadow-inner">
      <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="flex flex-col items-center text-center">
          <UIcon name="fa6-solid:book-open" class="text-blue-600 text-4xl mb-2" />
          <h3 class="font-bold text-lg mb-1 text-gray-600">Comprehensive Curriculum</h3>
          <p class="text-gray-500">Up-to-date courses blending theory, research, and hands-on practice for tomorrow's
            pharma leaders.</p>
        </div>
        <div class="flex flex-col items-center text-center">
          <UIcon name="fa6-solid:users" class="text-blue-600 text-4xl mb-2" />
          <h3 class="font-bold text-lg mb-1 text-gray-600">Expert Faculty</h3>
          <p class="text-gray-500">Learn from experienced educators and industry professionals dedicated to your growth.
          </p>
        </div>
        <div class="flex flex-col items-center text-center">
          <UIcon name="fa6-solid:medal" class="text-blue-600 text-4xl mb-2" />
          <h3 class="font-bold text-lg mb-1 text-gray-600">Global Recognition</h3>
          <p class="text-gray-500">Our graduates excel worldwide, reflecting our commitment to quality and integrity.
          </p>
        </div>
      </div>
    </section>
    <!-- Updates/Notifications Section -->
    <section ref="updatesSectionRef" class="py-12 px-6 bg-blue-50/25 dark:bg-gray-900/80 shadow-inner backdrop-blur-sm">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold text-blue-800 dark:text-blue-300 mb-6 text-center">Latest Updates & Notifications
        </h2>
        <div class="relative h-32 overflow-hidden rounded-lg bg-blue-50 dark:bg-gray-800/50 p-4 shadow-sm">
          <!-- Animated Notification Content -->
          <div
            v-if="currentNotification" :key="currentNotification.id" v-motion="notificationVariants"
            class="absolute inset-0 p-4 flex flex-col">
            <h3 class="font-semibold text-blue-900 dark:text-blue-200 mb-1">{{ currentNotification.title }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">{{ currentNotification.date }}</p>
            <p class="text-gray-700 dark:text-gray-300 text-sm flex-grow">{{ currentNotification.content }}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- About Section -->
    <section id="about" ref="aboutSectionRef" class="py-16 px-6 bg-white/50">
      <div class="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div class="flex-1">
          <NuxtImg src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
            alt="About Pharma Institute" class="rounded-lg shadow-md w-full max-w-sm object-cover" width="350"
            height="350" format="webp" quality="80" loading="lazy" />
        </div>
        <div class="flex-1">
          <h2 class="text-2xl font-bold text-blue-800 mb-4">About Us</h2>
          <p class="text-gray-700 mb-4">
            Inspired by the legacy of leading universities, Pharma Education Institute is dedicated to nurturing the
            next generation of pharmacists. Our mission is to provide a holistic education that combines academic rigor,
            ethical values, and real-world skills.
          </p>
          <ul class="list-disc list-inside text-gray-600 space-y-2">
            <li>State-of-the-art laboratories and research facilities</li>
            <li>Strong industry partnerships and placement support</li>
            <li>Vibrant campus life and student support services</li>
          </ul>
          <UButton size="xl" color="primary" class="font-semibold mt-5" to="/about">Learn More</UButton>
        </div>
      </div>
    </section>
  </section>
</template>

<style scoped>
/* Removed fade transition CSS - now handled by v-motion */
</style>