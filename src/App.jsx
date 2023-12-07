import React from 'react';
import VirtualList from './components/VirtualList/VirtualList.jsx';

const App = () => {
  const list = new Array(10000).fill(0).map((_, index) => ({
    name: `List item ${index}`,
    key: index
  }));

  return <VirtualList
    items={list}
    renderItem={item => <span>{item.name}</span>}
    height={500}
    renderedItemCount={30}
  ></VirtualList>
}

export default App;