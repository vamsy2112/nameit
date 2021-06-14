import React from 'react'
import './App.css'
import Header from './Header'
import ResultsContainer from './ResultsContainer'
import SearchBox from './SearchBox'

const name = require('@rstacruz/startup-name-generator');


class Application extends React.Component{
    state = {
        headerText : 'Name it!',
        headerExpanded : true,
        suggestedNames : [],
    }

    handleInputChange = (inputText) => {
       
        this.setState({headerExpanded : inputText.length > 0 ? false : true, 
        suggestedNames : inputText ? name(inputText) : []
        });
    };
 

    render(){

        console.log(name('cloud'));
        return(
            <div>
                <Header 
                headerExpanded = {this.state.headerExpanded}
                headerTitle = {this.state.headerText}/>
                <SearchBox onInputChange = {this.handleInputChange}/>
                <ResultsContainer suggestedNames = {this.state.suggestedNames}/>
            </div>   
        )
    }
    
    
}

export default Application;