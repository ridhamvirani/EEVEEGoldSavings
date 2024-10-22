"use client"
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { Fade } from 'react-awesome-reveal';
import { AccountSteps, Features, OurClint } from '@/utils/routes';
import Link from 'next/link';


export default function Home() {
  const router = useRouter()

  // useEffect(() => {
  //   const authToken = Cookies.get('authToken');
  //   if (!authToken) {
  //     router.push('/login');
  //   }
  // }, [router]);

  return (
    <div className="overflow-x-hidden bg-[--black]  h-auto" >
      <Navbar/>
      <div className='flex flex-col space-y-14  w-[90%]  mx-auto'>
      {/* main section */}

        <div className=" ">
          <div className="lg:h-screen  lg:pt-10 pt-20 flex flex-col gap-4 lg:gap-0 lg:flex-row  justify-center items-center">
            <div className="w-full lg:w-1/2 flex justify-center items-center shrink-0">
              <Fade direction='left' triggerOnce cascade delay={500}>
                <Image src="/banner-1.jpeg" className="" alt='banner' height={700} width={700} />
              </Fade>
            </div>
            <div className="w-full mx-auto space-y-4 text-center lg:text-left lg:w-1/2 lg:px-20">
              <Fade direction='down' triggerOnce cascade delay={300}>
                {/* <p className="text-[--white]  font-semibold text-[28px] lg:text-[40px] tracking-wide">Creating The Future With EEVEE Gold.</p> */}
                <p className="text-[--white]  font-semibold text-[28px] lg:text-[40px] tracking-wide">Your Path to Digital Gold Ownership Begins Here.</p>
              </Fade>
              <Fade direction='down' triggerOnce cascade delay={400}>
                <p className="text-[--gray] lg:text-lg  font-medium tracking-wide">Purchase Smart, Gain More: Enjoy Exclusive Rewards When You Start Today!</p>
              </Fade>
              <div className="flex justify-center lg:justify-start ">
                <Fade direction='down' triggerOnce cascade delay={500}>
                  <AvatarGroup
                    renderSurplus={(surplus) => <span>+{surplus.toString()[0]}k</span>}
                    total={1000}
                    sx={{ border: 'none' }}
                  >
                    <Avatar alt="Remy Sharp" src="/avtar-1.jpeg" sx={{ border: 'none' }} />
                    <Avatar alt="Remy Sharp" src="/avtar-2.jpeg" sx={{ border: 'none' }} />
                    <Avatar alt="Remy Sharp" src="/avtar-3.jpeg" sx={{ border: 'none' }} />
                  </AvatarGroup>
                </Fade>
              </div>
              <Fade direction='down' triggerOnce cascade delay={600}>
                <Link href="/plans">
                  <button className='mt-10 hover:bg-[--secondary] hover:text-[--white] bg-[--white] rounded-full px-8 py-2 font-medium text-[--black] transition-all ease-in-out duration-500'>Explore more</button>
                </Link>
              </Fade>
            </div>
          </div>
        </div>

        {/* second section */}
       
          <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row  justify-between items-center">
            <div className="lg:hidden w-full lg:w-1/2 flex justify-center items-center shrink-0">
              <Fade direction='up' triggerOnce cascade delay={500}>
                <Image src="/banner-2.jpeg" alt="banner" className="" height={700} width={700} />
              </Fade>
            </div>
            <div className="w-full mx-auto text-center lg:text-left lg:w-1/2 lg:px-20">
              <Fade direction='up' triggerOnce cascade delay={300}>
                <p className="text-[--white]  font-semibold text-[28px] lg:text-[40px] tracking-wide mb-6">Start Purchase & Enjoy <br /> a Free Rewars After Certain Times – Sign Up Now</p>
              </Fade>
              <div className="space-y-4">
                <Fade direction='up' triggerOnce cascade delay={400}>
                  <p className="text-[--gray] lg:text-lg  font-medium tracking-wide">Simple and clear, with a strong call to action to sign up and enjoy the reward.</p>
                </Fade>
                <Fade direction='up' triggerOnce cascade delay={500}>
                  <p className="text-[--gray] lg:text-lg  font-medium tracking-wide">Encourages the first deposit, signaling the immediate benefit of sticking with the platform.</p>
                </Fade>
              </div>
            </div>
            <div className="hidden lg:flex w-full lg:w-1/2  justify-center items-center shrink-0">
              <Fade direction='up' triggerOnce cascade delay={500}>
                <Image src="/banner-2.jpeg" className="" alt="banner" height={500} width={500} />
              </Fade>
            </div>
          </div>
      

        {/* thrid section */}
        <div className="">
          <Fade direction='up' triggerOnce cascade delay={300}>
            <h1 className="text-center text-[28px] md:text-[32px] font-semibold text-[--white] ">Let&lsquo;s Get To Know EEVEE`&lsquo;s Features</h1>
          </Fade>

          <div className='h-full md:w-[70%] mx-auto md:pt-10 pt-2 grid grid-cols-1 md:grid-cols-2'>
            {Features.map((val, index) => {
              return (
                <div key={index}
                  className={`px-7 py-8 border-[--secondary] space-y-5 ${index % 2 === 0 ? 'md:border-r-2 md:border-r-[--primary]' : ''} ${index < Features.length - 2 ? 'border-b-2' : 'md:border-b-0'} ${index===Features.length-2 && 'md:border-b-0 border-b-2'}`}>
                  <Fade direction='up' triggerOnce cascade delay={300}>
                    <p className="text-white text-center text-lg md:text-xl font-medium md:font-semibold">
                      {val.title}
                    </p>
                  </Fade>
                  <Fade direction='up' triggerOnce cascade delay={400}>
                    <p className="text-[--gray] md:text-lg font-medium text-center">{val.details}</p>
                  </Fade>
                </div>
              )
            })}
          </div>
        </div>
        {/* fourth section */}
        {/* <div className="md:my-20 my-10">

        <h1 className="w-[90%] mx-auto text-center text-[28px] md:text-[32px] font-semibold text-[--white] my-4">Our Artificial-Intelligence Helps You Manage Your Money Efficiently</h1>
        <div className="h-full w-[90%] mx-auto flex flex-col  justify-center items-center my-10">
          <Image src="/money_mange.png" className="" height={500} width={500} />
        </div>
      </div> */}

        {/* fourth section */}
        <div className="">
          <div className="text-center  flex  justify-center items-center  ">
            <Fade direction='up' triggerOnce cascade delay={300}>
              <h1 className="text-[28px] md:text-[32px] font-semibold text-[--white] my-4">How To Create A EEVEE Account</h1>
            </Fade>
          </div>
          <div className="h-full md:border-t border-t-[--secondary]  mx-auto flex md:flex-row flex-col justify-center  mt-10">
            {AccountSteps.map((val, index) => {
              return (
                <div key={index}
                  className={`border-t md:w-1/5 md:border-t-0 ${index !== AccountSteps.length - 1 ? 'md:border-r md:border-r-[--primary]' : ''} border-t-[--secondary]`} >
                  <div className="p-6">
                    <Fade direction='up' triggerOnce cascade delay={300}>
                      <p className="md:text-3xl text-xl font-semibold text-[--white]">{val.id}</p>
                    </Fade>
                    <Fade direction='up' triggerOnce cascade delay={400}>
                      <p className="md:text-xl font-semibold tracking-wide mt-4 mb-6 text-[--white]  ">{val.title}</p>
                    </Fade>
                    <Fade direction='up' triggerOnce cascade delay={500}>
                      <p className="font-medium text-[--gray]">{val.details}</p>
                    </Fade>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* fifth section */}
        <div className='flex flex-col lg:flex-row items-center justify-between space-y-7 lg:space-y-0 lg:space-x-7 mx-auto pb-16'>
          <div className='w-full lg:w-[60%] space-y-10'>
            <Fade direction='up' triggerOnce cascade delay={300}>
              <h1 className=" text-center md:text-start text-[28px] md:text-[40px] font-semibold text-[--white]">Unlock Tomorrow’s Potential with EEVEE</h1>
            </Fade>
            <div className='grid grid-cols-1 md:grid-cols-2 mx-auto'>
              {OurClint.map((val, index) => {
                const isLastItem = index === OurClint.length - 1;
                return (
                  <div key={index}
                    className={`text-center w-full px-10 py-10 space-y-4 ${index % 2 === 0 ? 'md:border-r border-r-[--primary]' : ''} ${!isLastItem ? 'border-b border-b-[--secondary]' : ''}`}>
                    <Fade direction='up' triggerOnce cascade delay={300}>
                      <span>{val.icon}</span>
                    </Fade>
                    <Fade direction='up' triggerOnce cascade delay={400}>
                      <p className="text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium md:font-semibold text-white">
                        {val.title}
                      </p>
                    </Fade>
                    <Fade direction='up' triggerOnce cascade delay={500}>
                      <p className="text-[--gray] md:text-lg lg:text-md xl:text-lg font-medium ">{val.details}</p>
                    </Fade>
                  </div>
                )
              })}
            </div>
          </div>
          <div className='w-full lg:w-[40%] flex justify-center'>
            <Fade direction='right' triggerOnce cascade delay={700}>
              <div className='relative w-[90%] md:w-max mx-auto '>
                <Image src="/home-nextgen-bg-2.jpg" alt='nextgen' className="rounded-[20px]" height={500} width={500} />
                <Image src="/home-nextgen-peop-1.png" alt='nextgen' className=" absolute bottom-0 " height={500} width={500} />
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
