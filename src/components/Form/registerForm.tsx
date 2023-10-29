import { useForm } from "react-hook-form";

import Input from "../Input/Input";
import Button from "../Button/Button";
import styles from "./style/form.module.scss";

import { RegisterForm as RegisterFormType } from "../../type";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { register as registerUser } from "../../store/thunks/userThunks";

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormType>();

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const user = useAppSelector(state => state.userDetails);
    const onSubmit = async (data: RegisterFormType) => {
        const value = await dispatch(registerUser(data));
        if (value.meta.requestStatus === "rejected") return;
        navigate("/");
        console.log("register");
    };

    return (
        <>
            <section className="main flex justify-center items-center">
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                        <div className="mb-3">
                            <h2 className="text-xl font-bold center-align mb-1">Create an account</h2>
                            <p className="text-base center-align">Enter your details to create an account</p>
                        </div>
                        <Input<RegisterFormType> label="name" register={register} placeholder="Enter your Name" />

                        <Input<RegisterFormType>
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
                        <Input<RegisterFormType>
                            label="password"
                            register={register}
                            placeholder="Enter your Password"
                            type="password"
                            validation={{
                                minLength: {
                                    value: 8,
                                    message: "Minimum 8 characters for the password",
                                },
                            }}
                        />

                        <p className="center-align mb-2" style={{ minHeight: "16px", fontSize: "12px" }}>
                            {errors.email || errors.password ? errors.email?.message || errors.password?.message : ""}
                        </p>

                        <div className="mb-3">
                            <Button type="submit" label="Sign Up" loading={user.status === "loading" ? true : false} />
                        </div>

                        <p className="center-align text-sm mb-3">
                            By clicking continue, you agree to our Terms of Service and Privacy Policy.
                        </p>

                        <p className="center-align text-sm">
                            Already have an account? <Link to="/login"> Login</Link>
                        </p>
                    </form>
                </div>
            </section>
        </>
    );
};

export default RegisterForm;
