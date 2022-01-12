import DeleteIcon from '@mui/icons-material/Delete';
import * as React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { addbyamount, increment, decrement, reset } from '../Store/productSlice'
import { store } from '../Store/store'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import './itm.scss';

export function Itm() {
  const dispatch = useDispatch()
  console.log("reset", reset)
  const { value } = useSelector((state) => state)

  const proditm = value.filter(product => product.added)
  return (
    <div>


      <div class="shopping-cart">
        <div class="column-labels">
          <label class="product-image">Image</label>
          <label class="product-details">Product</label>
          <label class="product-price">Price</label>
          <label class="product-quantity">Quantity</label>
          <label class="product-removal">Remove</label>
          <label class="product-line-price">Total</label>
        </div>
        {proditm.map((itm, ind) => (

          <div class="product">
            <div class="product-image">
              <img src={itm.image} />
            </div>
            <div class="product-details">
              <div class="product-title">{itm.name}</div>
              <p class="product-description">The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.</p>
            </div>
            <div class="product-price">{itm.price}</div>
            <div class="product-quantity">
              {/* <input type="number" value="2" min="1"/> */}
              <span className="input-group-bn">
                {(itm.quantity > 1) ? (<button type="button" onClick={() => dispatch(decrement(itm.id))} className="btpls btn-danger btn-number" data-type="minus" data-field="quant[2]">
                  <span className="glyphico glyphicon-minus"> - </span>
                </button>) : (" ")}
              </span>
              <p>  {itm.quantity} </p>
              {/* <input type="text" name="quant[2]" className="for-contro inpu-number" value={itm.quantity} min="1" max-width="40" /> */}
              <span className="input-group-bt">
                <button type="button" onClick={() => dispatch(increment(itm.id))} className="tn btn-success btn-number" data-type="plus" data-field="quant[2]">
                  <span className="glyphcon glyphicon-plus"> +</span>
                </button>
              </span>
            </div>
            <div class="product-removal">
              <button class="remove-product" onClick={() => dispatch(reset(itm.id))}>
                Remove
              </button>
            </div>
            <div class="product-line-price">  {(itm.price) * (itm.quantity)} </div>
          </div>
        ))}
        <div class="totals">
          <div class="totals-item">
            <label>Subtotal</label>
            <div class="totals-value" id="cart-subtotal"> {proditm.reduce((total, pro) => total + (pro.price) * pro.quantity, 0)} </div>
          </div>
        </div>
        <button class="checkout">Checkout</button>
      </div>

    </div>
  );
}
