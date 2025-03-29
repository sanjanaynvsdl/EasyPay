import User from "../components/user";
export default function Receipients() {
  return (
    <div className="bg-white border border-[#e3e3e3]  py-6 px-4 shadow-xl rounded-lg max-w-2xl">
      <div className="flex flex-col justify-start">
        <p className="text-xl font-bold mb-4 px-2">Users</p>

        <div className="flex flex-col max-h-[16rem] overflow-y-auto">
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
        </div>
      </div>
    </div>
  );
}
