import './App.css';
import Dropdown from './components/dropdown/Dropdown';
import Nav from './components/nav/Nav';
import NavItem from './components/navItem/NavItem';
import { AiFillCaretRight, AiFillMail, AiFillCaretDown } from "react-icons/ai";

// styles
import './components/nav/Nav.css'



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
        <NavItem title='home' icon={<AiFillCaretRight/>} url='/' />
        <NavItem title='dropdown' icon={<AiFillCaretDown />} url='/knowledge'>
        <Dropdown></Dropdown>
        </NavItem>
        <NavItem title='blog' icon={<AiFillCaretRight/>} url='/blog' />

        <NavItem title='contact' icon={<AiFillMail/>} url='/contact'>
          
        </NavItem>
      </Nav>
      <h1>REACT NAV with DROPDOWN</h1>
    </div>
  );
}

export default App;
