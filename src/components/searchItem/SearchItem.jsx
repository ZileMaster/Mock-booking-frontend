import React from 'react'
import "./searchItem.css";

function SearchItem() {
  return (
    <div className='searchItem'>
        <img src='https://cf.bstatic.com/xdata/images/hotel/square200/407612976.webp?k=499f28b588a655a0a11a14f167ecb965c5c13e02a5c9da4bb1d0ccc69b84e867&o=&s=1' alt='' className='siImg'/>
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartments</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">
            Studio Apartment with Air conditioning
            </span>
            <span className="siFeatures">
            Entire studio • 1 bathroom • 21m² 1 full bed
            </span>
            <span className="siCancelOp">Free cancellation </span>
            <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
            </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem