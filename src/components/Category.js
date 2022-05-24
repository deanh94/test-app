import React, { useState } from "react";
import Products from "./Products.js";
import { AiOutlineHeart } from "react-icons/ai";
// import StarRatings from "react-icons/star-ratings";
// import Stars from "./Stars.js";


const Category = () => {
    const [items, setItems]= useState(Products);
console.log(items)
    const handleSort = (type) => {
      let sortedItems = []
      switch (type) {
        case 'cheapest':
           sortedItems = items.sort((a, b) => a.cost - b.cost) // function for sorting cheapest to most expensive//
          break;
      case 'expensive':
         sortedItems = items.sort((a, b) => b.cost - a.cost)  // function for sorting most expensive to cheapest//
          break;
      }
      setItems([...sortedItems])
    }

  return (
    <>
      <h1 className="text-center">ShopNet</h1>
      <div className="container-fluid mx-2">
        <div className="row mt-5 mx-2">
          <div className="col-md-3">
            <button className="btn btn-success w-100 mb-4" onClick={() => handleSort('cheapest')}>Cheapest
            </button>
            <button className="btn btn-success w-100 mb-4" onClick={() => handleSort('expensive')}>
              Most Expensive
            </button>
            <button className="btn btn-success w-100 mb-4">Top Rated
            </button>
          </div>
          <div className="col-md-9">
            <div className="row">
                {items.map((values,index) =>{
                    const {id, title, cost, image} = values;
                    return (
                        <div key={index}>
                     <div className="col-md-4 mb-4" key={id}>
                <div className="card">
                  <img src={image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p>Price: {cost}</p>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <button className="btn btn-outline-primary"><AiOutlineHeart/>
                      Watch
                    </button>
                    {/* <Stars/> */}
                  </div>
                </div>
                
              </div>   
                        </div>
                    )
                })}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
