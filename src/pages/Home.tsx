import { Product } from "../components/Product"
import { NormalPage } from "../components/Layout"

export function HomeSideBar() {
  return <div>
    <div className="mb-0 flex justify-left p-1">
      <img src="/svg/house.svg" alt="general settings" className="w-5 h-5" />
      <p className="pl-2" >  General Settings </p>
    </div>
    <div className="mb-0 flex justify-left p-1 ">
      <img alt="products" src="/svg/products.svg" className="w-5 h-5" />
      <p className="pl-2   "> Products </p>
    </div>
    <div className="">
      <p className="pl-5 "> Add New </p>
      <p className="pl-5 "> Edit Product </p>
      <p className="pl-5 "> abc </p>
    </div>
  </div>
}

export default function Home() {
  return <NormalPage sideBar={<HomeSideBar/>}>
    <p className="text-[20px] pt-8 pl-20 align-top-left pb-8">Products</p>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 content-evenly gap-8 justify-items-center items-center w-full">
      {
        Array.from(Array(100).keys()).map(key => <Product key={key} />)
      }
    </div>
  </NormalPage>
}
