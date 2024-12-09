import { PiSlidersHorizontalDuotone } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import item1 from "@/app/images/item1.png"
import Image from "next/image";
import item2 from "/images/item2.png"
import item3 from "/images/item3.png"
import item4 from "/images/item4.png"
import item5 from "/images/item5.png"
import item6 from "/images/item6.png"
import item7 from "/images/item7.png"
import item8 from "/images/item8.png"
import item9 from "/images/item9.png"
import item10 from "/images/item10.png"
import item11 from "/images/item11.png"
import item12 from "/images/item12.png"
import item13 from "/images/item13.png"
import item14 from "/images/item14.png"
import item15 from "/images/item15.png"
import item16 from "/images/item16.png"
import item17 from "/images/item17.png"
import item18 from "/images/item18.png"
import item19 from "/images/item19.png"
import item20 from "/images/item20.png"
import item21 from "/images/item21.png"
import item22 from "/images/item22.png"
import item23 from "/images/item23.png"
import item24 from "/images/item24.png"
import item25 from "/images/item25.png"
import item26 from "/images/item26.png"
import item27 from "/images/item27.png"
import item28 from "/images/item28.png"
import item29 from "/images/item29.png"
import item30 from "/images/item30.png"

export default function Allproductpage(){
 return <div>
                     {/* upper side */}
   <div className="w-[1410px] h-[51px] mt-[16px] flex">
      <p className="w-[1119.63px] h-[33.19px] font-semibold text-[25px] ml-[60px] mt-[4px]">New (500)</p>
      <div className="w-[224.38px] h-[28px] ml-[5px]  mt-[10px] flex">
         <div className="w-[137.91px] h-[28px] flex">
            <p className="text-[16px] leading-7 font-normal">Hide Filters</p>
            <PiSlidersHorizontalDuotone className="mt-[2px] w-[24px] h-[24px] ml-[2px]" /> 
         </div>
         <div className="w-[86.47px] h-[28px] mt-[1px] flex">
            <p className="text-[16px] leading-7 font-normal">Sort By</p>
            <IoIosArrowDown className="w-[19px] h-[19px] mt-[5px] ml-[4px]" />
         </div>
      </div>
   </div>

                                          {/* items or collection  */}
   <div className="w-[1440px] h-[5510px] flex">
                                          {/* slide bar */}
      <div className="w-[260px] h-[849px] pl-[45px]">
         <hr className="w-[7px] h-[329px] rounded-[8px] ml-[202px] bg-[#000000] opacity-[50%]" />
         <div className="w-[192px] h-[400.72px] mt-[-327px] ml-[10px]">
            <p className="font-medium text-[16px] leading-[21.6px] mt-[2px] mb-[10px]">Shoes</p>
            <p className="font-medium text-[16px] leading-[21.6px] mb-[10px]">Sports Bras</p>
            <p className="font-medium text-[16px] leading-[21.6px] mb-[10px]">Tops & T-Shirts</p>
            <p className="font-medium text-[16px] leading-[21.6px] mb-[10px]">Hoodies & Sweatshirts</p>
            <p className="font-medium text-[16px] leading-[21.6px] mb-[10px]">Jackets</p>
            <p className="font-medium text-[16px] leading-[21.6px] mb-[10px]">Trousers & Tights</p>
            <p className="font-medium text-[16px] leading-[21.6px] mb-[10px]">Shorts</p>
            <p className="font-medium text-[16px] leading-[21.6px] mb-[10px]">Tracksuits</p>
            <p className="font-medium text-[16px] leading-[21.6px] mb-[10px]">Jumpsuits & Rompers</p>
            <p className="font-medium text-[16px] leading-[21.6px] mb-[10px]">Skirts & Dresses</p>
            <p className="font-medium text-[16px] leading-[21.6px] mb-[10px]">Socks</p>
            <p className="font-medium text-[16px] leading-[21.6px] mb-[10px]">Accessories <br /> & Equipment</p>
         </div>

         <div className="w-[192px] h-[163px] border-t-[1px] border-[#00000060] mt-[15px] ml-[10px]">
                             {/* 1st box */}
            <div className="w-[192px] h-[20px] flex mt-[20px]">
            <p className="font-semibold text-[16px] leading-[21.6px]">Gender</p>
            <IoIosArrowUp className="ml-[100px] w-[14px] h-[14px] mb-[-5px]" />
            </div>
            <div className="w-[188.16px] h-[24px] mt-[20px] flex pt-[2px]">
               <div className="w-[20px] h-[20px] rounded-[4px] border-[1px] bg-[#CCCCCC] border-[#00000080]"></div>
               <p className="font-normal text-[14px] leading-6 ml-[10px]">Men</p>
            </div>

            <div className="w-[188.16px] h-[24px] mt-[6px] flex pt-[2px]">
               <div className="w-[20px] h-[20px] rounded-[4px] border-[1px] bg-[#CCCCCC] border-[#00000080]"></div>
               <p className="font-normal text-[14px] leading-6 ml-[10px]">Women</p>
            </div>

            <div className="w-[188.16px] h-[24px] mt-[5px] flex pt-[2px]">
               <div className="w-[20px] h-[20px] rounded-[4px] border-[1px] bg-[#CCCCCC] border-[#00000080]"></div>
               <p className="font-normal text-[14px] leading-6 ml-[10px]">Unisex</p>
            </div>
         </div>

                                          {/* 2nd box */}
         <div className="w-[192px] h-[134px] border-t-[1px] border-[#00000060] mt-[8px] ml-[10px]">
            <div className="w-[192px] h-[20px] flex mt-[20px]">
            <p className="font-semibold text-[16px] leading-[21.6px]">Kids</p>
            <IoIosArrowUp className="ml-[122px] w-[14px] h-[14px] mb-[-5px]" />
            </div>
            <div className="w-[188.16px] h-[24px] mt-[20px] flex pt-[2px]">
               <div className="w-[20px] h-[20px] rounded-[4px] border-[1px] bg-[#CCCCCC] border-[#00000080]"></div>
               <p className="font-normal text-[14px] leading-6 ml-[10px]">Boys</p>
            </div>

            <div className="w-[188.16px] h-[24px] mt-[6px]0 flex pt-[2px]">
               <div className="w-[20px] h-[20px] rounded-[4px] border-[1px] bg-[#CCCCCC] border-[#00000080]"></div>
               <p className="font-normal text-[14px] leading-6 ml-[10px]">Girls</p>
            </div>
         </div>

                                         {/* 3rd box */}
         <div className="w-[192px] h-[134px] border-t-[1px] border-[#00000060] mt-[8px] ml-[10px]">
            <div className="w-[192px] h-[20px] flex mt-[20px]">
            <p className="font-semibold text-[16px] leading-[21.6px]">Shop By Price</p>
            <IoIosArrowUp className="ml-[40px] w-[14px] h-[14px] mb-[-5px]" />
            </div>
            <div className="w-[188.16px] h-[24px] mt-[20px] flex pt-[2px]">
               <div className="w-[20px] h-[20px] rounded-[4px] border-[1px] bg-[#CCCCCC] border-[#00000080]"></div>
               <p className="font-normal text-[14px] leading-6 ml-[10px]">Boys</p>
            </div>

            <div className="w-[188.16px] h-[24px] mt-[6px] flex pt-[2px]">
               <div className="w-[20px] h-[20px] rounded-[4px] border-[1px] bg-[#CCCCCC] border-[#00000080]"></div>
               <p className="font-normal text-[14px] leading-6 ml-[12px]">Girls</p>
            </div>
         </div>
      </div>

      <div className="w-[1092px] h-[5500px] ml-[50px] grid grid-cols-3 grid-rows-10">
                               {/* item 1 */}
          <div className="w-[348px] h-[533px]">
              <Image src={item1} alt="items" />
              <div className="w-[169.34px] h-[76px] mt-[10px]">
                 <p className="text-[#9E3500] font-medium text-[17px] leading-7">Just In</p>
                 <p className="font-medium text-[15px] leading-6">Nike Air Force 1 Mid '07</p>
                 <p className="text-[#757575] font-medium text-[15px] leading-6">Men's Shoes</p>
              </div>
              <p className="text-[#757575] font-medium text-[15px] leading-6">1 Colour</p>
              <p className="font-medium text-[15px] leading-6 mt-[25px]">MRP : ₹ 10 795.00</p>
          </div>

                                {/* item 2 */}
            <div className="w-[348px] h-[533px]">
              <Image src={item2} alt="items" />
              <div className="w-[246.34px] h-[76px] mt-[10px]">
                 <p className="text-[#9E3500] font-medium text-[17px] leading-7">Just In</p>
                 <p className="font-medium text-[15px] leading-6">Nike Court Vision Low Next Nature</p>
                 <p className="text-[#757575] font-medium text-[15px] leading-6">Men's Shoes</p>
              </div>
                <p className="text-[#757575] font-medium text-[15px] leading-6">1 Colour</p>
                <p className="font-medium text-[15px] leading-6 mt-[25px]">MRP : ₹ 4 995.00</p>
            </div>
                                             {/* 3 */}
            <div className="w-[348px] h-[533px]">
              <Image src={item3} alt="items" />
              <div className="w-[200.34px] h-[76px] mt-[10px]">
                 <p className="text-[#9E3500] font-medium text-[17px] leading-7">Just In</p>
                 <p className="font-medium text-[15px] leading-6">Nike Air Force 1 PLT.AF.ORM</p>
                 <p className="text-[#757575] font-medium text-[15px] leading-6">Women's Shoes</p>
              </div>
                <p className="text-[#757575] font-medium text-[15px] leading-6">1 Colour</p>
                <p className="font-medium text-[15px] leading-6 mt-[25px]">MRP : ₹ 8 695.00</p>
            </div>

                                            {/* 4 */}
            <div className="w-[348px] h-[533px]">
              <Image src={item4} alt="items" />
              <div className="w-[260.34px] h-[76px] mt-[10px]">
                 <p className="text-[#9E3500] font-medium text-[17px] leading-7">Just In</p>
                 <p className="font-medium text-[15px] leading-6">Nike Air Force 1 React</p>
                 <p className="text-[#757575] font-medium text-[15px] leading-6">Men's Shoes</p>
              </div>
                <p className="text-[#757575] font-medium text-[15px] leading-6">1 Colour</p>
                <p className="font-medium text-[15px] leading-6 mt-[25px]">MRP : ₹ 13 295.00</p>
            </div>


                                       {/* 5 */}
            <div className="w-[348px] h-[533px]">
              <Image src={item5} alt="items" />
              <div className="w-[230.34px] h-[76px] mt-[10px]">
                 <p className="text-[#9E3500] font-medium text-[17px] leading-7">Promo Exclusion</p>
                 <p className="font-medium text-[15px] leading-6">Air Jordan 1 Elevate Low</p>
                 <p className="text-[#757575] font-medium text-[15px] leading-6">Women's Shoes</p>
              </div>
                <p className="text-[#757575] font-medium text-[15px] leading-6">1 Colour</p>
                <p className="font-medium text-[15px] leading-6 mt-[25px]">MRP : ₹ 11 895.00</p>
            </div>


                                    {/* 6 */}
            <div className="w-[348px] h-[533px]">
              <Image src={item6} alt="items" />
              <div className="w-[200.34px] h-[76px] mt-[10px]">
                 <p className="text-[#9E3500] font-medium text-[17px] leading-7">Just In</p>
                 <p className="font-medium text-[15px] leading-6">Nike Standard Issue</p>
                 <p className="text-[#757575] font-medium text-[15px] leading-6">Women's Basketball Jersey</p>
              </div>
                <p className="text-[#757575] font-medium text-[15px] leading-6">1 Colour</p>
                <p className="font-medium text-[15px] leading-6 mt-[25px]">MRP : ₹ 2 895.00</p>
            </div>


                                      {/* 7 */}
            <div className="w-[348px] h-[533px]">
              <Image src={item7} alt="items" />
              <div className="w-[210.34px] h-[76px] mt-[10px]">
                 <p className="text-[#9E3500] font-medium text-[17px] leading-7">Promo Exclusion</p>
                 <p className="font-medium text-[15px] leading-6">Nike Dunk Low Retro SE</p>
                 <p className="text-[#757575] font-medium text-[15px] leading-6">Men's Shoes</p>
              </div>
                <p className="text-[#757575] font-medium text-[15px] leading-6">1 Colour</p>
                <p className="font-medium text-[15px] leading-6 mt-[25px]">MRP : ₹ 9 695.00</p>
            </div>

                               {/* item 8 */}
          <div className="w-[348px] h-[533px]">
              <Image src={item8} alt="items" />
              <div className="w-[300.34px] h-[76px] mt-[10px]">
                 <p className="text-[#9E3500] font-medium text-[17px] leading-7">Sustainable Materials</p>
                 <p className="font-medium text-[15px] leading-6">Nike Dri-FIT UV Hyverses</p>
                 <p className="text-[#757575] font-medium text-[15px] leading-6">Men's Short-Sleeve Graphic Fitness Top</p>
              </div>
                <p className="text-[#757575] font-medium text-[15px] leading-6">1 Colour</p>
                <p className="font-medium text-[15px] leading-6 mt-[25px]">MRP : ₹ 2 495.00</p>
            </div>

                                {/* item 9 */}
            <div className="w-[348px] h-[533px]">
              <Image src={item9} alt="items" />
              <div className="w-[180.34px] h-[76px] mt-[10px]">
                 <p className="text-[#9E3500] font-medium text-[17px] leading-7">Just In</p>
                 <p className="font-medium text-[15px] leading-6">Nike Court Vision Low</p>
                 <p className="text-[#757575] font-medium text-[15px] leading-6">Men's Shoes</p>
              </div>
                <p className="text-[#757575] font-medium text-[15px] leading-6">1 Colour</p>
                <p className="font-medium text-[15px] leading-6 mt-[25px]">MRP : ₹ 5 695.00s</p>
            </div>
                                    {/* 10 */}
            <div className="w-[348px] h-[533px]">
              <Image src={item10} alt="items" />
              <div className="w-[169.34px] h-[76px] mt-[10px]">
                 <p className="text-[#9E3500] font-medium text-[17px] leading-7">Just In</p>
                 <p className="font-medium text-[15px] leading-6">Nike Dri-FIT Ready</p>
                 <p className="text-[#757575] font-medium text-[15px] leading-6">Men's Short-Sleeve Fitness Top</p>
              </div>
                <p className="text-[#757575] font-medium text-[15px] leading-6">3 Colours</p>
                <p className="font-medium text-[15px] leading-6 mt-[25px]">MRP : ₹ 2 495.00</p>
            </div>
                                      {/* 11 */}
            <div className="w-[348px] h-[533px]">
              <Image src={item11} alt="items" />
              <div className="w-[300.34px] h-[76px] mt-[10px]">
                 <p className="text-[#9E3500] font-medium text-[17px] leading-7">Just In</p>
                 <p className="font-medium text-[15px] leading-6">Nike One Leak Protection: Period</p>
                 <p className="text-[#757575] font-medium text-[15px] leading-6">Women's Mid-Rise 18cm (approx.) Biker Shorts</p>
              </div>
                <p className="text-[#757575] font-medium text-[15px] leading-6">2 Colours</p>
                <p className="font-medium text-[15px] leading-6 mt-[25px]">MRP : ₹ 3 395.00</p>
            </div>
                                        {/* 12 */}
            <div className="w-[348px] h-[533px]">
              <Image src={item12} alt="items" />
              <div className="w-[169.34px] h-[76px] mt-[10px]">
                 <p className="text-[#9E3500] font-medium text-[17px] leading-7">Just In</p>
                 <p className="font-medium text-[15px] leading-6">Nike Air Force 1 LV8 3</p>
                 <p className="text-[#757575] font-medium text-[15px] leading-6">Older Kids' Shoe</p>
              </div>
                <p className="text-[#757575] font-medium text-[15px] leading-6">1 Colour</p>
                <p className="font-medium text-[15px] leading-6 mt-[25px]">MRP : ₹ 7 495.00</p>
            </div>
                                             {/* 13 */}
            <div className="w-[348px] h-[533px]">
              <Image src={item13} alt="items" />
              <div className="w-[169.34px] h-[76px] mt-[10px]">
                 <p className="text-[#9E3500] font-medium text-[17px] leading-7">Just In</p>
                 <p className="font-medium text-[15px] leading-6">Nike Blazer Low Platform</p>
                 <p className="text-[#757575] font-medium text-[15px] leading-6">Women's Shoes</p>
              </div>
                <p className="text-[#757575] font-medium text-[15px] leading-6">1 Colour</p>
                <p className="font-medium text-[15px] leading-6 mt-[25px]">MRP : ₹ 8 195.00</p>
            </div>
                                       {/* 14 */}
            <div className="w-[348px] h-[533px]">
              <Image src={item14} alt="items" />
              <div className="w-[169.34px] h-[76px] mt-[10px]">
                 <p className="text-[#9E3500] font-medium text-[17px] leading-7">Just In</p>
                 <p className="font-medium text-[15px] leading-6">Nike Air Force 1 '07</p>
                 <p className="text-[#757575] font-medium text-[15px] leading-6">Women's Shoe</p>
              </div>
                <p className="text-[#757575] font-medium text-[15px] leading-6">2 Colours</p>
                <p className="font-medium text-[15px] leading-6 mt-[25px]">MRP : ₹ 8 195.00</p>
            </div>
                                    {/* 15 */}
            <div className="w-[348px] h-[533px]">
              <Image src={item15} alt="items" />
              <div className="w-[240.34px] h-[76px] mt-[10px]">
                 <p className="text-[#9E3500] font-medium text-[17px] leading-7">Just In</p>
                 <p className="font-medium text-[15px] leading-6">Nike Pro Dri-FIT</p>
                 <p className="text-[#757575] font-medium text-[15px] leading-6">Men's Tight-Fit Sleeveless Top</p>
              </div>
                <p className="text-[#757575] font-medium text-[15px] leading-6">1 Colour</p>
                <p className="font-medium text-[15px] leading-6 mt-[25px]">MRP : ₹ 1 495.00</p>
            </div>
                                        {/* 16 */}
            <div className="w-[348px] h-[533px]">
              <Image src={item16} alt="items" />
              <div className="w-[169.34px] h-[76px] mt-[10px]">
                 <p className="text-[#9E3500] font-medium text-[17px] leading-7">Just In</p>
                 <p className="font-medium text-[15px] leading-6">Nike Dunk Low Retro</p>
                 <p className="text-[#757575] font-medium text-[15px] leading-6">Men's Shoes</p>
              </div>
                <p className="text-[#757575] font-medium text-[15px] leading-6">1 Colour</p>
                <p className="font-medium text-[15px] leading-6 mt-[25px]">MRP : ₹ 8 695.00</p>
            </div>
                                       {/* 17 */}
            <div className="w-[348px] h-[533px]">
              <Image src={item17} alt="items" />
              <div className="w-[169.34px] h-[76px] mt-[10px]">
                 <p className="text-[#9E3500] font-medium text-[17px] leading-7">Just In</p>
                 <p className="font-medium text-[15px] leading-6">Nike Air Max SC</p>
                 <p className="text-[#757575] font-medium text-[15px] leading-6">Women's Shoes</p>
              </div>
                <p className="text-[#757575] font-medium text-[15px] leading-6">2 Colours</p>
                <p className="font-medium text-[15px] leading-6 mt-[25px]">MRP : ₹ 5 995.00</p>
            </div>
                                      {/* 18 */}
            <div className="w-[348px] h-[533px]">
              <Image src={item18} alt="items" />
              <div className="w-[230.34px] h-[76px] mt-[10px]">
                 <p className="text-[#9E3500] font-medium text-[17px] leading-7">Just In</p>
                 <p className="font-medium text-[15px] leading-6">Nike Dri-FIT UV Miler</p>
                 <p className="text-[#757575] font-medium text-[15px] leading-6">Men's Short-Sleeve Running Top</p>
              </div>
                <p className="text-[#757575] font-medium text-[15px] leading-6">1 Colour</p>
                <p className="font-medium text-[15px] leading-6 mt-[25px]">MRP : ₹ 1 695.00</p>
            </div>
                                           {/* 19 */}
            <div className="w-[348px] h-[533px]">
              <Image src={item19} alt="items" />
              <div className="w-[169.34px] h-[76px] mt-[10px]">
                 <p className="text-[#9E3500] font-medium text-[17px] leading-7">Just In</p>
                 <p className="font-medium text-[15px] leading-6">Nike Air Max SYSTM</p>
                 <p className="text-[#757575] font-medium text-[15px] leading-6">Older Kids' Shoes</p>
              </div>
                <p className="text-[#757575] font-medium text-[15px] leading-6">1 Colour</p>
                <p className="font-medium text-[15px] leading-6 mt-[25px]">MRP : ₹ 6 495.00</p>
            </div>
                                           {/* 20 */}
            <div className="w-[348px] h-[533px]">
              <Image src={item20} alt="items" />
              <div className="w-[280.34px] h-[92px] mt-[10px]">
                 <p className="text-[#9E3500] font-medium text-[17px] leading-7">Just In</p>
                 <p className="font-medium text-[15px] leading-6">Nike Alate All U</p>
                 <p className="text-[#757575] font-medium text-[15px] leading-6">Women's Light-Support Lightly Lined U-Neck Printed Sports Bra</p>
              </div>
                <p className="text-[#757575] font-medium text-[15px] leading-6">1 Colour</p>
                <p className="font-medium text-[15px] leading-6 mt-[25px]">MRP : ₹ 2 195.00</p>
            </div>

                                        {/* 21 */}
            <div className="w-[348px] h-[533px]">
              <Image src={item21} alt="items" />
              <div className="w-[169.34px] h-[76px] mt-[10px]">
                 <p className="text-[#9E3500] font-medium text-[17px] leading-7">Just In</p>
                 <p className="font-medium text-[15px] leading-6">Nike Court Legacy Lift</p>
                 <p className="text-[#757575] font-medium text-[15px] leading-6">Women's Shoes</p>
              </div>
                <p className="text-[#757575] font-medium text-[15px] leading-6">2 Colours</p>
                <p className="font-medium text-[15px] leading-6 mt-[25px]">MRP : ₹ 7 495.00</p>
            </div>
                                    {/* 22 */}
            <div className="w-[348px] h-[533px]">
              <Image src={item22} alt="items" />
              <div className="w-[290.34px] h-[76px] mt-[10px]">
                 <p className="text-[#9E3500] font-medium text-[17px] leading-7">Just In</p>
                 <p className="font-medium text-[15px] leading-6">Nike Swoosh</p>
                 <p className="text-[#757575] font-medium text-[15px] leading-6">Women's Medium-support Padded Sports Bra Tank</p>
              </div>
                <p className="text-[#757575] font-medium text-[15px] leading-6">2 Colours</p>
                <p className="font-medium text-[15px] leading-6 mt-[25px]">MRP : ₹ 3 095.00</p>
            </div>
                                 {/* 23 */}
            <div className="w-[348px] h-[533px]">
              <Image src={item23} alt="items" />
              <div className="w-[200.34px] h-[76px] mt-[10px]">
                 <p className="text-[#9E3500] font-medium text-[17px] leading-7">Just In</p>
                 <p className="font-medium text-[15px] leading-6">Nike SB Zoom Janoski OG+</p>
                 <p className="text-[#757575] font-medium text-[15px] leading-6">Shoes</p>
              </div>
                <p className="text-[#757575] font-medium text-[15px] leading-6">1 Colour</p>
                <p className="font-medium text-[15px] leading-6 mt-[25px]">MRP : ₹ 8 595.00</p>
            </div>

                                  {/* 24 */}
            <div className="w-[348px] h-[533px]">
              <Image src={item24} alt="items" />
              <div className="w-[350.34px] h-[76px] mt-[10px]">
                 <p className="text-[#9E3500] font-medium text-[17px] leading-7">Just In</p>
                 <p className="font-medium text-[15px] leading-6">Nike Dri-FIT Run Division Rise 365</p>
                 <p className="text-[#757575] font-medium text-[15px] leading-6">Men's Running Tank</p>
              </div>
                <p className="text-[#757575] font-medium text-[15px] leading-6">2 Colours</p>
                <p className="font-medium text-[15px] leading-6 mt-[25px]">MRP : ₹ 3 495.00</p>
            </div>
                                       {/* 25 */}
            <div className="w-[348px] h-[533px]">
              <Image src={item25} alt="items" />
              <div className="w-[330.34px] h-[76px] mt-[10px]">
                 <p className="text-[#9E3500] font-medium text-[17px] leading-7">Just In</p>
                 <p className="font-medium text-[15px] leading-6">Nike Dri-FIT Challenger</p>
                 <p className="text-[#757575] font-medium text-[15px] leading-6">Men's 18cm (approx.) 2-in-1 Versatile Shorts</p>
              </div>
                <p className="text-[#757575] font-medium text-[15px] leading-6">1 Colour</p>
                <p className="font-medium text-[15px] leading-6 mt-[25px]">MRP : ₹ 2 495.00</p>
            </div>
                                          {/* 26 */}
            <div className="w-[348px] h-[533px]">
              <Image src={item26} alt="items" />
              <div className="w-[169.34px] h-[76px] mt-[10px]">
                 <p className="text-[#9E3500] font-medium text-[17px] leading-7">Just In</p>
                 <p className="font-medium text-[15px] leading-6">Jordan Series ES</p>
                 <p className="text-[#757575] font-medium text-[15px] leading-6">Men's Shoes</p>
              </div>
                <p className="text-[#757575] font-medium text-[15px] leading-6">2 Colours</p>
                <p className="font-medium text-[15px] leading-6 mt-[25px]">MRP : ₹ 7 495.00</p>
            </div>
                                          {/* 27 */}
            <div className="w-[348px] h-[533px]">
              <Image src={item27} alt="items" />
              <div className="w-[330.34px] h-[76px] mt-[10px]">
                 <p className="text-[#9E3500] font-medium text-[17px] leading-7">Just In</p>
                 <p className="font-medium text-[15px] leading-6">Nike Outdoor Play</p>
                 <p className="text-[#757575] font-medium text-[15px] leading-6">Older Kids' Oversized Woven Jacket</p>
              </div>
                <p className="text-[#757575] font-medium text-[15px] leading-6">1 Colour</p>
                <p className="font-medium text-[15px] leading-6 mt-[25px]">MRP : ₹ 3 895.00</p>
            </div>
                                       {/* 28 */}
            <div className="w-[348px] h-[533px]">
              <Image src={item28} alt="items" />
              <div className="w-[330.34px] h-[76px] mt-[10px]">
                 <p className="text-[#9E3500] font-medium text-[17px] leading-7">Just In</p>
                 <p className="font-medium text-[15px] leading-6">Nike Sportswear Trend</p>
                 <p className="text-[#757575] font-medium text-[15px] leading-6">Older Kids' (Girls') High-waisted Woven Shorts</p>
              </div>
                <p className="font-medium text-[15px] leading-6">2 Colours</p>
                <p className="font-medium text-[15px] leading-6 mt-[25px]">MRP : ₹ 2 495.00</p>
            </div>
                                         {/* 29 */}
            <div className="w-[348px] h-[533px]">
              <Image src={item29} alt="items" />
              <div className="w-[300.34px] h-[76px] mt-[10px]">
                 <p className="text-[#9E3500] font-medium text-[17px] leading-7">Just In</p>
                 <p className="font-medium text-[15px] leading-6">Nike Blazer Low '77 Jumbo</p>
                 <p className="text-[#757575] font-medium text-[15px] leading-6">Women's Shoes</p>
              </div>
                <p className="text-[#757575] font-medium text-[15px] leading-6">1 Colour</p>
                <p className="font-medium text-[15px] leading-6 mt-[25px]">MRP : ₹ 8 595.00</p>
            </div>
                                         {/* 30 */}
            <div className="w-[348px] h-[533px]">
              <Image src={item30} alt="items" />
              <div className="w-[169.34px] h-[76px] mt-[10px]">
                 <p className="text-[#9E3500] font-medium text-[17px] leading-7">Just In</p>
                 <p className="font-medium text-[15px] leading-6">Nike SB Force 58</p>
                 <p className="text-[#757575] font-medium text-[15px] leading-6">Skate Shoe</p>
              </div>
                <p className="text-[#757575] font-medium text-[15px] leading-6">1 Colour</p>
                <p className="font-medium text-[15px] leading-6 mt-[25px]">MRP : ₹ 5 995.00</p>
            </div>
         </div>
      
   </div>

         <div className="w-[1092px] h-[259px] border-[1px] flex p-4 ml-[310px] border-t-[#00000096]">
              <p className="w-[230.42px] h-[22px] font-semibold text-[21px] leading-6 ml-[10px]">Related Categories</p>
              <div className="w-[1092px] h-[90px] ml-[-240px] grid grid-cols-6 mt-[80px] gap-[20px] ">
                                {/* buttons */}
                  <div className="w-[160.83px] h-[34px] rounded-[20px] border-[1px] border-[#00000667]">
                     <p className="font-normal text-[12px] leading-[18px] py-[8px] pl-[17px] ">Best Selling Products</p>
                  </div>

                  <div className="w-[104.36px] h-[34px]  rounded-[20px] border-[1px] ml-[20px] border-[#00000667]">
                     <p className="font-normal text-[12px] leading-[18px] py-[8px] pl-[21px] ">Best Shoes</p>
                  </div>

                  <div className="w-[165.31px] h-[34px] rounded-[20px] border-[1px] border-[#00000667]">
                     <p className="font-normal text-[12px] leading-[18px] py-[8px] pl-[17px] ">New Basketball Shoes</p>
                  </div>

                  <div className="w-[160.83px] h-[34px]  rounded-[20px] border-[1px] border-[#00000667]">
                     <p className="font-normal text-[12px] leading-[18px] py-[8px] pl-[20px] ">New Football Shoes</p>
                  </div>

                  <div className="w-[160.83px] h-[34px] rounded-[20px] border-[1px] border-[#00000667]">
                     <p className="font-normal text-[12px] leading-[18px] py-[8px] pl-[21px] ">New Men's Shoes</p>
                  </div>


                  <div className="w-[160.83px] h-[34px] rounded-[20px] border-[1px] border-[#00000667]">
                     <p className="font-normal text-[12px] leading-[18px] py-[8px] pl-[20px] ">New Running Shoes</p>
                  </div>

                  <div className="w-[160.83px] h-[34px] rounded-[20px] border-[1px] border-[#00000667]">
                     <p className="font-normal text-[12px] leading-[18px] py-[8px] pl-[23px] ">Best Men's Shoes</p>
                  </div>

                  <div className="w-[160.83px] h-[34px] rounded-[20px] border-[1px] border-[#00000667]">
                     <p className="font-normal text-[12px] leading-[18px] py-[8px] pl-[23px] ">New Jordan Shoes</p>
                  </div>

                  <div className="w-[160.83px] h-[34px] rounded-[20px] border-[1px] border-[#00000667]">
                     <p className="font-normal text-[12px] leading-[18px] py-[8px] pl-[19px] ">Best Women's Shoes</p>
                  </div>

                  <div className="w-[160.83px] h-[34px] rounded-[20px] border-[1px] border-[#00000667]">
                     <p className="font-normal text-[12px] leading-[18px] py-[8px] pl-[20px] ">Best Training & Gym</p>
                  </div>
              </div>
         </div>
</div>
}