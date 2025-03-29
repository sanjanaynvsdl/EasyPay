export default function User({ firstName, lastName, email }) {
  return (
    <div className="flex justify-center items-center gap-2 hover:bg-gray-400/20 rounded-sm cursor-pointer p-2">
      <div className="">
        <p className=" w-12 h-12 flex justify-center items-center rounded-full text-lg bg-[#c7d2ff]  text-[#6063f4] font-bold">
        {firstName?.[0].toUpperCase() || ""}
        </p>
      </div>
      <div className="flex flex-col pr-24">
        <p className="font-medium">{firstName} {lastName}</p>
        <p className="text-sm">{email}</p>
      </div>
    </div>
  );
}
