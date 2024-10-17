import dbConnect from "@/db/connect";
import Message from "@/db/models/Message";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "POST") {
    try {
      const message = request.body;
      await Message.create(message);
      response.status(201).json({ status: "Message created" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
}
