export default function NavBar() {
  return (
    <div className="flex bg-[#7f8afa] w-full h-16 py-4 px-8 md:px-24 justify-between">
      <p className="text-black font-bold text-lg">
        Easy <span className="text-white">Pay.</span>
      </p>

      <button className="text-white font-medium border-2 cursor-pointer hover:bg-[#858fec] outline-none transition-all border-white/80 px-4 rounded-lg">
        Logout
      </button>
    </div>
  );
}
