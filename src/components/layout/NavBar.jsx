import React from "react";
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux";

let NavBar = () => {
  let selectProduct = useSelector(state => state.product.cart)
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link to="/" className="nav-brand text-white text-uppercase  text-decoration-none"
        >
            EcomBuy
          </Link>
          <div className="form-inline my-2 my-lg-0">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <Link to="/cart" className="nav-link text-white">
                  Cart <span className="bg-danger p-1 rounded">{selectProduct.length}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};
export default NavBar;
