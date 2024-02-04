import textData from "../data/content.json";

export default function DLP() {
  return (
    <div>
      <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        {textData.dlp.title}
      </h1>
    </div>
  );
}
