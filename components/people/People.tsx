import Image from "next/image";
import people from "@/public/Group 1261155643.png"
const People = () => {
    return ( 
        <>
        <div className=" hidden lg:flex w-full h-[450px] pt-[30px] pb-[30px]">
        <Image src={people} alt="" width={1440} height={366} className="w-full h-[366px]"/>
        </div>
        </>
     );
}
 
export default People;