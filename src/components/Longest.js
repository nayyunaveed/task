import React from 'react'

const Longest = () => {
    function longest(str){
    
        str = str.split(" ")
        return str.sort((a, b) => b.length - a.length)[0]
        }
        console.log(longest("hello my name is mohammad naveed"))
  return (
    <div>
      <p>Longest</p>
    </div>
  )
}

export default Longest

