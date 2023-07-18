/**
 * Theme transition effect preference from antfu.me
 * https://github.com/antfu/antfu.me/blob/main/src/logics/index.ts
 * New feature: View Transitions API
 * ViewTransition MDN introduce: https://developer.mozilla.org/en-US/docs/Web/API/ViewTransition
 * @returns
 */
export const useTheme = () => {
  const isDark = useDark()
  const toggleTheme = useToggle(isDark)

  const toggle = (event: MouseEvent) => {
    // @ts-expect-error
    const isAppearanceTransition = document.startViewTransition
    && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!isAppearanceTransition) {
      toggleTheme(!isDark.value)
      return
    }

    const x = event.clientX
    const y = event.clientY
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    )
    // @ts-expect-error: Transition API
    const transition = document.startViewTransition(async () => {
      toggleTheme(!isDark.value)
      await nextTick()
    })
    transition.ready
      .then(() => {
        const clipPath = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ]
        console.log('clipPath->>>>', clipPath)
        document.documentElement.animate(
          {
            clipPath: isDark.value
              ? [...clipPath].reverse()
              : clipPath,
          },
          {
            duration: 400,
            easing: 'ease-out',
            pseudoElement: isDark.value
              ? '::view-transition-old(root)'
              : '::view-transition-new(root)',
          },
        )
      })
  }

  return {
    isDark,
    toggle,
  }
}
