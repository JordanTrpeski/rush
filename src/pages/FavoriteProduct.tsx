import Product from "../components/Product"
import { NormalPage } from "../components/Layout"
import { HomeSideBar } from "./Home"
import { useFavorites } from "../hooks/api/products"
export default function FavoriteProduct() {
  const products = useFavorites()
  return <div>
    <NormalPage sideBar={<HomeSideBar />}>
      <p className="text-[20px] pt-8 pl-20 align-top-left pb-8">Favorite Products</p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 content-evenly gap-8 justify-items-center items-center w-full">
        {
          products?.map((product, key) => <Product key={key} product={product} />)
        }
      </div>
    </NormalPage>
  </div>
}