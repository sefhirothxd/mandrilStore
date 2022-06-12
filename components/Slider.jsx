// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper';

const Slider = () => {
	return (
		<>
			<Swiper
				cssMode={true}
				navigation={true}
				pagination={true}
				mousewheel={true}
				keyboard={true}
				loop={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
				className="mySwiper"
			>
				<SwiperSlide>
					<Image
						layout="responsive"
						src="/img/bannerPrueba.webp"
						width="100%"
						height="30%"
						alt="probando"
						objectFit="cover"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						layout="responsive"
						src="/img/banner3.webp"
						width="100%"
						height="30%"
						alt="probando"
						objectFit="cover"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						layout="responsive"
						src="/img/banner2.jpg"
						width="100%"
						height="30%"
						alt="probando"
						objectFit="cover"
					/>
				</SwiperSlide>
			</Swiper>
		</>
	);
};

export default Slider;
