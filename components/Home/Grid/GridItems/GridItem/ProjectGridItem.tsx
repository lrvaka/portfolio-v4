import Image, { ImageProps, StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";

//create props interface
interface ProjectGridItemProps {
  name: string;
  image: StaticImageData;
  link: string;
}

const ProjectGridItem = ({ name, image, link }: ProjectGridItemProps) => {
  const [showProjectDescription, setShowProjectDescription] = useState(false);

  const handleMouseEnter = () => {
    setShowProjectDescription(true);
  };

  const handleMouseLeave = () => {
    setShowProjectDescription(false);
  };

  return (
    <div
      className="w-full h-full z-10 "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
        }}
        src={image}
        alt={name}
        className="rounded-3xl"
      />
      <div
        className=" cursor-pointer hover:shadow-4xl absolute bg-white p-3 rounded-[18px] bottom-4 left-4 flex gap-2 items-center h-9 "
        style={{
          maxWidth: showProjectDescription ? "100%" : "36px",
          transition: "max-width 1s, box-shadow 0.5s",
        }}
      >
        <Link
          href={link}
          className="text-sm font-medium leading-none ml-1 mr-5 whitespace-nowrap"
          style={{
            opacity: showProjectDescription ? 1 : 0,
            transform: showProjectDescription
              ? "translateX(0)"
              : "translateX(-10%)",
            transition: "all 0.3s",
          }}
        >
          {name}
        </Link>
        <div className="absolute right-0 w-9 h-9 rounded-[18px] flex items-center justify-center">
          <svg
            width="10.256"
            height="10.256"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 1C7.5 0.723857 7.27614 0.5 7 0.5L2.5 0.5C2.22386 0.5 2 0.723858 2 1C2 1.27614 2.22386 1.5 2.5 1.5L6.5 1.5V5.5C6.5 5.77614 6.72386 6 7 6C7.27614 6 7.5 5.77614 7.5 5.5L7.5 1ZM1.35355 7.35355L7.35355 1.35355L6.64645 0.646446L0.646447 6.64645L1.35355 7.35355Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProjectGridItem;
