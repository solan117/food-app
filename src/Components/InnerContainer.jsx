import styles from "../CSS/innercontainer.module.css";

export default function InnerContainer({ children }) {
  return <div className={styles.innerContainer}>{children}</div>;
}
