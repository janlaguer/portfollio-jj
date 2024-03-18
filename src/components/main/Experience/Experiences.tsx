import type React from "react";
import ExperienceBlock from "./ExperienceBlock.tsx";
import type { ExperienceProps } from "./ExperienceBlockProps.ts";

interface Experiences {
  experiences: ExperienceProps[];
}

const Experiences: React.FC<Experiences> = ({ experiences }) => {
  return (
    <div className="flex flex-col gap-8">
      {experiences.map(
        ({ title, company, startDate, endDate, brief, tags, id }, index) => (
          <ExperienceBlock
            title={title}
            company={company}
            startDate={startDate}
            endDate={endDate}
            brief={brief}
            tags={tags}
            id={id}
            key={id}
          />
        )
      )}
    </div>
  );
};

export default Experiences;
