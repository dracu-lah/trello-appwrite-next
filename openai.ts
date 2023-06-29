import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  organization: "org-4uJd1anKX54moUqSvhkHYSnU",
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
export default openai;
