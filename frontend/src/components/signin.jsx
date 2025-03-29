import { useState } from "react";
import InputBox from "../components/input-box";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../api/axios-instance";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [isLoading, SetIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    setError(null);
    SetIsLoading(true);

    try {
      const response = await axiosInstance.post("/user/signin", formData);
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/home");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setError(
          error.response.data.message || "Sign In failed, Please try again!"
        );
      } else {
        setError("An unknow error occurred while sign up!");
      }
    } finally {
      SetIsLoading(false);
      setFormData({
        email: "",
        password: "",
      });
    }
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
            type="string"
            placeholder=""
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleFormChange}
          />

          <InputBox
            size="lg"
            type="password"
            placeholder=""
            name="password"
            label="Password"
            value={formData.password}
            onChange={handleFormChange}
          />

          <button
            disabled={isLoading}
            type="submit"
            className={`outline-none disabled:bg-[#9b9cd5] bg-[#6063f4] text-white py-2 text-lg my-1 rounded-lg 
               hover:bg-[#6063f4]/80 ${
                 isLoading ? "cursor-not-allowed" : "cursor-pointer"
               }`}
          >
            {isLoading ? "signin in..." : "Submit"}
          </button>
          <div className="flex justify-center my-2">
            {error && (
              <p className="bg-red-200 border-1 border-red-400 px-2 py-1 rounded-md  text-sm">
                {error}
              </p>
            )}
          </div>
        </form>

        <p className="text-center my-2">
          Don't have an account?{" "}
          <Link to="/" className="text-[#6063f4] underline">
            SingUp
          </Link>
        </p>
      </div>
    </div>
  );
}
