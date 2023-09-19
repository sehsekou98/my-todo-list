import { Draggable } from "react-beautiful-dnd";

type Props = {
  id: TypedColumn;
  todos: Todo[];
  index: number;
};

const Column = ({ id, todos, index }: Props) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {/** render droppable todos in the column */}
          {todos.map((todo, todoIndex) => (
            <Draggable
              key={todo.id} // Make sure each draggable element has a unique key
              draggableId={todo.id}
              index={todoIndex}
            >
              {(provided) => (
                <div
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                  // Your todo content here
                >
                  {todo.content}
                </div>
              )}
            </Draggable>
          ))}
        </div>
      )}
    </Draggable>
  );
};

export default Column;
