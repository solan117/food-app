import styles from "../CSS/nav.module.css";

export default function Nav() {
  return (
    <div className={styles.navbar}>
      <span className={styles.logo}>🍳 Cooking Book</span>
    </div>
  );
}
