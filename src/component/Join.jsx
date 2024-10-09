import React from 'react'
import '../style/join.css'
import img1 from '../image/photo1.png'
import img2 from '../image/photo2.png'
import img3 from '../image/photo3.png'
import img4 from '../image/photo4.png'

function Join() {
  return (
    <section className='join'>
        <div className="container">
            <h2>Join us @сocktail</h2>
            <div className="join_wrapper">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Join