// Third-party imports
import { PageSEO } from "@/components/SEO";

// Component imports
import Header from "@/components/Home/Header";
import Description from "@/components/Home/Description";
import RightMenu from "@/components/Home/RightMenu";

// Other imports
import siteMetadata from "@/data/siteMetadata";

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div>
        <div className="mb-12 flex flex-col items-center gap-x-12 xl:flex-row">
          <div className="pt-6">
            <Header />
            <Description />
          </div>
          <RightMenu />
        </div>
      </div>
    </>
  );
}
