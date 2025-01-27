import logoImg from "./assets/images/logo/logo.png";
import whyChooseUsIcon1 from "./assets/images/ph_target-light.png";
import whyChooseUsIcon2 from "./assets/images/mage_light-bulb.png";
import whyChooseUsIcon3 from "./assets/images/tdesign_user-talk.png";
import whyChooseUsIcon4 from "./assets/images/healthicons_ui-secure-outline.png";
import whyChooseUsPng from "./assets/images/whychooseus-png.jpg";
import whyChooseUsPng1 from "./assets/images/whychooseus-png1.jpg";
import contactbg from "./assets/images/contactbg.jpg";
import whowearebh from "./assets/images/whowearebh.jpg";
import faqPng from "./assets/images/faq-character.png";
import appDevBanner from "./assets/images/app-dev-banner.jpg";
import webDevBanner from "./assets/images/web-landing-banner.jpg";
import webLandingAbout from "./assets/images/web-landing-about1.png";
import appLandingAbout from "./assets/images/app-landing-about.png";
import endlessOpportunitiesImg1 from "./assets/images/section-8-img-1.png";
import endlessOpportunitiesImg2 from "./assets/images/section-8-img-2.png";
import endlessOpportunitiesImg3 from "./assets/images/section-8-img-3.png";
import homeBannerVideo from "./assets/videos/home-banner.mp4";
import defaultBanner from "./assets/images/banner.jpg";
import aboutUsBanner from "./assets/images/about-us-banner.jpg";
import aboutUsGridImg1 from "./assets/images/aboutus-png1.png";
import aboutUsGridImg2 from "./assets/images/aboutus-png2.png";
import aboutUsGridImg3 from "./assets/images/aboutus-png3.png";
import aboutUsGridImg4 from "./assets/images/aboutus-png4.png";
import aboutUsGridImg5 from "./assets/images/aboutus-png5.png";
//services images

import uiux from "./assets/images/services/uiux.png";
import uiux1 from "./assets/images/services/uiux.jpg";
import chat from "./assets/images/services/chat.png";
import chat1 from "./assets/images/services/chat.jpg";
import iot from "./assets/images/services/iot.png";
import iot1 from "./assets/images/services/iot.jpg";
import ai from "./assets/images/services/ai.png";
import ai1 from "./assets/images/services/ai.jpg";
import cloud from "./assets/images/services/cloud.png";
import cloud1 from "./assets/images/services/cloud.jpg";
import web from "./assets/images/services/web.png";
import web1 from "./assets/images/services/web.jpg";
import app from "./assets/images/services/app.png";
import app1 from "./assets/images/services/app.jpg";
import custom from "./assets/images/services/custome.png";
import custom1 from "./assets/images/services/custome.jpg";
import data from "./assets/images/services/data.png";
import data1 from "./assets/images/services/data.jpg";
import { lazy } from "react";
import {
  FaApple,
  FaBitcoin,
  FaFigma,
  FaGamepad,
  FaGlobe,
  FaGooglePlay,
} from "react-icons/fa";
const Home = lazy(() => import("./pages/website/Home"));
const Services = lazy(() => import("./pages/website/Services"));
const ContactUs = lazy(() => import("./pages/website/ContactUs"));
const AboutUs = lazy(() => import("./pages/website/AboutUs"));

export {
  whowearebh,
  logoImg,
  contactbg,
  whyChooseUsPng,
  whyChooseUsIcon1,
  whyChooseUsIcon2,
  whyChooseUsIcon3,
  whyChooseUsIcon4,
  faqPng,
  appDevBanner,
  webDevBanner,
  webLandingAbout,
  appLandingAbout,
  endlessOpportunitiesImg1,
  endlessOpportunitiesImg2,
  endlessOpportunitiesImg3,
  homeBannerVideo,
  defaultBanner,
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
  whyChooseUsPng1,
  web1,
  app1,
};

// company details
export const companyDetails = {
  phone: "+91-9505066888",
  whatsapp: "+91-9505066888",
  email: "info@svtechwave.com",
  address: "#3-72-1,FIRST FLOOR,DGB STREET,KKD,ANDHRAPRADESH,IN",
  twitter: "https://x.com/svtechwave?s=11",
  linkedin: "https://www.linkedin.com/company/sv-techwave/",
  instagram: "https://www.instagram.com/svtechwave?igsh=MXBqYzNtajB5b2pkNw==",
  // instagram:
  //   "https://www.instagram.com/sv_techwave?utm_source=qr&igsh=MXBqYzNtajB5b2pkNw==",
  whatsapplink: "https://wa.me/message/AXVFTIFOAN7SC1",
  facebook: "https://www.facebook.com/share/15deTefCas/",
};

