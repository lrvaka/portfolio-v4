import Image from "next/image";
import headshot from "@/public/headshot.png";
import headshot1 from "@/public/headshot-1.png";
import headshot2 from "@/public/headshot-2.png";
import headshot3 from "@/public/headshot-3.png";
import { AiOutlineReload } from "react-icons/ai";
import { useState } from "react";

const HEADSHOTS = [headshot, headshot1, headshot2, headshot3];

const HeaderGridItem = () => {
  const [headshotIndex, setHeadshotIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);

  const [blobOpacity, setBlobOpacity] = useState(0);
  const [blobScale, setBlobScale] = useState(0);

  const handleHeadshotChange = () => {
    // Start fade out animation
    setOpacity(0);
    setRotation(rotation + 45);
    setScale(0.5);

    // Start blob animation
    setBlobOpacity(1);
    setBlobScale(0);

    // Wait for the fade out animation to complete
    setTimeout(() => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * HEADSHOTS.length);
      } while (randomIndex === headshotIndex);

      setHeadshotIndex(randomIndex);

      // Fade in animation
      setOpacity(1);
      setRotation(0);
      setScale(1);

      // Blob animation
      setBlobOpacity(0);
      setBlobScale(2);
    }, 300); // 300ms is the duration of the fade effect
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <button
        onClick={handleHeadshotChange}
        className="p-2 rounded-full shadow-3xl hover:shadow-4xl transition-all absolute right-4 top-4 bg-white"
      >
        <div style={{ rotate: `${rotation * 5}deg`, transition: "all 0.3s" }}>
          <AiOutlineReload />
        </div>
      </button>

      <div className=" w-28 h-28 relative">
        <Image
          src={HEADSHOTS[headshotIndex]}
          alt="hansom boy"
          fill
          style={{
            objectFit: "contain",
            transition: "all 0.3s",
            opacity: opacity,
            rotate: `${rotation}deg`,
            scale: `${scale}`,
          }}
        />
        <div
          style={{
            transition: "all 0.5s",
            opacity: blobOpacity,
            scale: `${blobScale}`,
          }}
          onTransitionEnd={() => {
            setBlobScale(0);
          }}
          className="relative scale-150 -z-10 blur-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 w-full h-full"
        ></div>
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
