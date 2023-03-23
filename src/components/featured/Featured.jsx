import React from 'react'
import useFetch from '../../hooks/useFetch'
import './featured.css'

function Featured() {

    const { data, loading, error} = useFetch("http://localhost:8800/api/hotels/countByCity?cities=Belgrade,Novi Sad,Budapest");

    console.log(data)

  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/637152.jpg?k=e0c8290998356aa03d1ab85530d425b75a4958f5b06aca8c1bc55a638a988d7f&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Belgrade</h1>
                <h2>123 propertiez</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/638266.jpg?k=e400af34c312614dd3bf1172aab0fa961486151a440c459e01c7767a92786bf9&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Novi Sad</h1>
                <h2>123 propertiez</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/619896.jpg?k=9364e91ae738a47a4a37b0a7fb26d01e5e95db810f7167e9e5ecf58e5ca74e9b&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Budapest</h1>
                <h2>123 propertiez</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured