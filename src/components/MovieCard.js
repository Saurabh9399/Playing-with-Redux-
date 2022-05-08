// import { render } from '@testing-library/react'
import React from 'react'

class NavBar extends React.Component {
    render() {
        const { movie } = this.props; 
        return (
            <div className='movie-card'>
                <div className='left'>
                    <img alt='movie-poster' src={ movie.Poster }/>
                </div>
                <div className='right'>
                    <div className='title'>{movie.Title}</div>
                    <div className='title'>{ movie.Plot }</div>
                </div>
            </div>
        )
    }
}

export default NavBar