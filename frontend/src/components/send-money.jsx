import InputBox from "./input-box";
import User from "./user";

export default function SendMoney() {
  return (
    <div className="bg-white border border-[#e3e3e3]  py-6 px-4 shadow-xl rounded-lg max-w-2xl">
      <div className="flex flex-col justify-start">
        <p className="text-xl font-bold mb-4 px-2">Send Money</p>
        <p className="mb-2">select a user to send money!</p>
        <div>
          <User />
        </div>

        <InputBox 
            label="Amount in (Rs)" 
            type="Number"
            />
        <button
          type="submit"
          className="outline-none bg-[#7f8afa] text-white py-2 text-lg my-1 rounded-lg cursor-pointer hover:bg-[#6063f4]/80"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
