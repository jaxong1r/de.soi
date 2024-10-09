import React from 'react'
import mask3 from '../image/Mask3.png'
import '../style/ut.css'
function Ut() {
  return (
    <section className='ut'>
        <div className="container">
            <div className="ut_wrapper">
                <img src={mask3} alt="" />
                <div>
                    <h5>Learn</h5>
                    <h2>Ut enim</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <span>Shop now</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Ut