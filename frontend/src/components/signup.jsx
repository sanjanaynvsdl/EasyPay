import { useState } from "react";
import InputBox from "../components/input-box";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(
      `The values for login are ${firstName} ${lastName} ${email} ${password}`
    );

    //todo: backend call
    setFirstName("");
    setLastName("");
    setPassword("");
    setEmail("");
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
              name="firstName"
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <InputBox
              size="lg"
              name="lastName"
              label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <InputBox
            size="lg"
            name="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputBox
            size="lg"
            name="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="outline-none bg-[#6063f4] text-white py-2 text-lg my-1 rounded-lg cursor-pointer hover:bg-[#6063f4]/80"
          >
            Submit
          </button>
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
