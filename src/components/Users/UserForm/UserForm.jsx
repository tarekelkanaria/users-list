import { useState } from "react";
import { nanoid } from "nanoid";
import UserBoard from "../../UI/UserBoard/UserBoard";
import Button from "../../UI/Button/Button";
import classes from "./UserForm.module.css";

const UserForm = ({ update, check }) => {
  const [userData, setUserData] = useState({
    id: "",
    userName: "",
    userAge: "",
  });

  const handleNameChange = (e) => {
    setUserData((prevUser) => ({ ...prevUser, userName: e.target.value }));
  };

  const handleAgeChange = (e) => {
    setUserData((prevUser) => ({
      ...prevUser,
      userAge: parseInt(e.target.value),
    }));
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    const userInfo = {
      id: nanoid(),
      userName: userData.userName,
      userAge: userData.userAge,
    };
    userInfo.userName.trim().length &&
    userInfo.userAge !== "" &&
    userInfo.userAge > 0
      ? update(userInfo)
      : check(userInfo);
    setUserData((prevUser) => ({ ...prevUser, userName: "", userAge: "" }));
  };

  return (
    <UserBoard>
      <form onSubmit={handleUserSubmit} className={classes["user-form"]}>
        <div className={classes["user-form__feild"]}>
          <label htmlFor="user-name">Username</label>
          <input
            type="text"
            id="user-name"
            value={userData.userName}
            onChange={handleNameChange}
          />
        </div>
        <div className={classes["user-form__feild"]}>
          <label htmlFor="user-age">Age (Years)</label>
          <input
            type="number"
            id="user-age"
            value={userData.userAge}
            onChange={handleAgeChange}
          />
        </div>
        <div className={classes["user-form__submit"]}>
          <Button>Add User</Button>
        </div>
      </form>
    </UserBoard>
  );
};

export default UserForm;
