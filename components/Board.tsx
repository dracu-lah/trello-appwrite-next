"use cient";
import { useBoardStore } from "@/store/BoardStore";
import React, { useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
const Board = () => {
  const getBoard = useBoardStore((state) => state.getBoard);
  useEffect(() => {
    // getBoardData
    getBoard();
  }, [getBoard]);
  return (
    <DragDropContext>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => <div></div>}
      </Droppable>
    </DragDropContext>
  );
};

export default Board;
