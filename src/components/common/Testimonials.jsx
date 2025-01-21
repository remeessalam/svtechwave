import React from "react";
import { useKeenSlider } from "keen-slider/react";
import profileImg1 from "../../assets/images/profileimg-1.png";
import profileImg2 from "../../assets/images/profileimg-1.jpg";
// import profileImg2 from "../../assets/images/profileimg-2.png";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";

const reviews = [
  {
    id: 1,
    title: "Development of Artificial Intelligence",
    desc: "SVTECHWAVE changed our business using its cut AI solution. Their team not only understood our needs, but also provided customized AI systems that significantly improved our customer experience and operational efficiency. The results speak for themselves – we saw significant increases in productivity and customer satisfaction.",
    name: "John Smith",
    role: "CEO, XYZ Company",
    profileImg: profileImg2,
  },
  {
    id: 2,
    title: "Web Development (Full Stack)",
    desc: "Working with SVTECHWAVE for our complete web development was the game election. From the initial design to the final implementation, they delivered a robust, scalable and visually fantastic site that perfectly represents our brand. Their team was communicative and went beyond to ensure that everything met our needs.",
    name: "Emily Roberts",
    role: "Marketing Director, ABC Ltd.",
    profileImg: profileImg2,
  },
  {
    id: 3,
    title: "Mobile Application Development",
    desc: "The mobile application developed by SVTECHWAVE exceeded our expectations. Their team understood our goals and created an intuitive, feature-rich application that improved our customer engagement and streamlined operations. We have received great feedback from our users, and the app has become a key tool for our business.",
    name: "Mark Thompson",
    role: "Chief Technology Officer, Ecom Enterprises",
    profileImg: profileImg2,
  },
  {
    id: 4,
    title: "Custom Software Development",
    desc: "SVTECHWAVE provided a custom software solution that perfectly fit our business model. The application they developed simplified our internal processes and increased efficiency and accuracy. They were flexible and responsive to our changing needs throughout the project. We are very pleased with the results.",
    name: "Sarah Lee",
    role: "Chief Operating Officer, Tech Solutions Inc.",
    profileImg: profileImg2,
  },
  {
    id: 5,
    title: "Cloud Computing Services",
    desc: "SVTECHWAVE’s cloud computing services helped us seamlessly migrate our operations to the cloud, improving both flexibility and cost-efficiency. Their team provided expert guidance throughout the process to ensure the slightest interruption and maximum benefits. With the growth of the business, we can easily expand our resources now.",
    name: "David Miller",
    role: "IT Director, Global Logistics",
    profileImg: profileImg1,
  },
  {
    id: 6,
    title: "User Experience/User Interface Design",
    desc: "SVTECHWAVE has transformed the user experience of our platform with their outstanding UX/UI design services. Their team worked closely with us to understand our users' needs and delivered a beautiful, user-friendly interface that significantly increased engagement and user retention. We couldn’t have asked for a better partner.",
    name: "Anna Williams",
    role: "Product Manager, Fintech Innovations",
    profileImg: profileImg2,
  },
  {
    id: 7,
    title: "Chatbot Development",
    desc: "The chatbot developed by SVTECHWAVE is a game changer for our customer service operations. It’s intuitive, responsive, and has helped reduce our customer service workload by efficiently handling common queries. Our customers love the immediate support it provides, and it has improved our overall service quality.",
    name: "Lucas Green",
    role: "Head of Customer Support, Retail Dynamics",
    profileImg: profileImg2,
  },
  {
    id: 8,
    title: "Development of IoT (IoT)",
    desc: "The development service of SVTECHWAVE IoT allows us to introduce efficient intelligent system factory production systems. Integration of IoT sensors and data analysis has led to greater operating efficiency, real-time monitoring and expected maintenance functions. This is a huge leap forward for our company.",
    name: "Carlos Sanchez",
    role: "Operations Manager, Smart Manufacturing Co.",
    profileImg: profileImg2,
  },
  {
    id: 9,
    title: "Data Analytics and Business Intelligence",
    desc: "SVTECHWAVE's data analytics and business intelligence services give us the insights we need to optimize our marketing strategies and improve decision-making. Their team not only helped us analyze historical data, but also implemented predictive analytics that drive our future strategy. Their expertise has truly unleashed the power of our data.",
    name: "Olivia Harris",
    role: "Director of Strategy, Market Insights Group",
    profileImg: profileImg2,
  },
];

const Testimonials = () => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 2,
        spacing: 20,
      },
      breakpoints: {
        "(max-width: 1024px)": {
          slides: {
            perView: 1,
            spacing: 20,
          },
        },
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  // Button click handler
  const handleNextClick = () => {
    if (instanceRef.current) {
      instanceRef.current.next(); // Move to the next slide
    }
  };

  const handlePrevClick = () => {
    if (instanceRef.current) {
      instanceRef.current.prev(); // Move to the prev slide
    }
  };
  return (
    <div className="py-[5rem] bg-backgroundcolor">
      <div className="wrapper flex flex-col items-center gap-7">
        <div className="gradient-rounded-text-box" data-aos="fade-up">
          Testimonials
        </div>
        <h2
          className="heading-2 text-black mb-2 text-center"
          data-aos="fade-up"
        >
          Our Clients' Experiences
        </h2>
        <div ref={sliderRef} className="keen-slider" data-aos="fade-up">
          {reviews.map((item) => (
            <div
              key={item.id}
              className="keen-slider__slide min-h-[18rem] justify-between text-white p-7 bg-primary rounded-xl flex flex-col gap-4"
            >
              <p className="italic desc">{item.desc}</p>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <img
                    src={item.profileImg}
                    alt={item.name}
                    className="h-[2rem] w-[2rem] rounded-full object-cover"
                  />
                  <div className="flex flex-col h-full">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          data-aos="fade-up"
          className="flex justify-center items-center gap-10 mt-2"
        >
          <button
            className="text-primary text-5xl hover:text-primary/70 transition-all duration-200"
            onClick={handlePrevClick}
            aria-label="Previous slide"
          >
            <IoArrowBackCircleOutline />
          </button>
          <button
            className="text-primary text-5xl hover:text-primary/70 transition-all duration-200"
            onClick={handleNextClick}
            aria-label="Next slide"
          >
            <IoArrowForwardCircleOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
