import GridLayout from "react-grid-layout";

const projects = [
  {
    name: "Exquisite Wood Floors",
    color: "bg-red-200",
  },
  { name: "Weather App", color: "bg-red-500" },
  { name: "Blockhead Digital", color: "bg-green-200" },
  { name: "Dougll Do It", color: "bg-blue-200" },
  {
    name: "Redux - Simple Shopping Cart",
    color: "bg-green-200",
  },
  {
    name: "useMemo - useCallback - Contact List Search",
    color: "bg-red-200",
  },
];

const layout = [
  { i: "a", x: 0, y: 0, w: 2, h: 1 },
  { i: "b", x: 2, y: 0, w: 1, h: 1 },
  { i: "c", x: 3, y: 0, w: 1, h: 2 },
  { i: "d", x: 0, y: 1, w: 1, h: 1 },
  { i: "e", x: 1, y: 1, w: 1, h: 1 },
  { i: "f", x: 2, y: 1, w: 1, h: 2 },
];

const DevPortfolio = () => {
  return (
    <div>
      <GridLayout
        className="layout"
        layout={layout}
        cols={4}
        width={1120}
        isResizable={false}
        rowHeight={250}
      >
        {layout.map((item, index) => {
          return (
            <div
              className={`bg-white rounded-3xl`}
              key={item.i}
            >
              {projects[index].name}
            </div>
          );
        })}
      </GridLayout>
    </div>
  );
};

export default DevPortfolio;
