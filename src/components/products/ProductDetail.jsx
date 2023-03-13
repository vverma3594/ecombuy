import React from "react";
import {useSelector,useDispatch} from "react-redux"


let ProductDetail=()=>{
    let dispatch= useDispatch();
    const details= useSelector(state => state.product.productDetail);
    let handleAddtoCart=(selectProduct)=>{
        dispatch({type:"ADD_TO_CART", payload:selectProduct})
    }
    return(
        <React.Fragment>
            <div className="container pt-4 mt-5">
                <div className="row">
                    <div className="col-md-3">
                        <div className="product-img">
                            <img src={details?.image} alt={details?.title} className="img-fluid"  width="300"/>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="product-detail p-4">
                            <h4>{details?.title}</h4>
                            <h2> <b>₹{Math.round(details?.price)}.00</b></h2>
                            <p>{details?.description}</p>
                            <p>Category: {details?.category}</p>
                            <button className="btn btn-success mx-2"
                            >Buy Now</button>
                            <button className="btn btn-warning"
                                onClick={() => handleAddtoCart(details)}
                                >Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
 export default ProductDetail