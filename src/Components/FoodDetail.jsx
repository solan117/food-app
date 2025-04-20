import styles from "../CSS/foodetail.module.css";

export default function FoodDetail({ foodId }) {
  return <div className={styles.container}>Food Detail : {foodId}</div>;
}
