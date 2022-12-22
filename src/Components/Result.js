import React from 'react'


function Result ({result, openPopup}) {
    return (
        <div className='result' onClick={() => openPopup(result.id)}>
            <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${result.poster_path}`} />
            <h3>{result.title}</h3>
        </div>
    )

}

export default Result