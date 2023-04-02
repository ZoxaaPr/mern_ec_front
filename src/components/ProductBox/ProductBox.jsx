import React from 'react'
import "./ProductBox.css"
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';



const ProductBox = ({ product }) => {





    return (
        <Link className='main_box' to={`/detail/${product._id}`}>
            <div className='main_box_img'>
                <img src={"/" + product.images[0].url + ".png"} alt="" className='img_100' />
            </div>
            <span className='main_box_title'>{product.name}</span>
            <div className='main_box_last'>
                <div>
                    <div className='main_box_price'>Price: {product.price}$</div>
                    <Rating name="read-only" value={product.ratings} readOnly size="small" />
                </div>

                <div className='main_box_cart'>
                    <LocalGroceryStoreOutlinedIcon className='main_box_cart_icon' />
                </div>
            </div>
        </Link>
    )
}

export default ProductBox