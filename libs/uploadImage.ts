import { storage } from "@/appwrite";
import { ID } from "appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;
  const fileUploaded = await storage.createFile(
    "6492a5ccf175ae0a34b1",
    ID.unique(),
    file
  );
  return fileUploaded;
};

export default uploadImage;
