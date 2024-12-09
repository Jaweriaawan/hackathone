import Image from "next/image";
import pic from "@/app/images/m1.png"
import { FaRegHeart } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import m2 from "@/app/images/m2.png"

export default function Cartpage(){
 return <div>
    <div className="w-[1100px] h-[632.89px] ml-[155.5px] mt-[60px] mb-[60px]">
       <div className="w-[1100px] h-[547.89px] flex">
           <div className="w-[733.33px] h-[547.89px]">
              <div className="w-[717.33px] h-[62.89px] pr-[14px] gap-[5.88px] bg-[#F7F7F7] rounded-[4px]">
                 <p className="text-[17px] leading-7 font-semibold ml-[8px]">Free Delivery</p>
                 <p className="text-[17px] leading-7 font-medium ml-[8px]">
                    <span>Applies to orders of ₹ 14 000.00 or more.</span>
                    <span className="text-[17px] leading-7 underline font-semibold ml-[10px]">View details</span>
                 </p>
              </div>

              <p className="text-[27px] leading-7 font-semibold ml-[8px] mt-[20px]">Bag</p>
              <div className="w-[717.33px] h-[440px] mt-[20px">
                  <div className="w-[717.33px] h-[218px] py-[24px] mb-[1px]">
                     <div className="w-[717.33px] h-[170px] gap-[30px] flex">
                        <Image src={pic} alt="pic" className="w-[150px] h-[150px]" />
                        <div className="w-[537.33px] h-[170px]">
                          <p className="text-[15px] leading-7 font-semibold">Nike Dri-FIT ADV TechKnit Ultra</p>
                           <p className="text-[15px] leading-7 font-medium text-[#757575]">
                             <span>Men's Short-Sleeve Running Top</span><br />
                             <span>Ashen Slate/Cobalt Bliss</span><br />
                             <span>Size </span>
                             <span  className="ml-[10px]">L</span>
                             <span className="ml-[20px]">Quantity</span>
                             <span className="ml-[10px]">1</span>
                           </p>

                           <p className="ml-[410px] mt-[-110px] text-[15px] leading-7 font-medium ">MRP: ₹ 3 895.00</p>
                            <div className="w-[200px] h-[34px] mt-[105px] gap-[16px] pt-[5px] flex">
                              <FaRegHeart  className="w-[20px] h-[20px]" />
                              <FaRegTrashCan className="w-[20px] h-[20px]"  />
                            </div>
                        </div>
                     </div>
                  </div>

                   <hr className="border-[1px] border-[#00000080] opacity-[30%]" />

                  <div className="w-[717.33px] h-[218px] py-[24px]">
                     <div className="w-[537.33px] h-[170px] gap-[30px] ml-[180px]">
                           <p className="text-[15px] leading-7 font-semibold">Nike Air Max 97 SE</p>
                           <p className="text-[15px] leading-7 font-medium text-[#757575]">
                             <span>Nike Air Max 97 SE</span><br />
                             <span>Flat Pewter/Light Bone/Black/White</span><br />
                             <span>Size </span>
                             <span  className="ml-[10px]">8</span>
                             <span className="ml-[20px]">Quantity</span>
                             <span className="ml-[10px]">1</span>
                           </p>

                           <p className="ml-[410px] mt-[-110px] text-[15px] leading-7 font-medium">MRP: ₹ 3 895.00</p>
                            <div className="w-[200px] h-[34px] mt-[105px] gap-[16px] pt-[5px] flex">
                              <FaRegHeart  className="w-[20px] h-[20px]" />
                              <FaRegTrashCan className="w-[20px] h-[20px]"  />
                            </div>
                     </div>
                  </div>
              </div>
           </div>
                                {/* RHS  */}
           <div className="w-[350.67px] h-[295px] ">
              <p className="ml-[8px] font-medium text-[21px]">Summary</p>
              <div className="w-[334.67px] h-[28px] ml-[8px] mt-[20px] flex">
                 <p className="text-[15px] leading-7 font-normal">Subtotal</p>
                 <p className="ml-[180px] text-[15px] leading-7 font-normal">₹ 20 890.00</p>
              </div>

              <div className="w-[334.67px] h-[28px] ml-[8px] mt-[2px] flex justify-between pr-[21px]">
                 <p className="text-[15px] leading-7 font-normal">Estimated Delivery & Handling</p>
                 <p className="text-[15px] leading-7 font-normal">Free</p>
              </div>

               <div className="w-[334.67px] h-[62px] flex mt-[20px] ml-[8px] border-t-[1px] border-b-[1px] border-[#E5E5E5] py-[17px] pr-[4.38px]">
                 <p className="text-[15px] leading-7 font-normal">Total</p>
                 <p className="ml-[200px] text-[15px] leading-7 font-normal">₹ 20 890.00</p>
               </div>

               <div className="w-[334.67px] h-[60px] ml-[8px] rounded-[30px] bg-black py-[18px] px-[100.8px] mt-[40px]">
                  <p className="text-[15px] leading-7 font-normal text-white font-sans">Member Checkout</p>
               </div>
           </div>
       </div>
                                 {/* favourit bar */}
       <div className="w-[1100px] h-[85px] pt-[12px]">
         <p className="text-[23px] ml-[8px] leading-7 font-medium">Favourites</p>
         <p className="text-[15px] mt-[12px] ml-[8px] leading-7 font-medium">There are no items saved to your favourites.</p>
       </div>            
    </div>
         {/* bottom side */}
         <div className="w-[1411px] h-[585.78px]  ml-[26px] pt-[20px] mb-[2px]">
            <p className="text-[19px] ml-[30px] leading-6 font-medium">You Might Also Like</p>
            <div className="w-[431.78px] h-[523.78px] mt-[16px] ml-[26px]">
                <Image src={m2} alt="m2" />
                <p className="text-[15px] leading-6 font-medium">Air Jordan 1 Mid SE Craft</p>
                <p className="text-[15px] leading-6 font-medium mt-[10px] text-[#757575]">Men's Shoes</p>
                <p className="text-[15px] leading-6 font-medium mt-[10px]">MRP : ₹ 12 295.00</p>
            </div>
         </div>

</div>
}