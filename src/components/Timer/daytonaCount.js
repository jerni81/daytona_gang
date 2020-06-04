import React from "react";
import DateCountdown from 'react-date-countdown-timer';


const TonaCount = () => (
  <div>
     <DateCountdown dateTo='Febuary 14, 2021 03:00:00 GMT+03:00' callback={()=>alert('Hello')}  />;

  </div>
);

export default TonaCount;
