import React from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

const Page = () => {
    return (
        <div className=''>
            <Navbar />
            <div className='lg:my-32  lg:mt-40 md:my-28  mt-24 mb-16 w-[90%] mx-auto text-[--policy-text] tracking-wide'>
                <h1 className='font-bold text-[30px] text-white '>Terms & Conditions</h1>
                <div>
                    <p className='font-semibold mt-6 mb-4'>
                        eeveegoldsavings.com is managed by EEVEE LIFESTYLE LLP
                    </p>
                    <p className='leading-relaxed'>
                    Welcome to eeveegoldsavings.com! By accessing this website, you agree to comply with and be bound by the following terms and conditions of use. Please read these terms carefully before using our website.
                    </p>
                    <br />
                   
                    <ol className='list-disc pl-6 space-y-2 leading-relaxed'>
                        <li>
                        If you select a plan for any amount of money, you must pay every month between the 1st and 10th of that month.
                        </li>
                        <li>
                        If the payment date extends beyond the 10th of that particular month, you will need to pay an additional 5% charge for that month.
                        </li>
                        <li>
                        If you skip two months, the payment for the 3rd month will be the total cost of three months’ amounts plus a 5% charge, and it must be paid by the 10th. Otherwise, your plan will expire. 
                        </li>
                        <li>
                        You will receive a slip on the website for every transaction. You can go to Plans and download it.
                        </li>
                        <li>
                        This is a 16-month plan. After paying for 16 months, the 17th month’s payment is covered by us, and in the 18th month, you can receive gold equivalent to the total of the 17 months’ payments
                        </li>
                    </ol>

                    <div className='leading-relaxed '>
       
       <p className='mt-4'>
            This document is an electronic record in terms of the Information Technology Act, 2000 and rules thereunder as applicable and the amended provisions pertaining to electronic records in various statutes as amended by the Information Technology Act, 2000. This electronic record is generated by a computer system and does not require any physical or digital signatures.  
       </p>
       <p className='mt-4'>
            This document is published in accordance with the provisions of Rule 3 (1) of the Information Technology (Intermediaries Guidelines) Rules, 2011 that require publishing the rules and regulations, privacy policy, and Terms of Use for access or usage of the domain name<a href='https://eeveegoldsavings.com' className='text-blue-500'>https://eeveegoldsavings.com</a> (Website), including the related mobile site and mobile application (hereinafter referred to as Platform).
       </p>
       <p className='mt-4'>
            The Platform is owned by LALIMA JEWELS LLP, a company incorporated under the Companies Act, 1956, with its registered office at Ground Floor, 8,9, Pramukh Park, Mota Varachha Main Road, Mota Varachha, Surat, India (hereinafter referred to as Platform Owner, we, us, our).
       </p>
       <p className='mt-4'>
            Your use of the Platform and services and tools is governed by the following terms and conditions (“Terms of Use”) as applicable to the Platform, including the applicable policies which are incorporated herein by way of reference.
       </p>

       {/* Additional clauses can be placed here as per your document */}
       
       <p className='mt-4'>
            All disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Surat and Gujarat.
       </p>
       <p className='mt-4'>
            All concerns or communications relating to these Terms must be communicated to us using the contact information provided on this website.
       </p>
   </div>
                </div>

        </div>
    
            <Footer />
        </div>
    )
}

export default Page
