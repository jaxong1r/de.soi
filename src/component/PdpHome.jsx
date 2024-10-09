import React, { useState } from 'react'
import '../style/pdp.css'
import martin from '../image/martin.png'
import ing1 from '../image/ing1.svg'
import ing3 from '../image/ing3.svg'
import ing5 from '../image/ing5.svg'
function PdpHome() {
    const [selectedOption, setSelectedOption] = useState('oneTime');
    return (
        <section className='pdp'>
            <div className="container">
            <div className='wq'><img className='martin f1' src={martin} alt="" /></div> 
                <div className="pdp_wrapper">
                    <div className="medium">
                        <h5>Non-Alcoholic drink</h5>
                        <h3>Medium - bodied</h3>
                        <h6>Light and easy to sip</h6>
                        <hr />
                        <p>Made with natural birch, Strawberry and Apricot, an earthy and fruity taste.
                            <br />
                            <br />
                            ・100% Natural ingredients <br />
                            ・Low Calories<br />
                            ・Perfect for every occassion</p>
                        <hr />
                        <span>Shop the can</span>
                    </div>
                    <img className='martin' src={martin} alt="" />

                    <div className='quan'>
                        <h2>$35.59</h2>
                        <hr />
                        <h5>adaptogenic Ingredients</h5>
                        <div className="img_wrap">
                            <div className="img13"><img src={ing5} alt="" /><h4>Strawberry</h4></div>
                            <div className="img13"><img src={ing1} alt="" /><h4>Birch</h4></div>
                            <div className="img13"><img src={ing3} alt="" /><h4>Apricot</h4></div>
                        </div>
                        <hr />
                        <h5>Quantity</h5>
                        <h4>Complimentary domestic shipping on 2+ bottles.</h4>
                        <hr />
                        <label>
                            <input
                                type="radio"
                                name="purchaseOption"
                                value="oneTime"
                                checked={selectedOption === 'oneTime'}
                                onChange={() => setSelectedOption('oneTime')}
                            />
                           <strong> $35.59 ONE TIME PURCHASE</strong>
                        </label>
                        <br />
                        <label>
                            <input
                                type="radio"
                                name="purchaseOption"
                                value="subscription"
                                checked={selectedOption === 'subscription'}
                                onChange={() => setSelectedOption('subscription')}
                            />
                          <strong>  $30.00 SUBSCRIPTION (15% OFF)</strong>
                        </label>
                        <hr />
                        <h4>Free domestic shipping over $50</h4>
                        <button className='add'>Add to bag</button>
                        <hr />
                        <div className="detail_wrap">
                            <div><h3>Details</h3> <span>+</span></div>
                            <div><h3>Full Ingredients</h3> <span>+</span></div>
                            <div><h3>Product features</h3> <span>+</span></div>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PdpHome