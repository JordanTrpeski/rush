import { ShowWhenNewProductToggled, useNewProductToggle } from "./AddNewProductToggle";
import AddProducts from "./AddProducts";

export default function NewProduct() {
    const newProductToggle = useNewProductToggle()
    return <ShowWhenNewProductToggled>
        <div className="fixed w-screen h-screen bg-transparent top-0 left-0" onClick={newProductToggle}>
            <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit bg-white drop-shadow shadow-2xl" onClick={e => e.stopPropagation()}>
                <AddProducts />
            </div>
        </div>
    </ShowWhenNewProductToggled>
} 