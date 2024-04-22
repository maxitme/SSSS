'use client';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import style from './style.module.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Meta from 'antd/es/card/Meta';
import { Card } from 'antd';

export default function App() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        initialSlide={4}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className={style.mySwiper}
      >
        <SwiperSlide className={style.swiperSlide}>
          <Card
            hoverable
            style={{ width: 300, height: 200 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>
          <Card
            hoverable
            style={{ width: 300, height: 200 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>
          <Card
            hoverable
            style={{ width: 300, height: 200 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>
          <Card
            hoverable
            style={{ width: 300, height: 200 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>
          <Card
            hoverable
            style={{ width: 300, height: 200 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
