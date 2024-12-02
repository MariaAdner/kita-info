import dbConnect from "@/db/connect";
import User from "@/db/models/User";
import Query from "@/db/models/Survey";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "POST") {
    // create new query
    const query = await Query.create(request.body);
    // find the query with the given id (from the URL [id] portion)
    const user = await User.findById(request.query.id);
    // add the _id of the query to the queries referene array of the user
    user.queries.push(query._id);
    // update the db
    await user.save();
    return response.status(201).json(query);
  }
}
