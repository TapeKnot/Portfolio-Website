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
            <Link className="text-bold" href="/">Home</Link>
            <Link className="text-bold" href="/projects">Projects</Link>
            <Link className="text-bold" href="/about">About</Link>
            <a className="text-bold" href="/Benjamin-Levy-Resume.pdf" target="_blank">Resume</a>
          </div>
        </div>
        {opened
          ? <div className="mobile-nav-button-container">
              <Link className="mobile-nav-button" href="/">Home</Link>
              <Link className="mobile-nav-button" href="/projects">Projects</Link>
              <Link className="mobile-nav-button" href="/about">About</Link>
              <a className="mobile-nav-button" href="/Benjamin-Levy-Resume.pdf" target="_blank">Resume</a>
          </div>
          : <div/>
        }
      </nav>
    </header>
  )
}