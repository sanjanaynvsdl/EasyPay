import NavBar from "../components/nav-bar";
import CurrentBalance from "../components/current-balance";
import SendMoney from "../components/send-money";
import Receipients from "../components/recipients-bulk"

export default function Dashboard() {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full">
        <NavBar />
      </div>
      <div className="bg-[#eef2ff] w-full min-h-screen flex justify-center">
        <div className="flex flex-col py-24 gap-6 ">
          <CurrentBalance />

          <div className="flex md:flex-row flex-col gap-6 justify-center">
            <Receipients/>
            <SendMoney />
          </div>
        </div>
      </div>
    </div>
  );
}
