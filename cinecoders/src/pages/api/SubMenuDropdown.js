import React from 'react'
import  MenuItem  from '@/pages/api/MenuItem'
import styles from '@/styles/Menu.module.css'

function SubMenuDropdown({submenu,depth,showmenu}) {
  return (
    <ul className={`${styles.subMenuDropdown} ${depth>1?styles.subMenuDropdownOpen:''} ${showmenu?styles.showMenu:styles.hideMenu}`}>

{submenu.map((menu)=>(

    <MenuItem item={menu} depth={depth+1} />
   
    
))}

    </ul>
  )
}

export default SubMenuDropdown;