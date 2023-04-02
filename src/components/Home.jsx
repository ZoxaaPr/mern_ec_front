import React from 'react'
import { useEffect, useState } from "react";
import Carusell from './Carsulell/Carusell'
import Main from './Content/Main/Main'
import Laptops from './Content/Laptops/Laptops'
import Smartphones from './Content/Smartphones/Smartphones'
import Hero from './Hero/Hero'
// import { useSelector, useDispatch } from 'react-redux';
// import { useAlert } from "react-alert";
// import { clearErrors, loadUser } from '../actions/userEction';
// import store from '../store';
import Cookies from 'js-cookie';

const Home = () => {
    // const alertt = useAlert();
    // const dispatch = useDispatch()
    // //const cookies = new Cookies();

    // const { error, loading, isAuthenticated } = useSelector(
    //     (state) => state.user
    // );



    // if (error) {
    //     alertt.error(error);
    //     dispatch(clearErrors());
    // }
    // useEffect(() => {
    //     store.dispatch(loadUser());


    // }, []);
    return (<>
        <Hero />
        <Carusell />
        <Main />
        {/* <Laptops />
            <Smartphones /> */}
        {/* <Log/> */}</>

    )
}

export default Home