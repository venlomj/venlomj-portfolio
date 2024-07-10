import Image from "next/legacy/image";
import React from "react";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  onClick?: () => void;
  linkIconClass?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  imageSrc,
  onClick,
  linkIconClass = "fa-link",
}) => {
  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="project">
        <div className="portfolio-caption">
          <div className="portfolio-caption-heading">{title}</div>
          <div className="portfolio-caption-subheading text-muted">
            {subtitle}
          </div>
        </div>
        <div className="project-link" onClick={onClick}>
          <div className="project-hover">
            <div className="hover-content text-center">
              <i className={`fa ${linkIconClass}`}></i>
            </div>
          </div>
          <Image src={imageSrc} alt={title} className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
