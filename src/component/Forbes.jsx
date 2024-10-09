import React from 'react'
import '../style/forbes.css'
import tepa from '../image/tepa.svg'
import past from '../image/past.svg'
import forbes from '../image/forbes.svg'
import saveup from '../image/saveur.svg'
import foodwine from '../image/foodwine.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
function Forbes() {
  return (
    <section className='forbes'>
        <div className="container">
        <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    className="mySwiper"
                >
                    <SwiperSlide>
                    <div className="forbes_wrapper">
                <div className="forbes_card">
                    <img className='tepa' src={tepa} alt="" />
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <img className='past' src={past} alt="" /> <br />
                    <img className='food' src={forbes} alt="" />
                </div>
                <div className="forbes_card">
                    <img className='tepa' src={tepa} alt="" />
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <img className='past' src={past} alt="" /> <br />
                    <img className='food' src={saveup} alt="" />
                </div>
                <div className="forbes_card">
                    <img className='tepa' src={tepa} alt="" />
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <img className='past' src={past} alt="" /> <br />
                    <img className='food' src={foodwine} alt="" />
                </div>
            </div>
                    </SwiperSlide>

                    <SwiperSlide>
                    <div className="forbes_wrapper">
                <div className="forbes_card">
                    <img className='tepa' src={tepa} alt="" />
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <img className='past' src={past} alt="" /> <br />
                    <img className='food' src={forbes} alt="" />
                </div>
                <div className="forbes_card">
                    <img className='tepa' src={tepa} alt="" />
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <img className='past' src={past} alt="" /> <br />
                    <img className='food' src={saveup} alt="" />
                </div>
                <div className="forbes_card">
                    <img className='tepa' src={tepa} alt="" />
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <img className='past' src={past} alt="" /> <br />
                    <img className='food' src={foodwine} alt="" />
                </div>
            </div>
                    </SwiperSlide>
                </Swiper>
        </div>
    </section>
  )
    }

export default Forbes