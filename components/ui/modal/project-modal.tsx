import { FC, ReactNode, useEffect } from "react";
import Button from "../Button";
import { IoIosCloseCircle } from "react-icons/io";
import { FaRegWindowClose, FaWindowClose } from "react-icons/fa";
import Card from "../card";
import ReactPortal from "@/components/shared/portal/ReactPortal";
import Header from "@/components/card/featured/header";
import DynamicButton from "../DynamicButton";

interface ProjectModalProps {
  children: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
  title: string;
}

const ProjectModal: FC<ProjectModalProps> = ({
  children,
  isOpen,
  handleClose,
  title,
}) => {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="project-modal">
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="absolute inset-0 bg-[#01010A] dark:bg-secondary-background dark:text-white overflow-auto">
          <Card className="w-full h-full flex flex-col p-0 items-center justify-center">
            <div className="p-6 flex-grow">
              <div className="font-pixel">
                <Header title={title} />
              </div>
              <div className="pb-4 flex-grow">{children}</div>
              <div className="border-t border-border pt-4">
                <DynamicButton
                  onClick={handleClose}
                  className="flex items-center justify-center gap-2 bg-gray-400 text-black dark:text-white rounded-full select-none whitespace-nowrap text-sm font-medium hover:bg-gray-500 transition-colors duration-100 w-20 h-10"
                >
                  Close
                </DynamicButton>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </ReactPortal>
  );
};

export default ProjectModal;
