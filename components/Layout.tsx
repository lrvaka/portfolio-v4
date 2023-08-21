import Image from "next/image";
import logo from "@/public/logo.png";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const navItems = [
  {
    name: "All",
    href: "index.html",
  },
  {
    name: "About",
    href: "about.html",
  },
  {
    name: "Projects",
    href: "contact.html",
  },
  {
    name: "Media",
    href: "contact.html",
  },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
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
    <div className={inter.className}>
      <div className="flex justify-between items-center gap-5 pt-10 max-w-7xl px-4 mx-auto">
        <Image src={logo} alt="cool name" width={100} height={20} />

        <header>
          <nav>
            <ul className="flex bg-gray-200 p-[5px] rounded-full relative">
              <div
                className="w-12 h-8 absolute bg-white rounded-2xl"
                style={{
                  left: `${blobLeft}px`,
                  width: `${blobWidth}px`,
                  transition: "all 0.3s",
                }}
              ></div>
              {navItems.map((item, index) => (
                <div
                  className="font-semibold text-sm cursor-pointer z-10 px-4 h-8 flex items-center"
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
      <div className="px-4 max-w-6xl mx-auto">{children}</div>
    </div>
  );
};

export default Layout;
