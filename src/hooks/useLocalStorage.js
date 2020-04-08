import { useCallback } from "react"
export default function useLocalStorage() {
  // FIXME: other generic implementation
  const setValue = (key, value) => {
    return localStorage.setItem(key, value)
  }

  const getItem = useCallback(key => {
    return localStorage.getItem(key)
  }, [])

  return [setValue, getItem]
}
