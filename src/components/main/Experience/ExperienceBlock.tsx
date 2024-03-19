import type { ExperienceProps } from "./ExperienceBlockProps";
import React from "react";

const ExperienceBlock: React.FC<ExperienceProps> = ({
  startDate,
  endDate,
  title,
  company,
  brief,
  tags,
  id,
}: ExperienceProps) => {
  return (
    <div
      key={id}
      className="flex flex-col gap-2 xl:grid xl:grid-cols-6 xl:grid-flow-col xl:rounded xl:p-4"
    >
      <div className="xl:col-span-2">
        <p className="font-extralight">
          {startDate} - {endDate}
        </p>
      </div>
      <div className="flex flex-col gap-2 xl:col-span-4">
        <h3 className="text-xl tracking-tight font-medium">
          {title} / {company}
        </h3>
        <p className="font-light">{brief}</p>
        <div className="flex gap-2 flex-wrap">
          {tags?.map((tag, index) => (
            <span key={index} className="badge badge-outline badge-primary">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceBlock;
