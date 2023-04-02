import React, { useEffect } from 'react'
import "./Profile.css"
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../Loader/Loader';
import { useAlert } from "react-alert";
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { clearErrors, logout } from '../../actions/userEction';




const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const alertt = useAlert();

    const { user, loading, isAuthenticated } = useSelector((state) => state.user);

    useEffect(() => {
        if (isAuthenticated === false) {
            navigate(`/register `)
        }
    }, [isAuthenticated]);


    const logOutClick = () => {
        dispatch(logout());
        alertt.error("Loged out");
    }
    return (
        <>
            {
                loading ? <Loader /> : <>
                    <div className='detail_top'></div>
                    <div className='detail'>
                        <div className='detail_flex_end'><div className='detail_img'>
                            <img src="/profile.jpg" alt="" className='detail_img_100_radus' />
                        </div></div>
                        <div className='detail_info'>
                            <div>
                                <span className='marginyop_10px detail_info_h1'>Full Name</span>
                                <span className='marginyop_10px detail_info_price'> {user?.name}</span>


                                <input type="text" placeholder='Change Name' className=' marginyop_10px filter_div_text_1' />
                                <button className='detail_info_b marginyleft_10px '> Change </button>
                            </div>
                            <div>
                                <span className='marginyop_10px detail_info_h1'>Email</span>
                                <span className='marginyop_10px detail_info_price'>{user?.email}</span>
                            </div>
                            <div>
                                <span className='marginyop_10px detail_info_h1'>Joined On</span>
                                <span className='marginyop_10px detail_info_price'>{String(user?.createdAt).substr(0, 10)}</span>
                            </div>
                        </div>
                    </div>
                    <button className='detail_info_b marginyleft_10px ' onClick={logOutClick}> Log Out </button>

                </>
            }

        </>
    )
}

export default Profile