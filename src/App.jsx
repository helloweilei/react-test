import React from "react";
import VirtualList from "./components/VirtualList/VirtualList.jsx";
import CustomSearch from "./components/CustomSearch/CustomSearch.jsx";
import LazyImage from "./components/LasyImage/LazyImage.jsx";

const App = () => {
  const list = new Array(10000).fill(0).map((_, index) => ({
    name: `List item ${index}`,
    key: index,
  }));

  return (
    <>
      <VirtualList
        items={list}
        renderItem={(item) => <span>{item.name}</span>}
        height={500}
        renderedItemCount={30}
      ></VirtualList>
      <CustomSearch></CustomSearch>
      <LazyImage src="https://wx4.sinaimg.cn/orj480/dcd3f3bdly1hk31t2hv79j20lc0sggr6.jpg"></LazyImage>
      <div style={{ height: "400px" }}></div>
      <LazyImage src="https://wx4.sinaimg.cn/orj480/dcd3f3bdly1hk31t2hv79j20lc0sggr6.jpg"></LazyImage>
      <div style={{ height: "400px" }}></div>
      <LazyImage src="https://wx4.sinaimg.cn/orj480/dcd3f3bdly1hk31t2hv79j20lc0sggr6.jpg"></LazyImage>
    </>
  );
};

export default App;
