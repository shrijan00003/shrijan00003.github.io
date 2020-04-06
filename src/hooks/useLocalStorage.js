export default function useLocalStorage() {
  const setValue = (key, value) => {
    return localStorage.setItem(key, value)
  }
  const getItem = key => {
    return localStorage.getItem(key)
  }
  return [setValue, getItem]
}
