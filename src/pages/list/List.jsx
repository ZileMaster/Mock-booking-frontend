import { format } from 'date-fns'
import React, { useState } from 'react'
import { DateRange } from 'react-date-range'
import { useLocation } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import SearchItem from '../../components/searchItem/SearchItem'
import useFetch from '../../hooks/useFetch.js'
import './list.css'

export const List = () => {

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);

  const {data, loading, error, refetch} = useFetch(`http://localhost:8800/api/hotels?city=${destination}`);

  return (
    <div>
        <Navbar />
        <Header type ="list"/> 
        <div className="listContainer">
          <div className="listWrapper">
            <div className="listSearch">
              <h1 className="listTitle">Search</h1>
              <div className="listItem">
                <label>Destination</label>
                <input type="text" placeholder={destination}/>
              </div>
              <div className="listItem">
                <label>Check-in date</label>
                <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                { openDate && <DateRange onChange={item => setDate([item.selection])} minDate={new Date()} ranges={date} />}
              </div>
              <div className="listItem">
                <label > Options </label>
                <div className='listOptions'>
                  <div className="listOptionItem">
                    <span className="listOptionText"> 
                      Min price <small>per night</small>
                    </span>
                    <input type="number" className='listOptionInput'></input>
                  </div>
                  <div className="listOptionItem">
                    <span className="listOptionText"> 
                      Max price <small>per night</small>
                    </span>
                    <input type="number" className='listOptionInput'></input>
                  </div>
                  <div className="listOptionItem">
                    <span className="listOptionText"> 
                      Adults
                    </span>
                    <input type="number" min={1} className='listOptionInput' placeholder={options.adult}></input>
                  </div>
                  <div className="listOptionItem">
                    <span className="listOptionText"> 
                      Children
                    </span>
                    <input type="number" min={0} className='listOptionInput' placeholder={options.children}></input>
                  </div>
                  <div className="listOptionItem">
                    <span className="listOptionText"> 
                    Room
                    </span>
                    <input type="number" min={1} className='listOptionInput' placeholder={options.room}></input>
                  </div>
                </div>
              </div>
              <button>Search</button>
            </div>
            <div className="listResult">
              { loading ? "loading" : 
              <>
                {data.map(item=>(
                  <SearchItem item={item} key={item._id}/>
                ))}
              
              </>
              }
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
    </div>
  )
}
