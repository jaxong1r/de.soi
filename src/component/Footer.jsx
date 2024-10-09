import React from 'react'
import ins1 from '../image/ins1.svg'
import ins2 from '../image/ins2.svg'
import ins3 from '../image/ins3.svg'
import ins4 from '../image/ins4.svg'
import ins5 from '../image/ins1.svg'
import '../style/footer.css'
function Footer() {
  return (
    <footer className='footer'>
        <div className="container">
            <div className="footer_wrapper">
                <div className="new">
                    <h4>Newsletter</h4>
                    <p>Sign up to save 10% on your next order</p>
                    <input type="text" placeholder='Email Address' />
                    <div className="footer_icon">
                        <img src={ins1} alt="" />
                        <img src={ins2} alt="" />
                        <img src={ins3} alt="" />
                        <img src={ins4} alt="" />
                        <img src={ins5} alt="" />
                    </div>
                </div>
                <div className="explore_wrapper">
                <div className='explore_wrap'>
                <div className="explore">
                    <h6>explore</h6>
                    <ul>
                        <li>Account</li>
                        <li>Gift Card</li>
                        <li>Refer a Friend</li>
                        <li>Affiliates</li>
                        <li>Corporate Gifting</li>
                    </ul>
                </div>
              
              <div className="explore">
                    <h6>get help</h6>
                    <ul>
                        <li>Shop</li>
                        <li>FAQ</li>
                        <li>Shipping & Returns</li>
                        <li>Store Locator</li>
                    </ul>
                </div>
                </div>
                <div className="explore">
                    <h6>Company</h6>
                    <ul>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Blog</li>
                        <li>Press</li>
                    </ul>
                </div>
                
              </div>
            </div>
            <div className="de_wr">
               <div> <h5>/de · swa/</h5>
               <h5>®2021 Сocktail</h5></div>
                <div><h4>Privacy policy</h4>
                <h4>Terms of use</h4>
                <h4>AMASS</h4></div>
            </div>
        </div>
    </footer>
  )
}

export default Footer