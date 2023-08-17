import Image from "next/image";
import headshot from "@/public/headshot.png";
import headshot1 from "@/public/headshot-1.png";
import headshot2 from "@/public/headshot-2.png";
import headshot3 from "@/public/headshot-3.png";
import { AiOutlineReload } from "react-icons/ai";
import { useState } from "react";

const HeaderGridItem = () => {
  const headshots = [headshot, headshot1, headshot2, headshot3];

  const [headshotIndex, setHeadshotIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const handleHeadshotChange = () => {
    // Start fade out animation
    setOpacity(0);

    // Wait for the fade out animation to complete
    setTimeout(() => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * headshots.length);
      } while (randomIndex === headshotIndex);

      setHeadshotIndex(randomIndex);

      // Fade in animation
      setOpacity(1);
    }, 300); // 300ms is the duration of the fade effect
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <button
        onClick={handleHeadshotChange}
        className="p-2 rounded-full shadow-3xl hover:shadow-4xl transition-all absolute right-4 top-4 bg-white"
      >
        <AiOutlineReload />
      </button>
      <div className="flex justify-between">
        <div className=" w-28 h-28 relative">
          <Image
            src={headshots[headshotIndex]}
            alt="hansom boy"
            fill
            style={{
              objectFit: "contain",
              transition: "opacity 0.3s",
              opacity: opacity,
            }}
          />
        </div>
      </div>
      <h2>
        I&apos;m <span className=" font-bold text-xl">Luke</span>, a developer
        and designer based in NYC. I&apos;m interested in React, Jamstack,
        Product Design, Startups, Bitcoin, Athletics and Hawaiian Pizza.
      </h2>
    </div>
  );
};

export default HeaderGridItem;
