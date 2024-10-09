import React from 'react'
import st1 from '../image/straw1.png'
import st2 from '../image/straw2.png'
import st3 from '../image/straw3.png'
import '../style/benefit.css'
function Benefit() {
  return (
    <section className='benefit'>
        <div className="container">
            <h2>Benefits and Ingredients</h2>
            <p>Benefits: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <div className="benefit_wrapper">
                <div>
                    <img src={st1} alt="" />
                    <h3>Strawberry</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
                <div>
                    <img src={st2} alt="" />
                    <h3>Birch</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
                <div>
                    <img src={st3} alt="" />
                    <h3>Apricot</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
            </div>
            <span>Ingredient Glossary</span>
        </div>
    </section>
  )
}

export default Benefit