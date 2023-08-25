import Image, { ImageProps, StaticImageData } from "next/image";
import Link from "next/link";

//create props interface
interface ExternalLinkGridItem {
  name: string;
  image: StaticImageData;
  link: string;
}

const ExternalLinkGridItem = ({ name, image, link }: ExternalLinkGridItem) => {
  return (
    <div className="w-full h-full z-10 ">
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
      <a
        href={link}
        className="absolute right-0 w-9 h-9 rounded-[18px] transition ease-in-out duration-500 cursor-pointer hover:shadow-4xl  bg-white p-3 bottom-4 left-4 flex gap-2 items-center "
      >
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
      </a>
    </div>
  );
};

export default ExternalLinkGridItem;
