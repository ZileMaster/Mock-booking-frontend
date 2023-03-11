import React from 'react'
import './featuredProperties.css'

function FeaturedProperties() {
  return (
    <div className='fp'>
        <div className='fpItem'>
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1" alt="" className="fpImg" />
            <span className="fpName">7Seasons Apartments Budapest</span>
            <span className="fpCity">Budapest</span>
            <span className="fpPrice">from 125$</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Great</span>
            </div>
        </div>
        <div className='fpItem'>
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt="" className="fpImg" />
            <span className="fpName">MiastoStare</span>
            <span className="fpCity">Krakov</span>
            <span className="fpPrice">from 190$</span>
            <div className="fpRating">
                <button>8.7</button>
                <span>Great</span>
            </div>
        </div>
        <div className='fpItem'>
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/29466558.webp?k=fa323cf3e030ae6b41c8b475fe2853ae4e9e38148501d68dd5b915905dcea664&o=&s=1" alt="" className="fpImg" />
            <span className="fpName">Cheval Three Quays</span>
            <span className="fpCity">London</span>
            <span className="fpPrice">from 750$</span>
            <div className="fpRating">
                <button>9.5</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className='fpItem'>
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/270323047.webp?k=ace18ab936560dac1e01f7d0f4b44206d354a8683e124c62f3f10c25cede9bd2&o=&s=1" alt="" className="fpImg" />
            <span className="fpName">Flora Chiado Apartments</span>
            <span className="fpCity">Lisboa</span>
            <span className="fpPrice">from 800$</span>
            <div className="fpRating">
                <button>9.0</button>
                <span>Excellent</span>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProperties