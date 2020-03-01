import React from 'react';

const Result = ({ studentOne, studentTwo, similiarity }) => (
    <div className="w-3/5 p-6 border rounded-lg">
        <div><p>{studentOne} vs {studentTwo}</p></div>
        <div><p>Similiarity: <span className={`${Number(similiarity) > 50 ? 'bg-red-600' : 'bg-green-600'} text-white`}>{similiarity}%</span></p></div>
    </div>
)

export default Result;