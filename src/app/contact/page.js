'use client'
import React, { useEffect } from 'react'
import Navbar from '../../components/navbar';
import Image from 'next/image';
import Footer from '../../components/footer'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie';
import { Fade } from "react-awesome-reveal";
import { useFormik } from "formik";
import * as Yup from "yup";
import { contactDetaisApi } from '@/redux/api/amount';


const formSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    phone: Yup.string()
        .matches(/^[0-9]+$/, "Phone number must contain only digits")
        .required("Phone number is required"),
    name: Yup.string()
        .required("Email is required"),
    subject: Yup.string()
        .required("Email is required"),
    message: Yup.string()
        .required("Email is required"),
});

const Page = () => {
    const loginFormik = useFormik({
        initialValues: {
            email: "",
            phone: "",
            message: "",
            subject: "",
            name: "",
        },
        validationSchema: formSchema,
        onSubmit: async (values, { resetForm }) => {
            console.log("Login Values:", values);
            try {
                const data = await contactDetaisApi(values);
                resetForm();
            } catch (errors) {
                console.log("Errors:", errors);
            }
        },
    });

    const router = useRouter()

    console.log('data123', loginFormik.values)

    return (
        <div className="overflow-x-hidden bg-[--black]  h-auto" >
            <Navbar />

            <Fade cascade triggerOnce delay={300} direction='down'>
                <div className=' mx-auto h-[40vh] md:h-[70vh] w-screen flex items-center justify-center'>
                    <p className="w-[90%] md:w-1/2 mx-auto text-center text-[--white] text-[28px] lg:text-[40px] tracking-wide">Get in touch with us.<br /> Send us a message.</p>
                </div>
            </Fade>
            <div className=' mx-auto mb-10 bg-[#272727]  h-auto rounded-[20px] relative overflow-x-hidden ' >
                <div>
                    <Image src="/bg-1.png" alt="" height={400} width={400} className="absolute top-0 left-0 rotate-45 " style={{ filter: "blur(0px)" }} />
                    {/* <Image src="/bg-1.png" alt="" height={400} width={300} className="absolute left-0 bottom-2 -rotate-180" style={{ filter: "blur(3px)" }} /> */}
                </div>
                <div className='w-[90%] flex  md:flex-row flex-col justify-between gap-10  items-center mx-auto py-10'>
                    <div className=' md:w-1/2 flex flex-col space-y-6 items-start'>
                        <Fade cascade triggerOnce delay={400} direction='left'>
                            <div className='flex justify-center items-start space-x-6 '>
                                <Image src="/address.png" alt="" height={40} width={40} className=" " />
                                <div className='flex justify-center  flex-col '>
                                    <p className='md:text-xl text-lg  font-medium text-[--white]'>Address</p>
                                    <p className='md:text-lg text-[--gray]  md:font-medium'> 8-9, Bhakti Arcade Pramukh Park Soc, Satellite Rd, near Mahadev Chowk, Mota Varachha, Surat, Gujarat 394101</p>
                                </div>
                            </div>
                        </Fade>
                        <Fade cascade triggerOnce delay={400} direction='left'>
                            <div className='flex justify-center items-start space-x-6'>
                                <Image src="/mail.png" alt="" height={40} width={40} className=" " />
                                <div className='flex justify-center  flex-col '>
                                    <p className='md:text-xl text-lg font-medium text-[--white]'>Email</p>
                                    <p className='md:text-lg text-[--gray]  md:font-medium'>support@eeveegold.com </p>
                                </div>
                            </div>
                        </Fade>
                        <Fade cascade triggerOnce delay={400} direction='left'>
                            <div className='flex justify-center items-start space-x-6'>
                                <Image src="/calling.png" alt="" height={40} width={40} className=" " />
                                <div className='flex justify-center  flex-col '>
                                    <p className='md:text-xl text-lg font-medium  text-[--white]'>Phone</p>
                                    <p className='md:text-lg text-[--gray]  md:font-medium'>+91 8758764001</p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <Fade cascade triggerOnce delay={400} direction='right' >
                        <div className='w-full bg-white rounded-3xl p-4'>
                            <form className='space-y-4 text-[--gray]' onSubmit={loginFormik.handleSubmit}>

                                <div className="w-[100%]">
                                    <input type='text' name='name' placeholder='Your Name'
                                        className={`border-b border-slate-300 bg-white p-3 w-[100%] rounded-[4px] focus:outline-none focus:border-b focus:border-[--blue] `}
                                        onChange={loginFormik.handleChange}
                                        onBlur={loginFormik.handleBlur}
                                        value={loginFormik.values.name}
                                    />
                                    {loginFormik.touched.name &&
                                        loginFormik.errors.name ? (
                                        <div className="text-red-500 text-sm">
                                            {loginFormik.errors.name}
                                        </div>
                                    ) : null}
                                </div>

                                <div className="w-[100%]">
                                    <input type='email' name='email' placeholder='Your Email'

                                        className={`border-b border-slate-300 bg-white p-3 w-[100%] rounded-[4px] focus:outline-none focus:border-b focus:border-[--blue] `} onChange={loginFormik.handleChange}
                                        onBlur={loginFormik.handleBlur}
                                        value={loginFormik.values.email} />
                                    {loginFormik.touched.email &&
                                        loginFormik.errors.email ? (
                                        <div className="text-red-500 text-sm">
                                            {loginFormik.errors.email}
                                        </div>
                                    ) : null}

                                </div>

                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                    <div className="w-[100%]">
                                        <input type='phone' name='phone' placeholder='Your Phone Number'

                                            className={`border-b border-slate-300 bg-white p-3 w-[100%] rounded-[4px] focus:outline-none focus:border-b focus:border-[--blue] `} onChange={loginFormik.handleChange}
                                            onBlur={loginFormik.handleBlur}
                                            value={loginFormik.values.phone} />
                                        {loginFormik.touched.phone &&
                                            loginFormik.errors.phone ? (
                                            <div className="text-red-500 text-sm">
                                                {loginFormik.errors.phone}
                                            </div>
                                        ) : null}

                                    </div>
                                    <div className="w-[100%]">
                                        <input type='text' name='subject' placeholder='Your Subject'
                                            className={`border-b border-slate-300 bg-white p-3 w-[100%] rounded-[4px] focus:outline-none focus:border-b focus:border-[--blue] `} onChange={loginFormik.handleChange}
                                            onBlur={loginFormik.handleBlur}
                                            value={loginFormik.values.subject} />
                                        {loginFormik.touched.subject &&
                                            loginFormik.errors.subject ? (
                                            <div className="text-red-500 text-sm">
                                                {loginFormik.errors.subject}
                                            </div>
                                        ) : null}

                                    </div>
                                </div>

                                <div className="w-[100%]">
                                    <textarea type='text' name='message' placeholder='Write Your Message'
                                        rows="4" cols="50"

                                        className={`border-b border-slate-300 bg-white p-3 w-[100%] rounded-[4px] focus:outline-none focus:border-b focus:border-[--blue] `} onChange={loginFormik.handleChange}
                                        onBlur={loginFormik.handleBlur}
                                        value={loginFormik.values.message}>
                                    </textarea>
                                    {loginFormik.touched.message &&
                                        loginFormik.errors.message ? (
                                        <div className="text-red-500 text-sm">
                                            {loginFormik.errors.message}
                                        </div>
                                    ) : null}

                                </div>

                                <button className="animated-button bg-[--secondary] rounded-full border-none text-white font-bold text-[14px] md:text-[14px] lg:text-md xl:text-[15px] py-3 md:py-[15px] lg:py-[12px] px-8 md:px-[40px] lg:px-[35px] !mt-8 w-max">
                                    SEND MESSAGE
                                </button>

                            </form>
                        </div>
                    </Fade>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Page
