import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import demoLink from "../assets/demoLink.png";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link,
}) => {
  return (
    // <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    //   <Tilt
    //     options={{
    //       max: 45,
    //       scale: 1,
    //       speed: 450,
    //     }}
    //     className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    //   >
    <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full hover:scale-[105%] duration-300 transition-all hover:shadow-slate-100">
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <div
            onClick={() => window.open(demo_link, "_blank")}
            className="grey-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            {/* <VscLinkExternal /> */}
            <img
              src={demoLink}
              alt="demoLink"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 ">
        {tags?.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
      {/* </Tilt> */}
      {/* </motion.div> */}
    </div>
  );
};

const Works = () => {
  return (
    <>
      {/* <motion.div variants={textVariant()}> */}
      <div>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>
      {/* </motion.div> */}

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          At NewGen Analytics, I specialize in delivering innovative projects across various domains, including data science, artificial intelligence (AI), machine learning (ML), and web development. My expertise allows me to design and implement comprehensive solutions that address complex challenges, optimize processes, and enhance decision-making. Whether it’s developing predictive models, crafting intelligent algorithms, or building responsive web applications, I am committed to leveraging technology to drive impactful results for businesses.
          </p>
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");