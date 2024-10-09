import React from 'react'
import '../style/tom.css'
import b12 from '../image/b12.png'
import b13 from '../image/b13.png'
import { Swiper, SwiperSlide } from 'swiper/react';
function Tom() {
    return (
        <section className='tom'>
            <div className="container">

                <div className="tom_wrapper">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={0}
                        loop={true}
                        breakpoints={{
                            1245: {
                                slidesPerView: 1,
                            }
                        }}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="tom1">
                               <div> <img src={b12} alt="" /></div>
                                <div className='jr'>
                                    <h3>Tom Collins Jr.</h3>
                                    <span>Ingredients</span>
                                    <p>3 oz Riverine <br />
                                        3/4 oz Lemon Juice <br />
                                        3/4 oz Simple Syrup <br />
                                        Club Soda</p>
                                    <span>View Full recipe</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>

                            <div className="tom1">
                               <div> <img src={b13} alt="" /></div>
                                <div className='jr'>
                                    <h3>Tom Collins Jr.</h3>
                                    <span>Ingredients</span>
                                    <p>3 oz Riverine  <br />
                                        3/4 oz Lemon Juice <br />
                                        3/4 oz Simple Syrup <br />
                                        Club Soda</p>
                                    <span>View Full recipe</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Tom