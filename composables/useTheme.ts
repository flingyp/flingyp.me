export const useTheme = () => {
  const isDark = useDark()
  const toggle = useToggle(isDark)

  return {
    isDark,
    toggle,
  }
}
