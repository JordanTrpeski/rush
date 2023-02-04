import { Product } from "../components/Product"
import { NormalPage } from "../components/Layout"
import { Filter } from "../components/Filter"
import { Pagination } from "../components/Pagination"
export function HomeSideBar() {
  return <div>

    <div className="mb-0 flex justify-left p-1">
      <img src="/svg/house.svg" alt="general settings" className="w-5 h-5" />
      <p className="pl-2" > General Settings </p>
    </div>
    <div className="mb-0 flex justify-left p-1 ">
      <img alt="products" src="/svg/products.svg" className="w-5 h-5" />
      <p className="pl-2"> Products </p>
    </div>
    <div className="flex-wrap">
      <a href="/add-products" className="flex pl-8">Add New</a>
      <a href="/edit-product" className="flex pl-8">Edit Product</a>
      <a href="my-product" className="flex pl-8">My Products</a>
      <a href="favorite-product" className="flex pl-8">Favorite Product</a>
    </div>
  </div>
}

export default function Home() {
  return <NormalPage sideBar={<HomeSideBar/>}>
    <div className="flex flex-row  justify-center items-center pt-10 pb-5 ">
    <Filter></Filter>
    </div>
    <p className="text-[20px] pt-8 pl-20 align-top-left pb-8">Products</p>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 content-evenly gap-8 justify-items-center items-center w-full">
      {
        Array.from(Array(10).keys()).map(key => <Product key={key} />)
      }
    </div>
    <div>
    <Pagination></Pagination>  
    </div>
  </NormalPage>
}
