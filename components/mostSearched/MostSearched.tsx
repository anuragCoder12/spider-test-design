import { cardComponent } from "@/utils/Links";
import Image from "next/image";
import { RiMessageLine  } from "react-icons/ri";
const MostSearched = () => {

    return ( 
        <div className="w-full h-auto lg:h-[725px] flex gap-[50px] flex-col items-center justify-center bg-[#FFF9E3] ">
            <div className="flex flex-col items-center justify-center gap-[5px]">
<h2 className="text-zinc-950 text-[13px] font-light font-['Public Sans'] uppercase">TOPICS</h2>
<h3><span className="text-gray-900 text-4xl font-normal font-['Georgia'] leading-[45px]">Most Searched </span><span className="text-gray-900 text-4xl font-normal font-['Georgia'] leading-[45px]">Ones</span></h3>
</div>
<div className="flex flex-wrap gap-[20px] w-[68%] ">
    {
        cardComponent && cardComponent.map((data, i) => (
<div className={`w-[323px] h-[145px]
${ i=== 0 ? "bg-gradient-to-b from-[#2e103e] to-[#9b248d]" : "bg-gray-900 "} 
 rounded-[10px] flex items-center justify-center` } key={i}>
<div className="text-white text-2xl font-normal font-['Georgia'] leading-[37px]">{data.title}</div>
</div>
        ) )
    }



</div>
<div className="flex gap-[10px] items-center">
<p className="text-zinc-950 text-base font-normal font-['Public Sans'] leading-[23px]">Didn’t find your topic?</p>
<div className="flex items-center gap-[8px]">
    <RiMessageLine className="w-[14px] h-[14px] text-[#B31942]"/>
<p className="w-[136px] h-[13px] text-gray-900 text-[15px] font-normal font-['Georgia'] leading-[17.39px] tracking-wide">Start discussing</p>
</div>
</div>
        </div>
     );
}
 
export default MostSearched;