import Image from "next/image"
import pic from "@/app/images/pp.png"
import { IoCart } from "react-icons/io5";

export default function Productdetail(){
 return <div className="font-sans">
    <div className="w-[1200px] h-[1125px] pt-[80px] flex ml-[140px]">
        <Image src={pic} alt="pic" className="w-[653px] h-[653]" />
        <div className="w-[376px] h-[1041px] ml-[80px]">
          <p className="font-semibold text-[48px] leading-[48px]">Nike Air Force 1 PLT.AF.ORM</p>
          <div className="w-[374.92px] h-[342px] mt-[50px]">
             <p className="w-[374.92px] h-[252px] font-medium text-[15px] leading-6">Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.</p>
             <p className="text-[36px] font-medium leading-6">₹ 8 695.00</p>
             <div className="w-[174.42px] h-[44px] bg-black flex text-white rounded-[30px] mt-[30px] py-[9.5px] pl-[30px]">
               <IoCart className="w-[22px] h-[21px]" />
               <p>Add To Cart</p>
             </div>
          </div>
        </div>
    </div>
</div>
}