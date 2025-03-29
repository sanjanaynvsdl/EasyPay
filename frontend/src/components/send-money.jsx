import { useState } from "react";
import InputBox from "./input-box";
import User from "./user";
import axiosInstance from "../api/axios-instance";

export default function SendMoney({
  isSelected,
  selecteduser,
  getBalance,
  currBalance,
}) {
  const [amount, setAmount] = useState(0);

  const [isLoading, SetIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setIsSucess] = useState(false);

  const handleTransaction = async () => {
    
    if (amount > currBalance) {
      setError("Insufficient balance!");
      return;
    }

    setError(null);
    SetIsLoading(true);
    setIsSucess(false);

    try {
      const response = await axiosInstance.post("/account/transfer", {
        to: selecteduser._id,
        amount: amount,
      },{
        headers:{
          token:localStorage.getItem('token')
        }
      });

      if (response.data?.message) {
        setIsSucess(true);
        getBalance();
      }
      setAmount(0);

      setTimeout(()=>{
        setIsSucess(false);
      },4000)

    } catch (error) {

      if(error.response && error.response.data) {
        setError(error.response.data?.message || "Transaction failed, Please try again!")
      } else {
        setError("Transaction failed!");

        setTimeout(()=>{
          setError(null);
        },4000);
      }
    } finally {
      SetIsLoading(false);
    }
  };


  return (
    <div className="bg-white border border-[#e3e3e3]  py-6 px-8 shadow-xl rounded-lg max-w-2xl">
      <div className="flex flex-col justify-start">
        <p className="text-xl font-bold mb-4 px-2">Send Money</p>

        <div className="flex mb-4">
          {!isSelected ? (
            <p className="">Choose a user first.</p>
          ) : (
            <div>
              <User
                firstName={selecteduser.firstName}
                lastName={selecteduser.lastName}
                email={selecteduser.email}
                isSelected={isSelected}
              />
            </div>
          )}
        </div>

        <InputBox
          onChange={(e) => setAmount(e.target.value)}
          label="Amount in (Rs)"
          type="Number"
        />
        <button
        disabled={(isLoading==true|| !isSelected )? true:false}
          onClick={handleTransaction}
          className={`outline-none  text-white py-2 text-lg my-1 rounded-lg 
             ${(isSelected==true && isLoading==false) && "hover:bg-[#6063f4]/80 cursor-pointer"}  
             ${isLoading && "bg-[#9b9cd5]"}
             ${isSelected==false ? "bg-[#9b9cd5] cursor-not-allowed":"bg-[#7f8afa]" }`}
        >
          {isLoading ? "Processing..." : "Initiate Transaction"}
        </button>
        <div className="py-1">
          {error && <p className="bg-red-200 border-1 text-center border-red-400 px-2 py-2 rounded-md  text-sm ">{error}</p>}
          {success && <p className="bg-green-200 border-1 text-center border-green-400 px-2 py-2 rounded-md text-sm">Transaction Successfull!</p>}
        </div>
      </div>
    </div>
  ); 
}
