import {
    ALL_PRODUCT_REQUEST, 
    ALL_PRODUCT_SUCCESS, 
    ALL_PRODUCT_FAIL,
    PRODUCT_DETAIL_REQUEST,
    PRODUCT_DETAIL_SUCCESS,
    PRODUCT_DETAIL_FAIL,
    CLEAR_ERROR
} from "../constants/prosuctConst"

export const productReducer = (state = {product:[]},action)=>{
    switch (action.type) {
        case ALL_PRODUCT_REQUEST:
            return{
                ...state,
                loading: true,
                product:[]
            }
        case ALL_PRODUCT_SUCCESS:
            return{
                ...state,
                loading: false,
                product:action.payload.products,
                productsCount:action.payload.productsCount,
                resultPage:action.payload.resultPage,
                filteredProductsCount:action.payload.filteredProductsCount
            }
        case ALL_PRODUCT_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload,
            }
        case CLEAR_ERROR:  
            return{
                ...state,
                error:null,
            }
    
        default:
            return state;
    }
}
export const productDetailReducer = (state = {product:{}},action)=>{
    switch (action.type) {
        case PRODUCT_DETAIL_REQUEST:
            return{
                ...state,
                loading: true,
              
            }
        case PRODUCT_DETAIL_SUCCESS:
            return{
                ...state,
                loading: false,
                product:action.payload,
                
            }
        case PRODUCT_DETAIL_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload,
            }
        case CLEAR_ERROR:  
            return{
                ...state,
                error:null,
            }
    
        default:
            return state;
    }
}