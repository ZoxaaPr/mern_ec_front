import axios from "axios"

import {
    ALL_PRODUCT_REQUEST, 
    ALL_PRODUCT_SUCCESS, 
    ALL_PRODUCT_FAIL,
    PRODUCT_DETAIL_REQUEST,
    PRODUCT_DETAIL_SUCCESS,
    PRODUCT_DETAIL_FAIL,
    CLEAR_ERROR
} from "../constants/prosuctConst"

export const getProduct = (keyword="",  price = [0, 25000], rating = 0, category ) => async (dispatch) => {
     try {
        dispatch({
            type : ALL_PRODUCT_REQUEST, 
            
        })
        let link = `https://mern-ecc.vercel.app/api/product?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${rating}`;
        if (category) {
            link = `https://mern-ecc.vercel.app/api/product?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${rating}&category=${category}`;
          }
        const {data} = await axios.get(link)
        dispatch({
            type : ALL_PRODUCT_SUCCESS, 
            payload : data
        })
     } catch (error) {
        
            dispatch({
                type: ALL_PRODUCT_FAIL,
                payload: error.response.data.message,
              });
     
        
     } 
}
export const getDetailProduct = (id) => async (dispatch) => {
     try {
        dispatch({
            type : PRODUCT_DETAIL_REQUEST, 
            
        })
        const {data} = await axios.get(`https://mern-ecc.vercel.app/api/product/${id}`)
        dispatch({
            type : PRODUCT_DETAIL_SUCCESS, 
            payload : data.product
        })
     } catch (error) {
        
            dispatch({
                type: PRODUCT_DETAIL_FAIL,
                payload: error.response.data.message,
              });
     
        
     } 
}

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type : CLEAR_ERROR, 
       
    })
}