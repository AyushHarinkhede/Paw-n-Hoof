import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdOutlinePets } from "react-icons/md";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { AiTwotoneMessage } from "react-icons/ai";



function Footer() {
    return (
        <>
            <section className='w-scree h-[80vh] bg-[#421f16]'>

                <div className='Container flex  justify-between grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-10  border-b-4 border-[#bfb5b2] pb-30'>

                    <div className="sectionFirst mt-10 ">
                        <div className="head text-white font-extrabold text-3xl flex items-center gap-4 mb-3" ><MdOutlinePets className='text-[#ed7c2b]' />PetHaven</div>
                        <div className='text-[#bfb5b2]'>Brining the Farmars Market to Your kitchen. fresh,organic groceries delivered to your doorsteps.
                        </div>
                        <div className='text-[#bfb5b2] text-2xl font-extrabold flex gap-4 mt-4 flex-row flex'>
                       <FaEarthAmericas />
                          <IoMail />
                            <AiTwotoneMessage />
                        </div>

                    </div>

                    
                    <div className="sectionSecond text-white flex flex-col  mt-10"> 
                        <div className="head  text-white font-bold text-1xl">Quick Links</div>
                        <div className="list text-[#bfb5b2] flex flex-col gap-2 mt-4 list-none">
                            <li>Adob a Pet</li>
                            <li>Voluters</li>
                            <li>Success Story</li>
                            <li>Donet</li>
                            <li>Contac Us</li>
                        </div>
                    </div>


                    <div className="sectionThird text-white flex flex-col  mt-10"> 
                        <div className="head  text-white font-bold text-1xl">Company</div>
                        <div className="list text-[#bfb5b2] flex flex-col gap-2 mt-4 list-none">
                            <li>About Us</li>
                            <li>Carrers</li>
                            <li>Our Blogs</li>
                            <li>Sustainability</li>
                            <li>Affiliate Program</li>
                        </div>
                    </div>


                    <div className="sectionFourth text-white flex flex-col  mt-10"> 
                        <div className="head  text-white font-bold text-1xl">Contact</div>
                        <div className="list text-[#bfb5b2] flex flex-col gap-2 mt-4 list-none">
                            <li className='flex gap-5 items-center mb-3'><FaLocationDot className='text-[#ed7c2b]' />123 Market Street,Suite 480 Sen Francisec,CA 94103</li>
                            <li className='flex gap-5 items-center mb-3'><FaPhoneAlt className='text-[#ed7c2b]'/>+1 (555) 123-4567</li>
                            <li className='flex gap-5 items-center mb-3'><IoIosMail className='text-[#ed7c2b]' />contact@grocerx.com</li>
                            
                        </div>
                    </div>


                </div>

                <div className="CopyWritw text-center text-[#bfb5b2] flex items-center justify-between pl-5 pr-5 mt-6">
                    <div className="f1">© 2024 PetHaven. All rights reserved.</div>
                    <div className="f2 text-[#bfb5b2] flex justify-center ">
                        <span className='mr-4'>Privacy Policy</span>
                        <span className='mr-4'>Terms of Service</span>
                        <span className='mr-4'>Cookie Policy</span>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Footer
