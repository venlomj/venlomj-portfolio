import FeaturedCard from "@/components/card/featured/featured-card";
import ExhibitionFeatured from "@/components/exhibition/exhibition-featured";
import Heading from "@/components/heading/heading";
import featuredData from "@/data/featured";
import { FiArrowDownCircle, FiArrowUpRight } from "react-icons/fi";

const MainFeatured = featuredData[0];

export default function FeaturedSection() {
  return (
    <div className="pt-24 px-3 lg:px-8">
      {/* Heading */}
      <Heading title="Projecten" />
      {/* Main featured Card */}
      <FeaturedCard
        active
        title={MainFeatured.title}
        tag={MainFeatured.tag}
        video={MainFeatured.video}
        desc={MainFeatured.desc!}
        client={MainFeatured.client!}
        img={MainFeatured.img}
      />
      <div className="mt-24">
        <ExhibitionFeatured />
      </div>
    </div>
  );
}
