import React from 'react'
import mask from '../image/Mask.png'
import '../style/home.css'
function Home() {
  return (
    <section className='home'>
        <div className="container">
           <div className="home_wrapper">
           <img className='mask' src={mask} alt="" />
            <div className='arrival'>
                <div className="moloko">
                <h6>New arrival</h6>
                <h1> Lorem ipsum 
                dolor sit amet</h1>
                <span>Shop new</span>
                </div>
            </div>
           </div>
        </div>
    </section>
  )
}

export default Home