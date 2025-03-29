export default function CurrentBalance({balance,username}) {
  return (
    <div className="bg-white border border-[#e3e3e3] px-auto py-6 shadow-xl rounded-lg max-w-4xl">
      <div className="flex flex-col gap-2 items-center px-4">
        <p className="text-xl font-bold">Hello, {username}!</p>
        <p>Your current balance is <span className="font-bold">Rs. {balance}</span></p>
        <p>Please select a recipient to make a transaction. </p>
        
      </div>
    </div>
  );
}
