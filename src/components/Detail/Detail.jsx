import React, { useEffect, useState } from 'react'
import "./Detail.css"
import { getDetailProduct, clearErrors } from '../../actions/productEction';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import Loader from '../Loader/Loader';
import Rating from '@mui/material/Rating';
import { useAlert } from "react-alert";




const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const { loading, error, product } = useSelector((state) => state.productDetail)
    const [sendCart, setSendCart] = useState(1)
    const [quantity, setQuantity] = useState(1)
    const alert = useAlert();
    if (error) {
        alert.error(error);
        dispatch(clearErrors());
    }

    useEffect(() => {

        dispatch(getDetailProduct(id));
    }, [dispatch, id, error]);

    const decrementQuantity = () => {
        if (quantity <= 1) return
        const quan = quantity - 1
        setQuantity(quan)
    }
    const incrementQuantity = () => {
        if (product.Stock <= quantity) return
        const quan = quantity + 1
        setQuantity(quan)
    }
    // console.log(product.images[0].url)
    const imga = "";
    setTimeout(() => {
        imga = "/" + product.images[0].url + ".png"
        //console.log(product.images[0].url);
    }, "2000");
    return (

        <>
            {loading ? <Loader /> : <><div className='detail_top'></div>
                <div className='detail'>
                    <div className='detail_flex_end'><div className='detail_img'>
                        <img src="/ddd.png" alt="" className='detail_img_100' />
                    </div></div>
                    <div className='detail_info'>
                        <span className='marginyop_10px detail_info_h1'>{product.name}</span>
                        {/* <span className='marginyop_10px detail_info_h1'>{product.images[0]._id}</span> */}
                        <span className='marginyop_10px detail_info_price'>${product.price}</span>
                        <div className=' botom_top'><Rating name="read-only" defaultValue={product.ratings} readOnly /></div>
                        <div className='marginyop_10px'>
                            <button className='detail_info_b_increment' onClick={decrementQuantity}> - </button>
                            <input readOnly value={quantity} className='cart_row2_text' />
                            <button className='detail_info_b_increment' onClick={incrementQuantity}> + </button>

                            <button className='detail_info_b'> Add To Cart </button>
                        </div>
                        <div>
                            <p className='marginyop_10px detail_info_a2'>
                                Status:
                                <b className={product.Stock < 1 ? " detail_info_a2 redColor" : " detail_info_a2 greenColor"}>
                                    {product.Stock < 1 ? " OutOfStock" : " InStock"}
                                </b>
                            </p>
                        </div>
                        <span className='marginyop_10px detail_info_a2'>Product Details</span>
                        <p className='marginyop_10px detail_info_a3'>{product.description} Lorem, ipsum dolor sit amet consectetur adipisicing elit.Provident sint natus eos harum nullaProvident sint natus eos harum nulla Provident sint natus eos harum nulla libero nobis ipsam? Expedita, aliquid sed!</p>
                    </div>
                </div></>}


        </>

    )
}

export default Detail