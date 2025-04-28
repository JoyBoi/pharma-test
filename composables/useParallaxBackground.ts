import { computed, ref, type Ref } from 'vue'
import { useParallax, type MaybeElementRef } from '@vueuse/core'

interface UseParallaxBackgroundOptions {
  target?: MaybeElementRef<HTMLElement | null>
  intensity?: number
}

export function useParallaxBackground(options: UseParallaxBackgroundOptions = {}) {
  const { target = ref(null), intensity = 40 } = options
  const { tilt, roll } = useParallax(target)

  // tilt: vertical, roll: horizontal, both in -0.5 ~ 0.5
  const parallaxStyle = computed(() => {
    const x = (roll.value || 0) * intensity
    const y = (tilt.value || 0) * intensity
    return {
      transform: `translate3d(${x}px, ${y}px, 0) scale(1.1)`,
      transition: 'transform 0.2s cubic-bezier(.4,2,.6,1)'
    }
  })

  return {
    parallaxStyle,
    tilt,
    roll,
    target
  }
}