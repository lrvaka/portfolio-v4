import DesignPortfolio from "@/components/Home/DesignPortfolio";
import DevPortfolio from "@/components/Home/DevPortfolio";
import Grid from "@/components/Home/Grid/Grid";
import Image from "next/image";
import logo from "@/public/logo.png";

import { useState } from "react";

const NAV_ITEMS = [
  {
    name: "All",
  },
  {
    name: "About",
  },
  {
    name: "Projects",
  },
  {
    name: "Media",
  },
  {
    name: "Other",
  },
];

export default function Home() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [blobWidth, setBlobWidth] = useState(49.4297);
  const [blobLeft, setBlobLeft] = useState(5);

  const handleNavItemClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    setBlobWidth(target.getBoundingClientRect().width);
    setBlobLeft(target.offsetLeft);
    setSelectedItemIndex(parseInt(target.getAttribute("data-index")!));
  };
  return (
    <>
      <div className="flex justify-between items-center gap-5 pt-10 max-w-7xl mx-auto">
        <Image src={logo} alt="cool name" width={100} height={20} />

        <header>
          <nav>
            <ul className="flex bg-gray-200 p-[5px] rounded-full relative">
              <div
                className=" h-8 absolute bg-white rounded-2xl"
                style={{
                  left: `${blobLeft}px`,
                  width: `${blobWidth}px`,
                  transition: "all 0.5s",
                }}
              ></div>
              {NAV_ITEMS.map((item, index) => (
                <div
                  className="font-semibold text-sm cursor-pointer z-10 px-4 h-8 flex items-center hover:text-gray-500 transition-all"
                  onClick={handleNavItemClick}
                  key={index}
                  data-index={index}
                >
                  {item.name}
                </div>
              ))}
            </ul>
          </nav>
        </header>

        <a>
          <p className="font-semibold text-sm">Contact</p>
        </a>
      </div>
      <main className="pt-[50px] max-w-6xl mx-auto ">
        <Grid />
      </main>
    </>
  );
}
