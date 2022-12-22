import React from 'react'
import Result from './Result'

function Results ({results, openPopup}) {
    return (
        <div className='results'>
            {results?.map((item) => (
             <Result result={item} key={item.id} openPopup={openPopup}/>
                ))}
        </div>
    )

}

export default Results