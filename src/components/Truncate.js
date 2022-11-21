import React from 'react'

export const truncate = () => {
    function truncateString(str, num) {
        if (str.length <= num) {
          return str
        }
        return str.slice(0, num) + '...'
      }
      
   console.log(truncateString("Absolute victory", 3))   ;
  return (
    <div>truncate</div>
  )
}
export default truncate

