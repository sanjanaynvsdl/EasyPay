import User from "../components/user";
import InputBox from "./input-box";
export default function Receipients() {
  return (
    <div className="bg-white border border-[#e3e3e3]  py-6 px-4 shadow-xl rounded-lg max-w-2xl">
      <div className="flex flex-col justify-start">
        <p className="text-xl font-bold mb-4 px-2">Users</p>
        <div className="mb-2">
          <InputBox placeholder="Search for a user" />
        </div>

        <div className="flex flex-col max-h-[14rem] overflow-y-auto">
          <User/>
        </div>
      </div>
    </div>
  );
}
