import {
  ReactNode,
  Dispatch,
  SetStateAction,
  createContext,
  useState,
  useContext,
} from "react";
import { User } from "../models/Users";

interface userContextType {
  users: User[];
  setUsers: Dispatch<SetStateAction<User[]>>;
  saveUser: (updatedUser: User) => void;
}

const defaultUser: User = {
  id: Date.now(),
  name: "User1",
  email: "user1@gmail.com",
  password: "User1@1234",
};

const defaultUserContext: userContextType = {
  users: [defaultUser],
  setUsers: () => {
    console.log("setting default users");
  },
  saveUser: (updatedUser: User) => {
    console.log("saving users in local storage", updatedUser);
  },
};

const UserContext = createContext<userContextType>(defaultUserContext);

export const UserContextWrapper = ({ children }: { children: ReactNode }) => {
  enum LocalStorageUser {
    USERS = "scriptly_users",
  }

  const [users, setUsers] = useState<User[]>(
    JSON.parse(localStorage.getItem(LocalStorageUser.USERS) || "[]") as User[]
  );

  const saveUser = (updatedUser: User) => {
    const newUsers = [...users, updatedUser];
    localStorage.setItem(LocalStorageUser.USERS, JSON.stringify(newUsers));
    setUsers(newUsers);
  };

  return (
    <UserContext.Provider value={{ users, setUsers, saveUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => useContext(UserContext);
