import Home from "./Home/page"
import Allproductpage from "./Allproduct/page"
import Productdetail from "./productsdetail/page"
import Login from "./login/page"
import Joinus from "./joinus/page"
import Contactus from "./contact/page"
import Cartpage from "./Cartpage/page"
import Checkout from "./checkout/page"

export default function home(){
 return <>
     <Home />
     <Allproductpage />
     <Productdetail />
     <Login />
     <Joinus />
     <Contactus />
     <Cartpage />
     <Checkout />
   
 </>
}