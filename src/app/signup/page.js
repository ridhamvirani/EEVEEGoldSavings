"use client";

import { useFormik } from "formik";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css" ;
import {
    otpVerificationApi,
    resendOtpApi,
    sendOtpToEMailApi,
    signupApi,
} from "@/redux/auth/authSlice";
import OtpInput from "react18-input-otp";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

// Validation Schema for Signup form
const emailSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
});

const otpSchema = Yup.object().shape({
    otp: Yup.string().length(4).required("otp is required"),
});

const signupSchema = Yup.object().shape({
    fullName: Yup.string()
        .matches(/^[a-zA-Z\s]+$/, "Name must contain only letters")
        .required("Name is required"),
    phoneNumber: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone Number must be 10 digits")
        .required("Phone Number is required"),
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
});

const customStyles = {
    "--react-international-phone-height": "20px",
    "--react-international-phone-background-color": "#f9fafb",
    "--react-international-phone-text-color": "black",
    "--react-international-phone-font-size": "14px",
    "--react-international-phone-border-color": "transparent",
};

const Page = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const [second, setSecond] = useState(60);
    const [currentStep, setCurrentStep] = useState(1);
    const loginState = useSelector((state) => state.signup);

    const emailFormik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: emailSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                const data = await sendOtpToEMailApi(values);
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

    // Formik for Signup Form
    const signupFormik = useFormik({
        initialValues: {
            fullName: "",
            phoneNumber: "",
            countryCode: "+91",
            password: "",
            confirmPassword: "",
        },
        validationSchema: signupSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                const payload = {
                    fullName: values.fullName,
                    phoneNumber: values.phoneNumber,
                    countryCode: values.countryCode,
                    password: values.password,
                    email: emailFormik.values.email,
                    deviceToken: "LoremTestTestt",
                };
                console.log("Signup Values:", values);
                const data = await signupApi(payload, dispatch);
                if (data.data.token || data.status === 200) {
                    const token = data.data.token;

                    // Save token in cookie (expires in 7 days, customize as needed)
                    Cookies.set("authToken", token, { expires: 7 });

                    // Redirect to the main Page ("/")
                    router.push("/");
                } else resetForm();
            } catch (errors) {
                console.log("Errors:", errors);
            }
            // handle signup logic here
        },
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

    console.log(
        "register data",
        emailFormik.values,
        otpFormik.values,
        signupFormik.values
    );

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

            <div className="flex flex-col items-center justify-center px-2 md:px-6 py-8 mx-auto min-h-screen w-full md:w-1/2 lg:py-0">
                <a
                    href="#"
                    className="flex items-center mb-6 text-2xl font-semibold text-[--primary] "
                >
                    {/* <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"> */}
                    EEVEE
                </a>
                <div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                            Create an account
                        </h1>

                        {/* Email verify */}
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

                        {/* details entry */}
                        {currentStep === 3 && (
                            <form
                                className="space-y-4 md:space-y-4"
                                onSubmit={signupFormik.handleSubmit}
                            >
                                <div>
                                    <label
                                        for="fullName"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="fullName"
                                        name="fullName"
                                        id="fullName"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-none focus:border-gray-400 block w-full p-2.5"
                                        placeholder="name"
                                        onChange={signupFormik.handleChange}
                                        onBlur={signupFormik.handleBlur}
                                        value={signupFormik.values.fullName}
                                    />
                                    {signupFormik.touched.fullName &&
                                    signupFormik.errors.fullName ? (
                                        <div className="text-red-500 text-sm">
                                            {signupFormik.errors.fullName}
                                        </div>
                                    ) : null}
                                </div>
                                <div>
                                    <label
                                        for="Mobile Number"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Mobile Number
                                    </label>
                                    <div className="custom-phone-input">
                                        <PhoneInput
                                            defaultCountry="in"
                                            name="phoneNumber"
                                            id="phoneNumber"
                                            style={customStyles}
                                            value={signupFormik.values.phone}
                                            onChange={(phone, data) => {
                                                const countryCode = `+${data.country.dialCode}`;

                                                const localPhoneNumber = phone
                                                    .replace(countryCode, "")
                                                    .trim();

                                                signupFormik.setFieldValue(
                                                    "countryCode",
                                                    countryCode
                                                );
                                                signupFormik.setFieldValue(
                                                    "phoneNumber",
                                                    localPhoneNumber
                                                );
                                            }}
                                            onBlur={signupFormik.handleBlur}
                                            // countrySelectorStyleProps={countrySelectorStyleProps}

                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-none focus:border-gray-400 block w-full p-2.5"
                                        />
                                    </div>
                                    {signupFormik.touched.phoneNumber &&
                                    signupFormik.errors.phoneNumber ? (
                                        <div className="text-red-500 text-sm">
                                            {signupFormik.errors.phoneNumber}
                                        </div>
                                    ) : null}
                                </div>

                                <div className="flex gap-4">
                                    <div>
                                        <label
                                            for="password"
                                            className="block mb-2 text-sm font-medium text-gray-900 "
                                        >
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="••••••••"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-none focus:border-gray-400 block w-full p-2.5 "
                                            onChange={signupFormik.handleChange}
                                            onBlur={signupFormik.handleBlur}
                                            value={signupFormik.values.password}
                                        />
                                        {signupFormik.touched.password &&
                                        signupFormik.errors.password ? (
                                            <div className="text-red-500 text-sm">
                                                {signupFormik.errors.password}
                                            </div>
                                        ) : null}
                                    </div>
                                    <div>
                                        <label
                                            for="confirm-password"
                                            className="block mb-2 text-sm font-medium text-gray-900 "
                                        >
                                            Confirm password
                                        </label>
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            id="confirmPassword"
                                            placeholder="••••••••"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-none focus:border-gray-400 block w-full p-2.5 "
                                            onChange={signupFormik.handleChange}
                                            onBlur={signupFormik.handleBlur}
                                            value={
                                                signupFormik.values
                                                    .confirmPassword
                                            }
                                        />
                                        {signupFormik.touched.confirmPassword &&
                                        signupFormik.errors.confirmPassword ? (
                                            <div className="text-red-500 text-sm">
                                                {
                                                    signupFormik.errors
                                                        .confirmPassword
                                                }
                                            </div>
                                        ) : null}
                                    </div>
                                </div>
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
                                    Create account
                                </button>
                            </form>
                        )}

                        <p className="text-sm font-light text-gray-500 ">
                            Already have an account?{" "}
                            <Link
                                href="/login"
                                className="font-medium text-blue-600 hover:underline "
                            >
                                Login here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            </div>
            {/* </section> */}
        </div>
    );
};

export default Page;
