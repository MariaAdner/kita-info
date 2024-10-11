import dbConnect from "../../../db/connect";
import New from "../../../db/models/New";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const news = await New.find();
    return response.status(200).json(news);
  }
}
