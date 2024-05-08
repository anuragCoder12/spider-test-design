import logo from "@/public/Group 2.png"
import search from "@/public/search-normal.png"
import { navLinks } from "@/utils/Links";
import Image from "next/image";
const Navbar = () => {
    return ( 
        <>
        <div className="w-full h-[96px] bg-[#ffff] flex items-center justify-around border-b">
            <Image src={logo} alt="" width={42.7} height={51.28}  />
            <div className="hidden w-[450px] h-[18.36px] lg:flex items-center justify-between">
            {
                navLinks && navLinks.map((link, i) => (
                    <p className="text-gray-900 text-[15px] font-normal font-['Public Sans'] cursor-pointer" key={i}>{link.link}</p>
                ))
            }
            </div>
            <div className="flex items-center">
            <div className="w-[50px] h-[50px] rounded-full bg-[#161226] flex items-center justify-center z-10">
                <div className="w-[36px] h-[36px] rounded-full bg-[#ffff] flex items-center justify-center">
                    <Image src={search} alt="" width={15} height={15}/>
                </div>
            </div>
            <div className="w-[15px] h-[25px] bg-[#161226] relative left-[-10px]"></div>
            <div className="w-[160px] h-[50px] bg-[#161226] relative left-[-13px] rounded-full items-center justify-center flex">
            <p className="text-yellow-50 text-base font-normal font-['Public Sans']">Join Program</p>
            </div>
            </div>
        </div>

        </>
     );
}
 
export default Navbar;