import { Product } from "../components/Product"
import { NormalPage } from "../components/Layout"
import { Filter } from "../components/Filter"
import { Pagination } from "../components/Pagination"
import { useNavigate } from "react-router-dom"
import { useNewProductToggle } from "../components/AddNewProductToggle"
import { useEditProductToggle } from "../components/EditProductToggle"
export function HomeSideBar() {
  const navigate = useNavigate()
  const newProductToggle = useNewProductToggle()
  const editProductToggle = useEditProductToggle()

  return <div>
    <div onClick={() => navigate('/profile')} className="mb-0 flex cursor-pointer justify-left p-1">
      <img src="/svg/house.svg" alt="general settings" className="w-5 h-5" />
      <div className="pl-2"> General Settings </div>
    </div>
    <div onClick={() => navigate('/')} className="mb-0 cursor-pointer flex justify-left p-1 ">
      <img alt="products" src="/svg/products.svg" className="w-5 h-5" />
      <p className="pl-2"> Products </p>
    </div>
    <div className="flex-wrap">
      <div onClick={newProductToggle} className="flex cursor-pointer pl-8">Add New</div>
      <div onClick={editProductToggle} className="flex cursor-pointer pl-8">Edit Product</div>
      <a href="my-product" className="flex pl-8">My Products</a>
      <a href="favorite-product" className="flex pl-8">Favorite Product</a>
    </div>
  </div>
}

export default function Home() {
  return <NormalPage sideBar={<HomeSideBar />}>
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
