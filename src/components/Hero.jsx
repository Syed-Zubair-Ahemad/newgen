import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import handWave from "../assets/waving.png";
import { Link } from "react-router-dom";
import { SiLinkedin, SiGithub } from "react-icons/si";
import cv from "../assets/mohammedsanaved.pdf";
import { MdDownload } from "react-icons/md";
import me from "../assets/imag01.png";
// import { main } from "../assets";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import CanvasLoader from "./Loader";
import { Suspense } from "react";
import { FaEnvelope } from "react-icons/fa";
import { logo } from "../assets";
// import { Download } from "lucide";
// import { hole } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-[100vh] mx-auto`}>
      {/* Video Background */}
      {/* <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-429px] h-full w-full left-0 z-[-1] object-cover hidden sm:block"
      >
        <source src={hole} type="video/webm" />
      </video> */}

      {/* Content */}
      <div
        className={`absolute inset-0 top-[50px] md:top-[60px] sm:top-[110px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex sm:justify-between sm:flex-row xl:flex-row flex-col-reverse gap-10 items-center'>
          <div>
            <span className={`${styles.heroHeadText} text-white`}>
              <img src={handWave} alt='wave' className='w-[60px]' />
              <span className='text-[#56ccf2] text-shadow-lg'>
                NewGen
                <br className='sm:block hidden' /> Analytics
              </span>
            </span>
            <div className='text-3xl mt-3 flex gap-3'>
              <Link
                to={"https://www.linkedin.com/company/newgen-analytics/"}
                className='hover:scale-105 hover:translate-y-[-4px] transition-all duration-300 text-[#56ccf2] text-shadow-lg'>
                <SiLinkedin />
              </Link>
              <Link
                to={"mailto:mailnewgenanalytics0@gmail.com"} // Fix the mailto link
                className='flex items-center hover:scale-105 hover:translate-y-[-4px] transition-all duration-300 text-[#56ccf2] text-shadow-lg'
              >
                <FaEnvelope className="mr-2" /> {/* Email logo */}
              </Link>
              
            </div>
            <p className={`${styles.heroSubText} mt-2 text-[#915EFF]`}>
              Unleashing the
              <span className='font-extrabold tracking-wider bg-subHero'>
                <br className='md:block' />
                Power of Data Analysis
              </span>
              <br className='sm:block hidden' />
              <p>
                Transforming Data into Actionable Insights for Your Success from
                <span className='font-bold'> INDIA </span>
              </p>
            </p>
          </div>
          <Suspense fallback={<CanvasLoader />}>
            <motion.div
              variants={slideIn("right", "tween", 0.2, 1)}
              className=''>
              <img src={logo} alt='me' className='bg-cover w-[90%] ani' />
            </motion.div>
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "/");
