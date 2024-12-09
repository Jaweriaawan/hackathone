import { MdLocationPin } from "react-icons/md"; 
import { FaTwitter } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";

export default function Footer(){
 return <div>
    <div className="w-[1411px] h-[331px] bg-black pt-[30px]">
       <div className="w-[1343px] h-[213px] ml-[34px] flex">
                           {/* 1st box */}
           <div className="w-[239.81px] h-[169.93px] text-[#7E7E7E]">
              <p className="font-semibold text-[13px] leading-[32.67px] text-white">Find A Store</p>
               <p className="font-medium text-[11px] leading-[32.67px]">Become A Member</p>
               <p className="font-medium text-[11px] leading-[32.67px]">Sign Up for Email</p>
               <p className="font-medium text-[11px] leading-[32.67px]">Send Us Feedback</p>
               <p className="font-medium text-[11px] leading-[32.67px]">Student Discounts</p>
           </div>
                            {/* 2nd box */}
           <div className="w-[239.81px] h-[213px] ml-[10px] text-[#7E7E7E]">
               <p className="font-semibold text-[13px] leading-[32.67px] text-white">Get Help</p>
               <p className="font-medium text-[11px] leading-[32.67px]">Order Status</p>
               <p className="font-medium text-[11px] leading-[32.67px]">Delivery</p>
               <p className="font-medium text-[11px] leading-[32.67px]">Returns</p>
               <p className="font-medium text-[11px] leading-[32.67px]">Payment Options</p>
               <p className="font-medium text-[11px] leading-[32.67px]">Contact Us On Nike.com Inquiries</p>
               <p className="font-medium text-[11px] leading-[32.67px]">Contact Us On All Other Inquiries</p>
           </div>

           <div className="w-[239.81px] h-[151px] ml-[10px] text-[#7E7E7E]">
               <p className="font-semibold text-[13px] leading-[32.67px] text-white">About Nike</p>
               <p className="font-medium text-[11px] leading-[32.67px]">News</p>
               <p className="font-medium text-[11px] leading-[32.67px]">Careers</p>
               <p className="font-medium text-[11px] leading-[32.67px]">Investors</p>
               <p className="font-medium text-[11px] leading-[32.67px]">Sustainability</p>
           </div>

           <div className="w-[329.75px] h-[37px] ml-[270px] flex ">
                <div className="w-[33px] h-[33px] rounded-[100%] bg-[#7E7E7E] ml-[105px]"><FaTwitter className="w-[22px] h-[22px] ml-[5px] mt-[5px]" /></div>
                <div className="w-[33px] h-[33px] rounded-[100%] bg-[#7E7E7E] ml-[30px]"><TiSocialFacebook className="w-[26px] h-[26px] ml-[3px] mt-[3px]" /></div>
                <div className="w-[33px] h-[33px] rounded-[100%] bg-[#7E7E7E] ml-[30px]"><TiSocialYoutubeCircular className="w-[26px] h-[26px] ml-[3px] mt-[3px]" /></div>
                <div className="w-[33px] h-[33px] rounded-[100%] bg-[#7E7E7E] ml-[30px]"><TiSocialInstagram className="w-[24px] h-[24px] ml-[5px] mt-[4px]" /></div>
           </div>
       </div>
                  {/* nichla hisa */}
       <div className="w-[1343px] h-[62px] mt-[50px] ml-[34px] flex">
           <div className="w-[657.5px] h-[32px]">
               <div className="w-[60.02px] h-[15px] gap-[8px] pr-[9.02px] flex">
                  <div className="w-[18px] h-[15px]"><MdLocationPin className="text-white" /></div>
                  <p className="font-semibold text-[13px] leading-[32.67px] mt-[-8px] text-white">India</p>
               </div>
               <p className="font-semibold text-[13px] leading-[32.67px] ml-[65px] mt-[-22px] text-[#7E7E7E]">© 2023 Nike, Inc. All Rights Reserved</p>
           </div>

           <div className="w-[665.5px] h-[32px] ml-[18px] flex">
              <p className="font-semibold text-[13px] leading-[32.67px] text-[#7E7E7E] ml-[220px]">Guides</p>
              <p className="font-semibold text-[13px] leading-[32.67px] text-[#7E7E7E] ml-[33px]">Terms of Sale</p>
              <p className="font-semibold text-[13px] leading-[32.67px] text-[#7E7E7E] ml-[33px]">Terms of Use</p>
              <p className="font-semibold text-[13px] leading-[32.67px] text-[#7E7E7E] ml-[33px]">Nike Privacy Policy</p>
           </div>
       </div>
    </div>
</div>
}