import React from "react";
import { Link } from "react-router-dom";
import Contact from "../../components/landingPages/Contact";
import aboutUsImg from "../../assets/images/landing-aboutus.jpg";
import WhyChooseUs from "../../components/common/WhyChooseUs";
import ReactPlayer from "react-player";
import { homeBannerVideo, whowearebh } from "../../constant";
import OurServices from "../../components/website/OurServices";
import EndlessOpportunitiesSection from "../../components/common/EndlessOpportunitiesSection";
import UnlockEfficiency from "../../components/common/UnlockEfficiency";

const Home = () => {
  return (
    <div className="backgroundstyle">
      <div id="banner" className="h-screen relative">
        <ReactPlayer
          url={homeBannerVideo}
          loop
          muted
          width="100%"
          height="100%"
          playsinline
          playing
          className="absolute"
        />
        <div className="bg-gradient-to-r to-black/90 from-transparent absolute w-full h-full"></div>
        <div className="pt-[3rem] wrapper flex items-center h-full">
          <div
            data-aos="fade-up"
            className="relative z-10 px-6 justify-center h-full text-white flex flex-col items-center gap-5 text-center md:max-w-[60rem] mx-auto"
          >
            <div className="rounded-text-box border-white/70 font-medium">
              IT Services
            </div>
            <h1 className="heading-1 ">
              Empowering Your Vision <br /> with Digital Innovation
            </h1>
            <p className="desc ">
              We provide innovative IT solutions designed to address the
              specific challenges of today's businesses.
            </p>
            <Link to="/contact-us" className="primary-btn mt-2">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <section className="py-[5rem] backgroundstyle text-white wrapper">
        <div
          data-aos="fade-left"
          className="gradient-rounded-text-box mx-auto "
        >
          About Us
        </div>
        <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-right" className="h-full">
            <img
              src={aboutUsImg}
              className="object-cover max-h-[16rem] sm:max-h-[32rem] rounded-xl h-full"
              alt="About SV Tech Wave"
            />
          </div>
          <div data-aos="fade-left" className="flex h-full flex-col gap-7">
            <div className="flex flex-col gap-7 text-center lg:text-start">
              <h2 className="heading-2">
                Empowering Businesses Through Technology.
              </h2>
              <p className="desc">
                <strong className="font-semibold">SV TECH WAVE</strong> is a
                leading digital solutions provider dedicated to transforming
                businesses with cutting-edge technology and innovation. We
                specialize in delivering custom solutions tailored to meet
                modern business challenges.
              </p>
              <div>
                <h3 className="text-xl font-medium mb-2">Our Mission</h3>
                <p className="desc">
                  To empower businesses by providing innovative and reliable
                  technology solutions, driving growth and success in a
                  competitive digital landscape.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Our Vision</h3>
                <p className="desc">
                  To be a trusted global leader in delivering transformative
                  digital experiences, shaping the future of technology with
                  creativity and excellence.
                </p>
              </div>
            </div>
            <div className="flex gap-5 mt-4 justify-center lg:justify-start">
              <Link to="/contact-us" className="primary-btn">
                Contact Us
              </Link>
              <Link to="/services" className="secondary-btn">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <OurServices length={6} />
      <section
        className="relative py-[5rem] bg-black text-white bg-no-repeat bg-current bg-cover"
        style={{ backgroundImage: `url(${whowearebh})` }}
      >
        <div className=" w-full h-full bg-black/50 absolute  top-0" />
        <div
          data-aos="fade-up"
          className="wrapper text-center flex flex-col gap-3"
        >
          <div className="gradient-rounded-text-box mx-auto mb-4 !text-white">
            Who We Are
          </div>
          <h1 className="heading-2  max-w-[50rem] mx-auto text-white bg-clip-text text-transparent">
            Reliable IT Support for Your Business
          </h1>
          <p className="desc max-w-[50rem] mx-auto text-white drop-shadow-2xl">
            At SV TECH WAVE, we understand that in today’s digital-first world,
            your website is more than just an online presence—it’s the heart of
            your brand’s identity, a vital business tool, and often the first
            touchpoint for potential customers. In an era where first
            impressions matter more than ever, having a well-designed, fast, and
            responsive website is crucial to your business success. That’s why
            our website development services go beyond the basics—we aim to
            deliver not just a website, but a complete digital experience that
            drives engagement, boosts conversions, and empowers your business to
            grow.
          </p>
        </div>
      </section>

      {/* <Faqs /> */}
      <WhyChooseUs />
      <UnlockEfficiency />
      {/* <EndlessOpportunitiesSection /> */}
      <Contact />
    </div>
  );
};

export default Home;
