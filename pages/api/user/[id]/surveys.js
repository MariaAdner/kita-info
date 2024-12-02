import dbConnect from "@/db/connect";
import User from "@/db/models/User";
import Survey from "@/db/models/Survey";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "POST") {
    // create new survey
    const survey = await Survey.create(request.body);
    // find the survey with the given id (from the URL [id] portion)
    const user = await User.findById(request.query.id);
    // add the _id of the survey to the surveys referene array of the user
    user.surveys.push(survey._id);
    // update the db
    await user.save();
    return response.status(201).json(survey);
  }
}
