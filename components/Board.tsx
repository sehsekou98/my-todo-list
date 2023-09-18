'use client'

import { useBearStore } from '@/store/BoardStore';
import { useEffect } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

function Board()  {
   const getBoard = useBearStore((state) => state.getBoard); 

    useEffect(() => {
        getBoard();
    }, [getBoard]);

  return (
    <h1>Hello</h1>
  //<DragDropContext>
   // <Droppable droppableId='border' direction='horizontal' type='column'>
       // {(provided) => <div>{/**/}</div>}

    //</Droppable>
  //</DragDropContext>
  ); 

};

export default Board;
