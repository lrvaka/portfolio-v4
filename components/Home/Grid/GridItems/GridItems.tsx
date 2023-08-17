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

type GridItemsProps = {
  layout: Array<{ i: string; x: number; y: number; w: number; h: number }>;
};

const GridItems = ({ layout }: GridItemsProps) => {
  return (
    <>
      {layout.map((item: { i: string }, index: number) => (
        <div className={`bg-white rounded-3xl`} key={item.i}>
          {projects[index].name}
        </div>
      ))}
    </>
  );
};

export default GridItems;
