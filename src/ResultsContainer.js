import React from 'react'
import Namecard from './Namecard';
import './ResultsContainer.css'


const ResultsContainer = ({suggestedNames}) => {
    const suggestedNamesJSX = suggestedNames.map(suggestedName => {
        return <Namecard key = {suggestedName} suggestedName = {suggestedName} />
    })

    return(
        <div className = "results-container">
            {suggestedNamesJSX}
        </div>
    )
}


export default ResultsContainer;