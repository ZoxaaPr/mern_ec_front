import React from 'react'

import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';



const Laptops = () => {
    return (
        <div className='main'>
            <div className='main_title'>

                <span className='main_title_a'>Laptops</span>
            </div>

            <div className='main_box_flex'>
                <div className='main_box'>
                    <div className='main_box_img'>
                        <img src="/asus.png" alt="" className='img_100' />
                    </div>
                    <span className='main_box_title'>Macbook Pro</span>
                    <div className='main_box_last'>
                        <div className='main_box_price'>1500$</div>
                        <div className='main_box_cart'>
                            <LocalGroceryStoreOutlinedIcon className='main_box_cart_icon' />
                        </div>
                    </div>
                </div>
                <div className='main_box'>
                    <div className='main_box_img'>
                        <img src="/msi2.png" alt="" className='img_100' />
                    </div>
                    <span className='main_box_title'>Asus ROG Laptop</span>
                    <div className='main_box_last'>
                        <div className='main_box_price'>1500$</div>
                        <div className='main_box_cart'>
                            <LocalGroceryStoreOutlinedIcon className='main_box_cart_icon' />
                        </div>
                    </div>
                </div>
                <div className='main_box'>
                    <div className='main_box_img'>
                        <img src="/mac1.png" alt="" className='img_100' />
                    </div>
                    <span className='main_box_title'>HP Omen Laptop</span>
                    <div className='main_box_last'>
                        <div className='main_box_price'>1500$</div>
                        <div className='main_box_cart'>
                            <LocalGroceryStoreOutlinedIcon className='main_box_cart_icon' />
                        </div>
                    </div>
                </div>
                <div className='main_box'>
                    <div className='main_box_img'>
                        <img src="/msi.png" alt="" className='img_100' />
                    </div>
                    <span className='main_box_title'>Acer Laptop cwc cwcwc wcwc</span>
                    <div className='main_box_last'>
                        <div className='main_box_price'>1500$</div>
                        <div className='main_box_cart'>
                            <LocalGroceryStoreOutlinedIcon className='main_box_cart_icon' />
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Laptops