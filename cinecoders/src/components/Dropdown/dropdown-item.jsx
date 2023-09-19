import React from "react"

export function DropDownItem({ title, icon, color, handleClose }) {
  return (
    <li
      className="dropdown__item"
      onClick={() => {
        handleClose()
      }}
    >
      <p className="dropdown__text" style={{ color: color }}>
        {title} {color}
      </p>
      <span className="dropdown__icon"> {icon}</span>
    </li>
  )
}
