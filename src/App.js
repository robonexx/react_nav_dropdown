import React, { useState } from 'react';
import './App.css';
import './Nav.css';
import Dropdown from './components/dropdown/Dropdown';
import Nav from './components/nav/Nav';
import NavItem from './components/navItem/NavItem';

// nav
/* function Nav(props) {
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'>{props.children}</ul>
    </nav>
  );
}
 */
// navItem
/* function NavItem(props) {
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
} */

// dropdown menu
/* function Dropdown() { */
  // dropdown item
  /* function DropDownItem(props) {
    return (
      <a href='#' className='menu-item'>
        <span className='link-icon'>{props.leftIcon}</span>
        {props.children}
        <span className='link-icon'>{props.rightIcon}</span>
      </a>
    );
  }
  return (
    <div className='dropdown'>
      <DropDownItem>Item1</DropDownItem>
      <DropDownItem leftIcon='&#127539'>Item2</DropDownItem>
      <DropDownItem rightIcon='&#127378'>Item3</DropDownItem>
    </div>
  );
} */

function App() {
  return (
    <div className='App'>
      <Nav>
        <NavItem title='home' icon='&#128521;' url='/' />
        <NavItem title='knowledge' icon='&#128540;' url='/knowledge' />
        <NavItem title='blog' icon='&#128517;' url='/blog' />

        <NavItem title='contact' icon='&#11093;' url='/contact'>
          <Dropdown></Dropdown>
        </NavItem>
      </Nav>
      <h1>REACT NAV with DROPDOWN</h1>
    </div>
  );
}

export default App;
