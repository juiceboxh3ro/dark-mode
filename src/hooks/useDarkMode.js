import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = () => {
  const [enableDarkMode, setEnableDarkMode] = useLocalStorage('dark')

  const isDark = JSON.parse(localStorage.getItem('dark'));

  useEffect(() => {
    if (isDark === true) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  },[isDark])

  return [enableDarkMode, setEnableDarkMode]
}
