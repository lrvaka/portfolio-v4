import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    name: "Exquisite Wood Floors",
    color: "bg-red-200",
    colSpan: 2,
    rowSpan: 1,
  },
  { name: "Weather App", color: "bg-red-500", colSpan: 1, rowSpan: 1 },
  { name: "Blockhead Digital", color: "bg-green-200", colSpan: 1, rowSpan: 1 },
  { name: "Dougll Do It", color: "bg-blue-200", colSpan: 1, rowSpan: 2 },
  {
    name: "Redux - Simple Shopping Cart",
    color: "bg-green-200",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    name: "useMemo - useCallback - Contact List Search",
    color: "bg-red-200",
    colSpan: 1,
    rowSpan: 1,
  },
];

const DesignPortfolio = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <div className="grid h-[700px] gap-5 grid-cols-4 ">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`${project.color} rounded-xl col-span-${
            project.colSpan
          } row-span-${project.rowSpan} cursor-pointer ${
            selectedProject === index ? "ring-2 ring-blue-500" : ""
          } hover:scale-105 transition-all`}
          onClick={() => setSelectedProject(index)}
        >
          {project.name}
        </div>
      ))}
    </div>
  );
};

export default DesignPortfolio;
