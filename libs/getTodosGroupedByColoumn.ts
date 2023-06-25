import { databases } from "@/appwrite";

export const getTodosGroupedByColoumn = async () => {
  const data = await databases.listDocuments(
    "6492a39d932fac34456b",
    "6492a3f3dc2b6a6df10f"
  );

  const Data = data.documents;

  const columns = Data.reduce((acc, todo) => {
    if (!acc.get(todo.status)) {
      acc.set(todo.status, { id: todo.status, todos: [] });
    }
    console.log(acc);
    acc.get(todo.status)!.todos.push({
      $id: todo.$id,
      $createdAt: todo.$createdAt,
      title: todo.title,
      status: todo.status,
      // get the image if it exists on the todo
      ...(todo.image && { image: JSON.parse(todo.image) }),
    });
    return acc;
  }, new Map<TypedColumn, Column>());

  // if columns doesnt have inprogress, todo and done, add them with empty todos
  const columnTypes: TypedColumn[] = ["todo", "inprogress", "done"];
  for (const columnType of columnTypes) {
    if (!columns.get(columnType)) {
      columns.set(columnType, { id: columnType, todos: [] });
    }
  }
  // sorted columns by columnTypes
  const sortedColumns = new Map(
    Array.from(columns.entries()).sort(
      (a, b) => columnTypes.indexOf(a[0]) - columnTypes.indexOf(b[0])
    )
  );
  const board: Board = {
    columns: sortedColumns,
  };
  console.log(board)
  return board;
};
