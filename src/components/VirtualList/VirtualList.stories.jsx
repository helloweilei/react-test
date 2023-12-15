import React from "react";
import VirtualList from "./VirtualList.jsx";

//👇 This default export determines where your story goes in the story list
const meta = {
  component: VirtualList,
  tags: ["autodocs"],
  title: "Components/VirtualList",
};

export default meta;

const list = new Array(100).fill(0).map((_, index) => ({
  name: `List item ${index}`,
  key: index,
}));

export const Common = {
  args: {
    items: list,
    renderItem: (item) => <span>{item.name}</span>,
    height: 500,
    renderedItemCount: 30,
  },
};
