import dbConnect from "../../../db/connect";
import Query from "../../../db/models/Query";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const querys = await Query.find();
    return response.status(200).json(querys);
  }
}
