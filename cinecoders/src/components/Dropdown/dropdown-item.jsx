/*import React from 'react';
//import './styles.css';

export function DropDownItem({ title, icon, color, handleClose }) {
  return (
    <li // creating a list 
      className='dropdown__item' //This class is used for styling the item.

      onClick={() => { // When the list item is clicked, the code inside the curly braces will be executed
        //changeColor(title.split(' ')[0], color); // to change the color 
        handleClose();
      }}
    >
      <p className='dropdown__text' style={{ color: color }}>
        {title} {color}
      </p>
      <span className='dropdown__icon'> {icon}</span> 
    </li>
  );
}*/
import React from 'react';

export function DropDownItem({ title, icon, color, handleClose }) {
  return (
    <li
      className='dropdown__item'
      onClick={() => {
        handleClose();
      }}
    >
      <p className='dropdown__text' style={{ color: color }}>
        {title} {color}
      </p>
      <span className='dropdown__icon'> {icon}</span>
    </li>
  );
}
