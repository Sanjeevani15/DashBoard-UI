import React from 'react'
import Layout from '../components/Layout';

import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import '@fullcalendar/common/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'

const posts = () => {
  const events=[
    {
      title  : 'Meeting with John, Check Dashboard,Task Distribution',
      start  : '2022-07-18T06:00:00',
      end  :   '2022-07-18T12:30:00',
      color: 'rgb(255, 128, 255)',

    },
    {
      title  : 'Meeting with Sia,Task Distribution',
      start  : '2022-07-19T10:00:00',
      end  :    '2022-07-19T14:30:00',
    },
    {
    title  : 'Team Lunch',
    start  : '2022-07-21T11:00:00',
    end  :    '2022-07-21T13:30:00',
    color: 'rgb(41, 163, 41)',
  },
    {
      title  : 'Email investors',
      start  : '2022-07-23T12:30:00',
      allDay : true, // will make the time show
      color: 'rgb(133, 51, 255)',

    },
    {
      title: "Long Event",
      start: "2022-07-19 09:00:00",
      color: "#FF0000"
    }, {
      title: "Repeating Event",
      start: "2022-07-20 09:30:00",
      color: "#0071c5"
    }, {
      title: "Conference",
      start: "2022-07-21 08:00:00",
      color: "#40E0D0"
    }, {
      title: "Meeting",
      start: "2022-07-22 10:30:00",
      color: "#000"
    }, {
      title: "Lunch",
      start: "2022-07-23 12:00:00",
      color: "#ff9933"
    }, {
      title: "Happy Hour",
      start: "2022-07-23 07:30:00",
      color: "#663300"
    },
  ];
  return (
    <Layout>
    
   <div className='bg-white p-10 m-4 rounded-[15px] shadow-lg shadow-sky-400'>
  
  <FullCalendar
      plugins={[interactionPlugin, timeGridPlugin]}
      initialView='timeGridWeek'
      nowIndicator={true}
      editable={true}
      height={550}
      events={events}
      eventBorderColor='blue'
      eventColor='#80bfff'
      initialEvents={[
        { title: 'nice event', start: new Date(), 
      }
     
      ]}
    />
    </div>
   
    </Layout>
  )
}

export default posts