import { Product } from "../components/Product"
import { NormalPage } from "../components/Layout"

export default function EditProduct() {
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
      <p className="pl-5 "> My Products </p>
    </div>
  </div>
}
