import { Card, CardContent } from "../ui/card/card";
import SignUpForm from "./signup-form";

function SignUp() {
  return (
    <Card className="border-0 h-screen grid place-content-center">
      <CardContent className="h-full p-0">
        <SignUpForm />
      </CardContent>
    </Card>
  );
}

export default SignUp;
