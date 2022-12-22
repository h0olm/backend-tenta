import React from 'react'

function Search ({handleInput, search}) {
    return (
        <div className='searchbox-conatiner'>
            <input type='text' 
            placeholder='Sök efter film...' 
            className='searchbox'
            onChange={handleInput} 
            onKeyDown={search} 
            />
        </div>

        
    )

}

export default Search