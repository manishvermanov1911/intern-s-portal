import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import { Autoplay, FreeMode } from "swiper/modules";
import useIsMobile from "../Components/useIsMobile";

export default function Home() {
  const steps = [
    {
      number: "1",
      text: "Be Genuine",
      color: "bg-[#FFF6E5] text-red-600",
      left: "0%",
      width: "100%",
    },
    {
      number: "2",
      text: "Raise the Bar",
      color: "bg-[#FFAFAF] text-white",
      left: "25%",
      width: "75%",
    },
    {
      number: "3",
      text: "Own the Outcome",
      color: "bg-[#FF2A2A] text-white",
      left: "50%",
      width: "50%",
    },
    {
      number: "4",
      text: "Create the future",
      color: "bg-[#C60000] text-white",
      left: "75%",
      width: "25%",
    },
  ];

  const isMob = useIsMobile();
  console.log(isMob);
  return (
    <div className="w-full flex flex-col items-center  mt-32 ">
      <div>
        <h1 className="text-6xl sm:text-9xl font-urbanist text-[#FFF7E1] font-normal leading-none mb-20">
          Intern <br></br>Portal
        </h1>
      </div>
      <p className=" hidden text-[14px] sm:block  sm:text-[16px]   text-center font-instrument text-[#FFF7E1] max-w-[840px] mb-8">
        This internship portal contains information about all the projects that
        interns have worked on this summer, the events like Adobe Alchemy,
        connecting with leaders, and much more. Get a glimpse into intern life
        at Adobe!
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
      <div className="mt-14 text-[#FFF7E1] font-urbanist text-[20px] sm:text-5xl ">
        <span className="text-[#ff0000]">Adobe's</span> Core Values
      </div>
      {!isMob ? (
        <div className="relative w-full max-w-[1160px] h-[365px] mx-auto mt-[52px] rounded-[32px]">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`absolute h-full flex flex-col justify-center rounded-[32px] shadow-lg ${step.color}`}
              style={{
                left: step.left,
                width: step.width,
              }}
            >
              <div
                className="relative flex flex-col justify-center items-start"
                style={{
                  left: index === 0 ? "12.5%" : `${parseFloat(step.left) / 2}%`,
                }}
              >
                <div className="text-[120px] font-bold">{step.number}</div>
                <div className="text-base font-medium text-center">
                  {step.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : null}

      <div className="mt-14 text-[#FFF7E1] font-urbanist text-[20px] sm:text-5xl ">
        Our team - ACS!
      </div>

      <p className=" text-[14px] sm:text-[16px] mt-20  text-center font-instrument text-[#FFF7E1] max-w-[840px] mb-8">
        This internship portal contains information about all the projects that
        interns have worked on this summer, the events like Adobe Alchemy,
        connecting with leaders, and much more. Get a glimpse into intern life
        at Adobe!
      </p>

      {/* flow chart here */}

      <p className=" text-[14px] sm:text-[16px] mt-20  text-center font-instrument text-[#FFF7E1] max-w-[840px] mb-8">
        Read more about the team, or see more pictures, by clicking the buttons
        below!
      </p>

      <div className="flex gap-4 bg-black p-8 justify-center">
        <button className="w-[164px] h-[55px] rounded-[32px] bg-red-600 text-white font-medium hover:bg-red-700 transition">
          Find Out More!
        </button>
        <button className="w-[164px] h-[55px] rounded-[32px] border-2 border-red-600 text-white font-medium hover:bg-red-600 transition">
          View Gallery
        </button>
      </div>
    </div>
  );
}
