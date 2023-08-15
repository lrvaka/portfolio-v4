import Image from "next/image";
import headshot from "../public/headshot.png";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={inter.className}>
      <div className="fixed inset-x-0 bottom-0 flex justify-center py-10 ">
        <nav className="bg-black rounded-md p-5">
          <ul className="flex gap-10 ">
            <li className="text-white p-2  ">
              <a href="index.html">Home</a>
            </li>
            <li className="text-white p-2  ">
              <a href="about.html">About</a>
            </li>
            <li className="text-white p-2 ">
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="px-4 max-w-6xl mx-auto">
        <div className="flex justify-between items-center gap-5 pt-20">
          <div className="flex items-center gap-5 ">
            <Image
              style={{ width: "100px" }}
              src={headshot}
              alt="hansome boy"
            />
            <h1 className="font-bold text-3xl">
              Luke Vakasisikakala <span className="sr-only">—</span> <br />
              <span className=" font-normal text-xl ">
                Front-End Developer at Blockhead Digital
              </span>
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-2 text-white">
            <div className="bg-slate-700 p-1">github</div>
            <div className="bg-slate-700 p-1">LinkedIn</div>
            <div className="bg-slate-700 p-1">Twitter</div>
            <div className="bg-slate-700 p-1">Instagram</div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
