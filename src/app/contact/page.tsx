import { IoIosSearch } from "react-icons/io";
import { FaMobileAlt } from "react-icons/fa";
import { BiSolidMessageDetail } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
import { TiLocation } from "react-icons/ti";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";

export default function Contactus(){
 return <div className="font-sans">
   <div className="w-[1440px] h-[132px] text-center">
      <p className="font-semibold leading-6 text-[32px] mt-[40px]">GET HELP</p>
      <div className="w-[457.33px] h-[56px] rounded-[8px] ml-[500px] mt-[40px] border-[1px] border-[#00000060] flex items-center">
         <p className="text-[#757575] text-[15px] leading-6 ml-[16px]">What can we help you with?</p>
         <IoIosSearch className="w-[24px] h-[18px] ml-[200px] mt-[3px]" />
      </div>
   </div>

   <div className="w-[1309px] h-[1098px] pt-[30px] mt-[30px] ml-[59.5px] flex">
       {/* LHS  */}
      <div className="w-[939.75px] h-[1042px]">
       <p className="font-semibold text-[28px] leading-[32px] ml-[-200px] text-center">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</p>
       <p className="font-medium text-[15px] leading-6 mt-[18px]">We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
       <div className="w-[907.75px] h-[108px]">
         <p className="font-medium text-[15px] leading-6 mt-[8px]">Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
         <p className="font-medium text-[15px] leading-6 mt-[8px]">If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.</p>
         <p className="font-medium text-[15px] leading-6 mt-[8px]">Apple Pay</p>
       </div>
       <div className="w-[907.75px] h-[56px]">
         <p className="font-medium text-[15px] leading-6 mt-[8px]">Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member, join us today.</p>
       </div>
         <div className="flex mt-[20px] mb-[30px]">
            <div className="w-[106.13px] h-[39px] bg-black rounded-[30px] py-[7.5px] pr-[5.63px] pl-[24px]">
               <p className="font-medium text-[14px] text-white leading-6 ">JOIN US</p>
            </div>

            <div className="w-[129.84px] h-[39px] bg-black rounded-[30px] py-[7.5px] pr-[5.63px] pl-[26px] ml-[14px]">
               <p className="font-medium text-[14px] text-white leading-6 ">SHOP NIKE</p>
            </div>
         </div>

         <div className="w-[923.75px] h-[168px]">
            <p className="font-medium text-[18px] leading-6 mb-[10px]">FAQs</p>
            <div className="w-[923.75px] h-[84px]">
               <p className="font-medium text-[18px] leading-6 ">Does my card need international purchases enabled?</p>
               <p className="font-medium text-[15px] leading-6 mt-[8px]">Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
            </div>
            <p className="font-medium text-[15px] leading-6 mt-[8px]">Please note, some banks may charge a small transaction fee for international orders.</p>
         </div>
          <div className="w-[923.75px] h-[56px]0 mt-[20px]">
            <p className="font-medium text-[18px] leading-6 ">Can I pay for my order with multiple methods?</p>
            <p className="font-medium text-[15px] leading-6 mt-[10px]">No, payment for Nike orders can't be split between multiple payment methods.</p>
          </div>

          <div className="w-[923.75px] h-[56px] mt-[20px]">
            <p className="font-medium text-[18px] leading-6 ">What payment method is accepted for SNKRS orders?</p>
            <p className="font-medium text-[15px] leading-6 mt-[10px]">You can use any accepted credit card to pay for your SNKRS order.</p>
          </div>

          <div className="w-[923.75px] h-[112px] mt-[20px]">
            <p className="font-medium text-[18px] leading-6 ">Why don't I see Apple Pay as an option?</p>
            <p className="font-medium text-[15px] leading-6 mt-[10px]">To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.</p>
          </div>

          
          <div className="w-[923.75px] h-[175px] mt-[20px]">
            <p className="font-medium text-[15px] leading-6 ">Was this answer helpful?</p>
             <div className="flex"><BiSolidLike className="w-[26px] h-[30px]" /><BiSolidDislike className="w-[26px] h-[30px]"/></div>
             <div className="w-[923.75px] h-[175px]">
             <p className="font-medium text-[15px] leading-6 mt-[10px] text-[#757575]">RELATED</p>
               <div className="w-[907.75px] h-[68px]">
                  <p className="text-[16px] underline mt-[20px]">WHAT ARE NIKE'S DELIVERY OPTIONS?</p>
                  <p className="w-[907.75px] h-[68px] text-[16px] underline">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</p>
               </div>
             </div>
          </div>
         
        
      </div>

      {/* RHS  */}
      <div className="w-[313.25px] h-[1042px] ml-[px]">
         <p className="font-semibold text-[28px] leading-[32px] text-center">CONTACT US</p>
         <div className="w-[265.25px] h-[836px] ml-[44px] mt-[20px]">
                              {/* 1 */}
            <div className="w-[265.25px] h-[242px] text-center mb-[40px]">
             <FaMobileAlt className="w-[64px] h-[64px] ml-[97px]" />
             <div className="w-[265.25px] h-[136px]">
                <p className="font-semibold text-[16px] leading-7">000 800 919 0566</p>
                <p>Products & Orders: 24 hours a day, 7 days a week
                Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
             </div>
            </div>
                              {/* 2 */}
            <div className="w-[265.25px] h-[158px] mb-[40px] text-center">
                <BiSolidMessageDetail className="w-[64px] h-[64px] ml-[100px]" />
                <p className="w-[265.25px] h-[52px] font-semibold text-[16px] leading-7">24 hours a day <br />7 days a week</p>
            </div>
                              {/* 3 */}
            <div className="w-[265.25px] h-[158px] mb-[30px] text-center">
            <IoIosMail className="w-[64px] h-[64px] ml-[110px]" />
            <p className="w-[265.25px] h-[52px] font-semibold text-[16px] ml-[7px] leading-7">We'll reply within<br />five business days</p>
            </div>
                              {/* 4 */}
            <div className="w-[265.25px] h-[158px] text-center">
             <TiLocation className="w-[64px] h-[64px] ml-[100px]" />
             <p className="w-[231.44px] h-[52px] font-semibold text-[16px] ml-[13px] leading-7">STORE LOCATOR <br />Find Nike retail stores near you</p>
            </div>
         </div>
      </div>
   </div>
</div>
}
