import React from 'react'

 const Falsy = () => {
    const arr = [42, "everything","", 2, false, "everything"];
    function removeFalsey(arr) {
        return arr.filter((val) => val);
      }
      console.log(removeFalsey(arr));
  return (
    <div>falsy</div>
  )
}
export default Falsy



 
