import React from "react";
import { useDispatch, useSelector } from "react-redux";


let ProductSidebar = () => {
  let dispatch = useDispatch();
  let products= useSelector(state => state.product.category)
  let getUniqueData = (data, property) => {
    let newData = data.map((element) => {
      return element[property];
    });
    return (newData = [...new Set(newData)]);
  };
  
  let categoryData = getUniqueData(products, "category");

  let handleCategoryFilter = (categoryName) => {
    dispatch({type:"FILTER_BY_CATEGORY",payload:categoryName})
  };

  let sorting = (value) => {
    console.log(value)
    dispatch({type:"FILTER_BY_PRICE",payload:value})
  };

  return (
    <React.Fragment>
      <section className="pt-3 sidebar-filter">
        <div className="filter-category">
          <h4>Category</h4>
          <button className="btn p-0 mb-1" onClick={() => dispatch({type:"FILTER_BY_CATEGORY",payload:"All"})}>
            All
          </button>
          <br />
          {categoryData.map((data, index) => {
            return (
              <React.Fragment key={index}>
                <button
                  className="btn p-0 mb-1"
                  onClick={()=>handleCategoryFilter(data)}
                >
                  {data}
                </button>
                <br />
              </React.Fragment>
            );
          })}
        </div>


        <div className="filter-price mt-5">
          <h4>Price</h4>
          <select className="form-select" onChange={(e)=>sorting(e.target.value)}>
            <option value="all">All</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
        </div>
      </section>
    </React.Fragment>
  );
};
export default ProductSidebar;
