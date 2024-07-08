import { FC } from "react";
import Header from "../header";
import Card from "@/components/ui/card";
import { reportsData } from "@/data/proof-of-concept";
import PdfListItem from "@/components/ui/pdf-list-item";

const Reports: FC = () => {
  return (
    <Card className="bg-transparent border border-[#797CBB] dark:bg-secondary-background dark:text-white">
      <Header title="Mijn bewijsstukken" />
      <ul>
        {reportsData.map((report) => (
          <PdfListItem key={report.id} title={report.title}>
            <a
              href={report.location}
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-white"
            >
              {report.title}
            </a>
          </PdfListItem>
        ))}
      </ul>
    </Card>
  );
};

export default Reports;
