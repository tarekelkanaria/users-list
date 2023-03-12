import Button from "../UI/Button/Button";
import classes from "./ModalDialog.module.css";
const ModalDialog = ({ title, text, handleClose }) => {
  return (
    <article className={classes["modal__wrapper"]}>
      <header className={classes["modal__title"]}>
        <h2>{title}</h2>
      </header>
      <div className={classes["modal__body"]}>
        <p>{text}</p>
      </div>
      <footer className={classes["modal__footer"]}>
        <Button onClick={handleClose}>Okay</Button>
      </footer>
    </article>
  );
};

export default ModalDialog;
