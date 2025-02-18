import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../css/style.css';
export default function SwiperSlider() {
    const slides = [
        {
            src: 'assets/images/bghome.jpg',
            title: 'Gambar 1',
        },
        {
            src: 'https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            title: 'Gambar 2',
        },
        {
            src: 'https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            title: 'Gambar 3',
        },
    ];
    return (
        <>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide
                        key={index}
                        className="group relative overflow-hidden rounded-lg shadow-lg"
                    >
                        <img
                            src={slide.src}
                            alt={`Slide ${index + 1}`}
                            className="h-[240px] w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-105 md:h-[420px]"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 p-4 text-lg font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            {slide.title}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
