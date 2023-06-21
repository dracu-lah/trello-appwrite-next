import { databases } from "@/appwrite";

export const getTodosGroupedByColoumn = async () => {
  const data = await databases.listDocuments(
    process.env.NEXT_PUBIC_APPWRITE_DATABASE_ID!,
    process.env.NEXT_PUBIC_APPWRITE_TODOS_COLLECTION_ID!
  );
  console.log(data)
};
