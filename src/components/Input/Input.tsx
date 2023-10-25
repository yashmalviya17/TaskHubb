import { UseFormRegister, Path } from "react-hook-form";
import styles from "./style/input.module.scss";

type InputProps<T> = {
    label: Path<T>;
    register: UseFormRegister<T | any>;
    placeholder?: string;
    type?: string;
    required?: boolean;
    validation?: { [key: string]: any };
};

const Input = <T,>({ label, register, type = "text", placeholder, required = true, validation = {} }: InputProps<T>) => (
    <>
        <label htmlFor={label}></label>
        <input
            className={styles.input} 
            {...register(label, { required, ...validation })}
            type={type}
            name={label}
            placeholder={placeholder}
        />
    </>
);

export default Input;
