import { FaInstagram, FaTiktok } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { TbBrandFiverr } from "react-icons/tb";
import SectionOrbs from "../../background/SectionOrbs";
import { ORB_CONFIG } from "../../background/orbConfig";
import logo from "../../../assets/images/logo.webp";
import { Link } from "react-router-dom";

function FooterNew() {
    return (
        <footer className="w-full mx-auto h-fit">
            <SectionOrbs config={ORB_CONFIG.footer} />
            <div className="">
                <div className="grid grid-cols-2 p-8 space-y-4 xl:p-10 xl:space-y-0">
                    <div className="grid items-start grid-cols-2 col-span-2 xl:flex xl:justify-around xl:col-span-1">
                        <div className="flex flex-col items-center gap-4 text-center md:col-span-2">
                                      <div>
                                        <img src={logo} alt="Logo" className="h-auto object-contain w-[110px] md:w-[124px] lg:w-[136px]" />
                        
                                      </div>
                                      <p className="text-[10px] text-slate-300 leading-relaxed max-w-[180px]">
                                        Technology simplifies every aspect of life.
                                      </p>
                                    </div>
                        <div className='col-span-1 space-y-4'>
                            <div>
                                <h1 className='font-sans text-xs font-extrabold text-center text-white xl:text-lg 2xl:text-xl'>Business</h1>
                            </div>
                            <div className='space-y-2 text-center'>
                                <a href="mailto:info@kvi.or.id" className="text-[10px] transition-colors hover:text-white xl:text-lg 2xl:text-xl">pausnusantara@gmail.com</a> <br></br>
                                <a href="tel:02178848462" className="text-[10px] transition-colors hover:text-white xl:text-lg 2xl:text-xl">0821567891011</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-2 space-y-4 xl:col-span-1'>
                        <div>
                            <h1 className='font-sans text-xs font-extrabold text-center text-white xl:text-lg 2xl:text-xl'>Address</h1>
                        </div>
                        <div className='text-center'>
                            <span>
                                Jl. Kota Semarang, Indonesia
                            </span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2">
                    <div className='text-center order-2 xl:order-1 p-2.5 xl:p-5 my-auto'>
                        <h1 className='font-sans text-xs font-extrabold text-center text-white xl:text-lg 2xl:text-xl'>
                            © Ammertav. Seluruh hak cipta dilindungi.
                        </h1>
                    </div>
                    <div className='order-1 p-4 mx-auto space-y-4 xl:order-2'>
                        <div>
                            <h1 className='font-sans text-xs font-extrabold text-center text-white xl:text-lg 2xl:text-xl'>
                                Connect With Us
                            </h1>
                        </div>
                        <div className='flex justify-center gap-4 xl:gap-8'>
                            <Link to='https://www.instagram.com/sivinaries/'>
                                <FaInstagram className='w-8 h-8 text-white' />
                            </Link>
                            <Link to='https://www.tiktok.com/@sivinaries'>
                                <FaTiktok className='w-8 h-8 text-white' />
                            </Link>
                            <Link to='https://wa.me/6287788476372'>
                                <IoLogoWhatsapp className='w-8 h-8 text-white' />
                            </Link>
                            <Link to='https://www.fiverr.com/sivinaries'>
                                <TbBrandFiverr className='w-8 h-8 text-white' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default FooterNew;
