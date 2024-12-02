import Survey from "@/db/models/Survey";
import dbConnect from "@/db/connect";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;

  if ((request.method = "GET")) {
    const survey = await Survey.findById(id);

    if (!query) {
      return response.status(404).json({ status: "Not Found" });
    }
    response.status(200).json(survey);
  }

  if ((request.method = "PUT")) {
    const surveyData = request.body;
    await Survey.findByIdAndUpdate(id, surveyData);
    return response.status(200).json({ status: `Survey ${id} updated!` });
  }
}
