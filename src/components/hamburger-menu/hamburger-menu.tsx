"use client"
import Link from 'next/link'
import './hamburger-menu.css';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'

export const HamburgerMenu = () => {
    const [opened, setOpened] = useState(false);

    const handleClick = () => {
        setOpened(!opened);
    };

    const pathname = usePathname();
        useEffect(() => {   // Reset form state on page change
            setOpened(false);
        }, [pathname]);

    return(
        <div className="mobile-nav">
            {opened
                ? <div className="mobile-nav-container">
                    <button className="hamburger-menu" onClick={handleClick}>X</button>
                    <div className="button-container">
                        <Link className="mobile-nav-button" href="/">Home</Link>
                        <Link className="mobile-nav-button" href="/projects">Projects</Link>
                        <Link className="mobile-nav-button" href="/about">About</Link>
                        <a className="mobile-nav-button" href="/Benjamin-Levy-Resume.pdf" target="_blank">Resume</a>
                    </div>
                </div>
                
                
                : <button className="hamburger-menu" onClick={handleClick}>
                    <span/>
                    <span/>
                    <span/>
                </button>
            }
        </div>
    )
}