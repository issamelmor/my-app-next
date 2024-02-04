import textData from "../../data/content.json";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const { NEXT_PUBLIC_ENVIRONMENT } = publicRuntimeConfig;

export default function Header() {
  return (
    <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
      {textData.home.title1}
      <span className="text-primary-color-500 dark:text-primary-color-dark-500">
        {textData.home.title2}
      </span>
      {NEXT_PUBLIC_ENVIRONMENT}
    </h1>
  );
}
