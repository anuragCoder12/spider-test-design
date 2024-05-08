import { AiOutlineBulb } from "react-icons/ai";
import downArr from "@/public/Vector.png"
import Image from "next/image";
import { people } from "@/utils/people";
import { TiMessages } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
const Questions = () => {
    return ( 
        <>
        <div className=" w-full  flex flex-col gap-[30px]"> 
        <div className="w-full flex flex-col lg:flex-row gap-[20px] justify-between">
            <div className="flex items-center gap-[4px]">
            <p className="text-zinc-950 text-[11px] font-light font-['Public Sans'] uppercase">Latest dicussions as of</p>
            <div className="w-[17px] h-3 bg-rose-700 rounded-[1px]" />
            <p className="text-zinc-950 text-[11px] font-medium font-['Public Sans'] uppercase">MARCH 12 2024</p>
            </div>
            <div className="w-[146px] h-[35px]  bg-blue-200 rounded-[39px] flex items-center justify-evenly " >
                <AiOutlineBulb className="w-[14px] h-[14px] text-[#0183FF]"/>
                <div className="w-16 h-[11px] text-zinc-950 text-[11px] font-medium font-['Public Sans'] uppercase leading-3">All TOPICS</div>
                <Image src={downArr} alt="" width={10} height={5}/>
            </div>
        </div>
        <div className="py-[7px] rounded-[27px] border border-zinc-950 flex items-center justify-between px-[20px]" >
        <input
        type="text"
        className="text-zinc-950 text-base font-normal font-['Public Sans'] leading-tight tracking-wide outline-none bg-transparent flex-1"
        placeholder="Search Topics"
      />
      <div className="w-[38px] h-[38px] bg-[#161226] rounded-full flex items-center justify-center">
        <CiSearch className="text-white w-[21.49px] h-[21.49px]" />
      </div>
        </div>
        {
            people && people.map((data, i) => (
                <div className="w-full  py-[20px] border-b flex flex-col lg:flex-row items-center justify-between mt-[10px]" key={i}>
                    <div className="flex items-start gap-[10px]">
                        <Image src={data.image} alt="" width={43} height={43} className="w-[43px] h-[43px] rounded-full "/>
                        <div className="flex flex-col  justify-center">
                        <h5 className=" text-zinc-950 text-lg font-normal font-['Public Sans'] leading-normal">{data.question}</h5>
                        <p className="text-zinc-950/opacity-60 text-[11px] font-normal font-['Public Sans'] leading-[13.44px] tracking-tight mb-[10px] ">Posted by {data.name}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-[16px]">
                    <div className="w-[133px] cursor-pointer h-[42px] bg-[#F2EFFF] rounded-[40px] flex items-center justify-center gap-[10px]" >
                        <TiMessages className="w-[20px] h-[20px] text-[#B31942]"/>
                        <div className="text-zinc-950 text-[9px] font-medium font-['Public Sans'] uppercase leading-[17px]">{data.reponse}  RESPONSES</div>
                         </div>
                         <div className="w-[150px] h-[42px] bg-zinc-950 rounded-[5px] flex items-center justify-center cursor-pointer" >
                         <p className="text-yellow-50 text-sm font-medium font-['Public Sans'] leading-[17.53px] tracking-wide">View Answer</p>
                         </div>
                         </div>
                </div>
            ))
        }
         </div>
        </>
     );
}
 
export default Questions;