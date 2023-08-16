import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  width: 200px;
  height: auto;
  display: flex;

  border: 1px solid grey;
  padding: 10px;
  border-radius: 3px;
  justify-content: space-between;
  align-items: center;
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;

const SelectedItemsContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
`;

const SelectIcon = styled.span`
  display: "inline-block";
  width: 20px;
`;

const DropDown = styled.ul`
  position: absolute;
  top: ${({ wrapperClientHeight }) => wrapperClientHeight + 5}px;
  left: 0px;
  background-color: white;
  z-index: 2;
  max-height: 200px;
  overflow: ${({ opened }) => (opened ? "scroll" : "clip")};
  opacity: ${({ opened }) => (opened ? 1 : 0)};
  display: ${({ opened }) => (opened ? "visible" : "none")};
  width: inherit;
  border: 1px solid grey;
  border-radius: 3px;
  padding: 6px;
  & > li {
    list-style: none;
    padding: 8px;
    &:hover {
      background-color: papayawhip;
    }
  }
`;

const Chip = styled.span`
  background: #e8f7f6;
  padding: 6px;
  border-radius: 4px;
  margin: 4px;
  & > span {
    margin-right: 8px;
  }
`;

export const MultiSelect = ({
  raised = true,
  items,
  state,
  placeholder = "Select an Item",
}) => {
  const [selectedItems, setSelectedItems] = state;
  const [opened, setIsOpened] = useState(false);
  const wrapperRef = useRef(null);
  const [wrapperClientHeight, setWrapperClientHeight] = useState(40);

  const onClickWrapper = () => {
    setIsOpened(!opened);
  };

  const onClickDeleteItem = (id) => {
    setSelectedItems(selectedItems.filter((item) => item.id !== id));
  };

  useEffect(() => {
    if (wrapperRef && wrapperRef.current) {
      if (selectedItems.length > 0) {
        const newwrapperClientHeight =
          wrapperRef && wrapperRef.current
            ? wrapperRef.current.clientHeight
            : 25;

        setWrapperClientHeight(newwrapperClientHeight);
      } else {
        setWrapperClientHeight(40);
      }
    }
  }, [selectedItems]);

  useEffect(() => {
    if (selectedItems.length === items.length) {
      setIsOpened(false);
    }
  }, [selectedItems, items]);

  const onDropDownClicked = (newItem) => {
    setSelectedItems([...selectedItems, newItem]);
  };

  const filteredItems = items.filter(
    (item) => selectedItems.findIndex((sel) => sel.id === item.id) === -1
  );
  return (
    <Wrapper raised={raised} onClick={onClickWrapper} ref={wrapperRef}>
      <SelectedItemsContainer>
        {selectedItems.length === 0 && <span>{placeholder} </span>}
        {selectedItems.map(({ id, value }) => (
          <Chip key={id} onClick={(e) => e.stopPropagation()}>
            {" "}
            <span>{value}</span>
            <span
              onClick={(e) => {
                e.stopPropagation();
                onClickDeleteItem(id);
              }}
            >
              <FontAwesomeIcon icon={faTimes} fontSize="10px" color="gray" />
            </span>
          </Chip>
        ))}
      </SelectedItemsContainer>
      <SelectIcon>
        <FontAwesomeIcon
          icon={opened ? faArrowUp : faArrowDown}
          fontSize="12px"
        />
      </SelectIcon>
      {filteredItems.length > 0 && (
        <DropDown
          opened={opened}
          raised={raised}
          wrapperClientHeight={wrapperClientHeight}
        >
          {filteredItems.map(({ id, value }) => (
            <li
              key={id}
              onClick={(e) => {
                e.stopPropagation();
                onDropDownClicked({ id, value });
              }}
            >
              {" "}
              {value}
            </li>
          ))}
        </DropDown>
      )}
    </Wrapper>
  );
};
