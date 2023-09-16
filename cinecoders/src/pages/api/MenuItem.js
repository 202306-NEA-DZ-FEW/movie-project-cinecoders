import React, { useState, useEffect,useRef } from 'react';
import styles from '@/styles/Menu.module.css';
import SubMenuDropdown from '@/pages/api/SubMenuDropdown';

function MenuItem({ item, depth }) {
    const [showmenu,setShowmenu] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
const myref = useRef();
  const handleTogleMenu = () => {
    // setIsOpen(!isOpen);
    setShowmenu((prev)=> !prev);
  };

useEffect(() => {
//     document.addEventListener('click', (e) => {
//       if (myref.current && !myref.current.contains(e.target)) {
//         setShowmenu(false);
//       }
//     })
// })
const myhandler = (event) => {
    if(showmenu && myref.current && !myref.current.contains(event.target)) 
    {
        setShowmenu(false); ;
    }
    
}
document.addEventListener('mousedown',myhandler )}, [showmenu]) 
return (
    <li className={styles.parent} ref={myref}>
      {item.submenu && item.submenu.length > 0 ? (
        <button className={styles.btnStyle} onClick={handleTogleMenu}>
          {item.title}
          {depth > 1 ? (
            <span className={styles.ArrowRight}></span>
          ) : (
            <span className={styles.ArrowDown}></span>
          )}
        </button>
      ) : (
        <span>{item.title}</span>
      )}

      {showmenu && item.submenu && item.submenu.length > 0 && (
        <SubMenuDropdown submenu={item.submenu} depth={depth} />
      )}
    </li>
  );
}

export default MenuItem;
