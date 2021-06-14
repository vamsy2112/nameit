import React from 'react'
import './Header.css'


const Header = ({headerTitle , headerExpanded}) => {
    return(
        <div className= "head-container">
            <img className={`headerImage ${
                headerExpanded
                ? 'head-image-expanded'
                : 'head-image-contracted'
            }`
        }
            src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png" 
            alt = 'headerImage'></img>
            <h1 className={`head-text ${
                headerExpanded
                ? 'head-text-expanded'
                : 'head-text-contracted'
            }`
        }>{headerTitle}</h1>
        </div>
    )
}

export default Header;