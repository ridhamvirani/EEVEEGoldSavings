import React from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

const Page = () => {
    return (
        <div className=''>
            <Navbar />
            <div className=' md:my-28  mt-24 mb-16 w-[90%] mx-auto text-[--policy-text] tracking-wide'>
                <h1 className='font-bold text-[30px] text-white '>Privacy Policy</h1>
                <div>
                    <p className='font-semibold mt-6 mb-4'>
                        eeveegoldsavings.com is managed by EEVEE LIFESTYLE LLP
                    </p>
                    <p className='leading-relaxed'>
                        If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.
                    </p>
                    <br />
                    <p className='leading-relaxed'>
                        When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me,” your login will persist for two weeks. If you log out of your account, the login cookies will be removed.
                    </p>
                    <br />
                    <p className='font-semibold mt-3 '>
                        WHAT RIGHTS DO YOU HAVE OVER YOUR DATA
                    </p>
                   
                    <p className='leading-relaxed my-3'>
                        If you have an account on this site or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
                    </p>
                    <ol className='list-disc pl-6 space-y-2 leading-relaxed'>
                        <li>
                            Who we share your data with
                        </li>
                        <li>
                            We can not share your data with anyone
                        </li>
                        <li>
                            Your data is 100% secure with us
                        </li>
                        <li>
                            We use your data to improve our website and customer experience
                        </li>
                    </ol>
                </div>

          
          
        <p className='leading-relaxed mt-3'>
            This Privacy Policy applies to all users whose personal information has been processed by us in the course of our business, website, forums, blogs, and other online or offline offerings.
        </p>
        <p className='leading-relaxed mt-3'>
            We respect your privacy and hence handle your personal data with the utmost care and confidentiality.
        </p>
        
        <h3 className='font-semibold mt-6 '>USE OF YOUR INFORMATION</h3>
        <p className='leading-relaxed my-3'>
            We use the Personal Information and other non-Personal Information, for the following:
        </p>
        <ul className='list-disc pl-6 space-y-2 leading-relaxed'>
            <li>To provide and improve the services on the platform that you request.</li>
            <li>To resolve disputes and troubleshoot problems.</li>
            <li>To help promote a safe service on the platform and protect the security and integrity of the platform, the services, and the users.</li>
            <li>To collect money from you in relation to the services.</li>
            <li>Inform You about online and offline offers, products, services, and updates;</li>
            <li>Customize Your experience on the Platform or share marketing material with You;</li>
            <li>To detect, prevent and protect Us from any errors, fraud and other criminal or prohibited activity on the Platform;</li>
            <li>Enforce and inform about our terms and conditions;</li>
            <li>To process and fulfil Your request for Services or respond to Your comments, and queries on the Platform;</li>
            <li>To contact You;</li>
            <li>To allow Our business partners and/or associates to present customized messages to You;</li>
            <li>To communicate important notices or changes in the Services provided by the Company, use of the Platform and the terms/policies which govern the relationship between You and the Company and with Our affiliates;</li>
            <li>For any other purpose after obtaining Your consent at the time of collection.</li>
        </ul>
        
        <h3 className='font-semibold mt-6'>SECURITY PRECAUTIONS AND MEASURES</h3>
        <p className='leading-relaxed my-3'>
            Our platform has reasonable security measures and safeguards in place to protect your privacy and personal information from loss, misuse, unauthorized access, disclosure, destruction, and alteration of the information in compliance with applicable laws. Further, whenever you change or access your account on the platform or any information relating to it, we offer the use of a secure server. We cannot, however, ensure or warrant the security of any information you transmit to the company or guarantee that your personal information and/or other non-personal information provided for availing the services or platform may not be accessed, disclosed, altered, or destroyed by a breach of any of our security measures and safeguards.
        </p>
        
        <h3 className='font-semibold mt-6'>DATA STORAGE AND RETENTION POLICY</h3>
        <p className='leading-relaxed my-3'>
            We collect and store your data and personal information in AWS cloud as you use our services and will retain the data for as long as necessary to fulfill the purposes for which it was obtained. Processed and non-identifiable data, however, will be perpetually stored.
        </p>
        <p className='leading-relaxed mt-2'>
            To determine the appropriate retention period for personal data, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure of your personal data, the purposes for which we process your personal data and whether we can achieve those purposes through other means, and the applicable legal requirements.
        </p>

        <h3 className='font-semibold mt-6'>CHANGES TO PRIVACY POLICY</h3>
        <p className='leading-relaxed my-3'>
            We reserve the unconditional right to change, modify, add, or remove portions of this Privacy Policy at any time, without specifically notifying you of such changes. Any changes or updates will be effective immediately. You should review this Privacy Policy regularly for changes. Your acceptance of the amended Privacy Policy shall signify your consent to such changes and agreement to be legally bound by the same.
        </p>

        <h3 className='font-semibold mt-6'>GRIEVANCE OFFICER</h3>
        <p className='leading-relaxed my-3'>
            If you have any privacy concerns, please feel free to reach out to the grievance officer. The name and contact details of this officer have been provided below:
        </p>
        <p className='leading-relaxed mt-2'>
            Name: Mr. Gordhanbhai Radadiya
        </p>
        <p className='leading-relaxed mt-2'>
            Email: support@eeveegold.com
        </p>
        <p className='leading-relaxed mt-2'>
            He shall try to acknowledge the complaint within twenty-four hours and dispose of such complaint within a period of fifteen days from the date of receipt of complaint.
        </p>
        <p className='leading-relaxed mt-2'>
            Effective as on 1st September 2024
        </p>
        <p className='leading-relaxed mt-2'>
            Registered Office address: 8-9, Bhakti Arcade, Pramukh Park Soc, Satellite Rd, Near Mahadev Chowk, Mota Varachha, Surat, Gujarat, 394101
        </p>
    </div>
            <Footer />
        </div>
    )
}

export default Page
