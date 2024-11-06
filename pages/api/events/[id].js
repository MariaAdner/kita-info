import Event from "@/db/models/Event";
import dbConnect from "@/db/connect";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  const session = await getServerSession(request, response, authOptions);

  await dbConnect();

  const { id } = request.query;

  if ((request.method = "GET")) {
    try {
      if (session) {
        const events = await Event.findById(id);

        if (!events) {
          return response.status(404).json({ status: "Not Found" });
        }
        response.status(200).json(events);
      } else {
        response.status(401).json({ status: "Not authorized" });
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}
