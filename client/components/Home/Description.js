import textData from "../../data/content.json";
import { RoughNotation } from "react-rough-notation";
import siteMetadata from "@/data/siteMetadata";

export default function Description() {
  return (
    <div>
      <h2 className="prose pt-5 text-lg text-gray-600 dark:text-gray-300">
        {`This is the ${siteMetadata.description}. It is used to continuously monitor data quality in INSIS across the entire policy population.`}
      </h2>
      <p className="pt-5 text-lg leading-7 text-slate-600 dark:text-slate-300 sm:block md:hidden lg:hidden">
        {textData.home.description1}{" "}
        <RoughNotation
          animate="true"
          type="box"
          show={true}
          color="#ed7522"
          animationDelay={1000}
          animationDuration={2500}
          className="text-slate-200"
        >
          {textData.home.description3}&nbsp;
        </RoughNotation>
        {textData.home.description4}
      </p>
      <p className="hidden pt-10 text-lg leading-7 text-slate-600 dark:text-slate-300 md:block">
        {textData.home.description2}{" "}
        <RoughNotation
          animate="true"
          type="highlight"
          show={true}
          color="#ed7522"
          animationDelay={1000}
          animationDuration={2500}
          className="text-slate-200"
        >
          {textData.home.description3}&nbsp;
        </RoughNotation>
        {textData.home.description4}
      </p>
    </div>
  );
}
