import React from 'react'
import "./Carusell.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
    Link
} from "react-router-dom";


const Carusell = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <div className='slick'>
            <Slider {...settings} className='slick_slide'>
                <div className='slick_page'>
                    <div className='pages_slide'>
                        <div className='pages_slide_con'>
                            <img className='pages_slide_con_img' src="sq.webp" alt="" />
                        </div>
                        <div className='pages_slide_con'>

                            <p className='hero_div_p'><span className='hero_div_a' > Samsung A52 </span>- The Power of the Gaming</p>
                            <p className='hero_div_p2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea sequi debitis velit culpa, enim rem.</p>
                            <div className='flex'>
                                <p className='hero_div_p2 px20 '>599$</p>
                                <Link to="/products" className="nav-route-link"> <button className='buy_now'>Buy now</button></Link>

                            </div>

                        </div>
                    </div>

                </div>
                <div className='slick_page'>
                    <div className='pages_slide'>
                        <div className='pages_slide_con'>
                            <p className='hero_div_p'><span className='hero_div_a' > Geforce 1650 </span>- The Power of the Gaming</p>
                            <p className='hero_div_p2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea sequi debitis velit culpa, enim rem.</p>
                            <div className='flex'>
                                <p className='hero_div_p2 px20 '>499$</p>
                                <Link to="/products" className="nav-route-link"> <button className='buy_now'>Buy now</button></Link>

                            </div>
                        </div>
                        <div className='pages_slide_con'>
                            <img className='pages_slide_con_img' src="https://asset.msi.com/resize/image/global/product/product_1_20180919184314_5ba22842648ea.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png" alt="" />
                        </div>
                    </div>

                </div>
            </Slider>
        </div>
    )
}

export default Carusell