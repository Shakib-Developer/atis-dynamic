import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import FeaturedProject from "@/components/FeaturedProject";
import HowWorks from "@/components/HowWorks";
import Contacts from "@/components/Contacts";
import Brands from "@/components/Brands";
const Page = async () => {
    return (
      <div>
        <Hero />
        <Stats />
        <FeaturedProject />
        <HowWorks />
        <Contacts />
        <Brands />
      </div>
    );
};
export default Page;