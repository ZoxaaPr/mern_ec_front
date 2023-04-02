import axios from "axios"
import Cookies from 'universal-cookie';

import {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    CLEAR_ERRORS,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL
  } from "../constants/userConst";
  const cookies = new Cookies();
  export const login = (email, password) => async (dispatch) => {

      try {
        dispatch({
            type : LOGIN_REQUEST, 
            
        })
        const config = { headers: { "Content-Type": "application/json","Authorization":"Bearer Dummy" },  withCredentials: true   };
        const {data} = await axios.post(`https://mern-ecc.vercel.app/api/user/login`,
        { email, password },
        config)

        //localStorage.setItem("token", `${data.token}`)
         //cookies.set('token', `${data.token}`);

        dispatch({
            type : LOGIN_SUCCESS, 
            payload : data
        })
      } catch (error) {
        dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
      }
  }


  export const register = (userData) => async (dispatch) => {
      try {
        dispatch({
            type : REGISTER_USER_REQUEST, 
            
        })
        const config = { headers: { "Content-Type": "application/json" } ,withCredentials: true };
        const {data} = await axios.post(`https://mern-ecc.vercel.app/api/user/register`,  userData ,config)

        dispatch({
            type : REGISTER_USER_SUCCESS, 
            payload : data
        })
      } catch (error) {
        dispatch({ type: REGISTER_USER_FAIL, payload: error.response.data.message });
      }
  }

  export const loadUser = () => async (dispatch) => {
    try {
      dispatch({ type: LOAD_USER_REQUEST });
  
      const { data } = await axios.get(`https://mern-ecc.vercel.app/api/user/me`);
  
      dispatch({ type: LOAD_USER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
    }
  };


  export const logout = () => async (dispatch) => {
    try {
    
  
      const { data } = await axios.get(`https://mern-ecc.vercel.app/api/user/logout`);
  
      dispatch({ type: LOGOUT_SUCCESS });
    } catch (error) {
      dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
    }
  };

  export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };