"use client"
import React, { useState } from 'react'
import Image from "next/image";
import "./slideshow.css";
import slideArrowLeft from '../../../public/projects/slideshow/slideshow-left.png'
import slideArrowRight from '../../../public/projects/slideshow/slideshow-right.png'

export const Slideshow = ({data}: any) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % data.length);
    }

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? (data.length - 1) : ((currentIndex - 1) % data.length));  
    }

    return (
        <div className="slideshow-outer-container">
            <div className="slide-container">
                { data.map((item: {"src": string, "alt": string}, index: number) => {
                    if (item.src.includes("https://www.youtube.com/embed/")) {
                        return <iframe className={currentIndex === index ? "slide-active" : "slide"} src={item.src} key={index} width="100%" height="100%"/>
                    }
                    else {
                        return <Image className={currentIndex === index ? "slide-active" : "slide"} src={item.src} alt={item.alt} key={index} fill={true}/>
                    }
                })}
            </div>
            <div className="slideshow-controls-container">
                <button className="slide-arrow" onClick={prevSlide}><Image className="slide-arrow-img" src={slideArrowLeft} alt="Left Slide Arrow"/></button>
                <span className="slide-indicator-container">
                    { data.map((item: {"src": string, "alt": string}, index: number) => {
                        return <button className={currentIndex === index ? "slide-indicator-active" : "slide-indicator"} key={index} onClick={() => setCurrentIndex(index)}></button>
                    })}
                </span>
                <button className="slide-arrow" onClick={nextSlide}><Image className="slide-arrow-img" src={slideArrowRight} alt="Right Slide Arrow"/></button>
            </div>
        </div>
        
    )
}