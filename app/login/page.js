import SignInButton from "@/app/_components/SignInButton";
import { signOutAction } from "../_lib/actions";

export default function Page() {
  return (

    <div className="flex flex-col gap-10 mt-10 items-center">
      <h2 className="text-2xl  md:text-3xl font-semibold text-center md:text-start ">
        Sign in to access your guest area
      </h2>
      <SignInButton/>
    </div>

  );
}
