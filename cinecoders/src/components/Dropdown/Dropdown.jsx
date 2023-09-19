import React, { useEffect, useRef, useState } from "react"
import { DropDownItem } from "./dropdown-item"

export function DropDown({
  id,
  isOpen,
  handleTriggerClick,
  handleClose,
  items,
  trigger,
}) {
  const [isInViewport, setIsInViewport] = useState(false)
  const menuRef = useRef()
  const triggerRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log("Component is in the viewport")
        setIsInViewport(true)
      } else {
        console.log("Component is not in the viewport")
        setIsInViewport(false)
      }
    })

    if (triggerRef.current) {
      observer.observe(triggerRef.current)
    }

    return () => {
      if (triggerRef.current) {
        observer.unobserve(triggerRef.current)
      }
    }
  }, [])

  return (
    <div className="dropdown">
      <button
        className="dropdown__trigger text"
        id={id}
        ref={triggerRef}
        onClick={() => handleTriggerClick()}
      >
        {trigger}&nbsp; &nbsp;⫶
      </button>
      {isOpen && isInViewport && (
        <div
          className="dropdown__overlay dropdown__overlay_opened"
          onClick={handleClose}
        ></div>
      )}
      {isOpen && isInViewport && (
        <ul className="dropdown__menu dropdown__menu_opened" ref={menuRef}>
          {items.map((item) => (
            <DropDownItem
              key={item.title}
              title={item.title}
              icon={item.icon}
              color={item.color}
              handleClose={() => handleClose()}
            />
          ))}
        </ul>
      )}
    </div>
  )
}
