import { Product } from "../components/Product"
import { NormalPage } from "../components/Layout"
import { HomeSideBar } from "./Home"
export default function FavoriteProduct() {
  return <div>
  <NormalPage sideBar={<HomeSideBar/>}>
    <p className="text-[20px] pt-8 pl-20 align-top-left pb-8">Products</p>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 content-evenly gap-8 justify-items-center items-center w-full">
      {
        Array.from(Array(10).keys()).map(key => <Product key={key} />)
      }
    </div>
  </NormalPage>
  </div>
}