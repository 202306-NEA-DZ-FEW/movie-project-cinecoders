/*  import React, { useEffect, useRef, useState } from 'react';
//import './styles.css';
import { DropDownItem } from './dropdown-item';
//import { useNavigate } from 'react-router-dom';

export function DropDown({
  id,
  isOpen,
  handleTriggerClick,
  handleClose,
  position,
  items,
  trigger,
}) {
  const [isInViewport, setIsInViewport] = useState(false);
  const menuRef = useRef();
  const triggerRef = useRef();
  //const navigate = useNavigate();

  useEffect(() => {
    const newRef = triggerRef;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log('Component is in the viewport');
        setIsInViewport(true);
      } else {
        console.log('Component is not in the viewport');
        setIsInViewport(false);
      }
    });

    if (newRef.current) {
      observer.observe(newRef.current);
    }

    return () => {
      if (newRef.current) {
        observer.unobserve(newRef.current);
      }
    };
  }, []);

 // const handleItemClick = (title) => {
    // Navigate to the appropriate page when an item is clicked
   // navigate(`/page1/${title}`);
 // };

  return (
    <div className='dropdown'>
      <button
        className='dropdown__trigger text'
        id={id}
        ref={triggerRef}
        onClick={(event) =>
          handleTriggerClick(
            event,
            menuRef.current.clientHeight,
            menuRef.current.clientWidth,
            triggerRef.current.clientHeight,
            triggerRef.current.clientWidth
          )
        }
      >
        {trigger}&nbsp; &nbsp;⫶
      </button>
      <div
        className={`dropdown__overlay${isOpen && isInViewport ? ' dropdown__overlay_opened' : ''}`}
        onClick={handleClose}
      ></div>
      <ul
        className={`dropdown__menu${isOpen && isInViewport ? ' dropdown__menu_opened' : ''}`}
        ref={menuRef}
        //style={{ top: position.top, left: position.left }}
      >
        {items.map((item) => (
          <DropDownItem
            key={item.title}
            title={item.title}
            icon={item.icon}
            color={item.color}
            handleClose={() => handleItemClick(item.title)}
          />
        ))}
      </ul>
    </div>
  );
}
*/

import React, { useEffect, useRef, useState } from 'react';
import { DropDownItem } from './dropdown-item';


export function DropDown({
  id,
  isOpen,
  handleTriggerClick,
  handleClose,
  position,
  items,
  trigger,
}) {
  const [isInViewport, setIsInViewport] = useState(false);
  const menuRef = useRef();
  const triggerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log('Component is in the viewport');
        setIsInViewport(true);
      } else {
        console.log('Component is not in the viewport');
        setIsInViewport(false);
      }
    });

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => {
      if (triggerRef.current) {
        observer.unobserve(triggerRef.current);
      }
    };
  }, []);

  return (
    <div className='dropdown'>
      <button
        className='dropdown__trigger text'
        id={id}
        ref={triggerRef}
        onClick={() => handleTriggerClick()} // Toggle the dropdown
      >
        {trigger}&nbsp; &nbsp;⫶
      </button>
      {isOpen && isInViewport && ( // Render the menu when isOpen is true and isInViewport is true
        <div
          className='dropdown__overlay dropdown__overlay_opened'
          onClick={handleClose}
        ></div>
      )}
      {isOpen && isInViewport && ( // Render the menu when isOpen is true and isInViewport is true
        <ul className='dropdown__menu dropdown__menu_opened' ref={menuRef}>
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
  );
}