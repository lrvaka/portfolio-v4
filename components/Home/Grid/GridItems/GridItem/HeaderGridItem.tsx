import { useState, useCallback } from "react";
import Image from "next/image";
import { AiOutlineReload } from "react-icons/ai";
import headshot0 from "@/public/headshot.png";
import headshot1 from "@/public/headshot-1.png";
import headshot2 from "@/public/headshot-2.png";
import headshot3 from "@/public/headshot-3.png";

const HEADSHOTS = [headshot0, headshot1, headshot2, headshot3];

const getRandomHeadshotIndex = (current: number): number => {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * HEADSHOTS.length);
  } while (randomIndex === current);
  return randomIndex;
};

const HeaderGridItem = () => {
  const [headshotIndex, setHeadshotIndex] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const [opacity, setOpacity] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);
  const [blobOpacity, setBlobOpacity] = useState(0);
  const [blobScale, setBlobScale] = useState(0);

  const handleHeadshotChange = useCallback(() => {
    setIsButtonDisabled(true);

    setOpacity(0);
    setRotation((prevRotation) => prevRotation + 45);
    setScale(0);
    setBlobOpacity(1);
    setBlobScale(0);

    setTimeout(() => {
      setHeadshotIndex((prevIndex) => getRandomHeadshotIndex(prevIndex));
      setOpacity(1);
      setRotation(0);
      setScale(1);
      setBlobOpacity(0);
      setBlobScale(2);

      setIsButtonDisabled(false); // Re-enable the button after animations
    }, 500);
  }, []);

  return (
    <div className="px-11 py-9 flex flex-col justify-between h-full">
      <button
        onClick={handleHeadshotChange}
        disabled={isButtonDisabled}
        className="p-2 rounded-full shadow-3xl hover:shadow-4xl absolute right-4 top-4 bg-white z-20"
        style={{
          transition: "all 0.5s",
        }}
      >
        <div style={{ rotate: `${rotation * 5}deg`, transition: "all 0.5s" }}>
          <AiOutlineReload />
        </div>
      </button>

      <div className=" xl:w-28 xl:h-28 h-32 w-32 relative">
        <Image
          src={HEADSHOTS[headshotIndex]}
          alt="hansom boy"
          fill
          style={{
            objectFit: "contain",
            transition: "all 0.5s",
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
        I&apos;m{" "}
        <span
          className=" font-black text-xl uppercase "
          style={{
            background:
              "-webkit-linear-gradient(right, rgb(236, 72, 153), rgb(239, 68, 68), rgb(234, 179, 8))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Luke
        </span>
        , a developer and designer based in NYC. I&apos;m interested in React,
        Jamstack, Product Design, Startups, Bitcoin, Athletics and Hawaiian
        Pizza.
      </h2>
    </div>
  );
};

export default HeaderGridItem;
