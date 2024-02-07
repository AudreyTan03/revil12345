import React from 'react'
// import './body.css'
import Top from './TopSection/Top';
import Listing from './ListingSection/Listing';
// import Activity from './Activity Section/Activity'
import './body.scss';
import Product from '../../Product';

function Body() {
  return (
    <div className='mainContent'>
      <Top/>
      {/* <Product/> */}
      <div className='bottom flex'>
        <Listing/>
        <Product/>
        {/* <Activity/> */}
      </div>
    </div>
  )
}

export default Body;