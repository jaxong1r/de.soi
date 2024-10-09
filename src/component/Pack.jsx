import React from 'react'
import '../style/pack.css'
import laym from '../image/laym.png'
function Pack() {
    return (
        <section className='pack'>
            <div className="container">
                <div className="pack_wrapper">
                <img className='s' src={laym} alt="" />
                    <div className="var">
                        <h6>Try this</h6>
                        <h2>Variety Pack</h2>
                        <p>Don’t know what to choose? Our variety pack is a three-bottle kit with De Soi’s Light, Medium and Full bodied flavors. Taste all 3 flavors at once!</p>
                        <span>Shop now</span>
                    </div>
                    <img className='y' src={laym} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Pack