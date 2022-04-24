import React, { useState, useEffect, useRef } from 'react';
import {
  AiFillCaretRight,
  AiFillCaretLeft,
  AiOutlineDoubleRight,
  AiOutlineSkin,
  AiOutlineCoffee
} from 'react-icons/ai';

import { CSSTransition } from 'react-transition-group';

export default function Dropdown() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(e) {
    const height = e.offsetHeight * 1;
    setMenuHeight(height);
  }

  function DropDownItem(props) {
    return (
      <a
        href='#'
        className='menu-item'
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className='drop-icon'>{props.leftIcon}</span>
        {props.children}
        <span className='drop-icon-right'>{props.rightIcon}</span>
      </a>
    );
  }
  return (
    <div
      className='dropdown'
      style={{ height: menuHeight * 1.25 }}
      ref={dropdownRef}
    >
      <CSSTransition
        in={activeMenu === 'main'}
        unmountOnExit
        timeout={400}
        classNames='menu-primary'
        onEnter={calcHeight}
      >
        <div className='menu'>
          <DropDownItem leftIcon={<AiOutlineCoffee />}>Coffee</DropDownItem>
          <DropDownItem leftIcon={<AiOutlineSkin />}>Clothes</DropDownItem>
          <DropDownItem
            leftIcon={<AiOutlineDoubleRight />}
            rightIcon={<AiFillCaretRight />}
            goToMenu='subMenu'
          >
            Sub-menu1
          </DropDownItem>
          <DropDownItem
            leftIcon={<AiOutlineDoubleRight />}
            rightIcon={<AiFillCaretRight />}
            goToMenu='extraMenu'
          >
            Sub-menu2
          </DropDownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'subMenu'}
        unmountOnExit
        timeout={400}
        classNames='menu-secondary'
        onEnter={calcHeight}
      >
        <div className='menu'>
          <DropDownItem leftIcon={<AiFillCaretLeft />} goToMenu='main'>
            <h2>Go back</h2>
          </DropDownItem>
          <DropDownItem>subItem1</DropDownItem>
          <DropDownItem>subItem1</DropDownItem>
          <DropDownItem>subItem1</DropDownItem>
          <DropDownItem>subItem1</DropDownItem>
          <DropDownItem>subItem1</DropDownItem>
          <DropDownItem>subItem1</DropDownItem>
          <DropDownItem>subItem1</DropDownItem>
          <DropDownItem>subItem1</DropDownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'extraMenu'}
        unmountOnExit
        timeout={400}
        classNames='menu-secondary'
        onEnter={calcHeight}
      >
        <div className='menu'>
          <DropDownItem leftIcon={<AiFillCaretLeft />} goToMenu='main'>
            <h2>Go Back</h2>
          </DropDownItem>
          <DropDownItem>subItem2</DropDownItem>
          <DropDownItem>subItem2</DropDownItem>
          <DropDownItem>subItem2</DropDownItem>
          <DropDownItem>subItem2</DropDownItem>
          <DropDownItem>subItem2</DropDownItem>
          <DropDownItem>subItem2</DropDownItem>
          <DropDownItem>subItem2</DropDownItem>
          <DropDownItem>subItem2</DropDownItem>
        </div>
      </CSSTransition>
    </div>
  );
}
