import AddToCart from "./AddToCart";
import styles from "./ProductCard.module.css"
// 在ProductCard调用该CSS模块。将CSS导入命名为styles，然后使用：className = {styles.card}
const ProductCard = () => {
    return (
        <div className={styles.card}>
            <AddToCart/>
        </div>
    );
};

export default ProductCard;