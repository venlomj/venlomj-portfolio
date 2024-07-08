import { FC } from "react";
import Header from "../header";
import Card from "@/components/ui/card";
import { presentationData } from "@/data/proof-of-concept";
import PPTListItem from "@/components/ui/ppt-list-item";

const Presentation: FC = () => {
  return (
    <Card className="bg-transparent border border-[#797CBB] dark:bg-secondary-background dark:text-white">
      <Header title="Mijn presentaties" />
      <ul>
        {presentationData.map((ppt) => (
          <PPTListItem key={ppt.id} title={ppt.title}>
            <a
              href={ppt.location}
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-white"
            >
              {ppt.title}
            </a>
          </PPTListItem>
        ))}
      </ul>
    </Card>
  );
};

export default Presentation;
