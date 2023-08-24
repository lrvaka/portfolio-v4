import GridLayout from "react-grid-layout";
import GridItemContainer from "./GridItems/GridItem/GridItemContainer";
import HeaderGridItem from "./GridItems/GridItem/HeaderGridItem";
import BlogGridItem from "./GridItems/GridItem/BlogGridItem";
import ProjectGridItem from "./GridItems/GridItem/ProjectGridItem";
import SpotifyGridItem from "./GridItems/GridItem/SpotifyGridItem";

import bhdigital from "@/public/bhdigital.png";

const projects = [
  {
    component: <HeaderGridItem />,
  },
  {
    component: <SpotifyGridItem />,
  },
  {
    component: (
      <ProjectGridItem
        name="Blockhead Digital"
        image={bhdigital}
        link="/projects/blockhead-digital"
      />
    ),
  },
  {
    component: <BlogGridItem />,
  },
  {
    component: <BlogGridItem />,
  },
  {
    component: <BlogGridItem />,
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

const Grid = () => {
  return (
    <>
      <GridLayout
        className="layout"
        layout={layout}
        cols={4}
        width={1120}
        isResizable={false}
        rowHeight={280}
      >
        {layout.map((item: { i: string }, index: number) => (
          <div
            className="bg-white rounded-3xl cursor-grab active:cursor-grabbing"
            key={item.i}
          >
            {projects[index].component}
          </div>
        ))}
      </GridLayout>
    </>
  );
};
// padding: 36px 42px;
export default Grid;
