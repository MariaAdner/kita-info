import Query from "@/db/models/Survey";
import dbConnect from "@/db/connect";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;

  if ((request.method = "GET")) {
    const query = await Query.findById(id);

    if (!query) {
      return response.status(404).json({ status: "Not Found" });
    }
    response.status(200).json(query);
  }

  // if (request.method === "POST") {
  //   try {
  //     const queryData = request.body;
  //     await Query.create(queryData);
  //     response.status(201).json({ status: "Query created" });
  //   } catch (error) {
  //     console.log(error);
  //     response.status(400).json({ error: error.query });
  //   }
  // }

  if ((request.method = "PUT")) {
    const queryData = request.body;
    await Query.findByIdAndUpdate(id, queryData);
    return response.status(200).json({ status: `Query ${id} updated!` });
  }
}
