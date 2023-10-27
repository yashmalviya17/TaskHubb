import { ButtonProps } from "../../type";
import styles from "./style/button.module.scss";

const Button = ({ type = "button", onClick, label, disable = false, loading = false }: ButtonProps) => {
    return (
        <button
            className={styles.button}
            type={type}
            onClick={() => {
                onClick && onClick();
            }}
            disabled={disable || loading}
        >
            {loading ? <span className={styles.spinner} /> : label}
        </button>
    );
};
export default Button;
