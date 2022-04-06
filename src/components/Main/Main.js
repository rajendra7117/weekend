import React from 'react'
import './Main.css'
import Wrapper from '../Layout/Wrapper'
import moviesImage from '../../Images/movies.jpg'
import travelImage from '../../Images/travelling.jpg'
import bookImage from '../../Images/book.jpg'
import learingImage from '../../Images/learning.png'
import ImageCard from './ImageCard'

const Main = () => {
  return (
    <Wrapper>
        <div className='main'>
            <div className='section-1'>
                <ImageCard img={moviesImage} text={'watch a movie?'} placement="left"/>
                <ImageCard img={travelImage} text={'go for a tour'} placement="right"/>
                <ImageCard img={bookImage} text={'read a book'} placement="left"/>
                <ImageCard img={learingImage} text={'learning some thing new'} placement="right"/>
            </div>
            <div className='section-2'>
                <p>Plan your <br />weekend do what? <br />you want</p>
            </div>
        </div>
    </Wrapper>
  )
}

export default Main