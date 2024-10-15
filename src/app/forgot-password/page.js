'use client'
import { ForgetSendOtpToEMailApi, forgotPasswordApi, loginApi, otpVerificationApi, resendOtpApi, sendOtpToEMailApi } from '@/redux/auth/authSlice';
import { CircularProgress } from '@mui/material';
import { useFormik } from 'formik';
import Cookies from 'js-cookie'; // To handle cookies
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // To handle redirects
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import OtpInput from "react18-input-otp";


const emailSchema = Yup.object().shape({
    email: Yup.string()







    
        .email("Invalid email address")
        .required("Email is required"),
});

const otpSchema = Yup.object().shape({
    otp: Yup.string().length(4).required("otp is required"),
});

// Validation Schema for Login Form
const loginSchema = Yup.object().shape({
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], "Passwords must match")
        .required("Confirm password is required"),
});


const Page = () => {

    const loginState = useSelector((state) => state.login);
    const [second, setSecond] = useState(60);
    const [currentStep, setCurrentStep] = useState(1);

    const router = useRouter()


    const emailFormik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: emailSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                const data = await ForgetSendOtpToEMailApi(values);
                console.log("emailSchema Values:", data.data, data.data.otp);
                if (data.data.otp || data.status === 200) {
                    setCurrentStep(2);
                } else resetForm();
            } catch (errors) {
                console.log("Errors:", errors);
            }
        },
    });

    
    const otpFormik = useFormik({
        initialValues: {
            otp: null,
        },
        validationSchema: otpSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                const payload = {
                    email: emailFormik.values.email,
                    otp: Number(values.otp),
                };
                const data = await otpVerificationApi(payload);
                console.log("otpSchema Values:", values, data);
                if (data.status === 200) setCurrentStep(3);
                else resetForm();
            } catch (errors) {
                console.log("Errors:", errors);
            }
        },
    });

    // Formik for Login Form
    const loginFormik = useFormik({
        initialValues: {
            email: '',
             password: '',
            confirmPassword: ''
        },
        validationSchema: loginSchema,
        onSubmit: async (values, { resetForm }) => {

            const payload={
                email: emailFormik.values.email,
                newPassword: values.password,
            }
            try {
                const data = await forgotPasswordApi(payload)
                if (data) {
                    router.push('/login');
                }
                else
                    resetForm()
            }
            catch (errors) {
                console.log('Errors:', errors);
            }
        }
    });

     // timer
     useEffect(() => {
        if (currentStep === 2) {
            const interval = setInterval(() => {
                if (second > 0) {
                    setSecond(second - 1);
                }
                if (second === 0) {
                }
            }, 1000);

            return () => {
                clearInterval(interval);
            };
        }
    }, [currentStep, second]);

    const handleResendOtp = async () => {
        try {
            const data = await resendOtpApi(emailFormik.values);
            setSecond(60);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className=""  style={{
            backgroundImage: "url(download-3.jpeg)",
            backgroundPosition: "center",
            backgroundSize: "cover", // Change to cover
            height: "100vh", // Set height to full viewport height
            width: "100vw", // Ensure it stretches across the screen
            backgroundBlendMode: "darken",
        }}>
           
            {/* <section className="bg-gray-50 "> */}
            <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)",backdropFilter: "blur(8px)", position: "relative",}}>

            {/* login */}
            <section className="">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-[--primary]">
                        EEVEE
                    </a>
                    <div className="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-white ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-gray-900">
                                Reset Password
                            </h1>
                            {currentStep === 1 && (
                            <form
                                className="space-y-4 md:space-y-4"
                                onSubmit={emailFormik.handleSubmit}
                            >
                                <div className="">
                                    <label
                                        for="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  rounded focus:outline-none focus:border-gray-400 block w-full p-2.5 "
                                        placeholder="name@company.com"
                                        onChange={emailFormik.handleChange}
                                        onBlur={emailFormik.handleBlur}
                                        value={emailFormik.values.email}
                                    />
                                    {emailFormik.touched.email &&
                                    emailFormik.errors.email ? (
                                        <div className="text-red-500 text-sm">
                                            {emailFormik.errors.email}
                                        </div>
                                    ) : null}
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center gap-2"
                                >
                                    {loginState.isLoading && (
                                        <CircularProgress
                                            size="16px"
                                            sx={{ color: "white" }}
                                        />
                                    )}
                                    Continue
                                </button>
                            </form>
                        )}

                        {/* otp verify */}
                        {currentStep === 2 && (
                            <form
                                className="space-y-4 md:space-y-4"
                                onSubmit={otpFormik.handleSubmit}
                            >
                                <div>
                                    <label
                                        for="otp"
                                        className="text-center block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        OTP
                                    </label>
                                    <div
                                        id="otp"
                                        className={`otpSection flex flex-row justify-center text-center `}
                                    >
                                        <OtpInput
                                            onChange={(otp) =>
                                                otpFormik.setFieldValue(
                                                    "otp",
                                                    otp
                                                )
                                            }
                                            onBlur={otpFormik.handleBlur}
                                            value={otpFormik.values.otp}
                                            numInputs={4}
                                            isInputNum={true}
                                            inputStyle={{
                                                width: "40px",
                                                margin: "9px",
                                                inputMode: "numeric",
                                                fontSize: "18px",
                                            }}
                                            autoComplete="one-time-code"
                                        />
                                    </div>
                                    {otpFormik.touched.otp &&
                                    otpFormik.errors.otp ? (
                                        <div className="text-red-500 text-sm">
                                            {otpFormik.errors.otp}
                                        </div>
                                    ) : null}
                                </div>
                                <div className="text-center ">
                                    <button
                                        type="submit"
                                        className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center gap-2 "
                                    >
                                        {loginState.isLoading && (
                                            <CircularProgress
                                                size="16px"
                                                sx={{ color: "white" }}
                                            />
                                        )}
                                        Continue
                                    </button>
                                    {second > 0 ? (
                                        <p className="text-blue-600 mt-2 flex justify-center items-center text-[14px] font-medium">
                                            <span className="text-black">
                                                Resend code in:{" "}
                                            </span>
                                            00:
                                            {second < 10
                                                ? `0${second}`
                                                : second}
                                        </p>
                                    ) : (
                                        <p
                                            className="mt-1 text-blue-600 hover:underline"
                                            onClick={handleResendOtp}
                                        >
                                            Resend OTP
                                        </p>
                                    )}
                                </div>
                            </form>
                        )}
                        {currentStep === 3 && ( <form className="space-y-4 md:space-y-6" onSubmit={loginFormik.handleSubmit}>
                                
                                <div className='flex gap-4'>
                                    <div>
                                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-none focus:border-gray-400 block w-full p-2.5 " onChange={loginFormik.handleChange}
                                            onBlur={loginFormik.handleBlur}
                                            value={loginFormik.values.password}
                                        />
                                        {loginFormik.touched.password && loginFormik.errors.password ? (
                                            <div className="text-red-500 text-sm">{loginFormik.errors.password}</div>
                                        ) : null}
                                    </div>
                                    <div>
                                        <label for="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 ">Confirm password</label>
                                        <input type="password" name="confirmPassword" id="confirmPassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-none focus:border-gray-400 block w-full p-2.5 " onChange={loginFormik.handleChange}
                                            onBlur={loginFormik.handleBlur}
                                            value={loginFormik.values.confirmPassword}
                                        />
                                        {loginFormik.touched.confirmPassword && loginFormik.errors.confirmPassword ? (
                                            <div className="text-red-500 text-sm">{loginFormik.errors.confirmPassword}</div>
                                        ) : null}
                                    </div>
                                </div>

                                <div>

                                    <button type="submit" className="w-full  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 flex items-center justify-center gap-2">{loginState?.isLoading && <CircularProgress size="16px" /> }Continue</button>
                                    <div className='mt-1 w-full text-center'>


                                        <Link href="/login" className=" font-medium text-sm hover:underline text-blue-600">Back to login</Link>
                                    </div>
                                </div>

                                <p className="text-sm font-light  text-gray-400">
                                    Don’t have an account yet? <Link href="/signup" className="font-medium  hover:underline text-blue-600">Sign up</Link>
                                </p>
                            </form>)}
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </div>
    )
}

export default Page
