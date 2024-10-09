import React from 'react'
import vary from '../image/varietyimg.png'
import '../style/fun.css'
function Fun() {
  return (
    <section className='fun1'>
        <div className="container">
            <h2>You might also like...</h2>
       <div className="fun_wrapper">
       <div className="fun">
                        <img src={vary} alt="" />
                        <h5>Bottle</h5>
                        <p>(32 reviews)$35.59</p>
                        <span>Shop now</span>
                    </div>
        <div className="fun kf">
                        <img src={vary} alt="" />
                        <h5>Bottle</h5>
                        <p>(32 reviews)$35.59</p>
                        <span>Shop now</span>
                    </div>
        <div className="fun df">
                        <img src={vary} alt="" />
                        <h5>Bottle</h5>
                        <p>(32 reviews)$35.59</p>
                        <span>Shop now</span>
                    </div>
       </div>
        </div>
    </section>
  )
}

export default Fun