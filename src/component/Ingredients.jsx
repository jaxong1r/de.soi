import React from 'react'
import ing1 from '../image/ing1.svg'
import ing2 from '../image/ing2.svg'
import ing3 from '../image/ing3.svg'
import ing4 from '../image/ing4.svg'
import ing5 from '../image/ing5.svg'
import ing6 from '../image/ing6.svg'
import '../style/ing.css'

function Ingredients() {
  return (
    <section className='ing'>
        <div className="container">
            <h2>Ingredients</h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <span>Ingredient glossAry</span>
            <div className="ing_wrapper">
                <div className="ing_card"><img src={ing1} alt="" /><h4>earl gray</h4></div>
                <div className="ing_card"><img src={ing2} alt="" /><h4>rose</h4></div>
                <div className="ing_card"><img src={ing3} alt="" /><h4>pear</h4></div>
                <div className="ing_card"><img src={ing4} alt="" /><h4>birch</h4></div>
                <div className="ing_card"><img src={ing5} alt="" /><h4>black currant</h4></div>
                <div className="ing_card"><img src={ing6} alt="" /><h4>bergamot</h4></div>
            </div>
        </div>
    </section>
  )
}

export default Ingredients