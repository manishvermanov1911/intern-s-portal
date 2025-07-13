import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import { Autoplay, FreeMode } from 'swiper/modules';

export default function Home() {
    return (
        <div className="w-full flex flex-col items-center  mt-32">
            <div>
                <h1 className="text-[148px] sm:text-[40px] md:text-[148px] font-urbanist text-[#FFF7E1] font-normal leading-none">
                    Intern <br className="w-0 "></br>Portal
                </h1>
            </div>
            <p className="text-[16px] mt-20  text-center font-instrument text-[#FFF7E1] max-w-[840px] mb-8">
                This internship portal contains information about all the projects that interns have worked on this summer, the events like Adobe Alchemy, connecting with leaders, and much more. Get a glimpse into intern life at Adobe!
            </p>
            {/* <img src="https://images.unsplash.com/photo-1750275228384-e76a88c7c848?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/> */}
                <Swiper

                     breakpoints={{
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
                    // how many slides you want visible
                    spaceBetween={20}
                    loop={true}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    freeMode={true}
                    modules={[Autoplay, FreeMode]}
                    className="w-full"
                >
                    <SwiperSlide>
                        <img
                            src="https://images.unsplash.com/photo-1750275228384-e76a88c7c848?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Slide 1"
                            className="rounded-xl object-cover w-full h-64"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://images.unsplash.com/photo-1750275228384-e76a88c7c848?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Slide 2"
                            className="rounded-xl object-cover w-full h-64"
                        />
                    </SwiperSlide>
                     <SwiperSlide>
                        <img
                            src="https://images.unsplash.com/photo-1750275228384-e76a88c7c848?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Slide 2"
                            className="rounded-xl object-cover w-full h-64"
                        />
                    </SwiperSlide>
                     <SwiperSlide>
                        <img
                            src="https://images.unsplash.com/photo-1750275228384-e76a88c7c848?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Slide 2"
                            className="rounded-xl object-cover w-full h-64"
                        />
                    </SwiperSlide>
                    {/* Add more slides as needed */}
                </Swiper>
            </div>
    );
}