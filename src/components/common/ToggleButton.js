import React from "react"

export default function ToggleButton(props) {
  const { dark, toggleTheme } = props
  const onToggle = () => {
    toggleTheme()
  }
  return (
    <label className="toggle">
      <input
        type="checkbox"
        className="toggle_input"
        checked={dark}
        onChange={onToggle}
      />
      <div className="toggle-control"></div>
    </label>
  )
}
