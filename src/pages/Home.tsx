import { NormalPage } from "../components/Layout"
import { Filter, useFilteredProducts } from "../components/Filter"
import { Pagination } from "../components/Pagination"
import { useNavigate } from "react-router-dom"
import { useNewProductToggle } from "../components/AddNewProductToggle"
import { useEditProductToggle } from "../components/EditProductToggle"
import { useIsLoggedIn } from "../hooks/auth-status"
import Product from "../components/Product"
export function HomeSideBar({ canEditProduct }: { canEditProduct?: boolean }) {
  const navigate = useNavigate()
  const newProductToggle = useNewProductToggle()
  const editProductToggle = useEditProductToggle()
  const loggedIn = useIsLoggedIn()
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
      {
        loggedIn && <div onClick={newProductToggle} className="flex cursor-pointer pl-8">Add New</div>
      }
      {canEditProduct && <div onClick={editProductToggle} className="flex cursor-pointer pl-8">Edit Product</div>}
      {
        loggedIn && <>
          <div onClick={() => navigate('/my-product')} className="flex cursor-pointer pl-8">My Products</div>
          <div onClick={() => navigate('/favorite-product')} className="flex cursor-pointer pl-8">Favorite Products</div>
        </>
      }
    </div>
  </div>
}

export default function Home() {
  const result = useFilteredProducts()
  return <NormalPage sideBar={<HomeSideBar />}>
    <div className="flex flex-row  justify-center items-center pt-10 pb-5 ">
      <Filter />
    </div>
    <p className="text-[20px] pt-8 pl-20 align-top-left pb-8">Products</p>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 content-evenly gap-8 justify-items-center items-center w-full">
      {
        result?.products.map((product, key) => <Product product={product} key={key} />)
      }
    </div>
    <div>
      <Pagination maxPage={result?.maxPage ?? 1} />
    </div>
  </NormalPage>
}
