import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

const App = () => {
  const [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg")?.remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: -1,
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-0.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.2,
      rotate: 0,
      duration: 2,
      delay: "-0.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 1,
      x: "-50%",
      bottom: "-50%",
      rotate: 0,
      duration: 2,
      delay: "-0.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-0.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".logo18", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-0.8",
      ease: "Expo.easeInOut",
    });

    const handleMouseMove = (e) => {
      const xmove = (e.clientX / window.innerWidth - 1) * 70;
      gsap.to(".imagesdiv .text", { x: `${xmove * 0.3}%` });
      gsap.to(".sky", { x: xmove });
      gsap.to(".bg", { x: xmove * 1.7 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10">
              <div className="logo flex gap-7">
                <div className="line flex flex-col gap-[5px]">
                  <div className="line w-15 h-2 bg-white"></div>
                  <div className="line w-8 h-2 bg-white"></div>
                  <div className="line w-5 h-2 bg-white"></div>
                </div>
                <h3 className="text-4xl -mt-[9px] leading-none text-white">
                  Vice Studio
                </h3>
              </div>
            </div>

            <div className="imagesdiv relative w-full h-screen overflow-hidden">
              <img
                className="sky absolute scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="bg absolute top-0 scale-[1.8] rotate-[-3deg] left-0 w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />
              <div className="text text-white flex flex-col gap-2 absolute top-10 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
                <h1 className="text-[9rem] leading-none -ml-30">grand</h1>
                <h1 className="text-[9rem] leading-none ml-10">theft</h1>
                <h1 className="text-[9rem] leading-none -ml-30">auto</h1>
              </div>
              <img
                className="character absolute -bottom-[150%] left-1/2 rotate-[-20deg] -translate-x-1/2 scale-[3]"
                src="./girlbg.png"
                alt=""
              />
              <img
                className="logo18 absolute w-[100px] h-[150px] left-[60%] top-[40%] scale-[3] rotate-[-20deg] "
                src="./logo18.png"
                alt=""
              />
            </div>

            <div className="btmbar text-white absolute w-full py-15 px-10 bg-gradient-to-t from-black to-transparent bottom-0 left-0">
              <div className="flex gap-4 items-center">
                <i className="text-4xl ri-arrow-down-line"></i>
                <button
                  onClick={() => {
                    const nextSection = document.querySelector(".next-section");
                    if (nextSection) {
                      nextSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-xl font-[Helvetica_Now_Display] hover:underline focus:outline-none"
                  aria-label="Scroll to next section"
                >
                  Scroll Down
                </button>
              </div>
              <img
                className="absolute top-1/2 left-1/2 -translate-x-1/2 h-[65px] -translate-y-1/2"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>

          <div className="next-section w-full h-screen flex items-center justify-center bg-black">
            <div className="cntnr flex w-full text-white h-[80%]">
              <div className="limg relative w-1/2 h-full">
                <img
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./imag.png"
                  alt=""
                />
              </div>
              <div className="rg w-[60%] py-10">
                <h1 className="text-7xl">Still Running,</h1>
                <h1 className="text-7xl">Not Hunting</h1>
                <p className="text-white font-[Helvetica_Now_Display] text-2xl mt-[40px]">
                  Step into the streets of Vice Bay.
                </p>
                <p className="text-white font-[Helvetica_Now_Display] text-2xl">
                  Chaos, color, and a controller—your city awaits.
                </p>
                <a
                  href="https://store.epicgames.com/en-US/p/grand-theft-auto-v"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download bg-yellow-500 px-10 py-7 text-black text-4xl mt-10 inline-block text-center"
                >
                  Download Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
