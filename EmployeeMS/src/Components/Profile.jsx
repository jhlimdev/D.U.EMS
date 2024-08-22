// Profile.js

import React, { useEffect, useState } from 'react';
//import './Profile.css';
import './ProfileSlider.css';

import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Profile = () => {
  useEffect(()=> {
    document.title = "D.U.EMS | 관리자 프로필"
  },[])

  const [name1] = useState('임재훈');
  const [name2] = useState('조세형');
  const [name3] = useState('노현수');
  const [name4] = useState('한진수');
  const [name5] = useState('조양수');

  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"/>
    
<div> 
</div>
    <section>
      <div className="swiper mySwiper container">
        <div className="swiper-wrapper content">
        <Swiper
      modules={[Autoplay ,Navigation, Pagination, A11y]}
      loop='true'
      loopFillGroupWithBlank='true'
      autoplay={{delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true}}
      spaceBetween={50}
      slidesPerView={3}
      navigation={true}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
    
        <SwiperSlide>
          <div className="swiper-slide card">
            <div className="box1"></div>
              <div className="card-content">
                <div className="image">
                  <img
                  src="../Images/photo1.png"
                  alt="프로필 이미지"
                  className="profile-image" />
                </div>
                <div className="name-profession">
                  <span className="name">{name1}</span>
                  <span className="profession">PM/PL/SM/DB/Designer/Programmer</span>
                </div>
                <div className="about">
                  <p>동서울대학교 컴퓨터정보과 3학년 A반 1912013</p>
                </div>
              </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>  
          <div className="swiper-slide card">
            <div className="box2"></div>
              <div className="card-content">
                <div className="image">
                  <img
                  src="../Images/photo2.png"
                  alt="프로필 이미지"
                  className="profile-image" />
                </div>
                <div className="name-profession">
                  <span className="name">{name2}</span>
                  <span className="profession">SM/Designer/Programmer</span>
                </div>
                <div className="about">
                  <p>동서울대학교 컴퓨터정보과 3학년  A반 1912002</p>
                </div>
              </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>  
          <div className="swiper-slide card">
            <div className="box3"></div>
              <div className="card-content">
                <div className="image">
                  <img
                  src="../Images/photo3.png"
                  alt="프로필 이미지"
                  className="profile-image" />
                </div>
                <div className="name-profession">
                  <span className="name">{name3}</span>
                  <span className="profession">Consultant/DB/SM/Designer/Programmer</span>
                </div>
                <div className="about">
                  <p>동서울대학교 컴퓨터정보과 3학년 A반 190479</p>
                </div>
              </div>
          </div>
        </SwiperSlide>

        <SwiperSlide> 
          <div className="swiper-slide card">
            <div className="box4"></div>
              <div className="card-content">
                <div className="image">
                  <img
                  src="../Images/photo4.png"
                  alt="프로필 이미지"
                  className="profile-image" />
                </div>
                <div className="name-profession">
                  <span className="name">{name4}</span>
                  <span className="profession">Consultant/SM/Designer/Programmer</span>
                </div>
                <div className="about">
                  <p>동서울대학교 컴퓨터정보과 3학년 A반 1912095</p>
                </div>
              </div>
          </div>
        </SwiperSlide>  

        <SwiperSlide> 
          <div className="swiper-slide card">
            <div className="box5"></div>
              <div className="card-content">
                <div className="image">
                  <img
                  src="../Images/photo5.png"
                  alt="프로필 이미지"
                  className="profile-image" />
                </div>
                <div className="name-profession">
                  <span className="name">{name5}</span>
                  <span className="profession">Consultant/Designer/Programmer</span>
                </div>
                <div className="about">
                  <p>동서울대학교 컴퓨터정보과 3학년 A반 1912009</p>
                </div>
              </div>
          </div>
          </SwiperSlide>  
        </Swiper>
        </div>
      </div>
    </section>

    {/*
    <div className={`profile-container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="profile-header">
        <img
          src="https://placekitten.com/200/200"
          alt="프로필 이미지"
          className="profile-image" />
        <h1 className="profile-name">
          {name1}
        </h1>
        </div>
        <p className="profile-bio">Fullstack/DB</p>
      </div>
      */}
  </>
  );
};

export default Profile;
