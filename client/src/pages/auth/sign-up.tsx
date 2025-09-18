import SignUpForm from "./_component/signup-form";
import Logo from "@/components/logo/logo";

const SignUp = () => {
  return (
    <div className="flex min-h-screen flex-col justify-center items-center p-6 md:p-10">
      {/* Logo */}
      <div className="mb-8">
        <Logo url="/" />
      </div>

      {/* Sign-up form */}
      <div className="w-full max-w-sm">
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
