import React from 'react'
import juice from '../image/juice.png'
import '../style/juice.css'
function Rich() {
    return (
        <section className='rich'>
            <div className="container">
                <div className="rich_wrapper">
                <div className="go"><img src={juice} alt="" /></div>
                    <div className="rich_text">
                        <h5>New in</h5>
                        <h2>Rich and fruity</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <span>Shop now</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Rich