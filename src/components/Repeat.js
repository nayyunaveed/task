import React from 'react'

const Repeat = () => {
    function repeatStringNumTimes(string, times) {
        if (times > 0)
          return string.repeat(times);
        else
          return "";
      }
   
      console.log(repeatStringNumTimes("hello world", 5))
  return (
    <div>
      <p>repeat string</p>
    </div>
  )
}

export default Repeat

