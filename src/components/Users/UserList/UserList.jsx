import { MdHighlightOff } from "react-icons/md";
import classes from "./UserList.module.css";
import UserBoard from "../../UI/UserBoard/UserBoard";

const UserList = ({ list, removeUser }) => {
  const handleRemove = (e, userId) => {
    removeUser(e, userId);
  };
  const userElements =
    list.length > 0 &&
    list.map((user) => (
      <li key={user.id} className={classes["user-list__item"]}>
        <p>
          {user.userName} ({user.userAge} years old){" "}
        </p>
        <div onClick={(e) => handleRemove(e, user.id)}>
          <MdHighlightOff className={classes["user-list__remove"]} />
        </div>
      </li>
    ));
  return (
    <UserBoard>
      <ul className={classes["user-list"]}>{userElements}</ul>
    </UserBoard>
  );
};
export default UserList;
