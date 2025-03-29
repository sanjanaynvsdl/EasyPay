import { Link } from "react-router-dom"

export default function InvalidPage() {
    return(
        <div className="bg-[#eef2ff] w-full min-h-screen flex justify-center py-10">
            <div className="flex flex-col gap-2 text-center">

            <p className="text-2xl font-bold my-2">Oops! Looks like you're lost.  </p>
            <p className="">Click the link to head back <Link to="/" className="text-blue-400 underline">Home</Link></p>
            </div>
            
        </div>
    )
} 