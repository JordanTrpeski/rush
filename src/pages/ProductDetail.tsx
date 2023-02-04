import { Product } from "../components/Product"
import { NormalPage } from "../components/Layout"
import { HomeSideBar } from "./Home"
import DetailProducts from "../components/DetailProducts"
export default function ProductDetail() {
  return <div>
  <NormalPage sideBar={<HomeSideBar/>}>
    <div>
      <DetailProducts></DetailProducts>
    </div>
  </NormalPage>
  </div>
}