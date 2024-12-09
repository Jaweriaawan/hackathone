export default function Login(){
    return <div>
      <div className="w-[380px] h-[489px] ml-[503px] mb-[100px] mt-[20px]">
         <div className="w-[186.5px] h-[57px] text-center ">
         <p className="w-[186.5px] h-[57px] font-bold text-[18px] ledaing-[26px] text-center ml-[100px]">YOUR ACCOUNT FOR EVERYTHING NIKE</p>
         </div>
         <div className="mt-[30px]">
            <input placeholder="Email address" className="w-[380px] h-[40px] mb-[10px] mt-[30px] text-[#8D8D8D] border-[1px] rounded-[3px] border-[#00000060]"></input><br />
            <input type="text" placeholder="Password" className="w-[380px] text-[#8D8D8D] h-[40px] border-[1px] rounded-[3px] border-[#00000060]"></input>
         </div>
         <div className="w-[370px] h-[20px] flex mt-[30px]">
            <div className="w-[162px] h-[20px] flex">
               <div className="w-[20px] h-[20px] border-[1px] rounded-[3px] mt-[-3px] border-[#BCBCBC]"></div>
               <p className="font-medium text-[12] leading-[14px] text-[#8D8D8D] ml-[9px]">Keep me signed in</p>
            </div>
            <p className="font-medium text-[12] leading-[14px] text-[#8D8D8D] ml-[12px]">Forgotten your password?</p>
         </div>
         <div className="w-[334px] h-[59px] mt-[30px] text-center ml-[20px]">
            <p className="text-[#8D8D8D]">By logging in, you agree to Nike's <span className="underline"> Privacy Policy and Terms of Use.</span></p>
         </div>    
         <div className="w-[380px] h-[40px] mt-[30px] bg-black border-[1px] text-white rounded-[3px] text-center">
            <p className="font-medium text-[15px] mt-[7px]">SIGN IN</p>
         </div>
         <div className="w-[179.61px] h-[14px] ml-[100px] mt-[40px]">
            <p className="font-medium text-[10] leading-[14px] text-[#8D8D8D]">Not a Member?<span className="underline text-black"> Join Us.</span></p>
         </div>
      </div>
   </div>
   }