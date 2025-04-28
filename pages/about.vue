<script setup lang="ts">
    import { ref } from 'vue'
    import { useParallaxBackground } from '~/composables/useParallaxBackground'
    import { useFadeIn } from '~/composables/useFadeIn'
    
    const sectionRef = ref<HTMLElement | null>(null)
    const { parallaxStyle } = useParallaxBackground({ target: sectionRef, intensity: 18 })
    
    // Fade-in refs and instances
    const heroTextRef = ref<HTMLElement | null>(null)
    const missionVisionRef = ref<HTMLElement | null>(null)
    const valuesRef = ref<HTMLElement | null>(null)
    const facultyRef = ref<HTMLElement | null>(null)
    
    useFadeIn({ target: heroTextRef, delay: 200 })
    useFadeIn({ target: missionVisionRef, delay: 100 })
    useFadeIn({ target: valuesRef, delay: 100 })
    useFadeIn({ target: facultyRef, delay: 100 })
    // No logic needed for static about page
    </script>

<template>
        <!-- Topbar -->
        <!-- ... existing topbar ... -->
        <section ref="sectionRef" class="relative bg-gradient-to-br from-blue-50/25 to-white/25 min-h-screen flex flex-col overflow-hidden">
          <!-- Parallax Background Image -->
          <div class="absolute inset-0 -z-10 w-full h-full overflow-hidden">
            <NuxtImg
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=70"
              alt="Abstract Mountain Background"
              class="w-full h-full object-cover scale-110"
              :style="parallaxStyle"
              width="1200"
              height="800"
              format="webp"
              quality="80"
              loading="eager"
              priority
            />
            <div class="absolute inset-0 bg-white/5 dark:bg-black/5" />
          </div>
    
          <!-- Hero Section -->
          <div class="flex flex-col md:flex-row items-center justify-between px-6 py-16 max-w-7xl mx-auto w-full z-10">
            <div ref="heroTextRef" class="flex-1 text-center md:text-left">
              <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                About <span class="text-blue-700">Pharma Education Institute</span>
              </h1>
              <p class="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
                Discover our mission, values, and commitment to shaping the future of pharmacy through excellence in education and research.
              </p>
            </div>
            <div class="flex-1 flex justify-center mt-10 md:mt-0">
              <NuxtImg
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80"
                alt="About Us Hero Image"
                class="rounded-xl shadow-lg w-full max-w-md object-cover"
                width="400"
                height="400"
                format="webp"
                quality="80"
                loading="lazy"
              />
            </div>
          </div>
    
          <!-- Mission & Vision Section -->
          <section ref="missionVisionRef" class="bg-white/50 py-16 px-6 shadow-inner z-10">
            <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
              <div class="flex flex-col">
                <UIcon name="fa6-solid:bullseye" class="text-blue-600 text-4xl mb-3" />
                <h2 class="text-2xl font-bold text-blue-800 mb-3">Our Mission</h2>
                <p class="text-gray-700 leading-relaxed">
                  To cultivate knowledgeable, ethical, and compassionate pharmacists equipped to lead in healthcare innovation and patient care.
                </p>
              </div>
              <div class="flex flex-col">
                <UIcon name="fa6-solid:eye" class="text-blue-600 text-4xl mb-3" />
                <h2 class="text-2xl font-bold text-blue-800 mb-3">Our Vision</h2>
                <p class="text-gray-700 leading-relaxed">
                  To be a globally recognized center for pharmaceutical education, research, and practice, driving advancements in health and well-being.
                </p>
              </div>
            </div>
          </section>
    
          <!-- Values Section -->
          <section ref="valuesRef" class="py-16 px-6 bg-blue-50/25 z-10">
            <div class="max-w-6xl mx-auto">
              <h2 class="text-3xl font-bold text-center text-blue-800 mb-10">Our Core Values</h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
                  <UIcon name="fa6-solid:lightbulb" class="text-yellow-500 text-4xl mb-3" />
                  <h3 class="font-semibold text-lg text-gray-700 mb-1">Innovation</h3>
                  <p class="text-gray-600 text-sm">Fostering creativity and forward-thinking in research and practice.</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
                  <UIcon name="fa6-solid:handshake-angle" class="text-green-500 text-4xl mb-3" />
                  <h3 class="font-semibold text-lg text-gray-700 mb-1">Integrity</h3>
                  <p class="text-gray-600 text-sm">Upholding the highest ethical standards in all endeavors.</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
                  <UIcon name="fa6-solid:users-gear" class="text-purple-500 text-4xl mb-3" />
                  <h3 class="font-semibold text-lg text-gray-700 mb-1">Collaboration</h3>
                  <p class="text-gray-600 text-sm">Working together to achieve shared goals in education and healthcare.</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
                  <UIcon name="fa6-solid:heart-pulse" class="text-red-500 text-4xl mb-3" />
                  <h3 class="font-semibold text-lg text-gray-700 mb-1">Compassion</h3>
                  <p class="text-gray-600 text-sm">Emphasizing patient-centered care and community well-being.</p>
                </div>
              </div>
            </div>
          </section>
    
          <!-- Faculty Highlight Section -->
          <section ref="facultyRef" class="py-16 px-6 bg-white/75 z-10">
            <div class="max-w-5xl mx-auto text-center">
              <h2 class="text-3xl font-bold text-blue-800 mb-10">Meet Our Expert Faculty</h2>
              <p class="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                Our faculty comprises renowned researchers, experienced clinicians, and dedicated educators committed to mentoring the next generation of pharmacy leaders.
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Faculty Card 1 -->
                <div class="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
                  <NuxtImg src="https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=150&q=80" alt="Faculty Member 1" class="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-blue-200" width="100" height="100" format="webp" quality="80" loading="lazy" />
                  <h3 class="font-semibold text-lg text-gray-800">Dr. Evelyn Reed</h3>
                  <p class="text-blue-600 text-sm mb-2">Professor of Pharmacology</p>
                  <p class="text-gray-500 text-xs">Expertise in drug discovery and molecular pharmacology.</p>
                </div>
                <!-- Faculty Card 2 -->
                <div class="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
                  <NuxtImg src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80" alt="Faculty Member 2" class="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-blue-200" width="100" height="100" format="webp" quality="80" loading="lazy" />
                  <h3 class="font-semibold text-lg text-gray-800">Dr. Samuel Chen</h3>
                  <p class="text-blue-600 text-sm mb-2">Associate Professor of Clinical Pharmacy</p>
                  <p class="text-gray-500 text-xs">Focuses on patient outcomes and medication therapy management.</p>
                </div>
                <!-- Faculty Card 3 -->
                <div class="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
                  <NuxtImg src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80" alt="Faculty Member 3" class="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-blue-200" width="100" height="100" format="webp" quality="80" loading="lazy" />
                  <h3 class="font-semibold text-lg text-gray-800">Dr. Aisha Khan</h3>
                  <p class="text-blue-600 text-sm mb-2">Assistant Professor of Pharmaceutics</p>
                  <p class="text-gray-500 text-xs">Specializes in drug delivery systems and formulation science.</p>
                </div>
              </div>
            </div>
          </section>
        </section>
    </template>

<style scoped>
/* Add any page-specific styles here */
</style>