// import LogoQubris from "@/public/assets/images/interbship/Qubris_logo.png";
// import Image from "next/image";

import InternshipCard from "@/components/card/internship/internship-card";
import Heading from "@/components/heading/heading";
import { internshipData } from "@/data/internship";

const MainInternship: any = internshipData[1];

export default function InternshipSection() {
  return (
    <div className="pt-24 px-3 lg:px-8 dark:bg-secondary-background dark:text-white">
      {/* Heading */}
      <Heading title="Mijn Stage" />

      <InternshipCard
        id={MainInternship.id}
        intro={MainInternship.intro}
        company={MainInternship.company}
        assignment={MainInternship.assignment}
        app={MainInternship.app}
        description={MainInternship.description}
        info={MainInternship.info}
      />
      {/* <div className="mt-24">
        <ExpandableFeatured />
      </div> */}
    </div>
  );
}
