import type { ExperienceProps } from "./ExperienceBlockProps";
import React from "react";

const ExperienceBlock: React.FC<ExperienceProps> = ({
  startDate,
  endDate,
  title,
  company,
  brief,
  tags,
}: ExperienceProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <p className="font-extralight">
          {startDate} - {endDate}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl tracking-tight font-medium">
          {title} / {company}
        </h3>
        <p className="font-light">{brief}</p>
        <div className="flex gap-2 flex-wrap">
          {tags?.map((tag) => (
            <span className="badge badge-outline badge-primary">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceBlock;