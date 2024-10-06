import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className='home-container'>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/ZA1e9B7Bou4?si=lSwj_liRj3vBJSTV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h1>You got the travel plans, we got the travel vans.</h1>
            <p>Add  adventure to your life by joining the Gatyane move</p>
            <Link to='vans'>Find your van</Link>
        </div>
    )
}