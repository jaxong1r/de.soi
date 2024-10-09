import React, { useState } from 'react'
import '../style/my.css'
import bot7 from '../image/image7.png'

function My() {
  const[count, setCount]=useState(1)
  function minus(){
    setCount((prev)=>prev-1)
  }
  function plus(){
    setCount((prev)=>prev+1)
  }
  const[count1, setCount1]=useState(1)
  function minus1(){
    setCount1((prev1)=>prev1-1)
  }
  function plus1(){
    setCount1((prev1)=>prev1+1)
  }
  return (
    <section className='my'>
      <div className="container">
        <h2>My Bag</h2>
        <div className="my_wrapper">
          <div className="pr">
            <li>Product</li>
            <ul>
              <li>Price</li>
              <li>QTY</li>
              <li>Total</li>
            </ul>
          </div>
          <hr />
          <div className="med_wrap">
            <div className='med'>
              <img src={bot7} alt="" />
              <div><h4>Medium-bodied</h4>
              <p>1 bottle <br />Delivery every 1 month</p>
              </div>
              </div>
              <div className="med1">
                <span className='rang'>$28.00</span>
                <div className='btn'>
                  <button onClick={minus}>-</button>
                  {count >0 ? <span>{count}</span>: <span>1</span> }
                  <button onClick={plus}>+</button>
                </div>
                <span className='rang'>{ count >0 && count * 20}</span>
              </div>
          </div>
          <hr />
          <div className="med_wrap">
            <div className='med'>
              <img src={bot7} alt="" />
              <div><h4>Light-bodied</h4>
              <p>1 bottle <br />Delivery every 1 month</p>
              </div>
              </div>
              <div className="med1">
                <span className='rang'>$35.59</span> 
                <div className='btn'>
                  <button onClick={minus1}>-</button>
                  {count1 >0 ? <span>{count1}</span>: <span>1</span> }
                  <button onClick={plus1}>+</button>
                </div>
                <span className='rang'>{ count1 >0 && count1 * 35}</span>
              </div>
          </div>
          <hr />
        </div>
        <div className="my_wrap">
         <div> <div className="send">
            <h3>Sending a gift?</h3>
            <input type="text" placeholder='Happy 25th Birthday Eddie! Hope you have a wonderful celebration!!!'/>
            <button className='save'>save message</button>
          </div>
          <div className='me'>
            <hr />
          <h3>You might also like</h3>
              <div className='odam'>
              <img src={bot7} alt="" />
              <div><h4>Full-bodied</h4>
              <p>1 bottle</p>
              <input type="text" />
              </div>
              </div>
              </div></div>
          <div className="sub">
            <div className="tot">
              <h3>Subtotal</h3>
              <h5>$99.18</h5>
            </div>
            <p>Shipping & tax calculated at checkout</p>
            <div className='way'>
              <div className='yarim'></div>
            </div>
            <p>$5.00 away from free shipping</p>
            <hr />
            <div>
              <h6>Package protection <br /> <br />
              For damage, lost & theft for $0.99</h6>
              <hr />
              <button className='save'>Checkout</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default My