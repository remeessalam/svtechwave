import React from "react";
import {
  FaGooglePlay,
  FaGlobe,
  FaFigma,
  FaGamepad,
  FaBitcoin,
} from "react-icons/fa";
import {
  appportfolio,
  blockchainportfolio,
  gameportfolio,
  uiuxportfolio,
  webportfolio,
  wordportfolio,
} from "../constant";

const PortfolioSection = ({ title, portfolio }) => (
  <div className="mb-10">
    <h2 className="text-2xl font-semibold mb-6 text-center lg:text-left">
      {title}
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {portfolio.map((item) => (
        <div
          key={item.id}
          className="bg-primary group hover:scale-105 duration-300 transition-all shadow-md rounded-lg p-4 flex flex-col items-center justify-between hover:shadow-lg "
        >
          <div className="text-4xl text-white mb-4">{item.icon}</div>
          <h3 className="text-lg font-medium mb-2 text-center text-white">
            {item.name}
          </h3>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white group-hover:underline underline-offset-4 transition-all duration-300"
          >
            Visit
          </a>
        </div>
      ))}
    </div>
  </div>
);

const OurWorks = () => {
  return (
    <div className="backgroundstyle">
      <div className="py-[5rem]  wrapper ">
        <h1 className="gradient-rounded-text-box mb-5 mx-auto">Our Works</h1>
        <PortfolioSection title="App Development" portfolio={appportfolio} />
        <PortfolioSection
          title="Website Development"
          portfolio={webportfolio}
        />
        <PortfolioSection
          title="WordPress Website Development"
          portfolio={wordportfolio}
        />
        <PortfolioSection title="UI/UX Design" portfolio={uiuxportfolio} />
        <PortfolioSection title="Game Development" portfolio={gameportfolio} />
        <PortfolioSection title="Blockchain" portfolio={blockchainportfolio} />
      </div>
    </div>
  );
};

export default OurWorks;
