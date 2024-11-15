import AuthForm from "@/components/AuthForm";
import SubHeader from "@/components/SubHeader";

export default function Login() {
  return (
    <div>
      <SubHeader $variant="menu">Login</SubHeader>
      <AuthForm />
    </div>
  );
}
