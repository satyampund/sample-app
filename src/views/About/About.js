import React from 'react'
import './About.css'

// Route will be http://localhost:3000/about?title=Bag&price=123

import { useSearchParams } from 'react-router-dom'

function About() {
    let [searchParams] = useSearchParams()

    const title = searchParams.get('title');
    const price = searchParams.get('price');


    return (
        <div className='about'>
            <h1>{title}</h1>
            <h2>{price}</h2>
        </div>
    )
}

export default About