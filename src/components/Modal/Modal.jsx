import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Overlay from "./Overlay";
import ModalDialog from "./ModalDialog";

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
    <>
      {createPortal(
        <Overlay handleClose={handleClose} />,
        document.getElementById("overlay-root")
      )}
      {createPortal(
        <ModalDialog
          title={message.title}
          text={message.text}
          handleClose={handleClose}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
};
export default Modal;
