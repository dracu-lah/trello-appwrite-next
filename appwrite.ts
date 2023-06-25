import { Client, ID, Storage, Databases, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64929ec23e8be8c36d08");

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

export { client, account, databases, storage };
