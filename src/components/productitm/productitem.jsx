import './productitm.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import ReactDOM from "react-dom";
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { addbyamount } from '../Store/productSlice'
import { img } from '../Store/productlist'
export default function Productitm() {

    const { id } = useParams();
    const { value } = useSelector((state) => state)
    const dispatch = useDispatch()
    const shoe = value[id]

    return (
        <div>

            <div class="sm:text-center">
            </div>

            <div className="container">

                <div className="card-container">
                    <input type="radio" name="colors-btn" id="color-1" checked />
                    <input type="radio" name="colors-btn" id="color-2" />
                    <input type="radio" name="colors-btn" id="color-3" />
                    <input type="radio" name="colors-btn" id="color-4" />
                    <div className="shoe-area">

                        <div className="floating-div">
                            <div className="shoe-1"><img src={shoe.image} alt="red-nike" /></div>
                        </div>

                    </div>
                    <div className="text-area">
                        <div className="heading-area">
                            <h2>{shoe.name}</h2>
                            <h4>Running Collection</h4>
                        </div>

                        <p className="paragraph-area">
                            {shoe.detail}
                        </p>


                        <div className="price-and-buy-btn">
                            <h2 className="price-1">$ {shoe.price}</h2>

                            <button onClick={() => dispatch(addbyamount(shoe))} className="buy-btn">BUY NOW</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}