import React from 'react'
import './SearchBox.css'

const SearchBox = ({onInputChange}) => {
    return(
        <div className="search-Container">
            <input 
            onChange={(event) => onInputChange(event.target.value)} 
            placeholder = "Type Keyword"
            className="search-input" />
        </div>
    )
}

export default SearchBox;