import NavBar from "../components/nav-bar";
import CurrentBalance from "../components/current-balance";
import SendMoney from "../components/send-money";
import axiosInstance from "../api/axios-instance";
import { useEffect, useState, useRef } from "react";
import InputBox from "../components/input-box";
import User from "../components/user";

export default function Dashboard() {
  const [balance, setBalance] = useState(0);
  const [username, setUserName] = useState("");

  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUserd] = useState([]);
  const [selecteduser, setSelecteduser] = useState(null);
  const searchUser = useRef("");

  const [isLoading, SetIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUserName();
    getBalance();
    getUsers();
  }, []);

  const getBalance = async () => {
    setError(null);
    SetIsLoading(true);

    try {
      const response = await axiosInstance.get("/account/balance", {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      if (response.data) {
        setBalance(response.data.balance);
      } else {
        setError("unable to retrieve balance!");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data?.message || "Failed to fetch balance!");
      } else {
        setError("An unknown error occurred while fetching balance!");
      }
    } finally {
      SetIsLoading(false);
    }
  };

  const getUserName = async () => {
    SetIsLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.get("/user", {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      setUserName(response.data?.username);
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data?.message || "unable to get username");
      } else {
        setError("An unknow error occurred while fetching user-details!");
      }
    } finally {
      SetIsLoading(false);
    }
  };

  const getUsers = async () => {
    setError(null);
    SetIsLoading(true);
    try {
      const response = await axiosInstance.get("/user/bulk", {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      console.log(response.data.users[0]);
      setUsers(response.data?.users);
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data?.message || "Failed to fetch users");
      } else {
        setError("An unknown error occurred while fetching users.");
      }
    } finally {
      SetIsLoading(false);
    }
  };

  const handleFilteredUsers = () => {
    // setUsers((user)=>(
    // ))
  };

  return (
    <div>
      <div className="fixed top-0 left-0 w-full">
        <NavBar />
      </div>
      <div className="bg-[#eef2ff] w-full min-h-screen flex justify-center">
        <div className="flex flex-col py-24 gap-6 ">
          {isLoading ? (
            <div className="bg-white border border-[#e3e3e3] px-auto py-6 shadow-xl rounded-lg animate-pulse">
              <div className="h-6 bg-gray-300 rounded-md w-1/2 mx-auto mb-2"></div>
              <div className="h-10 bg-gray-300 rounded-md w-3/4 mx-auto "></div>
            </div>
          ) : (
            <CurrentBalance balance={balance} username={username} />
          )}

          <div className="flex md:flex-row flex-col gap-6 justify-center">
            {isLoading ? 
            <div className="bg-white border border-[#e3e3e3] px-12 py-6 shadow-xl rounded-lg animate-pulse">
            <div className="h-12 bg-gray-300 rounded-md w-[14rem] mx-auto mb-2"></div>
            <div className="h-[12rem] bg-gray-300 rounded-md w-[14rem] mx-auto mb-2"></div>
          </div>
          : (

            <div>
              <div className="bg-white border border-[#e3e3e3]  py-6 px-4 shadow-xl rounded-lg max-w-2xl">
                <div className="flex flex-col justify-start">
                  <p className="text-xl font-bold mb-4 px-2">Users</p>
                  <div className="mb-2">
                    <InputBox
                      ref={searchUser}
                      placeholder="Search for a user"
                    />
                  </div>

                  <div className="flex flex-col items-start max-h-[14rem] overflow-y-auto">
                    {users.length > 0 &&
                      users.map((user, index) => (
                        <div key={index}>
                          <User
                            firstName={user.firstName}
                            lastName={user.lastName}
                            email={user.email}
                          />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          )  
          }

            {/* users */}
            <SendMoney />
          </div>
        </div>
      </div>
    </div>
  );
}
