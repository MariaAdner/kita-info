import Query from "@/db/models/Query";
import dbConnect from "@/db/connect";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;

  if ((request.method = "GET")) {
    const querys = await Query.findById(id);

    if (!querys) {
      return response.status(404).json({ status: "Not Found" });
    }
    response.status(200).json(querys);
  }
}
