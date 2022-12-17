import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const currentUser = {
      email: user?.user?.email,
      name: user?.user?.displayName
    };
    if (user) {
      axios
        .put(`https://toolspiashop-server.vercel.app//user/${user?.user?.email}`, currentUser)
        .then((data) => {
          localStorage.setItem("accessToken", data.data.token);
          setToken(data.data.token);
        });
    }
  }, [user]);
  return [token];
};
export default useToken;
