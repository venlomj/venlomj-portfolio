import { FC, ReactNode } from "react";

interface TextBlockProps {
  title: string;
  text: string[];
  foot?: ReactNode;
}

const TextBlock: FC<TextBlockProps> = ({ title, text, foot }) => {
  return (
    <div className="p-6 px-4 dark:bg-secondary-background dark:text-white">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <div className="space-y-4">
          {text.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
      </div>
      <div className="p-4">
        <p>{foot}</p>
      </div>
    </div>
  );
};

export default TextBlock;
