import { NormalPage } from "../components/Layout"
import { HomeSideBar } from "./Home"
import CustomerSupport from "../components/CustomerSupport"
export default function ContactUs() {
  return <div>
  <NormalPage sideBar={<HomeSideBar/>}>   
  <CustomerSupport></CustomerSupport>  
  </NormalPage>
  </div>
}