import React from 'react'
import ProductBox from '../../ProductBox/ProductBox';





const Smartphones = () => {
    return (
        <div className='main'>
            <div className='main_title'>

                <span className='main_title_a'>Smartphones</span>
            </div>

            <div className='main_box_flex'>

                <ProductBox />
                <ProductBox />
                <ProductBox />
                <ProductBox />
            </div>


        </div>
    )
}

export default Smartphones