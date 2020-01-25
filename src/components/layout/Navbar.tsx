import React, {useState} from 'react'

import '../../styles/layout/TopNav.css'

export const Navbar = () => {
  const [drawerOpen, toggleDrawerOpen] = useState<boolean>(false)

  const toggleDrawer = () => {
    const menuBtn = document.getElementById('menu-btn')
    const menuDrawer = document.getElementById('nav-drawer')
    menuBtn?.classList.toggle("clicked")
    menuDrawer?.classList.toggle("clicked")
  }

  return (
    <header className="page-header shrink-on-scroll text-center">
      <div id="menu-btn"
        onClick={toggleDrawer}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h1 className="brand-name">
        <a href="#">Time<span>Shift</span></a>
      </h1>
      <a href="https://github.com/nstranquist" className="github-svg-link">
        <svg
          // xmlns="http://www.w3.org/2000/svg"
          // xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="48px"
          height="48px"
          viewBox="0 0 48 48">
          <g transform="translate(0, 0)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="#181717"
              d="M24,0.6c-13.3,0-24,10.7-24,24c0,10.6,6.9,19.6,16.4,22.8&#10;&#9;c1.2,0.2,1.6-0.5,1.6-1.2c0-0.6,0-2.1,0-4.1c-6.7,1.5-8.1-3.2-8.1-3.2c-1.1-2.8-2.7-3.5-2.7-3.5c-2.2-1.5,0.2-1.5,0.2-1.5&#10;&#9;c2.4,0.2,3.7,2.5,3.7,2.5c2.1,3.7,5.6,2.6,7,2c0.2-1.6,0.8-2.6,1.5-3.2c-5.3-0.6-10.9-2.7-10.9-11.9c0-2.6,0.9-4.8,2.5-6.4&#10;&#9;c-0.2-0.6-1.1-3,0.2-6.4c0,0,2-0.6,6.6,2.5c1.9-0.5,4-0.8,6-0.8c2,0,4.1,0.3,6,0.8c4.6-3.1,6.6-2.5,6.6-2.5c1.3,3.3,0.5,5.7,0.2,6.4&#10;&#9;c1.5,1.7,2.5,3.8,2.5,6.4c0,9.2-5.6,11.2-11,11.8c0.9,0.7,1.6,2.2,1.6,4.4c0,3.2,0,5.8,0,6.6c0,0.6,0.4,1.4,1.7,1.2&#10;&#9;C41.1,44.2,48,35.2,48,24.6C48,11.3,37.3,0.6,24,0.6z"/>
          </g>
        </svg>
      </a>
      <ul className="nav-list2">
        <li><a href="#timeshift-clock" className="a-clock">Clock</a></li>
        <li><a href="#options-section" className="a-options">Settings</a></li>
        <li><a href="#alarms-section" className="a-alarm">Alarms</a></li>
        <li><a href="#log-section" className="a-log">Log</a></li>
        <li><a href="#feedback-section">Feedback</a></li>
      </ul>
      <nav className="nav-drawer" id="nav-drawer">
        <ul className="nav-list drawer-list">
          <li><a href="#timeshift-clock" className="a-clock">Clock</a></li>
          <li><a href="#options-section" className="a-options">Settings</a></li>
          <li><a href="#alarms-section" className="a-alarm">Alarms</a></li>
          <li><a href="#log-section" className="a-log">Log</a></li>
          <li><a href="#feedback-section">Feedback</a></li>
        </ul>
      </nav>
    </header>
  )
}