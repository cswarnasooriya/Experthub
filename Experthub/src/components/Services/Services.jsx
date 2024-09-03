import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "App Development",
    icon: <FaCameraRetro className="text-4xl text-primary" />,
    link: "#",
    description:
      "App development is often challenging for beginners because learning the languages requires familiarity with advanced programming skills. This challenge is compounded by mobile programming languages being less versatile than some of their web development counterparts, making it difficult to rely on existing skills.",
    aosDelay: "0",
  },
  {
    name: "Web Designing",
    icon: <GiNotebook className="text-4xl text-primary" />,
    link: "#",
    description:
      "A web designer is responsible for creating the design and layout of a website or web pages. Unlike web developers, who specialise in creating new websites' structures and the code that forms these, web designers tend to focus on the visual aspects of a site, such as its layout and its usability.",
    aosDelay: "300",
  },
  {
    name: "Graphic Designing",
    icon: <SlNote className="text-4xl text-primary" />,
    link: "#",
    description:
      "Graphic designers create visual concepts, using computer software or by hand, to communicate ideas that inspire, inform, and captivate consumers. They develop the overall layout and production design for applications such as advertisements, brochures, magazines, and reports.",
    aosDelay: "500",
  },
  {
    name: "Digital Marketing",
    icon: <SlNote className="text-4xl text-primary" />,
    link: "#",
    description:
      "The scope of a digital marketer's role encompasses a wide range of digital media, including social media, search engines, email, content creation and online advertising. Their primary goal is to connect with target audiences, drive engagement and achieve business objectives through digital means.",
    aosDelay: "700",
  },
];
const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
            >
              Explore Our Best Services
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-md"
            >
              We are self-service data analytics software that lets you create
              visually.
            </p>
          </div>

          {/* services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{skill.icon}</div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <p className="text-gray-600 dark:text-gray-400 text-justify">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          {/* button */}
          <div
            data-aos="fade-up"
            data-aos-delay="1100"
            data-aos-offset="0"
            className="text-center mt-4 sm:mt-8"
          >
            <button className="primary-btn">More Interesting</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
