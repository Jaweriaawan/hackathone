import Image from "next/image"
import logo from "@/app/images/logo.png"
import { IoIosArrowDown } from "react-icons/io";

export default function Joinus(){
 return <div className="font-sans">
  <div className="w-[380px] h-[833px] mt-[80px] ml-[515.5px]">
     <Image src={logo} alt="logo" className="ml-[165px]" />
     <p className="font-semibold text-[18px] leading-[26px] text-center mt-[30px]">BECOME A NIKE MEMBER</p>
     <p className="w-[282.08px] h-[60px] ml-[50px] font-semibold text-[14px] leading-[22px] text-center mt-[30px] text-[#8D8D8D]">Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
     <div className="w-[324px] h-[561px] mt-[20px] ml-[28px] text-[#8D8D8D]">
        <input placeholder="Email address" className="w-[324px] h-[40px] border-[1px] border-[#00000060] outline-none mb-[10px]"></input>
        <input placeholder="Password" className="w-[324px] h-[40px] border-[1px] border-[#00000060] outline-none mb-[10px]"></input>
        <input placeholder="First Name" className="w-[324px] h-[40px] border-[1px] border-[#00000060] outline-none mb-[10px]"></input>
        <input placeholder="Last Name" className="w-[324px] h-[40px] border-[1px] border-[#00000060] outline-none mb-[10px]"></input>
        <div className="w-[324px] h-[69px]">
        <input placeholder="Last Name" className="w-[324px] h-[40px] border-[1px] border-[#00000060] outline-none mb-[10px]"></input>
        <p className="font-medium text-[11px] leading-[13.31px] text-center">Get a Nike Member Reward every year on your Birthday.</p>
        </div>
        <div className="w-[324px] h-[40px] border-[1px] border-[#00000060] outline-none mb-[10px] text-[#8D8D8D] flex">
         <span className="mt-[9px]">india</span><IoIosArrowDown className="ml-[250px] w-[20px] h-[20px] mt-[10px]" />
        </div>
        <div className="w-[324px] h-[40px] flex gap-[15px] mt-[20px]">
           <div className="w-[153.89px] h-[43px]  border-[1px] border-[#00000060] rounded-[4px]">
              <p className="font-medium text-[15px] leading-[15.73px] ml-[60px] mt-[10px]">Male</p>
           </div>
           <div className="w-[153.89px] h-[43px]  border-[1px] border-[#00000060] rounded-[4px]s">
           <p className="font-medium text-[15px] leading-[15.73px] ml-[50px] mt-[10px]">Female</p>
           </div>
        </div>
        <div className="w-[324px] h-[38px] mt-[30px] pt-[4px] flex">
           <div className="w-[20px] h-[20px] rounded-[4px] bg-[#BCBCBC] border-[1px] border-[#00000060] ml-[2px]"></div>
           <p className="w-[247px] h-[28px] font-normal text-[12px] ml-[10px] leading-[14px]">Sign up for emails to get updates from Nike on products, offers and your Member benefits</p>
        </div>
        <div className="w-[324px] h-[59px] mt-[20px]">
           <p className="font-normal text-[13px] text-center">By creating an account, you agree to Nike's <span className="underline">Privacy Policy and Terms of Use.</span></p>
        </div>
        <div className="w-[324px] h-[40px] bg-black mt-[6px] pt-[11px]">
           <p className="font-medium text-[15px] leading-[17px] text-white text-center">JOIN US</p>
        </div>
      </div>
        <div className="w-[148.95px] h-[14px] ml-[110px] mt-[40px]">
           <p className="font-normal text-[12px]">Already a Member?<span className="underline text-black"> Sign In.</span></p>
        </div>
  </div>
</div>
}