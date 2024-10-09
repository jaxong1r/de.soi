import React from 'react'
import bottle1 from '../image/bottle1.svg'
import bottle2 from '../image/bottle2.svg'
import bottle3 from '../image/bottle3.svg'
import bottle4 from '../image/bottle4.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import '../style/best.css'
import 'swiper/css';

function Best() {
    return (
        <section className='best'>
            <div className="container">
                <h2>Our best sellers</h2>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    loop={true}
 
                    breakpoints={{
                        320: { 
                            slidesPerView: 2,
                        },
                        640: { 
                            slidesPerView: 2,
                        },
                        768: { 
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="best_card">
                            <img src={bottle1} alt="" />
                            <h4>Ipsum dolor</h4>
                            <p>Ut enim ad minim veniam, quis nostrud exerp ex ea commodo consequat.</p>
                            <span>Shop now</span>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="best_card">
                            <img src={bottle2} alt="" />
                            <h4>Consectetur adipiscing</h4>
                            <p>Ut enim ad minim veniam, quis nostrud exerp ex ea commodo consequat.</p>
                            <span>Shop now</span>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="best_card">
                            <img src={bottle3} alt="" />
                            <h4>Consequat</h4>
                            <p>Ut enim ad minim veniam, quis nostrud exerp ex ea commodo consequat.</p>
                            <span>Shop now</span>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide><div className="best_card">
                        <img src={bottle4} alt="" />
                        <h4>Commodo</h4>
                        <p>Ut enim ad minim veniam, quis nostrud exerp ex ea commodo consequat.</p>
                        <span>Shop now</span>
                    </div></SwiperSlide>
                    <SwiperSlide>
                        <div className="best_card">
                            <img src={bottle1} alt="" />
                            <h4>Ipsum dolor</h4>
                            <p>Ut enim ad minim veniam, quis nostrud exerp ex ea commodo consequat.</p>
                            <span>Shop now</span>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Best