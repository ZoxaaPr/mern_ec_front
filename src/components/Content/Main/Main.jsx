import React, { useEffect } from 'react'
import "./Main.css"
import ProductBox from '../../ProductBox/ProductBox';
import Loader from '../../Loader/Loader';
import { getProduct, clearErrors } from '../../../actions/productEction';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from "react-alert";



const Main = () => {
    const dispatch = useDispatch()
    const { loading, error, product, productsCount } = useSelector((state) => state.product)


    const alertt = useAlert();
    if (error) {
        alertt.error(error);
        dispatch(clearErrors());
    }

    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);


    return (
        <>


            <div className='main' id="main">
                <div className='main_title'>
                    <span className='main_title_a'>Computers</span>
                </div>
                {loading ? <Loader /> :
                    <div className='main_box_flex'>
                        {
                            product && product.map(product => (
                                <ProductBox product={product} key={product._id} />
                            ))
                        }
                    </div>
                }

            </div>



        </>

    )
}

export default Main