import Button from '@material-ui/core/Button';
import './product.css'
import { Advertise } from '../advertisement/advertise'
import React from "react";

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
export function Product({ shoeid }) {
  const navigateto = useNavigate()
  const { value } = useSelector((state) => state)
  return (
    <div>
      <Advertise />
      <div className="row">
        {Object.keys(value).map(keyName => {
          const { name, image, price } = value[keyName];
          return (
            <div class="card">
              <img src={image} />
              <h3>{name}</h3>
              <p class="price">  {price}</p>
              {/* <p>  {shoe.detail}</p> */}
              <Link key={keyName}
                to={`/${keyName}`}>

                <p> <button >   ORDER NOW</button></p>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}