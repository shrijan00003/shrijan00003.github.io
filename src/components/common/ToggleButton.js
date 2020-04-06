import React from "react"
import useTheme from "../../hooks/useTheme"

export default function ToggleButton() {
  const [theme, toggleTheme] = useTheme()
  const onToggle = () => {
    toggleTheme()
  }
  return (
    <label className="toggle">
      <input
        type="checkbox"
        className="toggle_input"
        checked={theme === "dark"}
        onChange={onToggle}
      />
      <div className="toggle-control"></div>
    </label>
  )
}
