import { useState } from "react";
import InputBox from "../components/input-box";
import { Link } from "react-router-dom";

export default function SignIn() {
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log(
      `Values for sign in are ${formData.email} ${formData.password}`
    );
    setFormData({
      email: "",
      password: "",
    });
  };
  const handleFormChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="p-8  sm:px-12 sm:py-8 flex justify-center items-center bg-white border-1 border-[#e3e3e3] shadow-xl rounded-lg">
      <div className="flex flex-col justify-center w-full max-w-md">
        <p className="text-2xl font-bold text-center mb-4">
          <span className="">Sign</span> In
        </p>
        <hr className="text-gray-200 mb-2"></hr>

        <form className="flex flex-col" onSubmit={handleSignIn}>
          <InputBox
            size="lg" 
            name="email" 
            label="Email"
            value={formData.email}
            onChange={handleFormChange} 
           />

          <InputBox
            size="lg" 
            name="password" 
            label="Password"
            value={formData.password}
            onChange={handleFormChange}  />

          <button
            type="submit"
            className="bg-[#6063f4] text-white py-2 text-lg my-1 rounded-lg cursor-pointer hover:bg-[#6063f4]/80"
          >
            Submit
          </button>
        </form>

        <p className="text-center my-2">
          Don't have an account?{" "}
          <Link to="/" className="text-[#6063f4] underline">SingUp</Link>
        </p>
      </div>
    </div>
  );
}
