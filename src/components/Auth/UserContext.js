import React, { createContext, useState } from "react";

export const UserContext = createContext(["", function() {}]);

export const UserProvider = props => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userDataInLocal")) || {
      type: "guest",
      data: {}
    }
  );
  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
