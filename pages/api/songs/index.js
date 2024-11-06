import dbConnect from "../../../db/connect";
import Song from "../../../db/models/Song";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const songs = await Song.find();
    return response.status(200).json(songs);
  }
}
