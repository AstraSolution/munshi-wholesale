import React from 'react';
import { CiCamera } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Profile_Page = () => {
    return (
        <div className='lg:flex lg:gap-4 container mx-auto px-1'>
            {/* left side  */}
            <div className='lg:w-4/12 w-full  '>
                <div>
                    <div className=" mt-1 lg:min-h-screen bg-white shadow-xl rounded-lg text-gray-900">
                        {/* cover photo  */}
                        <div className="relative rounded-t-lg h-32 overflow-hidden">
                            <img className="object-cover object-top w-full" src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="" />
                            {/* Edit icon */}

                            <CiCamera className="absolute bottom-1 right-2 w-8 h-8 text-white fill-current bg-black rounded-full p-1 cursor-pointer hover:bg-gray-900"></CiCamera>

                        </div>
                        {/* Profile image */}
                        <div className="mx-auto  w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                            <img className="object-cover object-center h-32" src='https://i.ibb.co/5jQYxLn/about1.jpg' alt='Woman looking front' />
                            {/* Edit icon */}
                            {/* <CiCamera className="absolute bottom-4 right-0 w-6 h-6 text-white fill-current bg-black rounded-full p-1 cursor-pointer hover:bg-gray-900"></CiCamera> */}

                        </div>
                        <div className="text-center mt-2">
                            <h2 className="font-semibold">Siyam Ahmed </h2>
                            <p className="text-gray-500">Email </p>
                            <p className="text-gray-500">Freelance Web Designer</p>
                        </div>
                        <div className='px-2'>
                            <h1> Bio </h1>
                            <p className='textsm md:text-lg lg:text-xl '>I am Siyam Ahmed A problem solver who demonstrates skills like critical thinking, analytical reasoning, creativity, and persistence. They excel at identifying, analyzing, and solving complex problems using systematic approaches. This involves breaking down problems, generating solutions, evaluating alternatives, and implementing effective strategies. Effective communication and collaboration skills are also crucial for working in teams and conveying solutions clearly</p>
                        </div>

                      
                    </div>
                </div>
            </div>
            {/* right side  */}
            <div className='lg:w-8/12 w-full mx-auto mt-3 lg:mt-0 '>
                <div>
                    <div className='flex items-center justify-between  '>
                        <h1 > Parsonal Information </h1>
                        <Link to={"/dashboard/profile_update"}>
                            <button><CiEdit className='text-3xl cursor-pointer '></CiEdit></button>
                        </Link>
                    </div>
                    <div className='border-b-2 border-gray-600 pt-2 '></div>


                    <div className='my-2 '>
                        <div>
                            <h1 className='py-2'> Name :- </h1>
                            <h3 className='border border-gray-600 rounded-md   w-full py-1 px-2 '> Full Name  </h3>
                        </div>


                        <div className='my-2'>
                            <h1 className='py-2'> Phone Number :- </h1>
                            <h3 className='border border-gray-600 rounded-md   w-full py-1 px-2 '> Phone Number  </h3>
                        </div>

                        <div className='my-2'>
                            <h1 className='py-2'> Post Code :- </h1>
                            <h3 className='border border-gray-600 rounded-md   w-full py-1 px-2 '> Post Code  </h3>
                        </div>

                        <div className='my-2'>
                            <h1 className='py-2'> State :- </h1>
                            <h3 className='border border-gray-600 rounded-md   w-full py-1 px-2 '> State </h3>
                        </div>

                        <div className='my-2'>
                            <h1 className='py-2'> District :- </h1>
                            <h3 className='border border-gray-600 rounded-md   w-full py-1 px-2 '> District </h3>
                        </div>

                        <div className='my-2'>
                            <h1 className='py-2'> Country :- </h1>
                            <h3 className='border border-gray-600 rounded-md   w-full py-1 px-2 '> Country </h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Profile_Page;