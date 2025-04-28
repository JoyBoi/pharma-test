// Removed unused import: import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import { useMotion } from '@vueuse/motion'
import type { MaybeRef } from '@vueuse/core'
import type { MotionInstance, MotionVariants } from '@vueuse/motion'

interface UseFadeInOptions {
  target: MaybeRef<HTMLElement | null>
  delay?: number
}

const variants: MotionVariants= {
  initial: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 500,
      ease: 'easeOut'
    }
  }
}

export function useFadeIn(options: UseFadeInOptions): { motionInstance: MotionInstance } {
  const { target, delay = 0 } = options
  const hasAnimated = ref(false)

  const motionInstance = useMotion(target, variants)

  useIntersectionObserver(
    target,
    ([{ isIntersecting }]) => {
      if (isIntersecting && !hasAnimated.value) {
        setTimeout(() => {
          motionInstance.variant.value = 'visible'
          hasAnimated.value = true // Ensure animation runs only once
        }, delay)
      }
    },
    { threshold: 0.1 } // Trigger when 10% of the element is visible
  )

  return {
    motionInstance
  }
}