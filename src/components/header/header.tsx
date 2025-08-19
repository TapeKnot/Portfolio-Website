"use client"
import Link from 'next/link'
import './header.css'
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'

export const Header = () => {
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    setOpened(!opened);
  };

  const pathname = usePathname();
  useEffect(() => {   // Reset state on page change
      setOpened(false);
  }, [pathname]);

  return(
    <header>
      <nav>
        <div className="nav-bar">
          <h2 className="text-italic">Benjamin Levy</h2>
          <button className="hamburger-menu" onClick={handleClick}>
              {opened
                ? "X"
                : <div className="hamburger-menu-icon">
                  <span/>
                  <span/>
                  <span/>
                </div>
              }
          </button>
          <div className="nav-button-container">
            <Link className="nav-button" href="/">Home</Link>
            <Link className="nav-button" href="/projects">Projects</Link>
            <Link className="nav-button" href="/about">About</Link>
            <a className="nav-button" href="/Benjamin-Levy-Resume.pdf" target="_blank">Resume</a>
          </div>
        </div>
        <span/>
        {opened
          ? <div className="mobile-nav-button-container">
              <Link className="nav-button" href="/">Home</Link>
              <Link className="nav-button" href="/projects">Projects</Link>
              <Link className="nav-button" href="/about">About</Link>
              <a className="nav-button" href="/Benjamin-Levy-Resume.pdf" target="_blank">Resume</a>
          </div>
          : <div/>
        }
      </nav>
    </header>
  )
}