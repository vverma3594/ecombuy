import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductSidebar from "./ProductSidebar";
import * as productActions from '../../redux/products/products.actions';
import { useDispatch, useSelector } from "react-redux";


let Products = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate()
  let products = useSelector(state => state.product.allProducts)
  useEffect(() => {
    dispatch(productActions.fetchProducts());
  }, []);

  let handleDetails = (productId) => {
    dispatch(productActions.fetchProductDetail(productId))
    navigate(`/products/${productId}`)
  }

  let handleAddtoCart=(selectProduct)=>{
      dispatch({type:"ADD_TO_CART", payload:selectProduct})
  }
  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-3">
            <ProductSidebar />
          </div>
          <div className="col-lg-9 pt-3">
            <h4 className="mb-4">Trending Products</h4>
            <div className="row">
              {products &&
                products.map((product) => {
                  return (
                    <div className="col-xl-3 col-lg-4 col-md-4" key={product.id}>
                      <div className="card product-card mb-4">
                        <div onClick={() => handleDetails(product.id)}>
                          <img
                            className="card-img-top img-fluid "
                            src={product.image}
                            alt={product.title}
                          />
                          <div className="card-body text-black text-decoration-none">
                            <h6>{product.title}</h6>
                            <p className="card-text mb-0">
                             <b> ₹{Math.round(product.price)}</b>
                            </p>
                            <p className="mb-0">
                              Rating: {product.rating.rate}/5
                            </p>
                            <p>Category: {product.category}</p>
                          </div>
                        </div>
                        <button
                          className="btn btn-sm bg-dark text-white"
                          onClick={() => handleAddtoCart(product)}
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Products;
