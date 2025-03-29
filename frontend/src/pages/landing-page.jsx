import herosectionImage from "../assets/herosectionImage.png";
import SignUp from "../components/signup";

export default function LandingPage() {
  return (
    <div className="md:overflow-hidden md:h-screen">
      <div className="w-full min-h-screen bg-[#eef2ff] flex flex-col items-center py-12 px-6 sm:px-10 sm:py-12">
        <div className="flex flex-col mb-10">
          <p className="text-center mb-4 tracking-tight text-lg ">
            Welcome to{" "}
            <span className="text-[#5153e6] font-bold">Easy Pay.</span>
          </p>
          <p className="text-black text-3xl md:text-4xl  text-center font-bold tracking-tight mb-4">
            Make seamless transactions with just a tap!
          </p>
          <p className="text-[#5153e6] text-xl  text-center ">
            Send, Receive, and Manage your money effortlessly.
          </p>
        </div>
        <div className="flex flex-col md:flex-row  justify-center items-center sm:gap-24">
          <div>
            <SignUp />
          </div>
          <div className="">
            <img src={herosectionImage} className="h-md w-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
