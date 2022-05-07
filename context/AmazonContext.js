import { createContext, useState, useEffect } from "react";
import { useMoralis } from "react-moralis";

export const AmazonContext = createContext();

export const AmazonProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");

  const {
    isAuthenticated,
    authenticated,
    enableWeb3,
    Moralis,
    user,
    isWeb3Enabled,
  } = useMoralis;

  const handleSetUsername = () => {
    if (user) {
      if (nickname) {
        user.set("nickname", nickname);
        user.save();
        setNickname("");
      } else {
        console.log("Can't Set Emplty Field");
      }
    } else {
      console.log("No User");
    }
  };

  useEffect(() => {
    (async () => {
      if (isAuthenticated) {
        const currentUserName = await user?.get("nickname");
        setUsername(currentUserName);
      }
    })();
  }, [isAuthenticated, user, username]);

  return (
    <AmazonContext.Provider
      value={{
        isAuthenticated,
        nickname,
        setNickname,
        username,
        setUsername,
      }}
    >
      {children}
    </AmazonContext.Provider>
  );
};
