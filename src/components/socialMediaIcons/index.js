"use client"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';

const SocialMediaButtons = () => {
    return (
        <div className='flex justify-between items-center gap-6 z-10 text-[--white]'>
            <Link href="https://www.facebook.com/" className='z-10 bg-gray-800 shadow-lg rounded-full p-2  transition-all ease-in-out duration-500' target="_blank" rel="noopener noreferrer">
                <FacebookOutlinedIcon fontSize='medium' />
            </Link>
            <Link href="https://x.com/" className='z-10  bg-gray-800 shadow-lg rounded-full p-2   transition-all ease-in-out duration-500' target="_blank" rel="noopener noreferrer">
                <TwitterIcon fontSize='medium' />
            </Link>
            <Link href="https://www.instagram.com/" className='z-10  bg-gray-800 shadow-lg rounded-full p-2  transition-all ease-in-out duration-500' target="_blank" rel="noopener noreferrer">
                <InstagramIcon fontSize='medium' />
            </Link>
            <Link href="https://in.linkedin.com/" className='z-10 bg-gray-800 shadow-lg rounded-full p-2  transition-all ease-in-out duration-500' target="_blank" rel="noopener noreferrer">
                <LinkedInIcon fontSize='medium' />
            </Link>
        </div>
    )
}

export default SocialMediaButtons