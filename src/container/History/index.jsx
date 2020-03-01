import React, { useState, useEffect } from 'react';
import { getLocalStorage } from '../../helpers'


const History = () => {
    const [ list, setList ] = useState(null)
    useEffect(() => {
        getLocalStorage('checkerList').then(result => setList(result));
    })
    return(
    <div className="w-full h-screen p-32">
        <p>History</p>
        {
            list && list.length > 0 && list.map((list, index) => (
                <div className="w-4/5 my-2 p-6 border rounded-lg" key={`list_${index}`}>
                    <div><p>{list.studentOne} vs {list.studentTwo}</p></div>
                    <div><p>Similiarity: {list.similiarity}</p></div>
                </div>
            ))
        }
    </div>
)}

export default History;