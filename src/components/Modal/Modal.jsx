import classes from "./Modal.module.css";
import Button from "../UI/Button/Button";
import { useEffect, useState } from "react";

const Modal = ({ user, close }) => {
  const [message, setMessage] = useState({ title: "", text: "" });
  const inputValidation = (userInput) => {
    if (!userInput.nameExist && !userInput.ageExist)
      setMessage({
        title: "Invalid Name and Age",
        text: "Please enter a valid name and age(non-empty values).",
      });
    else if (!userInput.nameExist)
      setMessage({
        title: "Invalid Name",
        text: "Please enter a valid name (non-empty values).",
      });
    else if (!userInput.ageExist)
      setMessage({
        title: "Invalid Age",
        text: "Please enter a valid age(non-empty values).",
      });
    else if (!userInput.ageValid)
      setMessage({
        title: "Invalid Age Number",
        text: "Please enter a valid age(>0).",
      });
  };

  useEffect(() => {
    inputValidation(user);
  }, [user]);

  const handleClose = () => {
    close();
  };

  return (
    <section>
      <div className={classes.overlay} onClick={handleClose}></div>
      <article className={classes["modal__wrapper"]}>
        <header className={classes["modal__title"]}>
          <h2>{message.title}</h2>
        </header>
        <div className={classes["modal__body"]}>
          <p>{message.text}</p>
        </div>
        <footer className={classes["modal__footer"]}>
          <Button onClick={handleClose}>Okay</Button>
        </footer>
      </article>
    </section>
  );
};
export default Modal;
