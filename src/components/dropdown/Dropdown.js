import React, { useState, useEffect, useRef } from 'react';
import { FcAbout } from 'react-icons/fc';
import { FcRight } from 'react-icons/fc';
import { FcTodoList } from 'react-icons/fc';
import { FcPrevious } from 'react-icons/fc';

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
        <span className='link-icon'>{props.leftIcon}</span>
        {props.children}
        <span className='icon-right'>{props.rightIcon}</span>
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
          <DropDownItem>Item1</DropDownItem>
          <DropDownItem leftIcon={<FcAbout />}>Item2</DropDownItem>
          <DropDownItem
            leftIcon={<FcTodoList />}
            rightIcon={<FcRight />}
            goToMenu='subMenu'
          >
            Item3
                  </DropDownItem>
                  <DropDownItem
            leftIcon="🦧"
            rightIcon={<FcRight />}
            goToMenu="extraMenu">
            ExtraMenu
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
          <DropDownItem leftIcon={<FcPrevious />} goToMenu='main'>
            <h2>subItem1</h2>
          </DropDownItem>
          <DropDownItem>subItem2</DropDownItem>
          <DropDownItem>subItem3</DropDownItem>
          <DropDownItem>subItem3</DropDownItem>
          <DropDownItem>subItem3</DropDownItem>
          <DropDownItem>subItem3</DropDownItem>
          <DropDownItem>subItem3</DropDownItem>
          <DropDownItem>subItem3</DropDownItem>
          <DropDownItem>subItem3</DropDownItem>
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
          <DropDownItem leftIcon={<FcPrevious />} goToMenu='main'>
            <h2>subDrop2Item2</h2>
          </DropDownItem>
          <DropDownItem>subItem2</DropDownItem>
          <DropDownItem>subItem3</DropDownItem>
          <DropDownItem>subItem3</DropDownItem>
          <DropDownItem>subItem3</DropDownItem>
          <DropDownItem>subItem3</DropDownItem>
          <DropDownItem>subItem3</DropDownItem>
          <DropDownItem>subItem3</DropDownItem>
          <DropDownItem>subItem3</DropDownItem>
        </div>
      </CSSTransition>
    </div>
  );
}
