import classes from "./Overlay.module.css";
const Overlay = ({ handleClose }) => {
  return <div className={classes.overlay} onClick={handleClose}></div>;
};

export default Overlay;
