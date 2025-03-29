export default function CurrentBalance() {
  return (
    <div className="bg-white border border-[#e3e3e3] px-auto py-6 shadow-xl rounded-lg max-w-4xl">
      <div className="flex flex-col gap-2 items-center px-4">
        <p className="text-xl font-bold">Hello User,</p>
        <p>Your current balance is Rs : 10,000</p>
        <p>Please select a receipient to send money.</p>
        
      </div>
    </div>
  );
}
