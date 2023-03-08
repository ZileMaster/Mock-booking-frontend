import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"
import { faBed, faCar, faLandmark, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  return (
    <div className='header'>
        <div className='headerContainer'>
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car Rentals</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faLandmark} />
                    <span>Attractions</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport taxis</span>
                </div>
            </div>
            <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
            <p className="headerDescription"> Get rewarded for your travels - unlock instant savings of 10% or more with a free Booking account!</p>
            <button className="headerBtn">Sign in / Register</button>
        </div>
    </div>
  )
}

export default Header