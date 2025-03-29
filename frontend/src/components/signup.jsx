import { useState } from "react";
import InputBox from "../components/input-box";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../api/axios-instance";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);
  const [isLoading, SetIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null);
    SetIsLoading(true);

    try {

      const response = await axiosInstance.post("/user/signup", {
        firstName,
        lastName,
        email,
        password,
      });

      localStorage.setItem("token", response.token);
      navigate("/home");

    } catch (error) {
      if (error.response && error.response.data) {
        setError(
          error.response.data.message || "Sign Up failed, Please try again!"
        );
      } else {
        setError("An unknown error occurred while sign up!");
      }


    } finally{

      SetIsLoading(false);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");

    }
  };

  return (
    <div className="p-8 flex justify-center items-center bg-white border-1 border-[#e3e3e3] shadow-xl rounded-lg">
      <div className="flex flex-col justify-center w-full max-w-md">
        <p className="text-2xl font-medium text-center mb-4">
          <span className="">Create Account</span>
        </p>
        <hr className="text-gray-200 mb-2"></hr>

        <form onSubmit={handleSignUp} className="flex flex-col">
          <div className="flex flex-col md:flex-row ">
            <InputBox
              size="small"
              type="string"
              placeholder=""
              name="firstName"
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <InputBox
              size="lg"
              type="string"
              placeholder=""
              name="lastName"
              label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <InputBox
            size="lg"
            name="email"
            type="string"
            placeholder=""
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputBox
            size="lg"
            type="password"
            placeholder=""
            name="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            disabled={isLoading}
            type="submit"
            className={`outline-none disabled:bg-[#9b9cd5]  text-white py-2 text-lg my-1 rounded-lg 
                ${isLoading ? "cursor-not-allowed bg-[#9b9cd5]":"cursor-pointer bg-[#6063f4] hover:bg-[#6063f4]/80"}`}
          >
            {isLoading ? "Loading..." : "Submit"}
          </button>

          <div className="flex justify-center my-2"> 
            {error && <p className="bg-red-200 border-1 border-red-400 px-2 py-1 rounded-md  text-sm ">{error}</p>}

          </div>
        </form>
        <p className="text-center my-2">
          Already have an account?{" "}
          <Link to="/signin" className="text-[#6063f4] underline">
            SignIn
          </Link>
        </p>
      </div>
    </div>
  );
}
