import React from 'react'
import bgImg from '../assets/bgImg.jpeg'
import { Link } from 'react-router-dom'
export default function About() {
    return (

        <div className="about-page-container">
            <div className="about-page-content">
                <img src={bgImg} className='about-hero-image' />
                <h1>About Gatyane.</h1>
                <p>Our mission is enliven your talent with the better training and unending opportunities created by profetionals all over the world. Our players are recertified before each trip to ensure your </p>
                <p>Our team .</p>
            </div>
            <div className="about-page-cta">
                <h2>Your destination is waiting.<br />Your player is ready.</h2>
                <Link className="link-button" to='/vans'>Explore Our players</Link>
            </div>
        </div>

    )
}