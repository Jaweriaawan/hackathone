import Image from "next/image";
import deliver from "@/app/images/deliver.png"
import image1 from "@/app/images/home6.png";
import image2 from "@/app/images/home4.png";

export default function Checkout(){
 return <div className="w-[880px] h-[2376px] mt-[60px] ml-[289px] flex font-sans">
                           {/* LHS  */}
   <div className="w-[440px] h-[2206px]">
      <div className="w-[440px] h-[386px]">
         <p className="font-semibold text-[21px] leading-6 mb-[10px]">How would you like to get your order?</p>
         <p className="w-[437.61px] h-[192px] font-normal text-[15px] leading-5 mb-[20px]">Customs regulation for India require a copy of the recipient's KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information. Learn More</p>
         <div className="w-[440px] h-[82px] rounded-[12px] border-[2px] border-[#111111] flex py-[29px] px-[27px] mb-[30px]">
            <Image src={deliver} alt="deliver" />
            <p className="font-medium text-[15px] leading-6 ml-[20px]">Deliver It</p>
         </div>
                              {/* info bar */}
         <div className="w-[440px] h-[1504px] pt-[15px]">
             <p className="font-semibold text-[21px] leading-6 mb-[30px]">Enter your name and address:</p>
             <div className="w-[440px] h-[616px]">
                <input type="text" placeholder="First Name" className="w-[440px] h-[56px] mt-[20px] py-[16px] outline-none rounded-[4px] border-[1px] border-[#00000060] px-[41px]" />
                <input type="text" placeholder="Last Name" className="w-[440px] h-[56px] mt-[20px] py-[16px] outline-none rounded-[4px] border-[1px] border-[#00000060] px-[41px]" />
                <div className="w-[440px] h-[80px] mt-[px]"><input type="text" placeholder="Address Line 1" className="w-[440px] h-[56px] mt-[20px] py-[16px] outline-none rounded-[4px] border-[1px] border-[#00000060] px-[41px]" />
                <p className="font-normal text-[11px] text-[#757575] ml-[40px]">We do not ship to P.O. boxes</p></div>
                <input type="text" placeholder="Address Line 2" className="w-[440px] h-[56px] mt-[20px] py-[16px] outline-none rounded-[4px] border-[1px] border-[#00000060] px-[41px]" />
                <input type="text" placeholder="Address Line 3" className="w-[440px] h-[56px] mt-[20px] py-[16px] outline-none rounded-[4px] border-[1px] border-[#00000060] px-[41px]" />
                <div className="flex gap-[15px] mt-[30px]">
                  <input type="text" placeholder="Postal Code" className="w-[211.19px] h-[56px] rounded-[4px] border-[1px] border-[#00000060] py-[16px] px-[36.19px]" />
                  <input type="text" placeholder="Locality" className="w-[211.19px] h-[56px] rounded-[4px] border-[1px] border-[#00000060] py-[16px] px-[36.19px]" />
                </div>
                <div className="flex mt-[30px] gap-[15px]">
                  <input type="text" placeholder="State/Territory" className="w-[211.19px] h-[56px] rounded-[4px] border-[1px] border-[#00000060] py-[16px] px-[36.19px]" />
                  <input type="text" placeholder="India" className="w-[211.19px] h-[56px] border-[1px] rounded-[4px] border-[#00000060] py-[16px] px-[36.19px]" />
                </div>
             </div>

             <div className="w-[440px] h-[104px] mt-[20px]">
                 <div className="w-[440px] h-[24px] ml-[1px] pt-[3px] flex">
                   <div className="w-[18px] h-[18px] bg-[#FFFFFF] rounded-[4px] ml-[1px] border-[1px] border-[#00000060]"></div>
                   <p className="font-medium text-[12px] text-[#111111] ml-[10px] mt-[-3px] leading-6">Save this address to my profile</p>
                 </div>
                 <div className="w-[440px] h-[24px] ml-[1px] pt-[3px] mt-[30px]">
                    <div className="w-[18px] h-[18px] bg-[#CCCCCC] rounded-[4px] ml-[1px] border-[1px] border-[#00000060]"></div>
                    <p className="font-medium text-[12px] text-[#111111] ml-[30px] mt-[-19px] leading-6">Make this my preferred address</p>
                 </div>
             </div>

             <div className="w-[440px] h-[256px] mt-[2px]">
                 <p className="font-semibold text-[21px] leading-6 mb-[30px]">What's your contact information?</p>
                 <div className="w-[440px] h-[176px]">
                   <div className="w-[440px] h-[80px]">
                      <input type="text" placeholder="Email" className="w-[440px] h-[56px] outline-none border-[1px] border-[#00000060]" />
                      <p className="font-medium text-[15px] leadinh-6 text-[#757575]">A confirmation email will be sent after checkout.</p>
                   </div>

                   <div className="w-[440px] h-[80px]">
                      <input type="text" placeholder="Phone Number" className="w-[440px] h-[56px] mt-[15px] outline-none border-[1px] border-[#00000060]" />
                      <p className="font-medium text-[15px] leadinh-6 text-[#757575]">A carrier might contact you to confirm delivery.</p>
                   </div>
                 </div>
             </div>

             <div className="w-[440px] h-[228px] 0">
                <p  className="font-semibold text-[21px] leading-6 mb-[30px]">What's your PAN?</p>
                <div className="w-[440px] h-[104px]">
                   <input type="text" placeholder="PAN" className="outline-none border-[1px] border-[#00000060] w-[440px] h-[56px]" />
                   <p className="text-[#757575] font-normal text-[15px] font-sans leading-6 ">Enter your PAN to enable payment with UPI, Net Banking or local card methods</p>
                </div>
                <div className="w-[440px] h-[56px] flex">
                   <div className="w-[17px] h-[17px] bg-[#CCCCCC] rounded-[4px] border-[1px] border-[#00000060]"></div>
                   <p className="text-[#757575] font-normal text-[12px] font-sans leading-6 mt-[-3px] ml-[9px]">Save PAN details to Nike Profile</p>
                </div>
             </div>

             <p  className="text-[#757575] font-normal text-[12px] font-sans leading-6 mt-[-3px] ml-[9px]">I have read and consent to eShopWorld processing my information in accordance with the Privacy Statement and Cookie Policy. eShopWorld is a trusted Nike partner.</p>
             <div className="w-[440px] h-[60px] bg-[#E5E5E5] mt-[60px] border-[1px] border-[#00000060] rounded-[4px]">
                <p className="font-medium text-[15px] text-[#757575] leading-6 text-center mt-[16px]">Continue</p>
             </div>
         </div>

         <div className="w-[440px] h-[316px] bg-slate-400]">
             <div className="w-[440px] h-[57px] py-[21px] pr-[361] bg-[#E5E5E5] mt-[20px]">
               <p className="font-semibold text-[20px] leading-6">Delivery</p>
             </div>
             <div className="w-[440px] h-[49px] bg-[#E5E5E5] py-[21px] pr-[351px] mt-[30px]">
               <p className="font-semibold text-[20px] leading-6 text-[#757575]">Shipping</p>
             </div>
             <div className="w-[440px] h-[49px] bg-[#E5E5E5] py-[21px] pr-[351px] mt-[30px]">
               <p className="font-semibold text-[20px] leading-6 text-[#757575]">Billing</p>
             </div>
             <div className="w-[440px] h-[49px] bg-[#E5E5E5] py-[21px] pr-[351px] mt-[30px]">
               <p className="font-semibold text-[20px] leading-6 text-[#757575]">Payment</p>
             </div>
         </div>

      </div>
   </div>
                               {/* RHS  */}
   <div className="w-[320px] h-[721px] ml-[115px]">
       <p className="font-semibold text-[21px] leading-6 mb-[10px]">Order Summary</p>
       <div className="w-[320px] h-[135px] mt-[12px] gap-[30px]">
          <div className="w-[320px] h-[34px] flex items-center">
             <p className="font-medium text-[15px] text-[#8D8D8D] leading-[16px] ml-[10px]">Subtotal</p>
             <p className="font-medium text-[15px] text-[#8D8D8D] leading-[16px] ml-[140px]">₹ 20 890.00</p>
          </div>
          <div className="w-[320px] h-[34px] flex items-center">
             <p className="font-medium text-[15px] text-[#8D8D8D] leading-[16px] ml-[10px]">Delivery/Shipping</p>
             <p className="font-medium text-[15px] text-[#8D8D8D] leading-[16px] ml-[130px]">Free</p>
          </div>
          <div className="flex items-center mt-[30px]">
          <p className="font-medium text-[15px] leading-[16px] ml-[10px]">Total</p>
          <p className="font-medium text-[15px] leading-[16px] ml-[162px]">₹ 20 890.00</p>
          </div>
       </div>
       <p className="font-medium text-[10px] text-[#8D8D8D] leading-6 w-[316px] h-[12px]">(The total reflects the price of your order, including all duties and taxes)</p>
       <div className="w-[320px] h-[474px] mt-[30px]">
          <p className="font-semibold text-[16px] leading-6 mb-[10px]">Arrives Mon, 27 Mar - Wed, 12 Apr</p>
          <div className="w-[320px] h-[208px] flex mb-[20px]">
            <Image src={image1} alt="" className="w-[208px] h-[208px]" />
            <div className="w-[100px] h-[178.78px] ml-[4px]">
               <p className="w-[85.53px] h-[120px] font-medium text-[13px] leading-5">Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top</p>
               <p className="font-medium leading-[19.6px] text-[13px] text-[#8D8D8D] mt-[-10px]">Qty 1</p>
               <p className="font-medium leading-[19.6px] text-[13px] text-[#8D8D8D]">Size L</p>
               <p className="font-medium leading-[19.6px] text-[13px] text-[#8D8D8D]">₹ 3 895.00</p>
            </div>
          </div>

          <div className="w-[320px] h-[208px] flex">
            <Image src={image2} alt="" className="w-[208px] h-[208px]" />
            <div className="w-[85.53px] h-[178.78px] ml-[4px]">
               <p className="w-[99.26px] h-[72px] font-medium text-[13px] mt-[3px] leading-5">Nike Air Max 97 SE Men's Shoes</p>
               <p className="font-medium leading-[19.6px] text-[13px] text-[#8D8D8D] mt-[-10px]">Qty 1</p>
               <p className="font-medium leading-[19.6px] text-[13px] text-[#8D8D8D]">Size UK 8</p>
               <p className="font-medium leading-[19.6px] text-[13px] text-[#8D8D8D]">₹ 16 995.00</p>
            </div>
          </div>

       </div>
   </div>


</div>
}