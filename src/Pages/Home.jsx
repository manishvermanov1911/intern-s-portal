import Marquee from "react-fast-marquee";
import useIsMobile from "../Components/useIsMobile";

// Add images JSON array
const marqueeImages = [
  {
    src: "/home/1.jpeg",
    alt: "Intern event 1",
  },
  {
    src: "/home/2.jpeg",
    alt: "Intern event 2",
  },
  {
    src: "/home/3.jpeg",
    alt: "Intern event 3",
  },
  {
    src: "/home/4.jpeg",
    alt: "Intern event 4",
  },
];

export default function Home() {
  const isMobile = useIsMobile();
  return (
    <main className="w-full flex flex-col items-center mt-32">
      <div>
        <h1 className="font-title text-6xl md:text-9xl font-title text-white/80 font-normal leading-none mb-24">
          Intern <br></br>Portal
        </h1>
      </div>
      <p className="font-body text-base md:text-lg max-w-sm md:max-w-3xl text-center text-[#FFF7E1] mb-24">
        This internship portal contains information about all the projects that
        the ACS interns of 2025 worked on, the events like Adobe Alchemy,
        connecting with leaders, and much more. Get a glimpse into intern life
        at Adobe!
      </p>
      {/* Marquee of images */}
      <div className="w-full overflow-hidden">
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

      <div className="mt-24 text-[#FFF7E1] font-title text-3xl md:text-5xl mb-8">
        <span className="text-[#ff0000]">Adobe's</span> Core Values
      </div>
      {isMobile ? (
        <div className="grid grid-cols-2 grid-rows-2 gap-0 w-[90vw] max-w-[400px] mx-auto mt-8 overflow-hidden rounded-3xl mb-8">
          {/* 1 */}
          <div className="flex flex-col justify-center items-center bg-[#FFF7E1] text-[#ff0000] px-4 py-8 rounded-tl-3xl">
            <div className="text-5xl font-title text-center">1</div>
            <div className="text-xs font-bold font-title text-center mt-2">
              Create the future.
            </div>
          </div>
          {/* 2 */}
          <div className="flex flex-col justify-center items-center bg-[#FF7B70] text-[#FFF7E1] px-4 py-8 rounded-tr-3xl">
            <div className="text-5xl font-title text-center">2</div>
            <div className="text-xs font-bold font-title text-center mt-2">
              Own the outcome.
            </div>
          </div>
          {/* 3 */}
          <div className="flex flex-col justify-center items-center bg-[#ff0000] text-[#FFF7E1] px-4 py-8 rounded-bl-3xl">
            <div className="text-5xl font-title text-center">3</div>
            <div className="text-xs font-bold font-title text-center mt-2">
              Raise the bar.
            </div>
          </div>
          {/* 4 */}
          <div className="flex flex-col justify-center items-center bg-[#cc0000] text-[#FFF7E1] px-4 py-8 rounded-br-3xl">
            <div className="text-5xl font-title text-center">4</div>
            <div className="text-xs font-bold font-title text-center mt-2">
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
              <div className="text-9xl font-title text-center">1</div>
              <div className="text-sm font-medium text-center font-bold font-title">
                Create the future.
              </div>
            </div>
            <div className="min-h-full text-center flex-row flex justify-center items-stretch bg-[#FF0000]/50 text-[#FFF7E1] rounded-3xl">
              <div className="min-h-full px-8 py-6 lg:px-16 lg:py-12 text-center flex flex-col justify-center items-center w-40 lg:w-64">
                <div className="text-9xl font-title text-center">2</div>
                <div className="text-sm font-medium text-center font-bold font-title">
                  Own the outcome.
                </div>
              </div>
              <div className="min-h-full text-center flex-row flex justify-center items-stretch bg-[#ff0000] text-[#FFF7E1] rounded-3xl">
                <div className="min-h-full px-8 py-6 lg:px-16 lg:py-12 text-center flex flex-col justify-center items-center w-40 lg:w-64">
                  <div className="text-9xl font-title text-center">3</div>
                  <div className="text-sm font-medium text-center font-bold font-title">
                    Raise the bar.
                  </div>
                </div>
                <div className="min-h-full px-8 py-6 lg:px-16 lg:py-12 text-center flex flex-col justify-center items-center bg-[#cc0000] text-[#FFF7E1] rounded-3xl w-40 lg:w-64">
                  <div className="text-9xl font-title text-center">4</div>
                  <div className="text-sm font-medium text-center font-bold font-title">
                    Be genuine.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="font-title mt-16 text-[#FFF7E1] text-3xl md:text-5xl mb-8">
        Our team - ACS!
      </div>

      <p className="max-w-sm md:max-w-3xl font-body text-base md:text-lg text-center text-[#FFF7E1] mb-8">
        Adobe Consultancy Services (ACS) is a team of interns who collaborated
        on various projects, learning and growing together. Each project had its
        own unique focus, from UI/UX design to frontend development, and each
        team member contributed their skills to create impactful solutions. ACS
        is divided into several teams, each with its own area of expertise and
        focus. Each team has a unique timeline of activities and milestones that
        highlight their journey throughout the internship.
      </p>
      {/*TODO: flow chart here */}
      <p className="max-w-sm md:max-w-3xl font-body text-base md:text-lg text-center text-[#FFF7E1] mb-8">
        Read more about the team, or see more pictures, by clicking the buttons
        below!
      </p>

      <div className="flex gap-4 bg-black justify-center mb-32">
        <a
          href="/teams"
          className="flex flex-row items-center justify-center w-36 h-12 rounded-3xl bg-[#FF0000] hover:bg-[#CC0000] text-white font-medium transition"
        >
          Find Out More!
        </a>
        <a
          href="/gallery"
          className="flex flex-row items-center justify-center w-36 h-12 rounded-3xl border-2 border-[#ff0000] text-white font-medium hover:bg-[#ff0000] transition"
        >
          View Gallery
        </a>
      </div>
    </main>
  );
}
