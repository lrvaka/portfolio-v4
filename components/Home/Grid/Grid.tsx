import GridLayout from "react-grid-layout";
import GridItemContainer from "./GridItems/GridItem/GridItemContainer";
import HeaderGridItem from "./GridItems/GridItem/HeaderGridItem";
import BlogGridItem from "./GridItems/GridItem/BlogGridItem";
import ProjectGridItem from "./GridItems/GridItem/ProjectGridItem";
import SpotifyGridItem from "./GridItems/GridItem/SpotifyGridItem";
import { HTMLAttributes } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import bhdigital from "@/public/bhdigital.png";

const ResponsiveGridLayout = WidthProvider(Responsive);

interface DraggableDivProps extends HTMLAttributes<HTMLDivElement> {
  isDraggable?: boolean;
}

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

const layout1 = [
  { i: "a", x: 0, y: 0, w: 2, h: 1, isDraggable: false },
  { i: "b", x: 2, y: 0, w: 1, h: 1, isDraggable: false },
  { i: "c", x: 3, y: 0, w: 1, h: 2, isDraggable: false },
  { i: "d", x: 0, y: 1, w: 1, h: 1, isDraggable: false },
  { i: "e", x: 1, y: 1, w: 1, h: 1, isDraggable: false },
  { i: "f", x: 2, y: 1, w: 1, h: 2, isDraggable: false },
];

const layouts = { lg: layout, md: layout1, sm: layout1 };

const Grid = () => {
  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      cols={{ lg: 4, md: 3, sm: 2 }}
      breakpoints={{ lg: 1115, md: 996, sm: 0 }}
      isResizable={false}
      rowHeight={280}
    >
      {layout.map(
        (
          item: {
            i: string;
            isDraggable?: boolean;
            x: number;
            y: number;
            w: number;
            h: number;
          },
          index: number
        ) => (
          <div
            className="bg-white rounded-3xl lg:cursor-grab lg:active:cursor-grabbing "
            key={item.i}
            data-grid={{
              x: item.x,
              y: item.y,
              w: item.w,
              h: item.h,
              isDraggable: item.isDraggable,
            }}
          >
            {projects[index].component}
          </div>
        )
      )}
    </ResponsiveGridLayout>
  );
};

export default Grid;
