import React, { useState } from 'react';



export default function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className='nav-item' key={props.title}>
      <a href="#" onClick={() => setOpen(!open)}>
        <span className='link-title'>{props.title}</span>
        <span className='link-icon'>{props.icon}</span>
      </a>

      {open && props.children}
    </li>
  );
}
