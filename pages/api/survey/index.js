import dbConnect from "../../../db/connect";
import Survey from "../../../db/models/Survey";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const surveys = await Survey.find();
    return response.status(200).json(surveys);
  }
}
