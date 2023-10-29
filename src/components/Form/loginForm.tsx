import { useForm } from "react-hook-form";

import Input from "../Input/Input";
import Button from "../Button/Button";
import styles from "./style/form.module.scss";

import { LoginForm as LoginFormType } from "../../type";
import { Link, useNavigate  } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { login } from "../../store/thunks/userThunks";

const LoginForm = () => {
    const { register, handleSubmit } = useForm<LoginFormType>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const user = useAppSelector(state => state.userDetails);

    const onSubmit = async (data: LoginFormType) => {
      const value =  await dispatch(login(data))
        if (value.meta.requestStatus === "rejected") {
            return
        }
        navigate("/")
        console.log("login")
    };

    return (
        <>
            <section className="main flex justify-center items-center">
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                        <div className="mb-3">
                            <h2 className="text-xl font-bold center-align mb-1">Login</h2>
                            <p className="text-base center-align">Please enter your login details</p>
                        </div>
                        <Input<LoginFormType>
                            label="email"
                            register={register}
                            placeholder="Enter your Email"
                            validation={{
                                pattern: {
                                    value: /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$/,
                                    message: "Enter a valid email",
                                },
                            }}
                        />
                        <Input<LoginFormType>
                            label="password"
                            register={register}
                            placeholder="Enter your Password"
                            type="password"
                        />

                        <p className="center-align mb-2" style={{ fontSize: "12px", color: "red" }}>
                            {user.error && user.error}
                        </p>

                        <div className="mb-3">
                            <Button type="submit" label="Login" loading={user.status === "loading" ? true : false} />
                        </div>

                        <p className="center-align text-sm mb-3">Welcome back! Thank you for using our service</p>
                        <p className="center-align text-sm">
                            Don&apos;t have an account? <Link to="/register">Register</Link>
                        </p>
                    </form>
                </div>
            </section>
        </>
    );
};

export default LoginForm;
