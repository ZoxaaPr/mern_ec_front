import React, { useEffect, useState } from 'react'
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import Search from './Search.jsx';
import "./Products.css"
import SliderRating from './Rating';
import { getProduct, clearErrors } from '../../actions/productEction';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../Loader/Loader';
import ProductBox from '../ProductBox/ProductBox';
import { useAlert } from "react-alert";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import Pagination from "react-js-pagination";
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const categories = [
    "laptop",
    "Smartphones",
    "PC",
    "Camera",
    "Watches",
    "Other",

];

const PrettoSlider = styled(Slider)({
    color: '#a1a1a1',
    height: 8,

    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&:before': {
            display: 'none',
        },
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: '#a1a1a1',
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&:before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
            transform: 'rotate(45deg)',
        },
    },
});
const PrettoSlide = styled(Slider)({
    color: '#a1a1a1',
    height: 8,
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&:before': {
            display: 'none',
        },
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: '#a1a1a1',
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&:before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
            transform: 'rotate(45deg)',
        },
    },
});


const minDistance = 100;



const Products = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState("")
    const [keywordSend, setKeywordSend] = useState("")
    const [rating, setRating] = useState(0)
    const [category, setCategory] = useState("");

    const { loading, error, product, productsCount, resultPage, filteredProductsCount } = useSelector((state) => state.product)


    const alertt = useAlert();
    if (error) {
        alertt.error(error);
        dispatch(clearErrors());
    }

    // const [currentPage, setCurrentPage] = useState(1);
    // ------------------- Slider Price -------------------------

    const [price, setPrice] = useState([0, 5000]);



    const priceHandler = (event, newPrice) => {
        setPrice(newPrice);
    };
    //------------------------------

    useEffect(() => {
        if (keyword.trim()) {
            navigate(`/products/?${keyword}`)
        } else {
            navigate(`/products/?${keyword}`)
        }
        dispatch(getProduct(keyword, price, rating, category));
    }, [dispatch, keyword, navigate, price, rating, category]);

    // let count = filteredProductsCount;



    const searchSubmitHandler = (e) => {
        e.preventDefault();
        setKeyword(keywordSend)

    }
    // const setCurrentPageNo = (e) => {
    //     setCurrentPage(e);
    // };
    console.log(category)

    return (
        <>

            <div className='hero_top'>

            </div>

            <div className='main'>
                <div className='filter'>
                    <div className='filter_div'>
                        <input type="text" placeholder="Search" className='filter_div_text_1'
                            onChange={(e) => setKeywordSend(e.target.value)}
                            value={keywordSend}
                        />
                    </div>
                    <SearchIcon className='filter_div_search' onClick={searchSubmitHandler} />
                    <div className='filter_div_slider'><Typography className='Typography'>Price</Typography>
                        <PrettoSlider
                            className='Typography_slider'
                            valueLabelDisplay="auto"
                            getAriaLabel={() => 'Price'}
                            value={price}
                            onChange={priceHandler}
                            disableSwap
                            min={100}
                            max={10000}
                        /></div>
                    <div className='filter_div'>
                        <select className="filter_div_text_select"
                            value={category}
                            onChange={(e) => {
                                const selectedFood = e.target.value;
                                setCategory(selectedFood);
                            }}>
                            <option
                                value={""} >All</option>
                            {categories.map((category) => (
                                <option
                                    value={category}
                                    key={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='filter_div_slider'>
                        <Typography className='Typography'>Rating</Typography>
                        <PrettoSlide
                            className='Typography_slider'
                            valueLabelDisplay="auto"
                            aria-label="pretto slider"

                            value={rating}
                            onChange={(e, newRating) => {
                                setRating(newRating);
                            }}
                            min={0}
                            max={5}
                        />
                    </div>


                </div>


                <div className='main_title'>
                    <a className='main_title_a'>All Products</a>
                </div>
            </div>
            {loading ? <Loader /> : <>
                <div className='main_1'>
                    <div className='main_box_flex'>
                        {
                            product && product.map(product => (
                                <ProductBox product={product} key={product._id} />
                            ))
                        }
                    </div>
                    {/* <ListProduct product={dwd} /> */}

                </div>

                {/* {resultPage == count && (
                    <div className="paginationBox">
                        <Pagination
                            activePage={currentPage}
                            itemsCountPerPage={resultPage}
                            totalItemsCount={productsCount}
                            onChange={setCurrentPageNo}
                            nextPageText="Next"
                            prevPageText="Prev"
                            firstPageText="1st"
                            lastPageText="Last"
                            itemClass="page-item"
                            linkClass="page-link"
                            activeClass="pageItemActive"
                            activeLinkClass="pageLinkActive"
                        />
                    </div>
                )}*/}
            </>
            }

        </>

    )
}

export default Products