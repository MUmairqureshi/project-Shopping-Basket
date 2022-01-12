import { Herder } from '../header1/header'
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
import { Product } from '../product/product'
import Productitm from '../productitm/productitem'
import { Itm } from '../item/itm'
export function Header() {
    return (
        <div>
            <Router>
                <Herder />
                <Routes >

                    <Route path="/" element={<Product />} />

                    <Route path="/:id" element={<Productitm />} />
                    <Route path="/Itm" element={<Itm />} />
                </Routes>
            </Router>
        </div>
    )
}