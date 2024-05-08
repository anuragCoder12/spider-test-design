import Image from "next/image";
import Questions from "../question/Questions";
import imageStar1 from "@/public/Star 1.png";
import star2 from "@/public/MenImag.png"
import { IoIosArrowRoundForward } from "react-icons/io";
const Down = () => {
  return (
    <>
      <div className="w-full pt-[30px] flex flex-col lg:flex-row items-center px-[15px]  lg:px-[80px] py-[15px] lg:py-[70px] gap-[20px]">
        <div className=" w-full lg:w-[60%] flex flex-col gap-[30px]">
          <Questions />
        </div>
        <div className=" w-full lg:w-[40%] flex flex-col items-center justify-start gap-[50px]">
          <div className="  flex flex-col w-full lg:w-[80%] gap-[70px]  bg-[#FFEADE] items-center pt-[70px] pb-[20px]">
            <div className="flex flex-col items-center ">
              <div className="w-[180px] h-[62px]">
                <h4 className="text-center">
                  <span className="text-zinc-950 text-2xl font-normal font-['Georgia'] leading-[31px]">
                    Top Contributor <br />
                  </span>
                  <span className="text-zinc-950 text-2xl font-normal font-['Georgia'] leading-[31px]">
                    this week
                  </span>
                </h4>
              </div>
              <Image
                src={imageStar1}
                alt=""
                width={190}
                height={190}
                className=""
              />
              <h6 className="text-zinc-950 text-xl font-normal font-['Public Sans'] leading-normal tracking-wide">
                Jishnu Ambadi
              </h6>
            </div>
            <div className="w-[70%] flex flex-col items-center gap-[30px]">
              <h5 className="text-center text-zinc-950 text-base font-normal font-['Public Sans'] leading-[23px]">
                You can be next one! Be a part of USA’s 1st CPT Program
                Directory!
              </h5>
              <button className="w-full h-[60px] bg-gradient-to-br from-[#9b248d] to-[#4e1b69] rounded-full">
                <div className="text-white text-base font-normal font-['Public Sans'] leading-[8px]">
                  Join Community & Ask
                </div>
              </button>
            </div>
          </div>

          <div className=" flex flex-col w-full lg:w-[80%]  bg-gradient-to-b from-[#2e103e] to-[#9b248d] items-center pt-[70px] pb-[20px] gap-[30px]">
            <Image src={star2} alt="" height={270.8} width={246.66}/>
            <h6 className="text-white text-[13px] font-light font-['Public Sans'] uppercase">E-BOOK</h6>
            <p className="w-[326px] text-center"><span className="text-white text-xl font-normal font-['Georgia'] leading-7">Charting Paths:Program Through a </span><span className="text-white text-xl font-normal font-['Georgia'] leading-7">Student's</span><span className="text-white text-xl font-normal font-['Georgia'] leading-7"> Eyes</span></p>
            <button className="w-[181px] h-[49px] rounded-[42px] border border-yellow-50 flex justify-evenly items-center" >
            <p className="text-yellow-50 text-[15px] font-normal font-['Public Sans']">Get the guide</p>
            <IoIosArrowRoundForward className=" text-white"/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Down;
