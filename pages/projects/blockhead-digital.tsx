import GridLayout from "react-grid-layout";

const layout = [
  { i: "a", x: 0, y: 0, w: 2, h: 1 },
  { i: "b", x: 2, y: 0, w: 1, h: 1 },
  { i: "c", x: 3, y: 0, w: 1, h: 2 },
  { i: "d", x: 0, y: 1, w: 1, h: 1 },
  { i: "e", x: 1, y: 1, w: 1, h: 1 },
  { i: "f", x: 2, y: 1, w: 1, h: 2 },
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
      ></GridLayout>
    </div>
  );
};

export default BlockheadDigital;
