import React from 'react'

const Duplicate = () => {
    var arr1 = ["hello","hi","hello","world","hi","sunny"];
    function removeDuplicates(arr1) {
        return [...new Set(arr1)];
    }
    console.log(removeDuplicates(arr1));
    return (
        <div>
            <p>Duplicate Array</p>
        </div>
    )
}

export default Duplicate





