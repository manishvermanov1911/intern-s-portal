import Marquee from "react-fast-marquee";
import useIsMobile from "../Components/useIsMobile";

// Add images JSON array
const marqueeImages = [
  {
    src: "https://images.unsplash.com/photo-1750275228384-e76a88c7c848?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Intern event 1",
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    alt: "Intern event 2",
  },
  {
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    alt: "Intern event 3",
  },
  {
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    alt: "Intern event 4",
  },
  {
    src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80",
    alt: "Intern event 5",
  },
];

export default function Home() {
  const isMobile = useIsMobile();
  return (
    <main className="w-full flex flex-col items-center mt-32">
      <div>
        <h1 className="font-title text-6xl md:text-9xl font-urbanist text-white/80 font-normal leading-none mb-20">
          Intern <br></br>Portal
        </h1>
      </div>
      <p className="text-sm md:text-normal text-center font-instrument text-[#FFF7E1] max-w-sm md:max-w-2xl mb-6 md:mb-8">
        This internship portal contains information about all the projects that
        interns have worked on this summer, the events like Adobe Alchemy,
        connecting with leaders, and much more. Get a glimpse into intern life
        at Adobe!
      </p>
      {/* Marquee of images */}
      <div className="w-full overflow-hidden py-4">
        <Marquee
          gradient={true}
          gradientColor={"black"}
          gradientWidth={"10vw"}
          speed={50}
          autoFill={true}
          pauseOnHover={true}
          className="w-full flex-row flex items-center justify-center"
        >
          {marqueeImages.map((img, idx) => (
            <div
              key={idx}
              className="w-[200px] h-[133px] md:w-[504px] md:h-[336px] mx-8 overflow-hidden"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="rounded-2xl object-cover w-full h-full aspect-3/2 transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </Marquee>
      </div>

      <div className="mt-14 text-[#FFF7E1] font-urbanist text-[20px] md:text-5xl ">
        <span className="text-[#ff0000]">Adobe's</span> Core Values
      </div>
      {isMobile ? (
        <div className="grid grid-cols-2 grid-rows-2 gap-0 w-[90vw] max-w-[400px] mx-auto mt-8 overflow-hidden rounded-3xl mb-8">
          {/* 1 */}
          <div className="flex flex-col justify-center items-center bg-[#FFF7E1] text-[#ff0000] px-4 py-8 rounded-tl-3xl">
            <div className="text-5xl font-urbanist text-center">1</div>
            <div className="text-xs font-bold font-urbanist text-center mt-2">
              Create the future.
            </div>
          </div>
          {/* 2 */}
          <div className="flex flex-col justify-center items-center bg-[#FF7B70] text-[#FFF7E1] px-4 py-8 rounded-tr-3xl">
            <div className="text-5xl font-urbanist text-center">2</div>
            <div className="text-xs font-bold font-urbanist text-center mt-2">
              Own the outcome.
            </div>
          </div>
          {/* 3 */}
          <div className="flex flex-col justify-center items-center bg-[#ff0000] text-[#FFF7E1] px-4 py-8 rounded-bl-3xl">
            <div className="text-5xl font-urbanist text-center">3</div>
            <div className="text-xs font-bold font-urbanist text-center mt-2">
              Raise the bar.
            </div>
          </div>
          {/* 4 */}
          <div className="flex flex-col justify-center items-center bg-[#cc0000] text-[#FFF7E1] px-4 py-8 rounded-br-3xl">
            <div className="text-5xl font-urbanist text-center">4</div>
            <div className="text-xs font-bold font-urbanist text-center mt-2">
              Be genuine.
            </div>
          </div>
        </div>
      ) : (
        <div className="relative w-full mx-auto mt-8 flex justify-center items-center mb-8">
          <div
            className={`h-full flex flex-row justify-center items-stretch rounded-3xl bg-[#FFF7E1] text-[#ff0000]`}
          >
            <div className="min-h-full px-8 py-6 lg:px-16 lg:py-12 text-center flex flex-col justify-center items-center w-40 lg:w-64">
              <div className="text-9xl font-urbanist text-center">1</div>
              <div className="text-sm font-medium text-center font-bold font-urbanist">
                Create the future.
              </div>
            </div>
            <div className="min-h-full text-center flex-row flex justify-center items-stretch bg-[#FF0000]/50 text-[#FFF7E1] rounded-3xl">
              <div className="min-h-full px-8 py-6 lg:px-16 lg:py-12 text-center flex flex-col justify-center items-center w-40 lg:w-64">
                <div className="text-9xl font-urbanist text-center">2</div>
                <div className="text-sm font-medium text-center font-bold font-urbanist">
                  Own the outcome.
                </div>
              </div>
              <div className="min-h-full text-center flex-row flex justify-center items-stretch bg-[#ff0000] text-[#FFF7E1] rounded-3xl">
                <div className="min-h-full px-8 py-6 lg:px-16 lg:py-12 text-center flex flex-col justify-center items-center w-40 lg:w-64">
                  <div className="text-9xl font-urbanist text-center">3</div>
                  <div className="text-sm font-medium text-center font-bold font-urbanist">
                    Raise the bar.
                  </div>
                </div>
                <div className="min-h-full px-8 py-6 lg:px-16 lg:py-12 text-center flex flex-col justify-center items-center bg-[#cc0000] text-[#FFF7E1] rounded-3xl w-40 lg:w-64">
                  <div className="text-9xl font-urbanist text-center">4</div>
                  <div className="text-sm font-medium text-center font-bold font-urbanist">
                    Be genuine.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="text-[#FFF7E1] font-urbanist text-[20px] md:text-5xl mb-8">
        Our team - ACS!
      </div>

      <p className="max-w-sm md:max-w-2xl text-base md:text-[16px] text-center font-instrument text-[#FFF7E1] max-w-[840px] mb-8">
        This internship portal contains information about all the projects that
        interns have worked on this summer, the events like Adobe Alchemy,
        connecting with leaders, and much more. Get a glimpse into intern life
        at Adobe!
      </p>

      {/* flow chart here */}

      <p className="max-w-sm md:max-w-2xl text-base md:text-[16px] mb-8 text-center font-instrument text-[#FFF7E1] max-w-[840px] mb-8">
        Read more about the team, or see more pictures, by clicking the buttons
        below!
      </p>

      <div className="flex gap-4 bg-black p-8 justify-center">
        <a
          href="/teams"
          className="flex flex-row items-center justify-center w-[164px] h-[55px] rounded-[32px] bg-red-600 text-white font-medium hover:bg-red-700 transition"
        >
          Find Out More!
        </a>
        <a
          href="/gallery"
          className="flex flex-row items-center justify-center w-[164px] h-[55px] rounded-[32px] border-2 border-red-600 text-white font-medium hover:bg-red-600 transition"
        >
          View Gallery
        </a>
      </div>
    </main>
  );
}
