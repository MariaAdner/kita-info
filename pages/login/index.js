import AuthForm from "@/components/AuthForm";
import SubHeader from "@/components/SubHeader";

export default function Login() {
  return (
    <div>
      <SubHeader $variant="blue">Login</SubHeader>
      <AuthForm />
    </div>
  );
}
