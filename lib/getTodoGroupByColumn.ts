import { database } from "@/AppWritr";

export const getTodosGroupByColumn = async () => {
  const data = await database.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_TODO_COLLECTIONS_ID!
  );

  const todos = data.documents;

  const columns = todos.reduce((acc, todo) => {
    if (!acc.get(todo.status)) {
      acc.set(todo.status, {
        id: todo.status,
        todos: [],
      });
    }

    acc.get(todo.status)!.todos.push({
      $id: todo.$id,
      $createdAt: todo.$createdAt,
      title: todo.title,
      status: todo.status,
      //get the image if it existe.
      ...(todo.image && { image: JSON.parse(todo.image) }),
    });
    return acc;
  }, new Map<TypedColumn, Column>());
  // if columns does not have todo, inprograss et done add them with empty todo

  const columnTypes: TypedColumn[]= ['todo', 'inprogress', 'done'];
  for (const columnType of columnTypes) {
    if (!columns.get(columnType)) {
        columns.set(columnType, {
            id: columnType,
            todos: [],
        });
    }
  }

  //sort columns by columnType

  const sortedColumns = new Map(
    Array.from(columns.entries()).sort(
        (a, b) => columnTypes.indexOf(a[0]) - columnTypes.indexOf(b[0])
    )
  );

  const board: Board = {
    columns: sortedColumns
  }

  return board;
};
