import SignIn from "../components/signin";

export default function SignInPage() {
  return (
    <div className="bg-[#eef2ff] md:overflow-hidden md:h-screen">
      <div className="flex justify-center items-center py-12 px-8 sm:px-auto flex-col">
        <div className="">
          <p className="text-3xl md:text-4xl text-black font-bold mb-6 tracking-tight">
            Welcome back to{" "}
            <span className="font-bold text-[#6063f4]">Easy Pay.</span>
          </p>
          <p className="text-lg md:text-lg text-[#5153e6] mb-8 ">
            Continue your transactions seamlessly and securely.
          </p>
        </div>
        <SignIn />
      </div>
    </div>
  );
}
