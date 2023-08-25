import { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

import ExternalLinkGridItem from "./GridItems/GridItem/ExternalLinkGridItem";
import HeaderGridItem from "./GridItems/GridItem/HeaderGridItem";
import BlogGridItem from "./GridItems/GridItem/BlogGridItem";
import ProjectGridItem from "./GridItems/GridItem/ProjectGridItem";
import SpotifyGridItem from "./GridItems/GridItem/SpotifyGridItem";

import bhdigital from "@/public/bhdigital.png";
import twitter from "@/public/twitter.png";

const ResponsiveGridLayout = WidthProvider(Responsive);

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
    component: (
      <ExternalLinkGridItem
        name="Twitter"
        image={twitter}
        link="https://twitter.com/lrvaka"
      />
    ),
  },
  {
    component: <BlogGridItem />,
  },
  {
    component: <BlogGridItem />,
  },
];

const layout = [
  { i: "a", x: 0, y: 0, w: 2, h: 1, isDraggable: true },
  { i: "b", x: 2, y: 0, w: 1, h: 1, isDraggable: true },
  { i: "c", x: 3, y: 0, w: 1, h: 2, isDraggable: true },
  { i: "d", x: 0, y: 1, w: 1, h: 1, isDraggable: true },
  { i: "e", x: 1, y: 1, w: 1, h: 1, isDraggable: true },
  { i: "f", x: 2, y: 1, w: 1, h: 2, isDraggable: true },
];

const layout1 = [
  { i: "a", x: 0, y: 0, w: 2, h: 2, isDraggable: false },
  { i: "b", x: 2, y: 0, w: 2, h: 1, isDraggable: false },
  { i: "c", x: 3, y: 0, w: 1, h: 2, isDraggable: false },
  { i: "d", x: 0, y: 1, w: 1, h: 1, isDraggable: false },
  { i: "e", x: 1, y: 1, w: 1, h: 1, isDraggable: false },
  { i: "f", x: 2, y: 1, w: 1, h: 2, isDraggable: false },
];

const layouts = {
  lg: layout,
  md: layout1,
  sm: layout1,
};

const Grid = () => {
  const [rowHeight, setRowHeight] = useState(280);
  //breakpoint is the width of container - not screen size
  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      cols={{ lg: 4, md: 4, sm: 2 }}
      breakpoints={{ lg: 1151, md: 767, sm: 0 }}
      isResizable={false}
      rowHeight={rowHeight}
      onBreakpointChange={(currentBreakpoint) => {
        if (currentBreakpoint === "lg") {
          setRowHeight(280);
        }
        if (currentBreakpoint === "md") {
          setRowHeight(180);
        }
        if (currentBreakpoint === "sm") {
          setRowHeight(180);
        }
      }}
    >
      {projects.map((project, index) => (
        <div
          className="bg-white rounded-3xl xl:cursor-grab xl:active:cursor-grabbing "
          key={layout[index].i}
        >
          {project.component}
        </div>
      ))}
    </ResponsiveGridLayout>
  );
};

export default Grid;
