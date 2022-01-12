import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
import { Product } from '../product/product'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import { Productitm } from '../productitm/productitem'

import { Itm } from '../item/itm'
import './header.scss'
import './header.css'


export function Herder() {


  $(document).ready(function () {

    var showHeaderAt = 150;

    var win = $(window),
      body = $('body');

    // Show the fixed header only on larger screen devices

    if (win.width() > 400) {

      // When we scroll more than 150px down, we set the
      // "fixed" class on the body element.

      win.on('scroll', function (e) {

        if (win.scrollTop() > showHeaderAt) {
          body.addClass('fixed');
        }
        else {
          body.removeClass('fixed');
        }
      });

    }
  });
  return (
    <div>
      <header class="header-fixed">

        <div class="header-limiter">

          <h1><a href="#"><span>Companylogo</span></a></h1>

          <nav>

            <Link to="/" > Product </Link>
            <Link to="/itm" > <AddShoppingCartIcon /> </Link>

          </nav>
        </div>
      </header>
    </div>
  )
}































