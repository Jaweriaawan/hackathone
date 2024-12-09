import Image from "next/image"
import home1 from "@/app/images/home1.png"
import home2 from "@/app/images/home2.png"
import home3 from "@/app/images/home3.png"
import home4 from "@/app/images/home4.png"
import home5 from "@/app/images/home5.png"
import home6 from "@/app/images/home6.png"
import home7 from "@/app/images/home7.png"
import home8 from "@/app/images/home8.png"
import home9 from "@/app/images/home9.png"
import home10 from "@/app/images/home10.png"
import home11 from "@/app/images/home11.png"
import home12 from "@/app/images/home12.png"
import home13 from "@/app/images/home13.png"
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";




export default function Home(){
 return <div>
                             {/* upperside */}
   <div className="w-[1410px] h-[44px] gap-[10px] bg-[#F5F5F5] mt-[20px]">
      <p className="font-semibold text-[17px] leading-[16px] text-center">Hello Nike App</p>
      <p className="text-center mt-[6px]">Download the app to access everything Nike. Get Your Great</p>
   </div>

                                    {/* main content  */}
   <div className="w-[1344px] h-[977px] ml-[48px]">
      <Image src={home1} alt="homepictures"  className="w-[1344px] h-[700px]"  />
      <div className="w-[1008px] h-[229px] mt-[60px] ml-[168px]">
         <p className="font-semibold text-[15px] leading-[16px] text-center">First Look</p>
         <p className="font-semibold text-[56px] leading-[60px] text-center">Nike Air Max Pulse</p>
         <p className="w-[551px] h-[48px] font-noraml ml-[235px] mt-[20px] text-[15px] leading-6 text-center">
         Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
         —designed to push you past your limits and help you go to the max.
         </p>
         <div className="flex text-white">
            <div className="w-[110.58px] h-[39px] rounded-[30px] py-[7.5px] ml-[400px] mt-[30px] pl-[18.5px] bg-black">
                <p className="font-normal font-sans leading-6">Notify Me</p>
            </div>
            <div className="w-[138.16px] h-[39px] rounded-[30px] py-[7.5px] ml-[10px] mt-[30px] pl-[18.5px] bg-black">
               <p className="font-normal font-sans leading-6">Shop Air Max</p>
            </div>
         </div> 
      </div>
   </div>
                                        {/* varities */}
   <div className="w-[1410px] h-[52px] bg-[#F5F5F5] flex">
      <p className="font-semibold text-[22px] leading-[16px] ml-[50px]">Best of Air Max</p>
      <div className="w-[164.75px] h-[48px] ml-[1015px] flex">
         <p className="font-medium text-[15px] mt-[14px] leading-6">Shop</p>
         <div className="w-[48px] h-[48px] ml-[30px] bg-[#E5E5E5] rounded-[24px]"><IoIosArrowBack className="w-[24px] h-[24px] ml-[7px] mt-[12px]" /></div>
         <div className="w-[48px] h-[48px] ml-[6px] bg-[#E5E5E5] rounded-[24px]"><IoIosArrowForward className="w-[24px] h-[24px] ml-[12px] mt-[12px]" /></div>
      </div>
   </div>

   <div className="w-[1410px] h-[540.36px] gap-[43px] mt-[20px] flex">
       <div className="w-[441.36px] h-[510.36px] ">
          <Image src={home2} alt="homepictures" />
           <p className="font-semibold text-[15px] leading-6">Nike Air Max Pulse</p>
           <p className="font-semibold text-[15px] leading-6 ml-[360px] mt-[-22px]">₹ 13 995</p>
           <p className="font-medium text-[#757575] text-[15px] leading-6">Women's Shoes</p>
       </div>

       <div className="w-[441.36px] h-[510.36px]">
          <Image src={home3} alt="homepictures" />
           <p className="font-semibold text-[15px] leading-6">Nike Air Max Pulse</p>
           <p className="font-semibold text-[15px] leading-6 ml-[360px] mt-[-22px]">₹ 13 995</p>
           <p className="font-medium text-[#757575] text-[15px] leading-6">Women's Shoes</p>
       </div>

       <div className="w-[441.36px] h-[510.36px]">
          <Image src={home4} alt="homepictures" />
           <p className="font-semibold text-[15px] leading-6">Nike Air Max Pulse</p>
           <p className="font-semibold text-[15px] leading-6 ml-[360px] mt-[-22px]">₹ 13 995</p>
           <p className="font-medium text-[#757575] text-[15px] leading-6">Women's Shoes</p>
       </div>
   </div>

   <div className="w-[1344px] h-[977px] mt-[100px] ml-[48px]">
      <p className="font-semibold text-[23px] mb-[20px] leading-[16px]">Featured</p>
      <Image src={home5} alt="homepictures" className="w-[1344px] h-[700px]" />
      <p className="font-semibold text-[54px] mt-[30px] leading-[60px] text-center">STEP INTO WHAT FEELS GOOD</p>
      <p className="font-normal text-[15px] leading-6 text-center mt-[20px]">Cause everyone should know the feeling of running in that perfect pair.</p>
       <div className="w-[152.42] h-[39px] bg-black text-white py-[7.5px] pl-[23px] mt-[60px] rounded-[30px] ml-[600px]">
         <p className="font-normal text-[15px] leading-6 font-sans">Find Your Shoe</p>
       </div>
   </div>
                                {/* Gearup side  */}
      <div className="w-[1344px] h-[561px] mt-[80px] ml-[48px]">
       <p className="font-semibold text-[23px] mb-[35px] leading-[16px]">Gear Up</p>
        
       <div className="flex gap-[12px]">
         <div className="w-[666px] h-[509px] gap-[25px]">
            <div className="w-[211px] h-[48px]flex">
               <p className="font-medium text-[15px] font-sans mt-[12px]">Shop Men's</p>
               <div className="w-[48px] h-[48px] rounded-[24px] ml-[20px] bg-[#F5F5F5]"><IoIosArrowBack className="w-[24px] h-[24px] ml-[5px] mt-[11px]" /></div>
               <div className="w-[48px] h-[48px] rounded-[24px] ml-[10px] bg-[#E5E5E5]"><IoIosArrowForward className="w-[24px] h-[24px] ml-[13px] mt-[11px]" /></div>
            </div>
             <div className="flex">
               <div className="w-[666px] h-[447px] gap-[20px] flex mt-[60px] ml-[43px]">
                 <div className="w-[300px] h-[393px]">
                   <Image src={home6} alt="homepictures" className="w-[300px] h-[300px]" />
                   <div className="w-[284px] h-[72px] mt-[20px]">
                     <p className="font-semibold text-[15px] leading-6">Nike Dri-FIT ADV TechKnit Ultra</p>
                     <p className="font-semibold text-[15px] leading-6 ml-[232px] mt-[-22px]">₹ 3 895</p>
                     <p className="font-medium text-[16px] leading-6 text-[#757575]">Men's Short-Sleeve <br /> Running Top</p>
                   </div>
                 </div>

                 <div className="w-[300px] h-[393px]">
                   <Image src={home7} alt="homepictures" className="w-[300px] h-[300px]" />
                   <div className="w-[284px] h-[72px] mt-[20px]">
                     <p className="font-semibold text-[15px] leading-6">Nike Dri-FIT Challenger</p>
                     <p className="font-semibold text-[15px] leading-6 ml-[232px] mt-[-22px]">₹ 2 495</p>
                     <p className="font-medium text-[16px] leading-6 text-[#757575]">Men's 18cm (approx.) 2- <br />in-1 Versatile Shorts</p>
                   </div>
                  </div>
               </div>
             </div>
          </div>
        
            <div className="w-[666px] h-[509px] gap-[25px]">
            <div className="w-[211px] h-[48px] flex ml-[455px]">
               <p className="font-medium text-[14px] font-sans mt-[12px]">Shop Women's</p>
               <div className="w-[48px] h-[48px] rounded-[24px] ml-[10px] bg-[#F5F5F5]"><IoIosArrowBack className="w-[24px] h-[24px] ml-[5px] mt-[11px]" /></div>
               <div className="w-[48px] h-[48px] rounded-[24px] ml-[10px] bg-[#E5E5E5]"><IoIosArrowForward className="w-[24px] h-[24px] ml-[13px] mt-[11px]" /></div>
            </div>

              <div className="flex">
               <div className="w-[666px] h-[447px] gap-[20px] flex mt-[60px] ml-[43px]">
                  <div className="w-[300px] h-[393px]">
                   <Image src={home8} alt="homepictures" className="w-[300px] h-[300px]" />
                     <div className="w-[284px] h-[72px] mt-[20px]">
                       <p className="font-semibold text-[15px] leading-6">Nike Dri-FIT ADV Run Division</p>
                       <p className="font-semibold text-[15px] leading-6 ml-[232px] mt-[-22px]">₹ 5 295</p>
                       <p className="font-medium text-[16px] leading-6 text-[#757575]">Women's Long-Sleeve <br /> Running Top</p>
                     </div>
                  </div>

                  <div className="w-[300px] h-[393px]">
                   <Image src={home9} alt="homepictures" className="w-[300px] h-[300px]" />
                     <div className="w-[284px] h-[72px] mt-[20px]">
                       <p className="font-semibold text-[15px] leading-6">Nike Fast</p>
                       <p className="font-semibold text-[15px] leading-6 ml-[232px] mt-[-22px]">₹ 3 795</p>
                       <p className="font-medium text-[16px] leading-6 text-[#757575]">Women's Mid-Rise 7/8 Running <br /> Leggings with Pockets</p>
                     </div>
                  </div>
               </div>
              </div>
             </div>
         </div>
       </div>

                                                      {/* next side */}
      <div className="w-[1344px] h-[977px] mt-[130px] ml-[48px] bg-slate-400">
          <p className="font-semibold text-[22px] leading-[16px] mb-[40px]">Don't Miss</p>
          <Image src={home10} alt="homepictures" />
          <div className="w-[1008px] h-[177px] mt-[50px] ml-[168px] bg-slate-500 text-center">
              <p  className="font-semibold text-[52px] mt-[30px] leading-[60px] text-center">FLIGHT ESSENTIALS</p>
              <p className="font-normal text-[15px] leading-6 text-center mt-[15px]">Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
              <div className="w-[80.38px] h-[39px] bg-black rounded-[30px] ml-[470px] mt-[20px] py-[7px] pl-[3px]">
                 <p className="font-normal text-[15px] leading-6 text-white font-sans">Shop</p>
              </div>
          </div>
      </div>
   
   <div className="w-[1355px] h-[592px] ml-[48px] mt-[120px] bg-slate-400">
       <p className="font-semibold text-[22px] leading-[16px] mb-[35px]">The Essentials</p>
       <div className="w-[1356px] h-[540px] mt-[px] bg-slate-500 flex">
             <Image src={home11} alt="homepictures" className="w-[440px] h-[540px]" />
             <div className="absolute bg-white rounded-[30px] ml-[50px] w-[85.19px] h-[39px] mt-[452.98px]">
                <p className="font-medium text-[15px] leading-6 mt-[7px] ml-[20px]">Men's</p>
             </div>

             <Image src={home12} alt="homepictures" className="w-[440px] h-[540px]" />
             <div className="absolute bg-white rounded-[30px] w-[108px] ml-[530px] h-[39px] mt-[452.98px]">
                <p className="font-medium text-[15px] leading-6 mt-[7px]  ml-[20px]">Women's</p>
             </div>

             <Image src={home13} alt="homepictures" className="w-[440px] h-[540px]" />
             <div className="absolute bg-white rounded-[30px] w-[77.19px] ml-[960px] h-[39px] mt-[452.98px]">
                <p className="font-medium text-[15px] leading-6 mt-[7px] ml-[20px]">Kids'</p>
             </div>
       </div>
      </div>

      <div className="w-[880px] h-[192px] mt-[100px] ml-[280px] flex mb-[100px] gap-[47px]">
         <div className="">
            <p className="font-semibold text-[15px] leading-6 mb-[20px]">Icons</p>
            <div className="w-[184px] h-[144px]">
              <p className="font-medium text-[#757575] text-[13px] leading-6">Air Force 1</p>      
              <p className="font-medium text-[#757575] text-[13px] leading-6">Huarache</p>      
              <p className="font-medium text-[#757575] text-[13px] leading-6">Air Max 90</p>      
              <p className="font-medium text-[#757575] text-[13px] leading-6">Air Max 95</p>      
            </div>
         </div>

         <div className="">
            <p className="font-semibold text-[15px] leading-6 mb-[20px]">Shoes</p>
            <div className="w-[184px] h-[144px]">
              <p className="font-medium text-[#757575] text-[13px] leading-6">All Shoes</p>      
              <p className="font-medium text-[#757575] text-[13px] leading-6">Custom Shoes</p>      
              <p className="font-medium text-[#757575] text-[13px] leading-6">Jordan Shoes</p>      
              <p className="font-medium text-[#757575] text-[13px] leading-6">Running Shoes</p>      
            </div>
         </div>

         <div className="">
            <p className="font-semibold text-[15px] leading-6 mb-[20px]">Clothing</p>
            <div className="w-[184px] h-[144px]">
              <p className="font-medium text-[#757575] text-[13px] leading-6">All Clothing</p>      
              <p className="font-medium text-[#757575] text-[13px] leading-6">Modest Wear</p>      
              <p className="font-medium text-[#757575] text-[13px] leading-6">Hoodies & Pullovers</p>      
              <p className="font-medium text-[#757575] text-[13px] leading-6">Shirts & Tops</p>      
            </div>
         </div>

         <div className="">
            <p className="font-semibold text-[15px] leading-6 mb-[20px]">Kids'</p>
            <div className="w-[184px] h-[144px]">
              <p className="font-medium text-[#757575] text-[13px] leading-6">Infant & Toddler Shoes</p>      
              <p className="font-medium text-[#757575] text-[13px] leading-6">Kids' Shoes</p>      
              <p className="font-medium text-[#757575] text-[13px] leading-6">Kids' Jordan Shoes</p>      
              <p className="font-medium text-[#757575] text-[13px] leading-6">Kids' Basketball Shoes</p>      
            </div>
         </div>
      </div>
</div>
}