import New from "@/db/models/New";
import dbConnect from "@/db/connect";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;

  if ((request.method = "GET")) {
    const news = await New.findById(id);

    if (!news) {
      return response.status(404).json({ status: "Not Found" });
    }
    response.status(200).json(news);
  }
}
