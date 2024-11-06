import dbConnect from "../../../db/connect";
import Tablesaying from "@/db/models/Tablesaying";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const tablesayings = await Tablesaying.find();
    return response.status(200).json(tablesayings);
  }
}
