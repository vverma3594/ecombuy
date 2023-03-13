import React from "react";
import { useSelector } from "react-redux";

let Cart = ({ cartItem }) => {
    let selectProduct = useSelector(state => state.product.cart)
    return (
        <React.Fragment>
            <div className="container pt-3 mt-5">
                <h3>Cart</h3>
                    <table className="table">
                    <thead className="thead-dark  bg-success text-white">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Price</th>
                            <th scope="col">Category</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                        selectProduct.map((product)=>{
                            return(
                                <tr key={product.key}>
                                <td>{product.title}</td>
                                <td><img src={product.image} alt={product.title} width="30"/></td>
                                <td>₹{Math.round(product.price)}.00</td>
                                <td>{product.category}</td>
                            </tr>
                            )
                        })
                      }
                    {
                        selectProduct.length===0 &&
                        <tr >
                        <td colspan="3" className="text-center">No product found</td>
                       
                    </tr>
                      }
                    </tbody>
                </table>
                <button className="btn btn-success">Proceed to Checkout</button>
            
            </div>
        </React.Fragment>
    )
}
export default Cart