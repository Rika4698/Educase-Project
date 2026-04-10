import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='w-93.75 h-182.5 md:h-screen lg:h-183.5 bg-[#F7F8F9] opacity-100 flex flex-col justify-end border border-gray-200'>

            <div>
                <h1 className='font-medium text-[28px] text-[#1D2226] leading-4.25 text-left ml-5 w-57.75 h-8.25  '>
                    Welcome to PopX
                </h1>
                <p className='text-left font-normal opacity-60 leading-6.5 text-[#1D2226] mt-2.5 ml-5 w-58 h-12 text-lg'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit,
                </p>
            </div>

            <div className='flex flex-col gap-2.5 font-medium mt-7.25 mb-10.25'>
                <Link to='/registration'>
                    <button className=' text-center text-[#FFFFFF] text-base px-26.75 py-3.25 ml-5 mr-5 w-83.75 h-11.5 bg-[#6C25FF] rounded-md cursor-pointer active:bg-[#8970bf] hover:bg-[#8970bf] active:text-[#1D2226] hover:text-[#1D2226] transition-all duration-300 ease-in-out'>
                        Create Account
                    </button>

                </Link>
                <Link to='/login'>
                    <button className='text-center text-[#1D2226] text-[16px] px-16.5 py-3.25 ml-5 mr-5 w-83.75 h-11.5 bg-[#6C25FF4B] rounded-md cursor-pointer active:bg-[#6C25FF] hover:bg-[#6C25FF] active:text-[#FFFFFF] hover:text-[#FFFFFF] transition-all duration-300 ease-in-out'>
                        Already Registered? Login
                    </button>

                </Link>

            </div>

        </div>
    );
};

export default Home;