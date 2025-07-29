"use client"
import React, { useState } from 'react'
import Image from "next/image";
import "./slideshow.css";

export const Slideshow = ({data}: any) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % data.length);
    }

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? (data.length - 1) : ((currentIndex - 1) % data.length));  
    }

    return (
        <div>
            <div className="slideshow-container">
                <button className="slide-arrow-left" onClick={prevSlide}>{"<--"}</button>
                <div className="slide-container">
                    { data.map((item: {"src": string, "alt": string}, index: number) => {
                        if (item.src.includes("https://www.youtube.com/embed/")) {
                            return <iframe className={currentIndex === index ? "slide-active" : "slide"} src={item.src} key={index}/>
                        }
                        else {
                            return <Image className={currentIndex === index ? "slide-active" : "slide"} src={item.src} alt={item.alt} key={index} fill={true}/>
                        }
                    })}
                </div>
                <button className="slide-arrow-right" onClick={nextSlide}>{"-->"}</button>
            </div>
            <span className="slide-indicator-container">
                { data.map((item: {"src": string, "alt": string}, index: number) => {
                    return <button className={currentIndex === index ? "slide-indicator-active" : "slide-indicator"} key={index} onClick={() => setCurrentIndex(index)}></button>
                })}
            </span>
        </div>
        
    )
}