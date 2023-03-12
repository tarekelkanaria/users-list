import { useEffect, useState } from "react";
import UserForm from "./components/Users/UserForm/UserForm";
import UserList from "./components/Users/UserList/UserList";
import Modal from "./components/modal/Modal";
import "./App.css";

function App() {
  const [userListData, setUserListData] = useState(
    () => JSON.parse(localStorage.getItem("usersList")) || []
  );
  const [isValid, setIsValid] = useState(true);
  const [userData, setUserData] = useState({
    nameExist: true,
    ageExist: true,
    ageValid: true,
  });

  useEffect(() => {
    localStorage.setItem("usersList", JSON.stringify(userListData));
  }, [userListData]);
  const updateUserList = (user) => {
    setUserListData((prevUserList) => [user, ...prevUserList]);
  };

  const checkUser = (user) => {
    if (!user.userName.trim().length && user.userAge === "") {
      setUserData((prevUser) => ({
        ...prevUser,
        nameExist: false,
        ageExist: false,
      }));
    } else if (!user.userName.trim().length) {
      setUserData((prevUser) => ({
        ...prevUser,
        nameExist: false,
      }));
    } else if (user.userAge === "") {
      setUserData((prevUser) => ({
        ...prevUser,
        ageExist: false,
      }));
    } else if (user.userAge <= 0) {
      setUserData((prevUser) => ({ ...prevUser, ageValid: false }));
    }
    setIsValid((prevValid) => !prevValid);
  };

  const exitModal = () => {
    setIsValid((prevValid) => !prevValid);
    setUserData({
      nameExist: true,
      ageExist: true,
      ageValid: true,
    });
  };

  const removeUserItem = (e, userId) => {
    setUserListData((prevList) =>
      prevList.filter((user) => user.id !== userId)
    );
  };

  return (
    <main className="App">
      {!isValid && <Modal user={userData} close={exitModal} />}
      <UserForm update={updateUserList} check={checkUser} />
      {userListData.length > 0 && (
        <UserList list={userListData} removeUser={removeUserItem} />
      )}
    </main>
  );
}

export default App;
