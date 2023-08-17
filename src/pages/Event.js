import React, { useState } from 'react'
import './event_page.css'
import data from '../data/events.json'



function Event_page(props) {
  const [aboutIsExpanded, setAboutIsExpanded] = useState(false);
  return (
    <div>
      {/* Navbar */}
      <div className="eventpage">
        <div className="image"><img src={data.at(props).event_image} alt="" /></div><br className='br1' />
        <div className="register1">
          <a href={data.at(props).registration_link}>Register</a>
          <div className="right"><div className="rupee">
            <img src='rupee.svg' alt='' />
          </div> {data.at(props).fee} </div>
          <h1>{data.at(props).event_name}</h1>
          <div className="graytext">{data.at(props).organizer} | {data.at(props).mode} </div>
          <hr className='hr1' />
          <div className="date">
            <div className="startdate"><div>Start Date</div>
              <div className="graytext">{data.at(props).start}</div>
            </div>
            <div className="enddate"><div>End Date</div>
              <div className="graytext">{data.at(props).end}</div>
            </div>
            <img src='bar.svg' alt='' />
            <svg xmlns="http://www.w3.org/2000/svg" width="14" className='venueicon' height="20" viewBox="0 0 14 20" fill="none">
              <path d="M7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0Z" fill="#F5D00B" />
            </svg><div className="graytext venuetext">{data.at(props).venue} </div>
          </div>
        </div>
        <div className="register2">
          <div className='event_title'>
            <div className='event_icon'><img src={data.at(props).event_logo} alt="" /> </div>
            <h1>{data.at(props).event_name}
              <div className="graytext">{data.at(props).organizer} | {data.at(props).mode} </div></h1>
          </div>
          <div className="date">
            <div className="startdate"><div>Start Date</div>
              <div className="graytext">{data.at(props).start}</div>
            </div>
            <div className="enddate"><div>End Date</div>
              <div className="graytext">{data.at(props).end}</div>
            </div>
          </div>
          <hr className='hr2' />
          <div className='venue'>
            <img src='venue.svg' alt='' />
            <div className="graytext venuetext">{data.at(props).venue} </div>
          </div>
        </div>
        <br />
        <div className="deadline2">
          <div className='d1'>
            <div className="container"><img src="clock.svg" alt="" />
              <div className="details">
                <div className="graytext">Deadline</div>
                {data.at(props).deadline}
              </div>
            </div>
            <div className="container"><img src="trophy.svg" alt="" />
              <div className="details">
                <div className="graytext">Certificate</div>
                {data.at(props).certificate}
              </div>
            </div>
          </div>
          <div className='d2'>
            <div className="container"><img src="community.svg" alt="" />
              <div className="details">
                {data.at(props).team}
              </div>
            </div>
            <div className="container"><img src="food.svg" alt="" />
              <div className="details">
                <div className="graytext">Refreshments</div>
                {data.at(props).refreshments}
              </div>
            </div>
          </div>
        </div>
        <div className='register3'>
          <div className="right"><div className="rupee">
            <img src='rupee.svg' alt='' />
          </div> <h4>{data.at(props).fee}</h4>  </div>
          <a href={data.at(props).registration_link}>Register</a>
        </div>
        <div className="c1">
          <div className="organizer"><div className="title">Organizer</div>
            <div className="logo">
              <img src={data.at(props).icon} alt="logo" />
              <div className="title2">{data.at(props).organizer}</div>
            </div>
            <div className="media">
              <a href={data.at(props).instagram}><img src="insta.svg" alt="" /></a>
              <a href={data.at(props).facebook}><img src="insta.svg" alt="" /></a>
              <a href={data.at(props).linkedin}><img src="insta.svg" alt="" /></a>
            </div>
          </div>
          {/* <div className="about"><div className='title2'>About </div><div className="graytext">{data.at(props).about}</div></div> */}

          <div className='about'><div className='title2'>About </div><div className="graytext"> {aboutIsExpanded ? data.at(props).about : data.at(props).about?.substring(0, 450)}<span className={`text-yellow-400 cursor-pointer ${data.at(props).about?.length < 451 ? 'hidden' : ''}`} onClick={() => { setAboutIsExpanded((aboutIsExpanded) => !aboutIsExpanded) }}>{aboutIsExpanded ? ' ...less' : ' more...'}</span></div></div>

          <div className="deadline1">
            <div className="container"><img src="clock.svg" alt="" />
              <div className="details">
                <div className="graytext">Deadline</div>
                {data.at(props).deadline}
              </div>
            </div>
            <div className="container"><img src="community.svg" alt="" />
              <div className="details">
                {data.at(props).team}
              </div>
            </div>
            <div className="container"><img src="trophy.svg" alt="" />
              <div className="details">
                <div className="graytext">Certificate</div>
                {data.at(props).certificate}
              </div>
            </div>
            <div className="container"><img src="food.svg" alt="" />
              <div className="details">
                <div className="graytext">Refreshments</div>
                {data.at(props).refreshments}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Event_page
