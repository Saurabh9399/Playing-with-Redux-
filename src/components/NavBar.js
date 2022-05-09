// import { render } from '@testing-library/react'
import React from 'react'

class NavBar extends React.Component {
    render(){
        return (
            <div className='nav'>
                <div className='search-container'>
                    <input type='text' placeholder='Search...' />
                    <button id='search-btn'>Search</button>
                </div>
            </div>
        )
    }
}

export default NavBar