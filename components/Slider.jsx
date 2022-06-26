// Import Swiper React components
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper';

const Slider = () => {
  const hasWindow = typeof window !== 'undefined';

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const { width } = windowDimensions;

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasWindow]);
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper z-0"
      >
        <SwiperSlide>
          <Image
            layout="responsive"
            src="/img/osobanner.webp"
            width="100%"
            height="100%"
            alt="probando"
            objectFit="cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            layout="responsive"
            src="/img/banner3.webp"
            width="100%"
            height="100%"
            alt="probando"
            objectFit="cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            layout="responsive"
            src={width >= 900 ? '/img/bannerBest.jpg' : '/img/ofer3x2.jpg'}
            width="100%"
            height="100%"
            alt="probando"
            objectFit="cover"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
