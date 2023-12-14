import React, { useRef } from "react";
import styled from "styled-components";
import useScrollInfo from "../../hooks/useScrollInfo";

const ListWrapper = styled.div`
  overflow: auto;
  height: ${(props) => `${props.height}px`};
  background-color: #ddd;
  position: relative;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Expanded = styled.div`
  pointer-events: none;
  opacity: 0;
  width: 1px;
  height: ${(props) => `${props.height}px`};
  position: absolute;
  top: 0px;
`;

const Empty = styled.div`
  pointer-events: none;
  opacity: 0;
  width: 1px;
  height: ${(props) => `${props.height}px`};
`;

/**
 * Render a virtual list for performance
 */
const VirtualList = (props) => {
  const {
    items,
    renderItem,
    height,
    renderedItemCount,
    itemHeight = 40,
  } = props;
  const totalHeight = items.length * itemHeight;

  const wrapperRef = useRef(null);

  const { scrollRatio } = useScrollInfo(wrapperRef);

  // eslint-disable-next-line no-console
  console.log("scrolled");

  const itemCountInView = Math.ceil(height / itemHeight);
  const actualRenderedCount =
    renderedItemCount > itemCountInView
      ? renderedItemCount
      : itemCountInView + 10;

  const startPosition =
    Math.floor((items.length - itemCountInView) * scrollRatio) -
    Math.round((actualRenderedCount - itemCountInView) / 2);

  const finalStart = Math.max(0, startPosition);

  const shouldDisplayedItems = items.slice(
    finalStart,
    finalStart + actualRenderedCount
  );

  return (
    <ListWrapper ref={wrapperRef} height={height}>
      <Empty height={finalStart * itemHeight}></Empty>
      <List>
        {shouldDisplayedItems.map((item) => (
          <li key={item.key} style={{ height: `${itemHeight}px` }}>
            {renderItem(item)}
          </li>
        ))}
      </List>
      <Expanded height={totalHeight}></Expanded>
    </ListWrapper>
  );
};

export default VirtualList;
