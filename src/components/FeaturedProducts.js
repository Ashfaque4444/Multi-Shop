import React, { useEffect, useState } from "react";
import SingleFeaturedProduct from "./SingleFeaturedProduct";

export default function FeaturedProducts(props) {
  // We are assumed that getting category into props whith veriable category
  var [products,setProducts]=useState([]);
  useEffect(()=>{
    console.log(props);
    var url='https://dummyjson.com/products/category/'+props.category
    
    var p=fetch(url);
    var p1=p.then((result)=>{
      var pJson=result.json();
      pJson.then((r_json)=>{
        console.log(r_json);
        if(r_json==undefined || r_json==null){
          setProducts([]);
        }
        else{
          setProducts(r_json.products)
        }
        
      })
    });

    
  },[props.category])
  return (
    <>
      {/* Products Start */}
      <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Featured Products</span>
        </h2>
        <div className="row px-xl-5">
         
            {products.map((e,index)=>(<SingleFeaturedProduct setTotalitem={props.setTotalitem}  allCartItems={props.allCartItems} key={index} product={e}/>))}
          
        </div>
      </div>
      {/* Products End */}
    </>
  );
}
