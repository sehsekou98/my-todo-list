import { database } from "@/AppWritr"


export const getTodosGroupByColumn = async () => {
    const data = await database.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID!,
        process.env.NEXT_PUBLIC_TODO_COLLECTIONS_ID!
    );

     console.log(data);    

};