// website routes
export const routes = [
  {
    name: "Home",
    path: "/",
    component: <Home />,
  },
  {
    name: "Services",
    path: "/services",
    component: <Services />,
  },
  {
    name: "About Us",
    path: "/about-us",
    component: <AboutUs />,
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    component: <ContactUs />,
  },
  {
    name: "Blogs",
    path: "https://svtechwave.blogspot.com/",
    // component: <ContactUs />,
  },
];

export const faqs = [
  {
    id: 1,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 2,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 3,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 4,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 5,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerence Websites",
    icon: require("./assets/images/icons/online-shopping.png"),
    description:
      "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth. ",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: require("./assets/images/icons/socialmedia.png"),
    description:
      "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: require("./assets/images/icons/landing-page.png"),
    description:
      " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: require("./assets/images/icons/software-development.png"),
    description:
      "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: require("./assets/images/icons/ios-development.png"),
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: require("./assets/images/icons/android-development.png"),
    description:
      "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: require("./assets/images/icons/flutter-development.png"),
    description:
      "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: require("./assets/images/icons/hybrid-app-development.png"),
    description:
      "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// all services
export const allServices = [
  {
    icon: uiux,
    img: uiux1,
    id: 1,
    title: "User Experience/User Interface Design",
    desc: "At SVTECHWAVE, we design intuitive UI/UX solutions for digital products, enhancing user experiences while achieving business goals.",
    detailContent:
      "At SVTECHWAVE, we prioritize creating user interfaces that not only look great but also offer a seamless and engaging user experience. Our design process begins with a deep understanding of user behaviors and expectations, ensuring every element aligns with their needs. We leverage cutting-edge tools and methodologies to design intuitive, responsive, and accessible interfaces.\n\nOur UI/UX design services extend across websites, mobile apps, and custom software, focusing on crafting experiences that captivate users and deliver measurable results. Whether it's designing a sleek e-commerce platform or a data-rich enterprise dashboard, our team ensures a perfect blend of aesthetics and functionality. By integrating user feedback into our iterative design process, we create products that not only meet but exceed user expectations, enhancing satisfaction and driving business growth.\n\nIn addition, our expertise in responsive design ensures your digital products perform optimally across devices and screen sizes. From wireframing and prototyping to final deployment, we prioritize collaboration and innovation, ensuring your brand's identity is reflected in every pixel.",
  },
  {
    icon: chat,
    img: chat1,
    id: 2,
    title: "Chatbot Development",
    desc: "We build intelligent chatbots to enhance customer interactions, automate tasks, and ensure seamless communication.",
    detailContent:
      "In today’s fast-paced digital landscape, businesses are continually seeking innovative ways to enhance customer engagement and streamline operations. At SVTECHWAVE, we recognize the transformative potential of chatbot technology. Our chatbot development services empower organizations to leverage artificial intelligence to deliver real-time, personalized interactions that improve customer satisfaction while optimizing resource allocation.\n\nChatbots are sophisticated programs designed to simulate conversation with users. They can operate on various platforms, including websites, mobile apps, and social media channels, providing customers with immediate responses to their inquiries. This instant accessibility significantly enhances the user experience, allowing businesses to engage with their audience 24/7 without the constraints of traditional customer service hours. With chatbots, customers can obtain information, place orders, and receive support at any time, eliminating the frustration of long wait times and enhancing overall satisfaction.\n\nOne of the key benefits of implementing chatbots is their ability to handle a multitude of inquiries simultaneously. Unlike human agents, who can only assist one customer at a time, chatbots can interact with countless users concurrently. This scalability is particularly advantageous for businesses during peak times or promotional events when customer inquiries often surge. By automating routine tasks and frequently asked questions, chatbots free up human agents to focus on more complex issues, ultimately improving efficiency across the organization.",
  },
  {
    icon: iot,
    img: iot1,
    id: 3,
    title: "IoT Solutions",
    desc: "Transform businesses with IoT solutions, connecting physical devices to digital systems for real-time insights and innovation.",
    detailContent:
      "At SVTECHWAVE, we are driving the revolution of connected ecosystems through cutting-edge IoT solutions. Our expertise lies in seamlessly integrating physical devices with digital systems, enabling businesses to unlock real-time data insights and make intelligent decisions. Whether it's smart factories, connected healthcare systems, or IoT-enabled consumer products, we design solutions tailored to meet the unique needs of our clients.\n\nIoT technology empowers businesses to monitor operations remotely, automate processes, and proactively address issues before they escalate. By collecting and analyzing vast amounts of data from interconnected devices, businesses can optimize workflows, reduce costs, and enhance customer experiences. Our IoT services also include advanced security measures to protect your connected systems from vulnerabilities, ensuring seamless and secure operations.\n\nFurthermore, we assist businesses in leveraging IoT for predictive maintenance, energy management, and supply chain optimization. With our end-to-end solutions, your organization can transform its operations into a smart, efficient, and connected ecosystem.",
  },
  {
    icon: ai,
    img: ai1,
    id: 4,
    title: "Artificial Intelligence Development",
    desc: "Innovative AI development services to automate tasks, enhance decision-making, and transform business operations.",
    detailContent:
      "At SVTECHWAVE, our Artificial Intelligence (AI) development services focus on delivering groundbreaking solutions that transform businesses across industries. From predictive analytics and computer vision to natural language processing, our AI-powered solutions enable businesses to automate complex processes, uncover new opportunities, and improve operational efficiency.\n\nWith AI, businesses can process vast amounts of data quickly, enabling real-time decision-making that was once impossible. Our tailored AI solutions cater to industries such as healthcare, finance, retail, and manufacturing, addressing unique challenges with precision. By integrating AI into your operations, we help you reduce costs, improve customer satisfaction, and gain a competitive edge in today’s data-driven world.\n\nIn addition, our AI expertise extends to developing intelligent recommendation systems, fraud detection tools, and advanced customer sentiment analysis. These capabilities empower businesses to personalize their services and improve operational accuracy, ensuring sustainable growth and innovation.",
  },
  {
    icon: cloud,
    img: cloud1,
    id: 5,
    title: "Cloud Computing Services",
    desc: "Comprehensive cloud computing solutions for scalability, flexibility, and operational optimization tailored to your needs.",
    detailContent:
      "Cloud computing has become a cornerstone of modern business operations, and at SVTECHWAVE, we specialize in providing scalable and secure cloud solutions tailored to your unique needs. Whether you're migrating legacy systems to the cloud, optimizing your infrastructure, or adopting multi-cloud strategies, we ensure a seamless transition and robust performance.\n\nOur cloud services empower businesses with flexibility, enabling them to scale resources up or down based on demand. This agility translates to cost savings, enhanced collaboration, and faster time-to-market for new products. Additionally, we prioritize security and compliance, implementing advanced measures to protect your data and maintain regulatory standards. With our cloud expertise, your organization can unlock the full potential of digital transformation.\n\nWe also offer disaster recovery planning, data storage optimization, and cloud-native application development to ensure your business remains resilient, innovative, and future-proof.",
  },
  {
    icon: web,
    img: web1,
    id: 6,
    title: "Web Development (Full Stack)",
    desc: "End-to-end full-stack web development for dynamic, high-performance websites and web applications.",
    detailContent:
      "At SVTECHWAVE, we excel in delivering comprehensive full-stack web development services that cover every aspect of the development process. Our team of skilled developers works on both the front-end and back-end, creating web applications that are not only visually appealing but also robust and scalable.\n\nOur development process involves using the latest frameworks and technologies to ensure optimal performance and responsiveness. Whether it's a sleek single-page application or a complex enterprise solution, we tailor our services to meet your business objectives. From conceptualization to deployment, our expertise ensures that your website or application delivers an exceptional user experience and drives measurable results.\n\nAdditionally, we specialize in creating API-driven architectures, progressive web apps, and feature-rich e-commerce platforms. These solutions provide enhanced functionality and ensure that your digital presence remains competitive and innovative.",
  },
  {
    icon: app,
    img: app1,
    id: 7,
    title: "Mobile App Development",
    desc: "Custom mobile apps that are user-centric, feature-rich, and scalable for iOS, Android, or cross-platform solutions.",
    detailContent:
      "SVTECHWAVE offers end-to-end mobile app development services that focus on delivering feature-rich and user-friendly applications for various platforms, including iOS, Android, and cross-platform solutions. Our process begins with understanding your business goals and user needs to design apps that are not only visually appealing but also highly functional.\n\nWe leverage the latest development frameworks and technologies to build apps that are secure, scalable, and easy to maintain. Whether you're looking to launch a consumer-facing app or an internal enterprise solution, our team ensures that the final product enhances user engagement and achieves your strategic objectives. From prototyping to post-launch support, we are with you every step of the way.\n\nOur expertise also includes integrating advanced features such as AI-driven chat, push notifications, and seamless payment gateways. These additions ensure that your app delivers a superior user experience and stands out in competitive markets.",
  },
  {
    icon: custom,
    img: custom1,
    id: 8,
    title: "Custom Software Development",
    desc: "Tailored software solutions to address unique business challenges and drive innovation with scalability and high performance.",
    detailContent:
      "At SVTECHWAVE, we understand that every business is unique, which is why we offer custom software development services tailored to your specific needs. Our expertise spans various industries, enabling us to create solutions that address complex challenges, improve efficiency, and unlock new growth opportunities.\n\nOur development process involves close collaboration with your team to understand your goals and translate them into a scalable, high-performance software solution. Whether it's an ERP system, a customer-facing portal, or a proprietary application, we ensure that the final product aligns with your operational requirements and delivers measurable value.\n\nIn addition, we incorporate advanced technologies such as AI, blockchain, and IoT to develop innovative software solutions. These integrations enable businesses to stay ahead of the curve and adapt to evolving market demands.",
  },
  {
    icon: data,
    img: data1,
    id: 9,
    title: "Data Analytics & Business Intelligence",
    desc: "Advanced data analytics and BI solutions to uncover insights, optimize processes, and drive data-informed decision-making.",
    detailContent:
      "In a data-driven world, making sense of vast amounts of information is crucial for success. At SVTECHWAVE, our data analytics and business intelligence services are designed to transform raw data into actionable insights that empower informed decision-making.\n\nWe utilize advanced analytical frameworks and cutting-edge tools to uncover patterns, trends, and opportunities hidden within your data. Whether it's predictive modeling, performance monitoring, or customer segmentation, our solutions help businesses optimize processes and improve outcomes. With our BI dashboards and reporting tools, decision-makers gain real-time access to critical information, fostering agility and innovation across the organization.\n\nAdditionally, we specialize in big data solutions, machine learning models, and automated reporting systems. These enhancements enable businesses to harness the full power of their data, driving growth and achieving long-term success.",
  },
];

export const Servicess = [
  {
    id: 1,
    title: "Web Development",
    desc: "Your website is the digital face of your business. SV TECH WAVE, we specialize in crafting dynamic and responsive websites that drive digital transformation.",
    detailContent:
      "In the digital age, your website serves as the cornerstone of your business's online presence and often acts as the first point of interaction between you and your potential customers. As the face of your brand, your website plays a pivotal role in shaping perceptions, building trust, and driving conversions. SV TECH WAVE, we understand the significance of having a well-designed website that not only showcases your products or services but also aligns with your business goals and engages your audience effectively. \n\n Our expertise lies in developing websites that are responsive, scalable, and secure, ensuring exceptional performance across all devices and platforms. In a world where users access websites from a variety of devices—ranging from desktops and laptops to tablets and smartphones—having a responsive design is crucial. This adaptability enhances user experience by providing a consistent interface regardless of the device being used, which is essential in retaining visitors and encouraging them to explore further.\n\nSV TECH WAVE, we tailor each web development project to meet the specific goals and needs of our clients. We recognize that every business is unique, and therefore, a one-size-fits-all approach simply won’t suffice. Whether you require a corporate website that effectively communicates your brand values or a dynamic web application that offers interactive features, our team collaborates closely with you to understand your vision. By leveraging our technical expertise and industry insights, we craft customized solutions that resonate with your target audience.",
  },
  {
    id: 2,
    title: "Mobile App Development",
    desc: "Achieve Mobile Supremacy through Custom App Development Solutions that Combine User- Centric Design, Seamless Functionality, and Sustainable Business Growth.",
    detailContent:
      "In today’s fast-paced digital landscape, mobile applications have become integral to how businesses interact with their customers and streamline their operations. Mobile app development is more than just creating an application; it is about crafting an engaging experience that enhances user interaction and drives business success. SV TECH WAVE, we specialize in developing high-performance mobile applications that cater to both Android and iOS platforms, ensuring that your business remains accessible and relevant in a mobile-driven world. \n\n The importance of mobile applications cannot be overstated. With a significant portion of internet traffic now coming from mobile devices, businesses must adapt to this shift by providing their services through easily accessible mobile applications. A well-designed app can significantly enhance user engagement, offering a seamless experience that keeps customers returning. This shift towards mobile solutions is not just a trend; it represents a fundamental change in consumer behavior, with users expecting businesses to meet them where they are—on their smartphones and tablets. \n\n SV TECH WAVE, our mobile app development process begins with understanding your specific needs and objectives. We believe that every business is unique, and a cookie-cutter approach will not yield the desired results. Our team conducts thorough market research and user analysis to comprehend your target audience's preferences and behaviors. This deep understanding allows us to design applications that resonate with users, making their interactions with your brand more meaningful and effective.",
  },
  {
    id: 3,
    title: "UI/UX",
    desc: "Create engaging user experiences with our expert UX/UI design services. We understand that a well-designed interface is crucial for user satisfaction and engagement.",
    detailContent:
      "In the realm of digital products, the importance of user experience (UX) and user interface (UI) design cannot be overstated. SV TECH WAVE, we understand that a well-crafted UI/UX is essential for creating engaging, intuitive, and efficient applications and websites that resonate with users. In an age where digital interactions define brand loyalty and customer satisfaction, investing in top-notch UI/UX design is not merely an option; it is a necessity for businesses looking to thrive in a competitive marketplace.\n\nUser experience encompasses all aspects of a user's interaction with a product, including the design, usability, accessibility, and overall satisfaction derived from that interaction. The goal of UX design is to create a seamless and enjoyable experience that meets users' needs and expectations. Our UX team conducts thorough research, including user interviews and surveys, to gain insights into user behavior, preferences, and pain points. By understanding the motivations and challenges faced by users, we are able to create solutions that enhance usability and foster positive interactions with your brand.\n\nConversely, user interface design focuses on the aesthetics and functionality of the product's interface. This includes everything from the layout and visual elements to the navigation and interactive features. A well-designed UI should not only be visually appealing but also intuitive, guiding users through the application or website in a logical manner. SV TECH WAVE, our design team combines creativity with a deep understanding of user behavior to craft interfaces that are not only attractive but also enhance usability and engagement.",
  },
  {
    id: 4,
    title: "Chatbots",
    desc: "Chatbots to Re-define Customer Interaction, Drive Revenue, and Future-Proof Your Business.",
    detailContent:
      "In today’s fast-paced digital landscape, businesses are continually seeking innovative ways to enhance customer engagement and streamline operations. SV TECH WAVE, we recognize the transformative potential of chatbot technology. Our chatbot development services empower organizations to leverage artificial intelligence to deliver real-time, personalized interactions that improve customer satisfaction while optimizing resource allocation.\n\nChatbots are sophisticated programs designed to simulate conversation with users. They can operate on various platforms, including websites, mobile apps, and social media channels, providing customers with immediate responses to their inquiries. This instant accessibility significantly enhances the user experience, allowing businesses to engage with their audience 24/7 without the constraints of traditional customer service hours. With chatbots, customers can obtain information, place orders, and receive support at any time, eliminating the frustration of long wait times and enhancing overall satisfaction.\n\nOne of the key benefits of implementing chatbots is their ability to handle a multitude of inquiries simultaneously. Unlike human agents, who can only assist one customer at a time, chatbots can interact with countless users concurrently. This scalability is particularly advantageous for businesses during peak times or promotional events when customer inquiries often surge. By automating routine tasks and frequently asked questions, chatbots free up human agents to focus on more complex issues, ultimately improving efficiency across the organization.",
  },
  {
    id: 5,
    title: "Machine Learning Solutions",
    desc: "Harness the transformative power of AI and machine learning with our advanced solutions. We develop intelligent systems that automate processes.",
    detailContent:
      "In an era where data is often referred to as the new oil, businesses are increasingly recognizing the transformative potential of machine learning (ML) solutions. SV TECH WAVE, we specialize in harnessing the power of machine learning to help organizations turn vast amounts of data into actionable insights, enabling them to make informed decisions and stay competitive in a rapidly evolving landscape.\n\nMachine learning is a subset of artificial intelligence that empowers systems to learn from data, identify patterns, and make predictions without being explicitly programmed for specific tasks. This capability is particularly valuable in today’s data-driven world, where businesses generate an overwhelming amount of information daily. By utilizing machine learning algorithms, organizations can automate data analysis, uncover hidden trends, and derive insights that drive strategic decision-making.\n\nSV TECH WAVE, our approach to machine learning begins with a comprehensive understanding of your business objectives and the specific challenges you face. We collaborate with you to identify the key data sources and develop tailored ML models that align with your strategic goals. This personalized approach ensures that the solutions we create are not only effective but also practical and relevant to your unique context.",
  },
  {
    id: 6,
    title: "Game Development",
    desc: "SV TECH WAVE, we specialize in game development, creating immersive and enjoyable gaming experiences.",
    detailContent:
      "Game development is an exciting and rapidly evolving field that blends creativity, technology, and storytelling to create immersive experiences for players. SV TECH WAVE, we understand the intricacies of game development and are passionate about bringing innovative gaming ideas to life. Our dedicated team of developers, designers, and artists work collaboratively to craft visually stunning, engaging, and interactive games that captivate audiences across various platforms.\n\n The game development process SV TECH WAVE begins with a comprehensive understanding of the client’s vision and target audience. We believe that successful games are built on solid concepts and engaging narratives. Our team collaborates closely with clients to brainstorm ideas, develop storylines, and create game mechanics that resonate with players. This collaborative approach ensures that the final product aligns with the client’s objectives while providing a rich and enjoyable experience for users.\n\n Once the concept is defined, our team moves into the design phase, where we focus on creating visually appealing graphics and user-friendly interfaces. Our artists employ cutting-edge design tools to create stunning visuals that draw players into the game world. Whether it’s character design, environment creation, or animation, we pay meticulous attention to detail to ensure that every element enhances the overall gaming experience. We also prioritize usability in our UI/UX design, making sure that players can navigate seamlessly and interact intuitively with the game",
  },
];

// about us page why choose content
export const whyChooseUsContent = [
  {
    title: "Customized Solutions for Every Business",
    desc: "We believe in a tailored approach because every business is unique. We take time to understand your goals and create custom digital solutions that align perfectly with your vision.",
  },
  {
    title: "Cutting-Edge Technology",
    desc: "Our team is equipped with the latest tools and technologies to bring your project to life, ensuring that you stay ahead in the ever-changing digital space.",
  },
  {
    title: "Security and Reliability",
    desc: "SV TECH WAVE, we take security seriously. Our solutions are built with stringent security protocols to safeguard your business data and protect it from cyber threats.",
  },
  {
    title: "Long-Term Partnerships",
    desc: "We’re not just a service provider; we’re your strategic partner. From conceptualization to deployment and ongoing support, we’re with you every step of the way, ensuring our success in the digital landscape.",
  },
  {
    title: "Agility and Innovation",
    desc: "As technology evolves, so do we. We continuously adapt to the latest trends and innovations to deliver products that not only meet your current needs but are scalable for the future.",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("./assets/images/web_projects/1.webp"),
    title: "FE-Finance",
    link: "https://www.fe-finance.de",
  },
  {
    id: 2,
    img: require("./assets/images/web_projects/2.webp"),
    title: "Ocxee",
    link: "https://www.ocxee.com/",
  },
  {
    id: 3,
    img: require("./assets/images/web_projects/3.webp"),
    title: "Leaderbridge",
    link: "https://www.leadership.net/",
  },
  {
    id: 4,
    img: require("./assets/images/web_projects/4.webp"),
    title: "Gigzio",
    link: "https://gigzio.com/",
  },
  {
    id: 5,
    img: require("./assets/images/web_projects/5.webp"),
    title: "FE Group",
    link: "https://www.fe.group/",
  },
  {
    id: 6,
    img: require("./assets/images/web_projects/6.webp"),
    title: "V Talkz",
    link: "https://www.vtalkz.com/",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("./assets/images/app_projects/1.webp"),
    title: "PartEx",
  },
  {
    id: 2,
    img: require("./assets/images/app_projects/2.webp"),
    title: "Find A Driver",
  },
  // {
  //   id: 3,
  //   img: require("./assets/images/app_projects/3.webp"),
  //   title: "Glowsy",
  // },
  {
    id: 4,
    img: require("./assets/images/app_projects/4.webp"),
    title: "Artisan Express",
  },
  {
    id: 5,
    img: require("./assets/images/app_projects/5.webp"),
    title: "House of Deliverance",
  },
];

export const features = [
  {
    title: "Innovation at Heart",
    description:
      "We bring ideas to life through cutting-edge AI solutions, transforming concepts into reality with advanced machine learning algorithms.",
    icon: "🚀",
  },
  {
    title: "Cloud-Centric Approach",
    description:
      "Leverage the power of cloud computing with our scalable AI solutions, ensuring optimal performance and reliability.",
    icon: "☁️",
  },
  {
    title: "Commitment to Excellence",
    description:
      "Our dedicated team ensures the highest quality standards in every project, delivering exceptional results that exceed expectations.",
    icon: "⭐",
  },
  {
    title: "Operations with Purpose",
    description:
      "Streamline your business operations with AI-driven automation, boosting efficiency and reducing operational costs.",
    icon: "🎯",
  },
  {
    title: "Data-Driven Solutions",
    description:
      "Transform raw data into actionable insights with our advanced analytics and machine learning capabilities.",
    icon: "📊",
  },
  {
    title: "24/7 Expert Support",
    description:
      "Round-the-clock support from our team of AI experts, ensuring your systems run smoothly at all times.",
    icon: "💡",
  },
];

export const appportfolio = [
  {
    id: 1,
    name: "Barbera App",
    url: "https://play.google.com/store/apps/details?id=app.barbera.io&pcampaignid=web_share",
    icon: <FaGooglePlay />,
  },
  {
    id: 2,
    name: "Rentop",
    url: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
    icon: <FaGooglePlay />,
  },
  {
    id: 3,
    name: "Bin Info Club",
    url: "https://play.google.com/store/apps/details?id=com.binfoclub.app&pcampaignid=web_share",
    icon: <FaGooglePlay />,
  },
  {
    id: 4,
    name: "Prayer Times",
    url: "https://play.google.com/store/apps/details?id=com.iccbrossard.prayerBmes&pcampaignid=web_share",
    icon: <FaGooglePlay />,
  },
  {
    id: 5,
    name: "Evans Francis",
    url: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.evansfrancis&pcampaignid=web_share",
    icon: <FaGooglePlay />,
  },
  {
    id: 6,
    name: "HOD App",
    url: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.hod&pcampaignid=web_share",
    icon: <FaGooglePlay />,
  },
  {
    id: 7,
    name: "Zigna AutoSnap",
    url: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
    icon: <FaGooglePlay />,
  },
  {
    id: 8,
    name: "Klikomics",
    url: "https:play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
    icon: <FaGooglePlay />,
  },
  {
    id: 9,
    name: "Ocxee",
    url: "https://apps.apple.com/in/app/ocxee/id1522856353",
    icon: <FaApple />,
  },
  {
    id: 10,
    name: "Dubai Travel Guide",
    url: "https://play.google.com/store/apps/details?id=com.eBps.dubai.travel.guide&pcampaignid=web_share",
    icon: <FaGooglePlay />,
  },
  {
    id: 11,
    name: "EVA People App",
    url: "https://apps.apple.com/eg/app/eva-people-app/id1551622445",
    icon: <FaApple />,
  },
  {
    id: 12,
    name: "Lafi Android",
    url: "https://play.google.com/store/apps/details?id=com.lundev.mayar&pcampaignid=web_share",
    icon: <FaGooglePlay />,
  },
  {
    id: 13,
    name: "Lafi iOS",
    url: "https://apps.apple.com/eg/app/lafi-%D9%84%D8%A7%D9%81%D9%8A/id6505079679",
    icon: <FaApple />,
  },
  {
    id: 14,
    name: "Naseh Android",
    url: "https://play.google.com/store/apps/details?id=com.lun.nasooh.NASE7",
    icon: <FaGooglePlay />,
  },
  {
    id: 15,
    name: "Naseh IOS",
    url: "https://apps.apple.com/eg/app/%D9%86%D8%A7%D8%B5%D8%AD/id6475194728",
    icon: <FaApple />,
  },
  {
    id: 16,
    name: "Hayaty Android",
    url: "https://play.google.com/store/apps/details?id=com.intixel.hayaty",
    icon: <FaGooglePlay />,
  },
  {
    id: 17,
    name: "Hayaty IOS",
    url: "https://apps.apple.com/eg/app/hayaty/id6451443065",
    icon: <FaApple />,
  },
  {
    id: 18,
    name: "EVA Internships Android",
    url: "https://play.google.com/store/apps/details?id=com.eva.eva_training_certificates&hl=en",
    icon: <FaGooglePlay />,
  },
  {
    id: 19,
    name: "EVA Internships IOS",
    url: "https://apps.apple.com/eg/app/eva-internships/id1528819204",
    icon: <FaApple />,
  },
];

// Website Development - Custom
export const webportfolio = [
  {
    id: 1,
    name: "Leader Bridge",
    url: "https://www.leaderbridge.com",
    icon: <FaGlobe />,
  },
  {
    id: 2,
    name: "Autopilot",
    url: "https://autopilot.io",
    icon: <FaGlobe />,
  },
  {
    id: 3,
    name: "Gigzio",
    url: "https://gigzio.com",
    icon: <FaGlobe />,
  },
  {
    id: 4,
    name: "FE Group",
    url: "https://fe.group",
    icon: <FaGlobe />,
  },
  {
    id: 5,
    name: "Vtalkz",
    url: "https://vtalkz.com",
    icon: <FaGlobe />,
  },
  {
    id: 6,
    name: "The Ladders",
    url: "https://www.theladders.com",
    icon: <FaGlobe />,
  },
];
export const wordportfolio = [
  {
    id: 6,
    name: "Think Realty",
    url: "https://thinkrealty.ae",
    icon: <FaGlobe />,
  },
  {
    id: 7,
    name: "Bayut",
    url: "https://www.bayut.com",
    icon: <FaGlobe />,
  },
  {
    id: 8,
    name: "5G High-Speed Internet",
    url: "https://5ghighspeedinternet.co",
    icon: <FaGlobe />,
  },
  {
    id: 9,
    name: "Messina's Catering",
    url: "https://messinascatering.com",
    icon: <FaGlobe />,
  },
  {
    id: 10,
    name: "Cold Creek Capital",
    url: "https://www.coldcreekcap.com",
    icon: <FaGlobe />,
  },
];
export const uiuxportfolio = [
  {
    id: 1,
    name: "Crypto UI",
    url: "https://www.figma.com/design/syARcSBYKhwEzsEmlpB2jR/Crypto-UI-App-%26-Admin?node-id=0-1&t=qrubmjqZL7GxJUk2-0",
    icon: <FaFigma />,
  },
  {
    id: 2,
    name: "Emergence Music",
    url: "https://www.figma.com/proto/GwlIMQuIuFevhOEp8moALy/emergence-music-distribuBon?page-id=6298%3A7215&type=design&node-id=6298-7776&viewport=407%2C314%2C0.11&t=QCtz7M4USn6gI1CG-1&scaling=min-zoom",
    icon: <FaFigma />,
  },
  {
    id: 3,
    name: "Potea",
    url: "https://www.figma.com/design/ZoowfS1VMFLRKKcsdd3Myh/Potea-(Copy)?node-id=727-25421&t=KThAYD7OOdc4oeEV-1",
    icon: <FaFigma />,
  },
  {
    id: 4,
    name: "TGFX Workfile",
    url: "https://www.figma.com/design/Xtua9ElE5Eg7MV7baS6Bzn/TGFX-Workfile-(Copy)?t=JDLWFCCc24GDqh1T-0",
    icon: <FaFigma />,
  },
];
export const gameportfolio = [
  // Game Development
  {
    id: 31,
    name: "Car Stunt Mania",
    url: "https://play.google.com/store/apps/details?id=com.carstuntgames.carstunt.racingcar.carstuntmania.mlabs",
    category: "Game Development",
    icon: <FaGamepad />,
  },
  {
    id: 32,
    name: "Bowling Games",
    url: "https://play.google.com/store/apps/details?id=com.bowlinggames.oﬄinebowlinggame.bowlingoﬄine.bowlinggame.mlabs",
    category: "Game Development",
    icon: <FaGamepad />,
  },
];
export const blockchainportfolio = [
  // Blockchain
  {
    id: 41,
    name: "CryptoPadie",
    url: "https://play.google.com/store/apps/details?id=com.cryptopadie.buy.sell.crypto",
    category: "Blockchain",
    icon: <FaBitcoin />,
  },
  {
    id: 42,
    name: "Nanfolo",
    url: "https://play.google.com/store/apps/details?id=com.nanfolo.user.app",
    category: "Blockchain",
    icon: <FaBitcoin />,
  },
  {
    id: 43,
    name: "Nanfolo Website",
    url: "https://nanfolo.com",
    category: "Blockchain",
    icon: <FaBitcoin />,
  },
  {
    id: 44,
    name: "Padiepal Website",
    url: "h$ps://padiepal.com",
    category: "Blockchain",
    icon: <FaBitcoin />,
  },
];
