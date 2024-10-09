import React from 'react'
import '../style/how.css'
import green from '../image/green.png'
function How() {
    return (
        <section className='how'>
            <div className="container">
                <div className="how_wrapper">
                        <img className='qwer' src={green} alt="" />
                    <div className='how_text'>
                        <h3>How to enjoy</h3>
                        <h6>On the Rocks</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br /><br />

                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>

                        <img className='how_img' src={green} alt="" />
                </div>
            </div>
        </section>
    )
}

export default How