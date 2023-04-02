import React from 'react'
import './Cart.css'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';



const Cart = () => {
    return (
        <>
            <div className='hero_top'></div>
            <div className='cart'>

                <div className='cart_row_title'>
                    <div className='cart_row1_title'>
                        <a className='cart_row1_info_a3'> Product</a>

                    </div>

                    <div className='cart_row2_title'>
                        <a className='cart_row1_info_a3'> Ouantity</a>

                    </div>
                    <div className='cart_row3_title'>
                        <a className='cart_row1_info_a3'> Subtotal</a>

                    </div>

                </div>
                <div className='cart_row'>
                    <div className='cart_row1'>
                        <div className='cart_row1_img'>
                            <img src="s3.png" alt="" />
                        </div>
                        <div className='cart_row1_info'>
                            <a className='cart_row1_info_a1'>Red Prin</a>
                            <a className='cart_row1_info_a2'> Price: dwd</a>
                            <button><DeleteOutlineOutlinedIcon className='cart_row1_info_rem' /></button>
                        </div>
                    </div>

                    <div className='cart_row2'>
                        <input type="number" className='cart_row2_num' />
                    </div>
                    <div className='cart_row3'>
                        <a className='cart_row1_info_a1'> Price: $ 200</a>
                    </div>

                </div>
                <hr align="center" width="100%" size="2" color=" #c2c2c2" />
                <div className='cart_row'>
                    <div className='cart_row1'>
                        <div className='cart_row1_img'>
                            <img src="c2.png" alt="" />
                        </div>
                        <div className='cart_row1_info'>
                            <a className='cart_row1_info_a1'>Red wdwdwdw   </a>
                            <a className='cart_row1_info_a2'> Price: $2,599.00</a>
                            <button><DeleteOutlineOutlinedIcon className='cart_row1_info_rem' /></button>
                        </div>
                    </div>
                    <div className='cart_row2'>
                        <input type="number" className='cart_row2_num' ></input>

                    </div>
                    <div className='cart_row3'>
                        <a className='cart_row1_info_a1'> Price: $2,599.00</a>
                    </div>




                </div>
                <hr align="center" width="100%" size="2" color=" #c2c2c2" />
                <div className='cart_row'>
                    <div className='cart_row1'>
                        <div className='cart_row1_img'>
                            <img src="mac1.png" alt="" />
                        </div>
                        <div className='cart_row1_info'>
                            <a className='cart_row1_info_a1'>Red wdwdwdw   </a>
                            <a className='cart_row1_info_a2'> Price: $2,599.00</a>
                            <button><DeleteOutlineOutlinedIcon className='cart_row1_info_rem' /></button>
                        </div>
                    </div>
                    <div className='cart_row2'>
                        <input type="number" className='cart_row2_num' ></input>

                    </div>
                    <div className='cart_row3'>
                        <a className='cart_row1_info_a1'> Price: $2,599.00</a>
                    </div>




                </div>
                <div className='cart_total_end'>
                    <div></div>
                    <div><div className='cart_total'>
                        <a className='cart_row1_info_a1'> Subtotal</a>
                        <a className='cart_row1_info_a1'> 599.00</a>
                    </div>
                        <div className='cart_total'>
                            <a className='cart_row1_info_a1'> Tax</a>
                            <a className='cart_row1_info_a1'>  $99.00</a>
                        </div>
                        <div className='cart_total'>
                            <a className='cart_row1_info_a1'> Total</a>
                            <a className='cart_row1_info_a1'> 699.00</a>
                        </div></div>
                </div>



            </div>
        </>
    )
}

export default Cart