import React from 'react'
import "./Hero.css";
import {
    Link
} from "react-router-dom";

const Hero = () => {
    return (

        <>
            <div className='hero_top'></div>
            <div className='hero'>
                <div className='hero_div'>
                    <p className='hero_div_p'><span className='hero_div_a' >Deely</span> - A new gaming online shop in the Town</p>
                    <p className='hero_div_p2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea sequi debitis velit culpa, enim rem.</p>
                    <div >
                        <Link to="/products" className="nav-route-link"> <button className='buy_now'>Buy now</button></Link>

                        <a href="#main"><button className='buy_now'>Scroll more </button></a>

                    </div>
                </div>


            </div></>

    )
}

export default Hero