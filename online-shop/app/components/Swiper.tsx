'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const HeroSlider = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="h-[400px]"
      >
        {/* Slide 1 */}
        <SwiperSlide className="relative">
          <div className="bg-black text-white h-full flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold">iPhone 14 Series</h2>
              <p className="text-lg">Up to 10% off Voucher</p>
              <a href="#" className="text-blue-400 underline mt-2 inline-block">Shop Now →</a>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="relative">
          <div className="bg-gray-800 text-white h-full flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold">MacBook Pro</h2>
              <p className="text-lg">Powerful Performance</p>
              <a href="#" className="text-blue-400 underline mt-2 inline-block">Shop Now →</a>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="relative">
          <div className="bg-gray-900 text-white h-full flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold">Apple Watch</h2>
              <p className="text-lg">Stay Fit & Connected</p>
              <a href="#" className="text-blue-400 underline mt-2 inline-block">Shop Now →</a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
