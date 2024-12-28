import React from "react";
import {
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
  features,
  whyChooseUsContent,
} from "../../constant";
import UnlockEfficiency from "../../components/common/UnlockEfficiency";
import OurServices from "../../components/website/OurServices";
import Testimonials from "../../components/common/Testimonials";

const AboutUs = () => {
  return (
    <>
      <div
        data-aos="fade-down"
        className="h-[40vh] sm:h-[55vh] md:h-[70vh] relative backgroundstyle"
      >
        <img
          src={aboutUsBanner}
          className="object-cover object-[100%_35%] h-full w-full"
          alt=""
        />
      </div>
      <div className="py-[5rem] text-white text-center backgroundstyle">
        <div className="wrapper flex flex-col items-center gap-5 mb-[5rem]">
          <div data-aos="fade-up" className="gradient-rounded-text-box">
            About Us
          </div>
          <h2 data-aos="fade-up" className="heading-2">
            Magic Behind Our IT Solutions
          </h2>
          <p data-aos="fade-up" className="desc max-w-[50rem]">
            We are a forward -looking technology company that is required to
            provide cutting -edge solutions in software development, artificial
            intelligence, Internet of Things and other aspects.
            <br />
            <br />
            Focusing on innovation, we have collaborated with customers to
            create customized solutions to solve challenges in the real world.
            Our team of experts has extensive experience in cloud computing,
            mobile application development, and data analytics to ensure your
            business stays ahead of the competition.
          </p>
          <div className="min-h-screen  py-20 px-4 sm:px-6 lg:px-8">
            <div className="wrapper">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Transforming Ideas into Intelligence
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Discover how our AI solutions can revolutionize your business
                  with cutting-edge technology and innovative approaches.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group bg-primary hover:bg-primary/40 relative  rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10 ">
                      <span className="text-4xl mb-6 block">
                        {feature.icon}
                      </span>

                      <h3 className="text-xl font-semibold group-hover:text-gray-900 text-gray-100 mb-4">
                        {feature.title}
                      </h3>

                      <p className="text-gray-200 group-hover:text-gray-900 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-300 group-hover:w-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* <div className="pt-[3rem]">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col-reverse sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div
                  data-aos="fade-right"
                  className="rounded-xl p-5 bg-gradient-to-r from-primary/60 to-primary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Innovation at Heart
                  </h6>
                  <p className="desc mt-2">
                    At SV TECH WAVE, innovation is our driving force. We
                    constantly explore emerging technologies and trends to
                    create future-ready solutions that push the boundaries of
                    what’s possible. We aim to deliver solutions that not only
                    solve today’s challenges but anticipate the needs of
                    tomorrow.
                  </p>
                </div>
                <div data-aos="fade-left" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg1}
                    alt="Innovation at Heart"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div data-aos="fade-right" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg2}
                    alt="Client-Centric Approach"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
                <div
                  data-aos="fade-left"
                  className="rounded-xl p-5 bg-gradient-to-r from-secondary/60 to-secondary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Client-Centric Approach
                  </h6>
                  <p className="desc mt-2">
                    We understand that every business is unique, and so are its
                    challenges and goals. We take a highly personalized
                    approach, tailoring each project to align perfectly with
                    your specific needs. From startups to enterprises, we work
                    closely with our clients, building long-term partnerships
                    grounded in trust, transparency, and mutual success.
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse sm:grid text-start grid-cols-2 gap-10 sm:gap-5 max-w-5xl mx-auto">
                <div
                  data-aos="fade-right"
                  className="rounded-xl p-5 bg-gradient-to-r from-primary/60 to-primary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Commitment to Excellence
                  </h6>
                  <p className="desc mt-2">
                    Quality and reliability are at the core of everything we do.
                    We pride ourselves on delivering world-class digital
                    products that are robust, scalable, and secure. Every
                    project undergoes rigorous quality assurance, ensuring that
                    we exceed expectations and industry standards at every turn.
                  </p>
                </div>
                <div data-aos="fade-left" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg3}
                    alt="Commitment to Excellence"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div data-aos="fade-right" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg4}
                    alt="Innovation with Purpose"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
                <div
                  data-aos="fade-left"
                  className="rounded-xl p-5 bg-gradient-to-r from-secondary/60 to-secondary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Innovation with Purpose
                  </h6>
                  <p className="desc mt-2">
                    Technology without purpose is meaningless. At SV TECH WAVE,
                    we believe in leveraging technology to create meaningful
                    impact—whether it’s streamlining processes, enhancing
                    customer experiences, or driving growth. Our solutions are
                    designed to transform businesses, help them scale, and lead
                    in their industries.
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div
                  data-aos="fade-right"
                  className="rounded-xl p-5 bg-gradient-to-r from-primary/60 to-primary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    End to End Solutions
                  </h6>
                  <p className="desc mt-2">
                    We offer a complete suite of services, providing holistic
                    support from concept to deployment and beyond. Our goal is
                    to be your trusted partner throughout your entire digital
                    journey—whether it’s building your online presence,
                    automating your operations, or creating immersive
                    experiences for your customers.
                  </p>
                </div>
                <div data-aos="fade-left" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg5}
                    alt="End to End Solutions"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <UnlockEfficiency />
        {/* <div className="wrapper mt-[5rem]">
          <h2 data-aos="fade-up" className="heading-2">
            Why Choose SV TECH WAVE?
          </h2>
          <ul className="mt-[2rem] flex flex-col gap-3 list-disc list-outside text-start">
            {whyChooseUsContent.map((item) => (
              <li data-aos="fade-up" key={item.id} className="text-[#CF00FE]">
                <span className="font-raleway font-bold">{item.title}:</span>{" "}
                <span className="desc text-black ml-1">{item.desc}</span>
              </li>
            ))}
          </ul>
        </div> */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-backgroundcolor">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 data-aos="fade-up" className="heading-2">
                Why Choose SV TECH WAVE?
              </h2>
              {/* <div className="w-20 h-1 bg-purple-600 mx-auto" /> */}
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {whyChooseUsContent.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 hover:scale-105 transition-all duration-300 bg-primary rounded-lg border border-gray-200 hover:border-slate-500 "
                >
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <OurServices length={3} />
      <Testimonials />
    </>
  );
};

export default AboutUs;
