"use client"

import { addAmount } from '@/redux/api/amount';
import { useFormik } from 'formik';
import Link from 'next/link';
import React, { useState } from 'react'
import * as Yup from 'yup';

const emailSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
});

const Page = () => {
    // Validation Schema for Signup Form

    const amountFormik = useFormik({
        initialValues: {
            amount: '',
        },
        validationSchema: emailSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                const data = await addAmount(values)
                console.log('emailSchema Values:', data.data);
                if (data.status === 200)
                    // setCurrentStep(2)
                    console.log('emailSchema Status:', data.status)
                else
                    resetForm()

            }
            catch (errors) {
                console.log('Errors:', errors);
            }
        }
    });

    return (
        <div className='flex justify-center items-center min-h-screen w-screen'>
            <div className='w-1/2 '>
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Funds</label>

                <div className='flex justify-center items-center gap-2 '>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="Enter amount"
                    />
                    <button type="submit" className=" text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-1/2">ADD</button>
                </div>
            </div>
        </div>
    )
}

export default Page
