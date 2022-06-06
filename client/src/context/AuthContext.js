import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

/* {
  _id : "6289820dafd1d54a04376660",
  username : "kabir",
  email : "kabir@gmail.com",
  password : "$2b$10$bT7Qk/QPTleSirdDKSZzUuVVvm/3h83dZmr0fwPEllIk2BP5ZGeyq",
  profilePicture : "person/kabir.jpeg",
  coverPicture : "post/8.jpeg",
  followers : ["62898281afd1d54a04376662","62898e30afd1d54a0437666e"],
  followings : ["62898e30afd1d54a0437666e"],
  isAdmin : false,
  city : "lagos",
  desc : "Hi, my name is Kabir and I have a son whose name is Maxwell",
  from : "nigeria",
  relationship : 1,
}
 */
const INITIAL_STATE = {
  user: {
    _id: "6289820dafd1d54a04376660",
    username: "kabir",
    email: "kabir@gmail.com",
    password: "$2b$10$bT7Qk/QPTleSirdDKSZzUuVVvm/3h83dZmr0fwPEllIk2BP5ZGeyq",
    profilePicture: "person/kabir.jpeg",
    coverPicture: "post/8.jpeg",
    followers: ["62898281afd1d54a04376662", "62898e30afd1d54a0437666e"],
    followings: ["62898e30afd1d54a0437666e"],
    isAdmin: false,
    city: "lagos",
    desc: "Hi, my name is Kabir and I have a son whose name is Maxwell",
    from: "nigeria",
    relationship: 1,
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
