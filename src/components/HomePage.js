import React, { useState } from 'react'
import Topbar from './Topbar'
import NavBar from './NavBar'
import FeaturedProducts from './FeaturedProducts'

export default function HomePage() {
  var [cartProducts,setCartProduct]=useState([]);
var [totalitem,setTotalitem]=useState(0);
var [singleCategory,setSingleCategory]=useState('smartphones')
  return (
    <>
    <Topbar/>
    <NavBar setTotalitem={setTotalitem} totalitem={totalitem} allCartItems={cartProducts} setSingleCategory={setSingleCategory}/>
    <FeaturedProducts setTotalitem={setTotalitem} allCartItems={cartProducts} category={singleCategory}/>
    </>
  )
}
