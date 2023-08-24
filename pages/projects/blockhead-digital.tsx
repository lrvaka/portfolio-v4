import Image, { StaticImageData } from "next/image";
import GridLayout from "react-grid-layout";
import whiteLogo from "@/public/bhdigital/white-logo.png";
import longLogo from "@/public/bhdigital/long-logo.png";
import mainLogo from "@/public/bhdigital/main-logo.png";
import cube from "@/public/bhdigital/cube.png";
import mobile from "@/public/bhdigital/mobile.png";

const layout = [
  { i: "a", x: 0, y: 0, w: 1, h: 1, img: whiteLogo },
  { i: "b", x: 1, y: 0, w: 1, h: 1, img: mainLogo },
  { i: "c", x: 0, y: 1, w: 2, h: 1, img: longLogo },
  { i: "d", x: 3, y: 0, w: 1, h: 2, img: cube },
  { i: "e", x: 2, y: 0, w: 1, h: 2, img: mobile },
];

const BlockheadDigital = () => {
  return (
    <div className="max-w-6xl mx-auto mt-52 px-4">
      <h1 className="font-black text-3xl mb-5">Blockhead Digital</h1>
      <div className="grid grid-cols-2 gap-10">
        <div>
          <p className="font-medium text-2xl leading-relaxed">
            Full-service digital marketing agency - assisting businesses and
            creators to expand their digital reach and increase revenue.
          </p>
        </div>
        <div>
          <p className="mb-3">
            Lorem ipsum dolor sit. Lorem ipsum dolor sit. Lorem ipsum dolor sit.
            Lorem ipsum dolor sit. Lorem ipsum dolor sit. Lorem ipsum dolor sit.
            Lorem ipsum dolor sit. Lorem ipsum dolor sit.Lorem ipsum dolor sit.
            Lorem ipsum dolor sit. Lorem ipsum dolor sit. Lorem ipsum dolor sit.
            Lorem ipsum dolor sit. Lorem ipsum dolor sit. Lorem ipsum dolor sit.
            Lorem ipsum dolor sit.
          </p>
          <p className="">
            Lorem ipsum dolor sit. Lorem ipsum dolor sit. Lorem ipsum dolor sit.
            Lorem ipsum dolor sit. Lorem ipsum dolor sit. Lorem ipsum dolor sit.
            Lorem ipsum dolor sit. Lorem ipsum dolor sit.Lorem ipsum dolor sit.
            Lorem ipsum dolor sit. Lorem ipsum dolor sit. Lorem ipsum dolor sit.
            Lorem ipsum dolor sit. Lorem ipsum dolor sit. Lorem ipsum dolor sit.
            Lorem ipsum dolor sit.
          </p>
        </div>
      </div>
      <GridLayout
        className="layout"
        layout={layout}
        cols={4}
        width={1120}
        isResizable={false}
        rowHeight={280}
      >
        {layout.map(
          (item: { i: string; img: StaticImageData }, index: number) => (
            <div
              className="bg-white rounded-3xl cursor-grab active:cursor-grabbing"
              key={item.i}
            >
              <Image
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
                src={item.img}
                className="rounded-3xl"
                alt="bhdigital"
              />
            </div>
          )
        )}
      </GridLayout>
    </div>
  );
};

export default BlockheadDigital;
