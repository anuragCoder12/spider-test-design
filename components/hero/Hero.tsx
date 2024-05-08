import { CiSearch } from "react-icons/ci";
import { RiMessageLine } from "react-icons/ri";
import { AiOutlineBulb } from "react-icons/ai";
const Hero = () => {
    return ( 
        <>
        <div className="w-full h-[40px] bg-white p-[0px] lg:p-[25px] flex items-center justify-center gap-[20px]">
        <div className="w-full h-[40px] flex items-start mt-[40px]">
        <p className="text-zinc-950/opacity-50 text-[10px] font-normal font-['Public Sans']">Home/Forum</p>
        </div>
        </div>
        <div className="w-full h-[400px] bg-white p-[5px] lg:p-[25px] flex flex-col items-center  gap-[20px]">
        <div className="text-zinc-950 text-[13px] font-light font-['Public Sans'] uppercase">forum</div>
        <div><span className="text-gray-900 text-4xl font-normal font-['Georgia'] leading-[45px]">Discuss & </span><span className="text-gray-900 text-4xl font-normal font-['Georgia'] leading-[45px]">Evolve</span></div>
        <div className="w-[90%] text-center text-zinc-950/opacity-60 text-base font-normal font-['Public Sans'] leading-[23px]">Engage with Fellow Professionals: Join the  Program Forum Discussion!</div>
        <div className="w-[90%] lg:w-[465px] h-[57px] rounded-[27px] border border-zinc-950 flex items-center justify-between px-[20px]">
      <input
        type="text"
        className="text-zinc-950 text-base font-normal font-['Public Sans'] leading-tight tracking-wide outline-none bg-transparent flex-1"
        placeholder="Search Topics"
      />
      <div className="w-[38px] h-[38px] bg-[#161226] rounded-full flex items-center justify-center">
        <CiSearch className="text-white w-[21.49px] h-[21.49px]" />
      </div>
    </div>
    <div className=" flex flex-col lg:flex-row items-center gap-[5px] lg:gap-[40px]">
        <div className="flex items-center gap-[8px]">
    <div className="w-[51px] h-[35px]   bg-pink-50 rounded-[39px] flex items-center justify-center" >
    <RiMessageLine className="w-[14px] h-[14px] text-[#B31942]"/>
    </div>
    <div className="w-[134px] h-3.5 text-gray-900 text-[13px] font-normal font-['Public Sans'] uppercase tracking-wide">Start discussing</div>
    </div>
    <div className="w-1.5 h-1.5 bg-slate-500 rounded-full" />
    <div className="flex items-center gap-[8px]">
    <div className="w-[51px] h-[35px]  bg-blue-200 rounded-[39px] flex items-center justify-center" >
        <AiOutlineBulb className="w-[14px] h-[14px] text-[#0183FF]"/>
    </div>
    <div className="text-gray-900 text-[13px] font-normal font-['Public Sans'] uppercase tracking-wide">view topics</div>
    </div>
    </div>

        </div>
        </>
     );
}
 
export default Hero;