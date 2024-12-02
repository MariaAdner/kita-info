import SurveyForm from "@/components/SurveyForm";
import SurveyItem from "@/components/SurveyItem";
import UserQuery from "@/components/UserSurvey";

export default function SurveyDetailPage() {
  return (
    <>
      <SurveyItem />
      <UserQuery />
      <SurveyForm />
    </>
  );
}
