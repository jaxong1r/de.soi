import React from 'react'
import vary from '../image/varietyimg.png'
import ing1 from '../image/ing1.svg'
import ing2 from '../image/ing2.svg'
import ing3 from '../image/ing3.svg'
import { NavLink } from 'react-router-dom'
import '../style/shop.css'
function ShopHome() {
    return (
        <section className='shop'>
            <div className="container">
                <h2>Shop beverages</h2>
                <div className="shop_wrap">
                    <div className="vary_card1">
                       <div className='r'> <h3>Variety Pack</h3>
                        <h6>-  Delicate and lean to sip -</h6>
                        <hr />
                        <p><span>Adaptogenic ingredients: </span> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <hr />
                        <p><span>Adaptogenic ingredients: </span>  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p></div>
                    </div>

                        <div className="fun">
                            <img src={vary} alt="" />
                            <h5>Bottle</h5>
                            <p>(32 reviews)$35.59</p>
                            <NavLink to="/pdp" ><span>Shop now</span></NavLink>
                        </div>

                    <div className="fun">
                        <img src={vary} alt="" />
                        <h5>Bottle</h5>
                        <p>(32 reviews)$35.59</p>
                        <NavLink to="/pdp" ><span>Shop now</span></NavLink>
                    </div>

                    <div className="vary_card">
                        <h3>Light - bodied</h3>
                        <h6>-  Delicate and lean to sip -</h6>
                        <hr />
                        <p><span>Adaptogenic ingredients: </span> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                       <div className='vr_wrap'> <div className="vr_card"><img src={ing1} alt="" /><h4>earl gray</h4></div>
                        <div className="vr_card"><img src={ing2} alt="" /><h4>rose</h4></div>
                        <div className="vr_card"><img src={ing3} alt="" /><h4>pear</h4></div></div>
                        <hr />
                        <p><span>Adaptogenic ingredients: </span>  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>

                    <div className='vr_bg'>
                        <h3>Happy hour 
                        24/7</h3>
                    </div>

                    <div className="fun">
                        <img src={vary} alt="" />
                        <h5>Bottle</h5>
                        <p>(32 reviews)$35.59</p>
                        <NavLink to="/pdp" ><span>Shop now</span></NavLink>
                    </div>

                    <div className="vary_card">
                        <h3>Medium - bodied</h3>
                        <h6>-  Delicate and lean to sip -</h6>
                        <hr />
                        <p><span>Adaptogenic ingredients: </span> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <div className='vr_wrap'> <div className="vr_card"><img src={ing1} alt="" /><h4>earl gray</h4></div>
                        <div className="vr_card"><img src={ing2} alt="" /><h4>rose</h4></div>
                        <div className="vr_card"><img src={ing3} alt="" /><h4>pear</h4></div></div>
                        <hr />
                        <p><span>Adaptogenic ingredients: </span>  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>

                    <div className="fun">
                        <img src={vary} alt="" />
                        <h5>Bottle</h5>
                        <p>(32 reviews)$35.59</p>
                        <NavLink to="/pdp" ><span>Shop now</span></NavLink>
                    </div>

                    <div className='vr_bg new1'>
                        <h3>New lifestyle</h3>
                    </div>

                    <div className="vary_card">
                        <h3>Full - bodied</h3>
                        <h6>-  Delicate and lean to sip -</h6>
                        <hr />
                        <p><span>Adaptogenic ingredients: </span> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <div className='vr_wrap'> <div className="vr_card"><img src={ing1} alt="" /><h4>earl gray</h4></div>
                        <div className="vr_card"><img src={ing2} alt="" /><h4>rose</h4></div>
                        <div className="vr_card"><img src={ing3} alt="" /><h4>pear</h4></div></div>
                        <hr />
                        <p><span>Adaptogenic ingredients: </span>  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>

                    <div className='vr_bg rich2'>
                        <h3>Rich in flavor</h3>
                    </div>
                    <div className="fun">
                        <img src={vary} alt="" />
                        <h5>Bottle</h5>
                        <p>(32 reviews)$35.59</p>
                        <NavLink to="/pdp" ><span>Shop now</span></NavLink>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ShopHome